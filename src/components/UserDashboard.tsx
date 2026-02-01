import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, LogOut, Shield, TrendingUp, Briefcase, Mail, Phone, MapPin, Calendar, Loader } from 'lucide-react';
import * as api from '../utils/api';

interface UserDashboardProps {
  onClose: () => void;
}

export function UserDashboard({ onClose }: UserDashboardProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [preferences, setPreferences] = useState<any>(null);
  const [beliefSystem, setBeliefSystem] = useState<any>(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      setLoading(true);
      
      // Get current user
      const currentUser = await api.getCurrentUser();
      setUser(currentUser);

      if (currentUser) {
        // Load all user data in parallel
        const [profileData, preferencesData, beliefSystemData] = await Promise.all([
          api.getProfile().catch(() => null),
          api.getInvestmentPreferences().catch(() => null),
          api.getBeliefSystem().catch(() => null),
        ]);

        setProfile(profileData);
        setPreferences(preferencesData);
        setBeliefSystem(beliefSystemData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await api.signOut();
      onClose();
      window.location.reload(); // Refresh to update UI
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
          <Loader className="w-8 h-8 text-[#4FAEFF] animate-spin" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <p className="text-gray-600 mb-4">Please sign in to view your dashboard</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] p-6 rounded-t-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-white text-2xl mb-1">Welcome Back!</h2>
                <p className="text-white/90">{user.email}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-lg px-4 py-2 transition-colors"
              >
                Close
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Profile Information */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-[#4FAEFF]" />
                <h3 className="text-xl text-gray-900">Profile Information</h3>
              </div>
              
              {profile ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="text-gray-900">{profile.fullName || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900">{profile.email || user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{profile.phone || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="text-gray-900">{profile.dateOfBirth || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Nationality</p>
                      <p className="text-gray-900">{profile.nationality || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900">{profile.address || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No profile information available</p>
              )}
            </div>

            {/* Investment Preferences */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#4FAEFF]" />
                <h3 className="text-xl text-gray-900">Investment Preferences</h3>
              </div>
              
              {preferences ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Investment Goal</p>
                    <p className="text-lg text-gray-900 capitalize">
                      {preferences.investmentGoal?.replace('-', ' ') || 'Not set'}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Risk Tolerance</p>
                    <p className="text-lg text-gray-900 capitalize">
                      {preferences.riskTolerance?.replace('-', ' ') || 'Not set'}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No investment preferences set</p>
              )}
            </div>

            {/* Belief System (if you want to show it) */}
            {beliefSystem && (
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#4FAEFF]" />
                  <h3 className="text-xl text-gray-900">Belief System Data</h3>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap overflow-x-auto">
                    {JSON.stringify(beliefSystem, null, 2)}
                  </pre>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
