import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-0ae09f59/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================
// AUTHENTICATION ROUTES
// ============================================

// Sign up new user
app.post("/make-server-0ae09f59/auth/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password || !name) {
      return c.json({ error: "Email, password, and name are required" }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log(`Error creating user during signup: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    console.log(`User created successfully: ${data.user?.id}`);
    return c.json({ user: data.user }, 201);
  } catch (error) {
    console.log(`Signup error: ${error}`);
    return c.json({ error: "Failed to create user" }, 500);
  }
});

// ============================================
// USER PROFILE ROUTES
// ============================================

// Get user profile
app.get("/make-server-0ae09f59/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while getting profile: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Get user profile from KV store
    const profile = await kv.get(`profile:${user.id}`);
    
    return c.json({ 
      profile: profile || { 
        userId: user.id,
        email: user.email,
        name: user.user_metadata?.name 
      }
    });
  } catch (error) {
    console.log(`Error fetching profile: ${error}`);
    return c.json({ error: "Failed to fetch profile" }, 500);
  }
});

// Update user profile
app.put("/make-server-0ae09f59/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while updating profile: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const profileData = await c.req.json();
    
    // Save profile to KV store
    await kv.set(`profile:${user.id}`, {
      ...profileData,
      userId: user.id,
      updatedAt: new Date().toISOString()
    });

    console.log(`Profile updated for user: ${user.id}`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error updating profile: ${error}`);
    return c.json({ error: "Failed to update profile" }, 500);
  }
});

// ============================================
// BELIEF SYSTEM & PREFERENCES ROUTES
// ============================================

// Save user's belief system responses
app.post("/make-server-0ae09f59/belief-system", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while saving belief system: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const beliefSystemData = await c.req.json();
    
    // Save belief system data to KV store
    await kv.set(`belief_system:${user.id}`, {
      ...beliefSystemData,
      userId: user.id,
      createdAt: new Date().toISOString()
    });

    console.log(`Belief system saved for user: ${user.id}`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving belief system: ${error}`);
    return c.json({ error: "Failed to save belief system" }, 500);
  }
});

// Get user's belief system
app.get("/make-server-0ae09f59/belief-system", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while getting belief system: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const beliefSystem = await kv.get(`belief_system:${user.id}`);
    
    return c.json({ beliefSystem: beliefSystem || null });
  } catch (error) {
    console.log(`Error fetching belief system: ${error}`);
    return c.json({ error: "Failed to fetch belief system" }, 500);
  }
});

// Save investment preferences (Maqasid al-Shariah priorities)
app.post("/make-server-0ae09f59/investment-preferences", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while saving investment preferences: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const preferencesData = await c.req.json();
    
    // Save investment preferences to KV store
    await kv.set(`investment_preferences:${user.id}`, {
      ...preferencesData,
      userId: user.id,
      updatedAt: new Date().toISOString()
    });

    console.log(`Investment preferences saved for user: ${user.id}`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving investment preferences: ${error}`);
    return c.json({ error: "Failed to save investment preferences" }, 500);
  }
});

// Get investment preferences
app.get("/make-server-0ae09f59/investment-preferences", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while getting investment preferences: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const preferences = await kv.get(`investment_preferences:${user.id}`);
    
    return c.json({ preferences: preferences || null });
  } catch (error) {
    console.log(`Error fetching investment preferences: ${error}`);
    return c.json({ error: "Failed to fetch investment preferences" }, 500);
  }
});

// ============================================
// PORTFOLIO ROUTES
// ============================================

// Get user's portfolio allocations
app.get("/make-server-0ae09f59/portfolio", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while getting portfolio: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const portfolio = await kv.get(`portfolio:${user.id}`);
    
    return c.json({ portfolio: portfolio || null });
  } catch (error) {
    console.log(`Error fetching portfolio: ${error}`);
    return c.json({ error: "Failed to fetch portfolio" }, 500);
  }
});

// Save portfolio allocations
app.post("/make-server-0ae09f59/portfolio", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Authorization token required" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user?.id) {
      console.log(`Authorization error while saving portfolio: ${authError?.message}`);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const portfolioData = await c.req.json();
    
    await kv.set(`portfolio:${user.id}`, {
      ...portfolioData,
      userId: user.id,
      updatedAt: new Date().toISOString()
    });

    console.log(`Portfolio saved for user: ${user.id}`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving portfolio: ${error}`);
    return c.json({ error: "Failed to save portfolio" }, 500);
  }
});

// ============================================
// ADMIN ROUTES (for viewing all user data)
// ============================================

// Get all users (basic info)
app.get("/make-server-0ae09f59/admin/users", async (c) => {
  try {
    const { data: { users }, error } = await supabase.auth.admin.listUsers();
    
    if (error) {
      console.log(`Error listing users: ${error.message}`);
      return c.json({ error: error.message }, 500);
    }

    const userList = users.map(user => ({
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      user_metadata: user.user_metadata
    }));

    return c.json({ users: userList });
  } catch (error) {
    console.log(`Error in admin users route: ${error}`);
    return c.json({ error: "Failed to fetch users" }, 500);
  }
});

// Get complete data for a specific user
app.get("/make-server-0ae09f59/admin/user/:userId", async (c) => {
  try {
    const userId = c.req.param('userId');
    
    if (!userId) {
      return c.json({ error: "User ID required" }, 400);
    }

    // Get user profile, preferences, and belief system
    const [profile, preferences, beliefSystem, portfolio] = await Promise.all([
      kv.get(`profile:${userId}`),
      kv.get(`investment_preferences:${userId}`),
      kv.get(`belief_system:${userId}`),
      kv.get(`portfolio:${userId}`)
    ]);

    return c.json({
      userId,
      profile: profile || null,
      preferences: preferences || null,
      beliefSystem: beliefSystem || null,
      portfolio: portfolio || null
    });
  } catch (error) {
    console.log(`Error fetching user data: ${error}`);
    return c.json({ error: "Failed to fetch user data" }, 500);
  }
});

// ============================================
// REGISTRATION INTEREST (Simple Contact Form)
// ============================================

// Save registration interest from "Register Now" form
app.post("/make-server-0ae09f59/registration-interest", async (c) => {
  try {
    const { name, phone, email, notes, timestamp } = await c.req.json();
    
    if (!name || !phone || !email) {
      return c.json({ error: "Name, phone, and email are required" }, 400);
    }

    // Create a unique key using timestamp and email
    const key = `registration_interest:${timestamp}:${email}`;
    
    await kv.set(key, {
      name,
      phone,
      email,
      notes: notes || '',
      timestamp,
      status: 'pending' // You can use this to track follow-up
    });

    console.log(`Registration interest saved: ${email}`);
    return c.json({ success: true, message: 'Registration interest saved successfully' });
  } catch (error) {
    console.log(`Error saving registration interest: ${error}`);
    return c.json({ error: "Failed to save registration interest" }, 500);
  }
});

Deno.serve(app.fetch);