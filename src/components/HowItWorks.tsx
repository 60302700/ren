import { HowItWorksInteractive } from './HowItWorksInteractive';
import { useState } from 'react';
import { AuthModal } from './AuthModal';
import { RegisterModal } from './RegisterModal';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Building2,
  Leaf,
  CheckCircle,
  Info,
  ArrowUpRight,
  Users,
} from 'lucide-react';

export function HowItWorks() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Opportunities', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'real-estate', label: 'Real Estate', icon: <Building2 className="w-5 h-5" /> },
    { id: 'sustainable', label: 'Sustainable', icon: <Leaf className="w-5 h-5" /> },
  ];

  const investments = [
    {
      id: 1,
      title: 'Wind Energy Farm – Morocco',
      category: 'sustainable',
      type: 'Sustainable',
      minInvestment: 1200,
      expectedReturn: '9-12%',
      duration: '60 months',
      riskLevel: 'Low',
      raised: 700000,
      goal: 1000000,
      investors: 342,
      description: 'Large-scale wind power generation project with government-backed incentives.',
      features: ['Government Backed', 'Stable Returns', 'Environmental Impact'],
      icon: <Leaf className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      title: 'Halal Organic Farm – UAE',
      category: 'sustainable',
      type: 'Sustainable',
      minInvestment: 200,
      expectedReturn: '10-13%',
      duration: '24 months',
      riskLevel: 'Medium',
      raised: 350000,
      goal: 1000000,
      investors: 178,
      description: 'Investing in organic farms producing halal-certified crops for GCC markets.',
      features: ['Halal Certified', 'Local Production', 'Growing Demand'],
      icon: <Leaf className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Shariah-Compliant Smart City Project – Qatar',
      category: 'real-estate',
      type: 'Real Estate',
      minInvestment: 1500,
      expectedReturn: '12-16%',
      duration: '48 months',
      riskLevel: 'Medium',
      raised: 600000,
      goal: 1000000,
      investors: 256,
      description: 'Investment in a mixed-use smart city with sustainable and halal-compliant infrastructure.',
      features: ['Smart Infrastructure', 'Sustainable Design', 'Prime Location'],
      icon: <Building2 className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const filteredInvestments = selectedCategory === 'all'
    ? investments
    : investments.filter(inv => inv.category === selectedCategory);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <>
      <HowItWorksInteractive onGetStarted={() => setShowAuthModal(true)} />

      {/* Investment Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Investment Opportunities</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 tracking-tight">
              Discover vetted{' '}
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                Sharia-compliant
              </span>
              <br />
              investments
            </h2>
            <p className="text-xl text-gray-600">
              Explore curated opportunities across various sectors
            </p>
          </motion.div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl flex items-center gap-3 text-base transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Investment Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredInvestments.map((investment, index) => (
                <motion.div
                  key={investment.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -15,
                    rotateY: 5,
                    boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)',
                  }}
                  onHoverStart={() => setHoveredCard(investment.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer group"
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${investment.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center"
                        >
                          {investment.icon}
                        </motion.div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-xs">
                          <Shield className="w-4 h-4" />
                          Sharia Certified
                        </div>
                      </div>
                      <h3 className="text-2xl text-white mb-2">{investment.title}</h3>
                      <div className="text-sm text-white/80">{investment.type}</div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{investment.description}</p>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <DollarSign className="w-4 h-4" />
                          Min. Investment
                        </div>
                        <div className="text-xl text-gray-900">${investment.minInvestment}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <TrendingUp className="w-4 h-4" />
                          Expected Return
                        </div>
                        <div className="text-xl text-green-600">{investment.expectedReturn}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Clock className="w-4 h-4" />
                          Duration
                        </div>
                        <div className="text-base text-gray-900">{investment.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Risk Level</div>
                        <div className={`inline-block px-3 py-1 rounded-lg text-sm border ${getRiskColor(investment.riskLevel)}`}>
                          {investment.riskLevel}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-600">Funded</span>
                        <span className="text-gray-900">
                          {Math.round((investment.raised / investment.goal) * 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(investment.raised / investment.goal) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${investment.gradient}`}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                        <Users className="w-4 h-4" />
                        {investment.investors} investors
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      {investment.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-gradient-to-r ${investment.gradient} text-white rounded-2xl flex items-center justify-center gap-2 group/btn shadow-lg`}
                    >
                      <span className="text-base">Learn More</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredInvestments.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl text-gray-600 mb-2">No opportunities found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onOpenRegister={() => setShowRegisterModal(true)}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      />
    </>
  );
}