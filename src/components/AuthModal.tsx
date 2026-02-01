import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Lock, CreditCard, Mail, User, Phone, MapPin, Calendar, TrendingUp, Target, Users, Shield, Zap, Activity, Rocket, Heart, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import logoImage from "figma:asset/bcde49ce921faca89dff5b7a5bb57c6cfb20be6c.png";
import * as api from '../utils/api';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister?: () => void;
}

export function AuthModal({ isOpen, onClose, onOpenRegister }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [step, setStep] = useState(0); // 0: Registration Prompt, 1: Basic Info, 2: KYC, 3: Investment Goals, 4: Risk Tolerance, 5: Success/Waiting List
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    idNumber: "",
    investmentGoal: "", // short-term, long-term, community-impact
    riskTolerance: "", // high-risk, moderate, low-risk
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (isSignUp && step === 1) {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      setStep(2);
    } else if (isSignUp && step === 2) {
      setStep(3);
    } else if (isSignUp && step === 3) {
      // Only move to step 4 if an investment goal is selected
      if (formData.investmentGoal) {
        setStep(4);
      }
    } else if (isSignUp && step === 4) {
      // Complete signup process
      if (formData.riskTolerance) {
        setLoading(true);
        try {
          // Create user account
          await api.signUp(formData.email, formData.password, formData.fullName);
          
          // Sign in immediately after signup
          const session = await api.signIn(formData.email, formData.password);
          
          // Save user profile
          await api.updateProfile({
            fullName: formData.fullName,
            phone: formData.phone,
            dateOfBirth: formData.dateOfBirth,
            nationality: formData.nationality,
            address: formData.address,
            idNumber: formData.idNumber,
          });
          
          // Save investment preferences
          await api.saveInvestmentPreferences({
            investmentGoal: formData.investmentGoal,
            riskTolerance: formData.riskTolerance,
          });
          
          console.log("Registration complete:", session);
          setStep(5);
        } catch (err: any) {
          console.error("Registration error:", err);
          setError(err.message || "Failed to create account");
        } finally {
          setLoading(false);
        }
      }
    } else {
      // Sign in mode
      setLoading(true);
      try {
        const session = await api.signIn(formData.email, formData.password);
        console.log("Sign in successful:", session);
        onClose();
      } catch (err: any) {
        console.error("Sign in error:", err);
        setError(err.message || "Failed to sign in");
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      nationality: "",
      address: "",
      idNumber: "",
      investmentGoal: "",
      riskTolerance: "",
    });
  };

  const investmentGoals = [
    {
      id: "short-term",
      title: "Quick Returns",
      description: "Short-term gains & rapid growth",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: "long-term",
      title: "Steady Growth",
      description: "Long-term wealth building",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: "community-impact",
      title: "Impact Community",
      description: "Ethical investing for social good",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-pink-400 to-rose-500",
    },
  ];

  const riskLevels = [
    {
      id: "high-risk",
      title: "High Risk",
      description: "Aggressive growth, higher volatility",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-red-400 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: "moderate",
      title: "Moderate Risk",
      description: "Balanced approach with steady returns",
      icon: <Activity className="w-8 h-8" />,
      gradient: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      id: "low-risk",
      title: "Low Risk",
      description: "Calm & stable, preserve capital",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] p-6 rounded-t-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <motion.div
                  key={step}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    {isSignUp && step === 2 ? (
                      <CreditCard className="w-8 h-8 text-white" />
                    ) : isSignUp && step === 3 ? (
                      <Target className="w-8 h-8 text-white" />
                    ) : isSignUp && step === 4 ? (
                      <Shield className="w-8 h-8 text-white" />
                    ) : (
                      <Lock className="w-8 h-8 text-white" />
                    )}
                  </div>
                </motion.div>

                <motion.h2
                  key={`title-${step}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-white mb-2"
                >
                  {isSignUp
                    ? step === 0
                      ? "Welcome to Tharwa Capital"
                      : step === 1
                        ? "Create Your Tharwa Account"
                        : step === 2
                          ? "Identity Verification"
                          : step === 3
                            ? "What Are You Looking to Invest In?"
                            : step === 4
                              ? "How Much Risk Are You Willing to Take?"
                              : "Registration Successful"
                    : "Welcome Back"}
                </motion.h2>
                <motion.p
                  key={`desc-${step}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center text-white/90 text-sm"
                >
                  {isSignUp
                    ? step === 0
                      ? "Join Tharwa Capital and start investing today!"
                      : step === 1
                        ? "Register in minutes by providing basic personal information"
                        : step === 2
                          ? "Complete KYC verification to comply with regulations"
                          : step === 3
                            ? "Choose your primary investment objective"
                            : step === 4
                              ? "Select your comfort level with investment volatility"
                              : "Thank you for registering with Tharwa Capital. We will notify you once your account is ready."
                    : "Sign in to your Tharwa Capital account"}
                </motion.p>

                {/* Progress Indicator */}
                {isSignUp && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-2 mt-4"
                  >
                    {[1, 2, 3, 4].map((s) => (
                      <div
                        key={s}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          s <= step ? "w-8 bg-white" : "w-4 bg-white/30"
                        }`}
                      />
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  >
                    <p className="text-sm">{error}</p>
                  </motion.div>
                )
                } 
                
                <AnimatePresence mode="wait">
                  {/* Step 0: Registration Prompt */}
                  {isSignUp && step === 0 && (
                    <motion.div
                      key="signup-step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col items-center justify-center text-center space-y-6">
                        {/* Icon */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                          className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl border-2 border-white/30"
                        >
                          <User className="w-10 h-10 text-gray-700" />
                        </motion.div>
                        
                        {/* Main Heading */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-4xl text-gray-900 mb-4">
                            Want to be notified when we launch?
                          </h3>
                          <p className="text-lg text-gray-600 max-w-md">
                            Register now so we can get back to you with early access and updates!
                          </p>
                        </motion.div>

                        {/* Register Button */}
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          type="button"
                          onClick={() => {
                            if (onOpenRegister) {
                              onOpenRegister();
                              onClose();
                            }
                          }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-xl rounded-2xl shadow-2xl"
                        >
                          <Sparkles className="w-7 h-7" />
                          <span className="font-medium">Register</span>
                          <ArrowRight className="w-7 h-7" />
                        </motion.button>

                        <p className="text-sm text-gray-500">
                          ✨ Be among the first 100 users to get lifetime premium benefits
                        </p>

                        {/* Divider */}
                        <div className="relative w-full py-4">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">or</span>
                          </div>
                        </div>

                        {/* Continue to Account Creation Button */}
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          type="button"
                          onClick={() => setStep(1)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-[#4FAEFF] hover:bg-gray-50 transition-all"
                        >
                          No, continue to get started with my account
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: Basic Info */}
                  {isSignUp && step === 1 && (
                    <motion.div
                      key="signup-step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="+974 XXXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Create a strong password"
                            required
                          />
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Re-enter your password"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: KYC */}
                  {isSignUp && step === 2 && (
                    <motion.div
                      key="signup-step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Date of Birth */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Date of Birth
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Nationality */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Nationality
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Your nationality"
                            required
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Residential Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Your full address"
                            required
                          />
                        </div>
                      </div>

                      {/* ID Number */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          National ID / Passport Number
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Enter your ID number"
                            required
                          />
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <Lock className="w-4 h-4 inline mr-2" />
                          Your information is encrypted and securely stored to comply with local and international regulations.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Investment Goals */}
                  {isSignUp && step === 3 && (
                    <motion.div
                      key="signup-step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {investmentGoals.map((goal, index) => (
                          <motion.button
                            key={goal.id}
                            type="button"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, investmentGoal: goal.id })}
                            className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                              formData.investmentGoal === goal.id
                                ? "border-[#4FAEFF] bg-gradient-to-br from-[#A6D1FF]/10 to-[#4FAEFF]/10 shadow-lg"
                                : "border-gray-200 hover:border-[#4FAEFF]/50 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <motion.div
                                animate={{
                                  rotate: formData.investmentGoal === goal.id ? 360 : 0,
                                  scale: formData.investmentGoal === goal.id ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                                className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center text-white shadow-lg`}
                              >
                                {goal.icon}
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-lg text-gray-900 mb-1">{goal.title}</h3>
                                <p className="text-sm text-gray-600">{goal.description}</p>
                              </div>
                              {formData.investmentGoal === goal.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="flex-shrink-0 w-6 h-6 bg-[#4FAEFF] rounded-full flex items-center justify-center"
                                >
                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Risk Tolerance */}
                  {isSignUp && step === 4 && (
                    <motion.div
                      key="signup-step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {riskLevels.map((risk, index) => (
                          <motion.button
                            key={risk.id}
                            type="button"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, riskTolerance: risk.id })}
                            className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                              formData.riskTolerance === risk.id
                                ? "border-[#4FAEFF] bg-gradient-to-br from-[#A6D1FF]/10 to-[#4FAEFF]/10 shadow-lg"
                                : "border-gray-200 hover:border-[#4FAEFF]/50 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <motion.div
                                animate={{
                                  rotate: formData.riskTolerance === risk.id ? 360 : 0,
                                  scale: formData.riskTolerance === risk.id ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                                className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${risk.gradient} flex items-center justify-center text-white shadow-lg`}
                              >
                                {risk.icon}
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-lg text-gray-900 mb-1">{risk.title}</h3>
                                <p className="text-sm text-gray-600">{risk.description}</p>
                              </div>
                              {formData.riskTolerance === risk.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="flex-shrink-0 w-6 h-6 bg-[#4FAEFF] rounded-full flex items-center justify-center"
                                >
                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Success/Waiting List */}
                  {isSignUp && step === 5 && (
                    <motion.div
                      key="signup-step5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="py-8"
                    >
                      {/* Success Animation */}
                      <div className="flex flex-col items-center justify-center text-center space-y-6">
                        {/* Animated Success Icon */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.2, 
                            type: "spring", 
                            stiffness: 200,
                            damping: 10
                          }}
                        >
                          <div className="relative">
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full blur-xl"
                            />
                            <div className="relative w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                              <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
                            </div>
                          </div>
                        </motion.div>

                        {/* Tharwa Logo */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="my-4"
                        >
                          <img 
                            src={logoImage} 
                            alt="Tharwa Capital" 
                            className="w-32 h-32 rounded-3xl shadow-2xl"
                          />
                        </motion.div>

                        {/* Success Title */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-2"
                        >
                          <h3 className="text-3xl text-gray-900">
                            Account Successfully Created! 🎉
                          </h3>
                          <div className="flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                            <p className="text-lg text-[#4FAEFF]">
                              Welcome to Tharwa Capital
                            </p>
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                          </div>
                        </motion.div>

                        {/* Waiting List Message */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="max-w-md space-y-4"
                        >
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                            <p className="text-gray-700 leading-relaxed">
                              Since we are a <span className="text-[#4FAEFF]">startup</span>, we are working hard on our app to ensure your investments flow smoothly! 
                            </p>
                            <div className="mt-4 pt-4 border-t border-blue-200">
                              <p className="text-gray-900">
                                <span className="inline-block mr-2">✨</span>
                                <strong>You are now added to our waiting list</strong>
                              </p>
                            </div>
                          </div>

                          {/* Additional Info */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="bg-amber-50 border border-amber-200 rounded-xl p-4"
                          >
                            <p className="text-sm text-amber-900">
                              📧 We'll notify you via email at <strong>{formData.email}</strong> when your account is ready
                            </p>
                          </motion.div>
                        </motion.div>

                        {/* Thank You Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9, type: "spring" }}
                          className="mt-6"
                        >
                          <div className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white px-8 py-3 rounded-full shadow-xl">
                            <p className="text-lg">Thank You! 🙏</p>
                          </div>
                        </motion.div>

                        {/* Close Button */}
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => {
                            onClose();
                            // Reset form after closing
                            setTimeout(() => {
                              setStep(1);
                              setFormData({
                                fullName: "",
                                email: "",
                                phone: "",
                                password: "",
                                confirmPassword: "",
                                dateOfBirth: "",
                                nationality: "",
                                address: "",
                                idNumber: "",
                                investmentGoal: "",
                                riskTolerance: "",
                              });
                            }, 300);
                          }}
                          className="w-full bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all mt-4"
                        >
                          Close & Return Home
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* Login Form */}
                  {!isSignUp && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Email */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent outline-none transition-all"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-gray-600">Remember me</span>
                        </label>
                        <button
                          type="button"
                          className="text-[#4FAEFF] hover:underline"
                        >
                          Forgot Password?
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                {(step < 3 || !isSignUp) && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : (isSignUp
                      ? step === 1
                        ? "Continue to Verification"
                        : "Continue to Investment Goals"
                      : "Sign In")}
                  </motion.button>
                )}

                {/* Continue Button for Steps 3 & 4 */}
                {isSignUp && step === 3 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!formData.investmentGoal || loading}
                    className={`w-full py-3 rounded-lg shadow-lg transition-all ${
                      formData.investmentGoal && !loading
                        ? "bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white hover:shadow-xl"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Continue to Risk Assessment
                  </motion.button>
                )}

                {isSignUp && step === 4 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!formData.riskTolerance || loading}
                    className={`w-full py-3 rounded-lg shadow-lg transition-all ${
                      formData.riskTolerance && !loading
                        ? "bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white hover:shadow-xl"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {loading ? "Creating Account..." : "Complete Registration"}
                  </motion.button>
                )}

                {/* Back Buttons */}
                {isSignUp && step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="w-full text-gray-600 py-2 hover:text-gray-800 transition-colors"
                  >
                    ← Back
                  </button>
                )}

                {/* Toggle Sign Up / Log In */}
                {step === 1 && (
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {isSignUp ? "Already have an account?" : "Don't have an account?"}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="ml-2 text-[#4FAEFF] hover:underline"
                      >
                        {isSignUp ? "Log In" : "Sign Up"}
                      </button>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}