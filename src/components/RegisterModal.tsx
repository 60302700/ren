import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import * as api from '../utils/api';

console.log('🔧 RegisterModal.tsx file loaded!');

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  console.log('🎨 RegisterModal component rendered! isOpen:', isOpen);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    alert('Form submitted! Check console for logs.');
    
    setIsSubmitting(true);
    setError('');
    
    try {
      console.log('📝 Submitting registration interest:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });
      
      // Save registration interest to Supabase
      await api.saveRegistrationInterest({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        notes: formData.notes,
        timestamp: new Date().toISOString()
      });
      
      console.log('✅ Registration interest saved successfully!');
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', phone: '', email: '', notes: '' });
        onClose();
      }, 3000);
    } catch (err: any) {
      console.error('❌ Error submitting registration:', err);
      setError(err.message || 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {!isSuccess ? (
                <div className="p-8 sm:p-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4FAEFF] to-[#A6D1FF] rounded-2xl mb-4"
                    >
                      <User className="w-8 h-8 text-white" />
                    </motion.div>
                    <h2 className="text-3xl text-gray-900 mb-2">Register Now</h2>
                    <p className="text-gray-600">
                      So we can get back to you!
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#4FAEFF] focus:ring-4 focus:ring-[#4FAEFF]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Contact Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+974 XXXX XXXX"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#4FAEFF] focus:ring-4 focus:ring-[#4FAEFF]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@gmail.com"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#4FAEFF] focus:ring-4 focus:ring-[#4FAEFF]/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Special Notes Field */}
                    <div>
                      <label htmlFor="notes" className="block text-sm text-gray-700 mb-2">
                        Special Notes (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4">
                          <MessageSquare className="w-5 h-5 text-gray-400" />
                        </div>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Any additional information you'd like to share..."
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#4FAEFF] focus:ring-4 focus:ring-[#4FAEFF]/10 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={(e) => {
                        console.log('🖱️ BUTTON CLICKED!', e);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Registration
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                    {error && (
                      <p className="mt-2 text-sm text-red-500">
                        {error}
                      </p>
                    )}
                  </form>
                </div>
              ) : (
                // Success State
                <div className="p-8 sm:p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-6"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <motion.path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl text-gray-900 mb-4"
                  >
                    Congratulations!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-gray-700 mb-6"
                  >
                    Welcome to the <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent font-medium">Tharwa family</span>!
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-gray-600"
                  >
                    We will help you build your account ASAP.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 pt-6 border-t border-gray-200"
                  >
                    <p className="text-sm text-gray-500">
                      💼 Our team will reach out to you within 24 hours
                    </p>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}