import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Zap, Crown, Sparkles, TrendingUp, Calculator, Plane } from 'lucide-react';
import { useState } from 'react';
import { AuthModal } from './AuthModal';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleGetStarted = () => {
    onClose(); // Close pricing modal first
    // Open auth modal after a short delay to ensure smooth transition
    setTimeout(() => {
      setShowAuthModal(true);
    }, 300);
  };

  const plans = [
    {
      name: 'Pay-As-You-Go',
      price: 'Transaction Fees',
      description: 'Perfect for trying out the platform',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-gray-500 to-gray-700',
      features: [
        'Access to all investment opportunities',
        'Sharia-compliant verification',
        'Basic portfolio tracking',
        'Community forum access',
        'Standard customer support',
        'Pay only per transaction',
      ],
      badge: null,
      popular: false,
    },
    {
      name: 'Basic Subscription',
      price: '30',
      currency: 'QR',
      period: '/month',
      description: 'Save on fees with monthly subscription',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-[#4FAEFF] to-[#A6D1FF]',
      features: [
        'No transaction fees',
        'All Pay-As-You-Go features',
        'Advanced portfolio analytics',
        'Priority investment notifications',
        'Email support',
        'Investment performance reports',
      ],
      badge: 'MOST POPULAR',
      popular: true,
    },
    {
      name: 'Premium Subscription',
      price: '40',
      currency: 'QR',
      period: '/month',
      description: 'Complete wealth management solution',
      icon: <Crown className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-600',
      features: [
        'Everything in Basic',
        'AI-powered investment advisory',
        'Personalized Zakat calculator',
        'Hajj savings planner',
        'Dedicated account manager',
        'Early access to opportunities',
        'Custom ethical filtering',
        'Tax optimization guidance',
      ],
      badge: 'BEST VALUE',
      popular: false,
    },
  ];

  return (
    <>
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
              >
                {/* Header */}
                <div className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] px-8 py-10 text-white overflow-hidden">
                  <div className="absolute inset-0">
                    <motion.div
                      className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-30"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#A6D1FF] rounded-full blur-[100px] opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                    />

                    {/* Animated Wave Backgrounds */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        fill="#4FAEFF"
                        fillOpacity="0.3"
                        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{
                          d: [
                            "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                          ],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </svg>
                    
                    <svg
                      className="absolute inset-0 w-full h-full opacity-15"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      preserveAspectRatio="none"
                      style={{ transform: 'translateY(20%)' }}
                    >
                      <motion.path
                        fill="#A6D1FF"
                        fillOpacity="0.4"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{
                          d: [
                            "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                          ],
                        }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1,
                        }}
                      />
                    </svg>

                    {/* Third Wave Layer */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      preserveAspectRatio="none"
                      style={{ transform: 'translateY(40%)' }}
                    >
                      <motion.path
                        fill="#60A5FA"
                        fillOpacity="0.5"
                        d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{
                          d: [
                            "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                          ],
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 2,
                        }}
                      />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-4">
                            <span className="text-sm uppercase tracking-wider">Our Pricing</span>
                          </div>
                        </motion.div>
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-4xl sm:text-5xl mb-3"
                        >
                          Choose Your{' '}
                          <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                            Investment Plan
                          </span>
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-lg text-gray-300"
                        >
                          Start with our flexible pay-as-you-go model or unlock premium features with a subscription
                        </motion.p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Pricing Cards */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                  <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                      <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                        whileHover={{ 
                          y: -10,
                          boxShadow: '0 20px 60px rgba(79, 174, 255, 0.3)'
                        }}
                        className={`relative bg-white rounded-2xl border-2 overflow-hidden ${
                          plan.popular
                            ? 'border-[#4FAEFF] shadow-xl shadow-[#4FAEFF]/20'
                            : 'border-gray-200'
                        }`}
                      >
                        {/* Badge */}
                        {plan.badge && (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${plan.gradient} text-white text-xs rounded-full shadow-lg`}
                          >
                            {plan.badge}
                          </motion.div>
                        )}

                        <div className="p-8">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
                          >
                            {plan.icon}
                          </motion.div>

                          {/* Plan Name */}
                          <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                          <p className="text-gray-600 mb-6">{plan.description}</p>

                          {/* Price */}
                          <div className="mb-8">
                            {plan.currency ? (
                              <div className="flex items-baseline gap-2">
                                <span className={`text-5xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                  {plan.price}
                                </span>
                                <span className="text-2xl text-gray-600">{plan.currency}</span>
                                <span className="text-gray-500">{plan.period}</span>
                              </div>
                            ) : (
                              <div className={`text-3xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                {plan.price}
                              </div>
                            )}
                          </div>

                          {/* Features */}
                          <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * idx + 0.5 }}
                                className="flex items-start gap-3"
                              >
                                <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleGetStarted}
                            className={`w-full py-4 rounded-xl text-white shadow-lg transition-all ${
                              plan.popular
                                ? `bg-gradient-to-r ${plan.gradient}`
                                : `bg-gradient-to-r ${plan.gradient}`
                            }`}
                          >
                            Choose {plan.name}
                          </motion.button>
                        </div>

                        {/* Decorative Element */}
                        {plan.popular && (
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#4FAEFF]/20 to-[#A6D1FF]/20 rounded-full blur-3xl"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 p-6 bg-gradient-to-r from-[#4FAEFF]/10 to-[#A6D1FF]/10 rounded-2xl border border-[#4FAEFF]/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-900 mb-2">All plans include:</h4>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#4FAEFF]" />
                            Sharia-compliant investments only
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#4FAEFF]" />
                            Secure & encrypted platform
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#4FAEFF]" />
                            Real-time portfolio tracking
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#4FAEFF]" />
                            Cancel anytime (subscriptions)
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Premium Features Highlight */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 grid sm:grid-cols-3 gap-4"
                  >
                    {[
                      { icon: <Calculator className="w-6 h-6" />, title: 'Zakat Calculator', desc: 'Automated Zakat calculation' },
                      { icon: <Plane className="w-6 h-6" />, title: 'Hajj Planner', desc: 'Save for Hajj systematically' },
                      { icon: <Sparkles className="w-6 h-6" />, title: 'AI Advisory', desc: 'Personalized recommendations' },
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + idx * 0.1 }}
                        className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-3">
                          {feature.icon}
                        </div>
                        <h5 className="text-sm text-gray-900 mb-1">{feature.title}</h5>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                        <div className="mt-2 text-xs text-amber-600">Premium only</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}
    </>
  );
}