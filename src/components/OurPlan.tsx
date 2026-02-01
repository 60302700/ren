import { motion } from 'motion/react';
import {
  PieChart,
  Eye,
  Shield,
  HandHeart,
  Plane,
  Building2,
  TrendingUp,
  ChevronDown,
  CheckCircle,
  Zap,
  Users,
  Wallet,
  Globe,
  ArrowDown,
} from 'lucide-react';
import { OurPlanMobile } from './OurPlanMobile';

export function OurPlan() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900 relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <motion.path
            d="M0,400 C360,300 720,500 1080,400 C1440,300 1440,400 1440,400 L1440,800 L0,800 Z"
            fill="url(#wave1)"
            animate={{
              d: [
                "M0,400 C360,300 720,500 1080,400 C1440,300 1440,400 1440,400 L1440,800 L0,800 Z",
                "M0,400 C360,500 720,300 1080,400 C1440,500 1440,400 1440,400 L1440,800 L0,800 Z",
                "M0,400 C360,300 720,500 1080,400 C1440,300 1440,400 1440,400 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,500 C360,400 720,600 1080,500 C1440,400 1440,500 1440,500 L1440,800 L0,800 Z"
            fill="url(#wave2)"
            animate={{
              d: [
                "M0,500 C360,400 720,600 1080,500 C1440,400 1440,500 1440,500 L1440,800 L0,800 Z",
                "M0,500 C360,600 720,400 1080,500 C1440,600 1440,500 1440,500 L1440,800 L0,800 Z",
                "M0,500 C360,400 720,600 1080,500 C1440,400 1440,500 1440,500 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#2a5298', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b5998', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#4a6fa5', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#3b5998] rounded-full blur-[120px] opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#2a5298] rounded-full blur-[120px] opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Current Model Section - Above the Fold */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                Models
              </span>
            </h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]">
                Model 1 - Sharia focused fund allocation personalized for GCC citizens, so we can grow to the final form of a regulated financial entity.
              </span>
            </p>
          </motion.div>

          {/* Step-by-Step Process */}
          <div className="max-w-7xl mx-auto mb-12 relative">
            {/* Desktop Layout - Circular */}
            <div className="hidden md:block" style={{ minHeight: '1000px' }}>
              {/* Center Circle - Phase 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="w-48 h-48 rounded-full bg-gradient-to-br from-[#4FAEFF] to-[#A6D1FF] flex items-center justify-center shadow-[0_0_60px_rgba(79,174,255,0.6)]"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 60px rgba(79,174,255,0.6)',
                    '0 0 80px rgba(79,174,255,0.8)',
                    '0 0 60px rgba(79,174,255,0.6)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <div className="text-5xl text-white mb-2">Phase 1</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">Current Model</div>
                </div>
              </motion.div>
            </div>

            {/* Connecting Circle Path */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ maxWidth: '900px', maxHeight: '900px' }}>
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="2"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                style={{ transformOrigin: "center" }}
              />
              <defs>
                <linearGradient id="circleGradient">
                  <stop offset="0%" stopColor="#4FAEFF" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#A6D1FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4FAEFF" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
              
              {/* Step 1 - Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72"
              >
              <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(166,209,255,0.4)] transition-all duration-300 relative overflow-hidden flex items-center justify-center p-8">
                {/* Animated Background Light */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20 rounded-full"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center text-white shadow-lg"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Wallet className="w-6 h-6" />
                    </motion.div>
                    <div className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                      1
                    </div>
                  </div>
                  <h3 className="text-lg text-white mb-2">We learn your <strong className="text-[#A6D1FF]">belief system</strong></h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Customize your portfolio so we recommend what's best for you.
                  </p>
                </div>
              </div>
            </motion.div>

              {/* Step 2 - Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72"
              >
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(166,209,255,0.4)] transition-all duration-300 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Animated Background Light */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#A6D1FF]/20 via-transparent to-[#4FAEFF]/20 rounded-full"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center text-white shadow-lg">
                        <PieChart className="w-6 h-6" />
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                        2
                      </div>
                    </div>
                    <h3 className="text-lg text-white mb-2"><strong className="text-[#A6D1FF]">Sharia-Compliant</strong> Allocation</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      Based on <strong className="text-[#A6D1FF]">four Maqasid al-Shariah</strong>
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="text-gray-500">Hifz al-Nafs</div>
                      <div className="text-gray-500">Hifz al-Nasl</div>
                      <div className="text-gray-500">Hifz al-Aql</div>
                      <div className="text-gray-500">Hifz al-Mal</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 right-1/4 translate-x-1/4 w-72 h-72"
              >
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(166,209,255,0.4)] transition-all duration-300 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Animated Background Light */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20 rounded-full"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                        3
                      </div>
                    </div>
                    <h3 className="text-lg text-white mb-2"><strong className="text-[#A6D1FF]">Transparency</strong> & Risk Analysis</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-[#A6D1FF]">Vet each opportunity</strong> with live control
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 left-1/4 -translate-x-1/4 w-72 h-72"
              >
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(166,209,255,0.4)] transition-all duration-300 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Animated Background Light */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20 rounded-full"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                        4
                      </div>
                    </div>
                    <h3 className="text-lg text-white mb-2"><strong className="text-[#A6D1FF]">Community</strong> Connection</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-[#A6D1FF]">Verified platforms</strong> and investors
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 - Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72"
              >
                <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(166,209,255,0.4)] transition-all duration-300 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Animated Background Light */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20 rounded-full"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                        5
                      </div>
                    </div>
                    <h3 className="text-base text-white mb-2 leading-snug">You can now <strong className="text-[#A6D1FF]">decide, analyze and track</strong> all the impact</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <strong className="text-[#A6D1FF]">Personalized for Muslims</strong> on one platform
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Mobile Layout - Vertical Stack */}
            <OurPlanMobile />
          </div>

          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#4FAEFF]/10 to-[#A6D1FF]/10 backdrop-blur-xl border border-[#4FAEFF]/30 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl text-white mb-6 text-center">What Makes Us Different</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-2">Zakat Subscription</h4>
                <p className="text-gray-400 text-sm">Unlimited access to vetted Zakat opportunities that need funding and visibility</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-2">AI Hajj Planner</h4>
                <p className="text-gray-400 text-sm">Plan your Hajj expenses years in advance with smart financial planning tools</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-2">Sharia-First Approach</h4>
                <p className="text-gray-400 text-sm">Every recommendation is certified by Islamic scholars before reaching you</p>
              </div>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-3xl mx-auto bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 mb-12"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg text-yellow-300 mb-2">We Are a Connecting Platform</h4>
                <p className="text-yellow-200/80 text-sm mb-3">
                  We don't handle, manage, or touch your funds. We provide smart allocation recommendations and connect you to verified platforms. You maintain complete control and execute all investments yourself through our trusted partners.
                </p>
                <p className="text-yellow-200/80 text-sm">
                  <strong className="text-yellow-300">Privacy First:</strong> We will not ask for or need any personal details such as bank information, account numbers, or sensitive financial data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Arrow */}
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-1 h-20 bg-gradient-to-b from-[#4FAEFF] to-transparent" />
            <div className="text-center">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Scroll to see</p>
              <p className="text-[#4FAEFF] text-lg uppercase tracking-wider mb-3">Phase 2 - Our Future Goal</p>
            </div>
            <ArrowDown className="w-10 h-10 text-[#4FAEFF]" />
            <div className="w-1 h-20 bg-gradient-to-b from-[#4FAEFF] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Future Model Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full mb-6">
              <span className="text-sm text-blue-400 uppercase tracking-wider">Phase 2 - Future Goal</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
              Fully Regulated{' '}
              <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                Investment Platform
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our vision: A licensed platform that can manage funds, enable fractional investments, and crowdfund Sharia-compliant opportunities
            </p>
          </motion.div>

          {/* Future Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Full Regulation</h3>
              <p className="text-gray-400 text-sm">
                QFC/QCB licenses to legally handle and manage client funds
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <PieChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Fractional Investing</h3>
              <p className="text-gray-400 text-sm">
                Own fractions of high-value Sharia-compliant investments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Crowdfunding</h3>
              <p className="text-gray-400 text-sm">
                Pool funds with the community for exclusive opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-white mb-2">Direct Management</h3>
              <p className="text-gray-400 text-sm">
                We handle investments on your behalf with full oversight
              </p>
            </motion.div>
          </div>

          {/* Key Differences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 text-center">What Changes After Regulation</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Direct Fund Management</h4>
                    <p className="text-gray-400 text-sm">We execute and manage investments for you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Fractional Ownership</h4>
                    <p className="text-gray-400 text-sm">Invest in opportunities starting at $50</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Seamless Experience</h4>
                    <p className="text-gray-400 text-sm">One platform for everything from discovery to returns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-1">Community Pooling</h4>
                    <p className="text-gray-400 text-sm">Access exclusive deals through crowdfunding</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-300 text-sm text-center">
                <strong>Before regulation:</strong> We cannot manage funds or execute investments on your behalf. You maintain full control.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-3xl text-white mb-4">Help us build this dream</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our waiting list and be part of the journey from allocation platform to fully regulated Sharia-compliant investment ecosystem
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-2xl shadow-2xl"
            >
              Join the Waiting List
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}