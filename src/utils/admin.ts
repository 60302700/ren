/**
 * Admin utilities for accessing user data
 * 
 * IMPORTANT: These functions should only be called from the server-side
 * or by authenticated admin users in production.
 */

import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-0ae09f59`;

/**
 * Get all users who have registered
 * This queries the auth system and returns basic user info
 */
export async function getAllUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Get all users error:', data.error);
      throw new Error(data.error || 'Failed to get users');
    }

    return data.users;
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    throw error;
  }
}

/**
 * Get specific user's complete data by user ID
 */
export async function getUserData(userId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Get user data error:', data.error);
      throw new Error(data.error || 'Failed to get user data');
    }

    return data;
  } catch (error) {
    console.error('Error in getUserData:', error);
    throw error;
  }
}

/**
 * Console helper to view all user data
 * Usage: Open browser console and run:
 * 
 * import { viewAllUsersData } from './utils/admin';
 * viewAllUsersData();
 */
export async function viewAllUsersData() {
  console.log('🔍 Fetching all users data...');
  
  try {
    const users = await getAllUsers();
    
    console.log(`\n✅ Found ${users?.length || 0} users\n`);
    
    if (!users || users.length === 0) {
      console.log('No users found.');
      return;
    }

    for (const user of users) {
      const userData = await getUserData(user.id);
      
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`👤 User: ${user.email}`);
      console.log(`🆔 ID: ${user.id}`);
      console.log(`📅 Created: ${new Date(user.created_at).toLocaleString()}`);
      console.log('\n📋 Profile:', userData.profile);
      console.log('\n💼 Investment Preferences:', userData.preferences);
      console.log('\n🛡️ Belief System:', userData.beliefSystem);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
    
    return users;
  } catch (error) {
    console.error('❌ Error fetching user data:', error);
  }
}

/**
 * Search for users by email
 */
export async function searchUserByEmail(email: string) {
  const users = await getAllUsers();
  return users?.find((user: any) => user.email.toLowerCase().includes(email.toLowerCase()));
}
