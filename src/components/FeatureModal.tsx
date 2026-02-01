import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Heart, HandHeart, TrendingUp, Building2, GraduationCap, Activity, Users, Home as HomeIcon } from 'lucide-react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    content: string;
  } | null;
}

export function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
  if (!feature) return null;

  const getFeatureContent = () => {
    if (feature.title === 'Sharia-Compliant') {
      return {
        mainText: `Tharwa Capital operates through a transparent, halal-compliant structure that avoids interest-based mechanisms and instead uses approved Sharia structures such as Mudarabah, Musharakah, and asset-backed investment models. The platform enables users to invest smaller amounts into vetted opportunities—including private companies, alternative assets, and global markets—with profit distribution based on proportional ownership and actual business performance.`,
        futureGoals: [
          'Providing Zakat opportunities who don\'t get as much spotlight and advertisement as popular ones',
          'Allowing users to choose specific causes they want to support',
          'Premium plan with AI assistance to help users design a Hajj or Umrah plan where all benefits go towards savings for Umrah'
        ],
        categories: [
          { 
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Preservation of Wealth',
            items: [
              'Halal Public Equities (screened by AAOIFI guidelines)',
              'SME & Private Company Investments (equity-based, asset-backed)'
            ]
          },
          { 
            icon: <Activity className="w-6 h-6" />,
            title: 'Preservation of Life',
            items: [
              'Healthcare technology',
              'Pharmaceuticals (halal-certified)'
            ]
          },
          { 
            icon: <GraduationCap className="w-6 h-6" />,
            title: 'Preservation of Mind and Intellect',
            items: [
              'Education technology (EdTech)',
              'Skill-building platforms'
            ]
          },
          { 
            icon: <Heart className="w-6 h-6" />,
            title: 'Preservation of Faith',
            items: [
              'Islamic finance startups',
              'Halal auditing & compliance technologies'
            ]
          },
          { 
            icon: <HomeIcon className="w-6 h-6" />,
            title: 'Preservation of Family and Community',
            items: [
              'Sustainable housing projects',
              'Family-focused tech solutions'
            ]
          }
        ]
      };
    } else if (feature.title === 'Fractional Investing') {
      return {
        mainText: `We focus on providing opportunities to both sides: on the investment side, we allow SME's and community-oriented opportunities focusing on the Islamic world's progress including Agritech, Innovative solutions, and more—plenty of which we plan to partner with Invest Qatar. On our user side, we aim for the everyday citizen to be able to penetrate the market at a lower price and earn profit from what they have invested in (concept of fractional investments and crowdfunding), ensuring their income is not just halal but also benefitting those who deserve.`,
        features: [
          'Social investing (community pools)',
          'Micro-savings & goal-based investing',
          'AI-driven halal portfolio advisory',
          'Fractional investment pools (e.g., sukuk, halal ETFs, tokenized property)',
          'Shariah-compliance certification',
          'Portfolio dashboard & performance tracking'
        ]
      };
    } else if (feature.title === 'Community-Focused') {
      return {
        mainText: `At Tharwa, every investment you make creates a real impact in your community. Our platform connects investors with local, ethical projects and businesses, allowing you to support initiatives that foster growth, innovation, and social good. With fractional, Sharia-compliant investments, you can participate in community development while building your own financial future — making every contribution meaningful.`
      };
    }
    return null;
  };

  const content = getFeatureContent();
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl max-h-[85vh] overflow-hidden w-full"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] px-8 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl text-white">{feature.title}</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-100px)] px-8 py-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {content.mainText}
              </p>

              {/* Sharia Compliant Content */}
              {feature.title === 'Sharia-Compliant' && 'futureGoals' in content && (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center">
                        <HandHeart className="w-5 h-5 text-white" />
                      </div>
                      Future Goals
                    </h3>
                    <div className="space-y-3">
                      {content.futureGoals.map((goal, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                        >
                          <CheckCircle className="w-6 h-6 text-[#4FAEFF] flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{goal}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl text-gray-900 mb-6">Investment Categories by Maqasid al-Shariah</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {content.categories.map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6"
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                              {category.icon}
                            </div>
                            <h4 className="text-lg text-gray-900 mt-2">{category.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[#4FAEFF] rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Fractional Investing Content */}
              {feature.title === 'Fractional Investing' && 'features' in content && (
                <div>
                  <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    Platform Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {content.features.map((feat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-gradient-to-br from-[#4FAEFF]/5 to-[#A6D1FF]/5 border border-[#4FAEFF]/20 rounded-xl p-4"
                      >
                        <CheckCircle className="w-6 h-6 text-[#4FAEFF] flex-shrink-0" />
                        <span className="text-gray-700">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Community Focused Content */}
              {feature.title === 'Community-Focused' && (
                <div className="bg-gradient-to-br from-[#4FAEFF]/10 to-[#A6D1FF]/10 border border-[#4FAEFF]/20 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-gray-900">Impact-Driven Investing</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Every investment creates tangible change in your community while building your financial future. Together, we grow stronger.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}