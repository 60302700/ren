# 📊 How to Access User Data - Tharwa Capital

## 🎯 Three Ways to Access User Data

### 1. **Supabase Dashboard** (Easiest - Visual Interface)

**Steps:**
1. Go to your Supabase project: https://supabase.com/dashboard
2. Click on **Table Editor** in the left sidebar
3. Find the table called `kv_store_0ae09f59`
4. View all stored data

**Data Keys Pattern:**
- `profile:USER_ID` - User profile info (name, phone, DOB, nationality, address, ID number)
- `investment_preferences:USER_ID` - Investment goals and risk tolerance
- `belief_system:USER_ID` - Belief system questionnaire responses
- `portfolio:USER_ID` - Portfolio allocations

---

### 2. **User Dashboard** (For Individual Users)

**What Users See:**
- After signing in, users can click the **User Icon** (👤) in the navbar
- They'll see their complete profile, preferences, and data
- Users can sign out from this dashboard

**For Testing:**
1. Register a new account
2. Fill out the complete registration flow
3. After registration, click the User icon in the navbar
4. View all your saved data

---

### 3. **Browser Console** (For Developers - View All Users)

**Quick View All Users:**

Open your browser console (F12) on your website and run:

```javascript
// Import the admin utility
const module = await import('/utils/admin.ts');

// View all users and their complete data
await module.viewAllUsersData();
```

This will print a nicely formatted list of ALL users with their complete data.

**Get Specific User:**

```javascript
const module = await import('/utils/admin.ts');

// Search by email
const user = await module.searchUserByEmail('user@example.com');
console.log(user);

// Get complete user data by ID
const userData = await module.getUserData('user-id-here');
console.log(userData);
```

---

## 📡 API Endpoints

### Admin Endpoints (View All Data)

**Get all registered users:**
```
GET https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/admin/users
```

**Get specific user's data:**
```
GET https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/admin/user/USER_ID
```

### User-Specific Endpoints (Require Auth Token)

**Get user profile:**
```
GET https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/profile
Headers: Authorization: Bearer ACCESS_TOKEN
```

**Get investment preferences:**
```
GET https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/investment-preferences
Headers: Authorization: Bearer ACCESS_TOKEN
```

**Get belief system:**
```
GET https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/belief-system
Headers: Authorization: Bearer ACCESS_TOKEN
```

---

## 📝 Example: Using Postman or cURL

**Get all users:**
```bash
curl -X GET \
  https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/admin/users \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyanNnZWR3bW5xenVoeGJrZ3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNjM2MzIsImV4cCI6MjA4MTgzOTYzMn0.JrbRCToOSFoUc10FQwY3Dtn9GGaizIrkaqZlkRQVUEM'
```

**Get specific user data:**
```bash
curl -X GET \
  https://rrjsgedwmnqzuhxbkgze.supabase.co/functions/v1/make-server-0ae09f59/admin/user/USER_ID_HERE \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyanNnZWR3bW5xenVoeGJrZ3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNjM2MzIsImV4cCI6MjA4MTgzOTYzMn0.JrbRCToOSFoUc10FQwY3Dtn9GGaizIrkaqZlkRQVUEM'
```

---

## 🔐 Data Structure

### User Profile
```json
{
  "userId": "uuid-here",
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+974 1234 5678",
  "dateOfBirth": "1990-01-01",
  "nationality": "Qatar",
  "address": "123 Main St, Doha",
  "idNumber": "ABC123456",
  "updatedAt": "2025-12-20T22:30:00Z"
}
```

### Investment Preferences
```json
{
  "userId": "uuid-here",
  "investmentGoal": "long-term",
  "riskTolerance": "moderate",
  "updatedAt": "2025-12-20T22:30:00Z"
}
```

---

## 🚀 Quick Start Checklist

1. ✅ Register a test account on your website
2. ✅ Complete the full registration flow
3. ✅ Click the User icon (👤) to view your dashboard
4. ✅ Open Supabase dashboard to see data in the database
5. ✅ Use browser console to view all users: `await (await import('/utils/admin.ts')).viewAllUsersData()`

---

## 🛡️ Security Note

In production, you should:
- Add proper authentication to admin endpoints
- Implement role-based access control
- Only allow authenticated admins to view all user data
- Add rate limiting to prevent abuse

For now, the admin endpoints are open for development purposes.
