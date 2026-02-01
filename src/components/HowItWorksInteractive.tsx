import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Clock,
  Heart,
  Flame,
  Scale,
  Leaf,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Globe,
  Users,
  Shield,
  Lightbulb,
  Building2,
  PieChart,
  BarChart3,
  Eye,
  HandHeart,
  Wallet,
  TrendingDown,
  Sparkles,
  MapPin,
  Brain,
} from 'lucide-react';

interface HowItWorksInteractiveProps {
  onGetStarted: () => void;
}

export function HowItWorksInteractive({ onGetStarted }: HowItWorksInteractiveProps) {
  const [selectedRisk, setSelectedRisk] = useState<'high' | 'moderate' | 'low' | null>(null);
  const [selectedInvestmentType, setSelectedInvestmentType] = useState<'long-term' | 'short-term' | 'community' | null>(null);

  const investmentTypes = [
    {
      id: 'long-term',
      title: 'Long-Term',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      description: '5-10+ years of steady growth',
    },
    {
      id: 'short-term',
      title: 'Short-Term',
      icon: <Clock className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600',
      description: '1-3 years for near-term goals',
    },
    {
      id: 'community',
      title: 'Community Impact',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-600',
      description: 'Support GCC communities',
    },
  ];

  const riskLevels = [
    {
      id: 'high',
      title: 'High Growth',
      icon: <Flame className="w-6 h-6" />,
      gradient: 'from-rose-500 to-pink-600',
      returnRange: '12-18%',
    },
    {
      id: 'moderate',
      title: 'Balanced',
      icon: <Scale className="w-6 h-6" />,
      gradient: 'from-purple-500 to-indigo-600',
      returnRange: '8-12%',
    },
    {
      id: 'low',
      title: 'Conservative',
      icon: <Leaf className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      returnRange: '5-8%',
    },
  ];

  const journeySteps = [
    {
      number: '01',
      title: 'Islamic School of Thought',
      description: 'We align your portfolio with your preferred madhab',
      icon: <BookOpen className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-600',
      details: [
        'Select from Hanafi, Maliki, Shafi\'i, or Hanbali schools',
        'Receive rulings specific to your chosen school',
        'Get personalized Sharia compliance recommendations',
      ],
    },
    {
      number: '02',
      title: 'Maqasid Shariah Alignment',
      description: 'Choose which higher objectives of Islamic law you prioritize',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-purple-500 to-indigo-600',
      details: [
        'Protection of Faith (Deen) - Ethical business practices',
        'Protection of Life (Nafs) - Healthcare & safety',
        'Protection of Intellect (Aql) - Education & innovation',
        'Protection of Lineage (Nasl) - Family & community',
        'Protection of Wealth (Mal) - Economic development',
      ],
    },
    {
      number: '03',
      title: 'Geographic & Community Preferences',
      description: 'Select regions and communities you want to support',
      icon: <MapPin className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-600',
      details: [
        'Choose specific GCC countries (UAE, KSA, Qatar, etc.)',
        'Support local businesses in your region',
        'Invest in cross-border opportunities',
        'Focus on underserved communities',
      ],
    },
    {
      number: '04',
      title: 'Impact Priorities',
      description: 'Define what impact matters most to you',
      icon: <HandHeart className="w-8 h-8" />,
      gradient: 'from-rose-500 to-pink-600',
      details: [
        'Job creation & employment',
        'Environmental sustainability',
        'Social welfare & charity',
        'Technology & innovation',
        'Youth empowerment',
      ],
    },
    {
      number: '05',
      title: 'Portfolio Curation',
      description: 'We build a custom portfolio based on all your preferences',
      icon: <PieChart className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-600',
      details: [
        'AI-powered matching to suitable investments',
        'Diversification across sectors and risk levels',
        'Full Sharia compliance verification',
        'Regular rebalancing based on your goals',
      ],
    },
    {
      number: '06',
      title: 'Ongoing Monitoring & Support',
      description: 'We continuously ensure your investments align with your values',
      icon: <Eye className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-600',
      details: [
        'Real-time Sharia compliance monitoring',
        'Quarterly Sharia board reviews',
        'Impact reporting on your chosen Maqasid',
        'Portfolio adjustments as your goals evolve',
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
            <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Your Islamic Investment Journey</span>
          </div>
          <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
            How It{' '}
            <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A fully personalized investment experience aligned with your Islamic values and financial goals
          </p>
        </motion.div>

        {/* Interactive Selectors at Top */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Investment Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl text-gray-900 text-center mb-6">
              1. Choose Your Investment Goal
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {investmentTypes.map((type, index) => (
                <motion.button
                  key={type.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedInvestmentType(type.id as any)}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                    selectedInvestmentType === type.id
                      ? 'shadow-2xl ring-4 ring-[#4FAEFF]'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient}`} />
                  
                  {/* Selected Check */}
                  <AnimatePresence>
                    {selectedInvestmentType === type.id && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
                      >
                        <CheckCircle className="w-5 h-5 text-[#4FAEFF]" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className="relative z-10 text-white text-center">
                    <motion.div
                      animate={selectedInvestmentType === type.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-xl rounded-xl mb-3"
                    >
                      {type.icon}
                    </motion.div>
                    <div className="text-xl mb-1">{type.title}</div>
                    <div className="text-sm text-white/90">{type.description}</div>
                  </div>

                  {/* Animated Border Glow */}
                  <AnimatePresence>
                    {selectedInvestmentType === type.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${type.gradient} blur-xl opacity-50`}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Risk Level Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <h3 className="text-2xl text-gray-900 text-center mb-6">
              2. Select Your Risk Tolerance
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {riskLevels.map((risk, index) => (
                <motion.button
                  key={risk.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRisk(risk.id as any)}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                    selectedRisk === risk.id
                      ? 'shadow-2xl ring-4 ring-[#4FAEFF]'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${risk.gradient}`} />
                  
                  {/* Selected Check */}
                  <AnimatePresence>
                    {selectedRisk === risk.id && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
                      >
                        <CheckCircle className="w-5 h-5 text-[#4FAEFF]" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Animated Particles */}
                  <AnimatePresence>
                    {selectedRisk === risk.id && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full"
                            initial={{ x: '50%', y: '50%', opacity: 0 }}
                            animate={{
                              x: `${50 + (Math.random() - 0.5) * 100}%`,
                              y: `${50 + (Math.random() - 0.5) * 100}%`,
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className="relative z-10 text-white text-center">
                    <motion.div
                      animate={selectedRisk === risk.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-xl rounded-xl mb-3"
                    >
                      {risk.icon}
                    </motion.div>
                    <div className="text-xl mb-1">{risk.title}</div>
                    <div className="text-sm text-white/90">Returns: {risk.returnRange}</div>
                  </div>

                  {/* Animated Border Glow */}
                  <AnimatePresence>
                    {selectedRisk === risk.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${risk.gradient} blur-xl opacity-50`}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey Process Flow */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl text-gray-900 mb-4">
              Then, We Guide You Through Your{' '}
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                Islamic Investment Journey
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Every step designed to honor your faith and maximize your impact
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4FAEFF] via-[#A6D1FF] to-[#4FAEFF] opacity-20 hidden md:block" />

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-full bg-gradient-to-b ${step.gradient}`} />
                    
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                      >
                        {step.icon}
                      </motion.div>

                      <div className="flex-1">
                        {/* Number Badge */}
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-3">
                          Step {step.number}
                        </div>

                        <h4 className="text-2xl text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 mb-4">{step.description}</p>

                        {/* Details List */}
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute bottom-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-tl ${step.gradient} opacity-5 rounded-tl-full`} />
                  </motion.div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                      className={`w-6 h-6 bg-gradient-to-br ${step.gradient} rounded-full border-4 border-white shadow-lg`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#4FAEFF] to-[#A6D1FF] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl mb-6 border-2 border-white/30"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-4xl text-white mb-4">
                Ready to Start Your Islamic Investment Journey?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of Muslims building wealth while staying true to their values
              </p>

              <motion.button
                onClick={onGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#4FAEFF] rounded-xl flex items-center justify-center gap-3 shadow-xl group mx-auto"
              >
                <span className="font-medium text-lg">Begin Your Journey</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}