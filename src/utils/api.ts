import { projectId, publicAnonKey } from './supabase/info';
import { createClient } from '@supabase/supabase-js';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-0ae09f59`;

// Initialize Supabase client for auth
const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

// ============================================
// AUTHENTICATION
// ============================================

export async function signUp(email: string, password: string, name: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`
      },
      body: JSON.stringify({ email, password, name })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Signup error:', data.error);
      throw new Error(data.error || 'Failed to sign up');
    }

    return data;
  } catch (error) {
    console.error('Error in signUp:', error);
    throw error;
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error in signIn:', error);
    throw error;
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Sign out error:', error.message);
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error in signOut:', error);
    throw error;
  }
}

export async function getSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Get session error:', error.message);
      return null;
    }

    return data.session;
  } catch (error) {
    console.error('Error in getSession:', error);
    return null;
  }
}

export async function getCurrentUser() {
  try {
    // First check if there's a session
    const session = await getSession();
    if (!session) {
      return null;
    }

    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      // Don't log "Auth session missing!" as an error - it's expected when not logged in
      if (error.message !== 'Auth session missing!') {
        console.error('Get user error:', error.message);
      }
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
    return null;
  }
}

// ============================================
// USER PROFILE
// ============================================

export async function getProfile() {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/profile`, {
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Get profile error:', data.error);
      throw new Error(data.error || 'Failed to get profile');
    }

    return data.profile;
  } catch (error) {
    console.error('Error in getProfile:', error);
    throw error;
  }
}

export async function updateProfile(profileData: any) {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify(profileData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Update profile error:', data.error);
      throw new Error(data.error || 'Failed to update profile');
    }

    return data;
  } catch (error) {
    console.error('Error in updateProfile:', error);
    throw error;
  }
}

// ============================================
// BELIEF SYSTEM
// ============================================

export async function saveBeliefSystem(beliefSystemData: any) {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/belief-system`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify(beliefSystemData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Save belief system error:', data.error);
      throw new Error(data.error || 'Failed to save belief system');
    }

    return data;
  } catch (error) {
    console.error('Error in saveBeliefSystem:', error);
    throw error;
  }
}

export async function getBeliefSystem() {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/belief-system`, {
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Get belief system error:', data.error);
      throw new Error(data.error || 'Failed to get belief system');
    }

    return data.beliefSystem;
  } catch (error) {
    console.error('Error in getBeliefSystem:', error);
    throw error;
  }
}

// ============================================
// INVESTMENT PREFERENCES
// ============================================

export async function saveInvestmentPreferences(preferencesData: any) {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/investment-preferences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify(preferencesData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Save investment preferences error:', data.error);
      throw new Error(data.error || 'Failed to save investment preferences');
    }

    return data;
  } catch (error) {
    console.error('Error in saveInvestmentPreferences:', error);
    throw error;
  }
}

export async function getInvestmentPreferences() {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/investment-preferences`, {
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Get investment preferences error:', data.error);
      throw new Error(data.error || 'Failed to get investment preferences');
    }

    return data.preferences;
  } catch (error) {
    console.error('Error in getInvestmentPreferences:', error);
    throw error;
  }
}

// ============================================
// PORTFOLIO
// ============================================

export async function getPortfolio() {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/portfolio`, {
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Get portfolio error:', data.error);
      throw new Error(data.error || 'Failed to get portfolio');
    }

    return data.portfolio;
  } catch (error) {
    console.error('Error in getPortfolio:', error);
    throw error;
  }
}

export async function savePortfolio(portfolioData: any) {
  try {
    const session = await getSession();
    if (!session?.access_token) {
      throw new Error('No active session');
    }

    const response = await fetch(`${API_BASE_URL}/portfolio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`
      },
      body: JSON.stringify(portfolioData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Save portfolio error:', data.error);
      throw new Error(data.error || 'Failed to save portfolio');
    }

    return data;
  } catch (error) {
    console.error('Error in savePortfolio:', error);
    throw error;
  }
}

// ============================================
// AUTH STATE LISTENER
// ============================================

export function onAuthStateChange(callback: (session: any) => void) {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(session);
  });
}

// ============================================
// REGISTRATION INTEREST (Simple Contact Form)
// ============================================

/**
 * Save registration interest from "Register Now" form
 * This doesn't create a user account - just saves contact info
 */
export async function saveRegistrationInterest(data: {
  name: string;
  phone: string;
  email: string;
  notes: string;
  timestamp: string;
}) {
  try {
    console.log('🌐 Making API call to save registration interest...');
    console.log('📍 API URL:', `${API_BASE_URL}/registration-interest`);
    console.log('📦 Data:', data);
    
    const response = await fetch(`${API_BASE_URL}/registration-interest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`
      },
      body: JSON.stringify(data)
    });

    console.log('📡 Response status:', response.status);
    
    const result = await response.json();
    console.log('📥 Response data:', result);
    
    if (!response.ok) {
      console.error('❌ Save registration interest error:', result.error);
      throw new Error(result.error || 'Failed to save registration interest');
    }

    console.log('✅ Registration interest saved successfully');
    return result;
  } catch (error) {
    console.error('💥 Error in saveRegistrationInterest:', error);
    throw error;
  }
}