import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import {
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Lock,
  BarChart3,
  X,
  DollarSign,
  Building2,
  LineChart,
  Target,
  Zap,
  Globe,
  Brain,
  Wallet,
  Rocket,
  User,
} from 'lucide-react';
import impactTrackerPhone from 'figma:asset/492c2eb79f87f1d6e46824c175a8eae197911577.png';
import dataInsightsPhone from 'figma:asset/698c412a1f40bc7103185048ead9800fdc43c034.png';
import { FeatureModal } from './FeatureModal';
import { PricingModal } from './PricingModal';
import { AuthModal } from './AuthModal';
import { Phone3DScene } from './Phone3DScene';
import { RegisterModal } from './RegisterModal';
import { HowItWorksInteractive } from './HowItWorksInteractive';

export function Home() {
  const [selectedFeature, setSelectedFeature] = useState<{ title: string; content: string } | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState<'high' | 'moderate' | 'low' | null>(null);
  const [selectedInvestmentType, setSelectedInvestmentType] = useState<'long-term' | 'short-term' | 'community' | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sharia-Compliant',
      description: 'All investments vetted and certified by our Sharia board',
      image: 'https://images.unsplash.com/photo-1719194981414-473883b3caf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZ2VvbWV0cmljJTIwcGF0dGVybnxlbnwxfHx8fDE3NjU4OTI0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community-Focused',
      description: 'Built for middle-class GCC investors',
      image: 'https://images.unsplash.com/photo-1585984968562-1443b72fb0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB0ZWFtd29yayUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjU4OTI0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Fractional Investing',
      description: 'Start with as little as $250',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmdzJTIwaW52ZXN0bWVudCUyMGdyb3d0aHxlbnwxfHx8fDE3NjU3OTcwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Mansoori',
      location: 'Dubai, UAE',
      text: 'Tharwa Capital made investing accessible and ethical. Started small, now have a growing portfolio.',
      rating: 5,
      avatar: 'AM',
    },
    {
      name: 'Fatima Al-Rashid',
      location: 'Riyadh, KSA',
      text: 'Finally, a platform that aligns with my values. The transparency is incredible.',
      rating: 5,
      avatar: 'FA',
    },
    {
      name: 'Omar Al-Khalifa',
      location: 'Doha, Qatar',
      text: 'The fractional investment feature is a game-changer for diversification.',
      rating: 5,
      avatar: 'OK',
    },
  ];

  const stats = [
    { value: 'Micro-savings', label: 'Goal-based investing for everyone', icon: <Target className="w-4 h-4" /> },
    { value: 'Sharia Certified', label: 'Full compliance guarantee', icon: <Shield className="w-4 h-4" /> },
    { value: 'Portfolio Tracking', label: 'Real-time performance dashboard', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section - Modern, Bold */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#A6D1FF] rounded-full blur-[120px] opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Animated Wave Backgrounds */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#4FAEFF"
              fillOpacity="0.3"
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
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(20%)' }}
          >
            <motion.path
              fill="#A6D1FF"
              fillOpacity="0.3"
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              style={{ y, opacity }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 backdrop-blur-xl border border-orange-400/30 rounded-full mb-8"
              >
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-orange-200">
                  Acceleration Phase • Not Yet Fully Launched
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-tight">
                Ethical investing,
                <br />
                <span className="bg-gradient-to-r from-[#A6D1FF] via-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                  made accessible
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Join a community of middle-class investors building wealth through
                Sharia-compliant, fractional investments
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <motion.button
                  onClick={() => setShowAuthModal(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-2xl flex items-center justify-center gap-3 shadow-2xl"
                >
                  Get Started
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white text-lg rounded-2xl hover:bg-white/20 transition-all"
                >
                  Download App
                </motion.button>
              </div>
            </motion.div>

            {/* Right - 3D Phone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:flex justify-center items-center h-[650px]"
            >
              <Phone3DScene />
            </motion.div>
          </div>

          {/* Stats Cards - Below Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateY: 10,
                  boxShadow: '0 20px 60px rgba(79, 174, 255, 0.3)',
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-left"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Register Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowRegisterModal(true)}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-[#4FAEFF]/50 text-white text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-[#4FAEFF]/20 transition-all shadow-2xl"
            >
              <User className="w-6 h-6" />
              Register Now
              <span className="text-base text-white/80">(so we can get back to you!)</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section - Vibrant Cards with Images */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -20,
                  scale: 1.02,
                  boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)',
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 mix-blend-multiply`} />

                  {/* Icon Overlay */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-2xl border border-white/30"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-[#4FAEFF] flex items-center gap-2 group/btn"
                    onClick={() => setSelectedFeature({ title: feature.title, content: feature.description })}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.gradient} opacity-10 rounded-tl-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Interactive */}
      <HowItWorksInteractive onGetStarted={() => setShowAuthModal(true)} />

      {/* Testimonials - Modern Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 tracking-tight">
              Qatar Investment
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting investors with ethical opportunities across diverse sectors in Qatar
            </p>
          </motion.div>

          {/* Circular Ecosystem Diagram */}
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* Center Hub - Tharwa Capital */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="absolute z-20"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(79, 174, 255, 0.4)",
                      "0 0 80px rgba(79, 174, 255, 0.6)",
                      "0 0 40px rgba(79, 174, 255, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 bg-gradient-to-br from-[#4FAEFF] to-[#A6D1FF] rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white"
                >
                  <Building2 className="w-12 h-12 mb-2" />
                  <div className="text-xl">Tharwa Capital</div>
                  <div className="text-sm text-white/80">Qatar Hub</div>
                </motion.div>
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const x1 = 50;
                  const y1 = 50;
                  const x2 = 50 + Math.cos(angle) * 35;
                  const y2 = 50 + Math.sin(angle) * 35;

                  return (
                    <motion.line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4FAEFF" />
                    <stop offset="100%" stopColor="#A6D1FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Sector Circles */}
              {[
                {
                  title: 'Angel Startups',
                  icon: <Rocket className="w-6 h-6" />,
                  gradient: 'from-purple-500 to-indigo-600',
                  angle: 0,
                  description: 'Early-stage ventures'
                },
                {
                  title: 'Agritech',
                  icon: <Globe className="w-6 h-6" />,
                  gradient: 'from-emerald-500 to-teal-600',
                  angle: 60,
                  description: 'Sustainable farming'
                },
                {
                  title: 'Fintech',
                  icon: <DollarSign className="w-6 h-6" />,
                  gradient: 'from-amber-500 to-orange-600',
                  angle: 120,
                  description: 'Financial innovation'
                },
                {
                  title: 'Real Estate',
                  icon: <Building2 className="w-6 h-6" />,
                  gradient: 'from-blue-500 to-cyan-600',
                  angle: 180,
                  description: 'Property development'
                },
                {
                  title: 'Healthcare',
                  icon: <Shield className="w-6 h-6" />,
                  gradient: 'from-rose-500 to-pink-600',
                  angle: 240,
                  description: 'Medical technology'
                },
                {
                  title: 'Education',
                  icon: <Brain className="w-6 h-6" />,
                  gradient: 'from-sky-500 to-blue-600',
                  angle: 300,
                  description: 'Learning platforms'
                },
              ].map((sector, index) => {
                const radian = (sector.angle - 90) * (Math.PI / 180);
                const radius = 250;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 150 }}
                    whileHover={{ scale: 1.15, zIndex: 30 }}
                    className="absolute z-10"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className={`w-36 h-36 bg-gradient-to-br ${sector.gradient} rounded-full flex flex-col items-center justify-center text-white shadow-xl cursor-pointer border-4 border-white group relative`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {sector.icon}
                      </motion.div>
                      <div className="text-center mt-2">
                        <div className="text-sm">{sector.title}</div>
                        <div className="text-xs text-white/80">{sector.description}</div>
                      </div>

                      {/* Hover Effect Glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* Animated Particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#4FAEFF] rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 400],
                    y: [0, (Math.random() - 0.5) * 400],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-lg">
                <Users className="w-8 h-8 text-[#4FAEFF] mb-3" />
                <div className="text-2xl text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Active Investors</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-lg">
                <Building2 className="w-8 h-8 text-[#4FAEFF] mb-3" />
                <div className="text-2xl text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Funded Projects</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-lg">
                <Target className="w-8 h-8 text-[#4FAEFF] mb-3" />
                <div className="text-2xl text-gray-900 mb-1">$10M+</div>
                <div className="text-sm text-gray-600">Capital Deployed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Join Early Access</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 tracking-tight">
              Add yourself to our
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                waitlist
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Be among the first to access our platform when we launch. Get exclusive early bird benefits!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Ahmed Al-Mansoori"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="ahmed@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Country</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all">
                  <option>Select your country</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Qatar</option>
                  <option>Kuwait</option>
                  <option>Bahrain</option>
                  <option>Oman</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Investment Interest (Optional)</label>
                <textarea
                  placeholder="Tell us what types of investments you're interested in..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FAEFF] focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-xl flex items-center justify-center gap-3 shadow-xl group"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                🔒 Your information is secure and will never be shared
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
              Ready to start your
              <br />
              <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                investment journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of investors building wealth the ethical way
            </p>
            <motion.button
              onClick={() => setShowPricingModal(true)}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(79, 174, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white text-lg rounded-2xl inline-flex items-center gap-3 shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Feature Modal */}
      <FeatureModal
        isOpen={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
        feature={selectedFeature}
      />

      {/* Pricing Modal */}
      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />

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
    </div>
  );
}