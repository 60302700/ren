import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/22cb1d14f57fccf95403b98dba3886173e1f8e3e.png';
import * as api from '../utils/api';
import { UserDashboard } from './UserDashboard';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    checkUser();
    
    // Listen for auth state changes
    const { data: { subscription } } = api.onAuthStateChange((session) => {
      if (session) {
        api.getCurrentUser().then(user => {
          if (user) setCurrentUser(user);
        }).catch(() => {
          // Silently handle auth errors
          setCurrentUser(null);
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      const user = await api.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      // Silently handle - user is just not logged in
      setCurrentUser(null);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Our Plan', id: 'invest' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
            className="cursor-pointer"
          >
            <motion.img
              src={logoImage}
              alt="Tharwa Capital"
              className="h-12 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 transition-colors text-base ${
                  currentPage === item.id
                    ? 'text-[#4FAEFF]'
                    : 'text-gray-700 hover:text-[#4FAEFF]'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white rounded-xl hover:shadow-lg transition-shadow"
            >
              Download App
            </motion.button>
            {currentUser && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white rounded-xl hover:shadow-lg transition-shadow"
                onClick={() => setShowDashboard(true)}
              >
                <User size={24} />
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-xl transition-all text-base ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <button className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white rounded-xl">
                Download App
              </button>
              {currentUser && (
                <button 
                  className="w-full px-6 py-4 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center gap-2"
                  onClick={() => {
                    setShowDashboard(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <User size={20} />
                  My Account
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Dashboard Modal */}
      {showDashboard && <UserDashboard onClose={() => setShowDashboard(false)} />}
    </motion.nav>
  );
}