import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, Shield, Briefcase, Scale, BarChart, Code, DollarSign, Building2, CheckCircle2, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import founderImage from 'figma:asset/d6e489760bee7094d058709977f3ad2051251e86.png';
import shariaAdvisorImage from 'figma:asset/ac24a96a1b5920ec6f9c7be32ffdfc168abaedd5.png';
import businessAnalystImage from 'figma:asset/5f8caf64ef4b3463e5000853feaff0cc7f4d5200.png';
import engineerImage1 from 'figma:asset/ee1013ade33029277d774c9a306bf14696c1bd06.png';
import engineerImage2 from 'figma:asset/d451e6e49c2813b45cbb28596d902e73809e07b6.png';
import engineerImage3 from 'figma:asset/e00a7703f818a3e3f25d26bb2d0f7622bba657fa.png';
import tractionImage from 'figma:asset/5f8caf64ef4b3463e5000853feaff0cc7f4d5200.png';

export function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sharia Compliance',
      description: 'Every investment vetted by our Sharia board',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Power of community and collective growth',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear communication about risks and returns',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Highest standards in selection and service',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Mission & Vision Widgets */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A6D1FF] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1.3, 1, 1.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center"
          >
            {/* Mission Widget */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 80px rgba(79, 174, 255, 0.4)'
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 overflow-hidden group"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                    Mission
                  </span>
                </h1>
                
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  To democratize access to premium, Sharia-compliant investment opportunities for middle-class families across the GCC, enabling sustainable wealth building through ethical means.
                </p>
              </div>
            </motion.div>

            {/* GCC Map in Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative lg:mx-8"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Glowing Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-full blur-[100px]"
                />
                
                {/* 3D Rotating Globe */}
                <div className="relative flex items-center justify-center" style={{ perspective: '1000px' }}>
                  <motion.div
                    className="relative w-64 h-64 sm:w-80 sm:h-80"
                    animate={{
                      rotateY: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Main Globe Sphere */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8c] to-[#1a2642] shadow-2xl overflow-hidden border border-[#4FAEFF]/30">
                      {/* Globe Grid Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                        {/* Latitude lines */}
                        {[30, 50, 70, 90, 110, 130, 150, 170].map((y, i) => (
                          <motion.ellipse
                            key={`lat-${i}`}
                            cx="100"
                            cy={y}
                            rx={Math.abs(100 - y) * 0.8}
                            ry="8"
                            fill="none"
                            stroke="#4FAEFF"
                            strokeWidth="0.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          />
                        ))}
                        
                        {/* Longitude lines */}
                        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                          <motion.ellipse
                            key={`lon-${i}`}
                            cx="100"
                            cy="100"
                            rx="10"
                            ry="90"
                            fill="none"
                            stroke="#4FAEFF"
                            strokeWidth="0.5"
                            transform={`rotate(${angle} 100 100)`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                          />
                        ))}
                      </svg>

                      {/* Glowing Continents Effect */}
                      <div className="absolute inset-0 opacity-40">
                        {/* Simulated landmasses with glow */}
                        <div className="absolute top-[30%] left-[20%] w-12 h-8 bg-[#4FAEFF] rounded-full blur-md opacity-60" />
                        <div className="absolute top-[40%] right-[25%] w-16 h-10 bg-[#A6D1FF] rounded-full blur-md opacity-60" />
                        <div className="absolute bottom-[35%] left-[30%] w-10 h-12 bg-[#4FAEFF] rounded-full blur-md opacity-60" />
                        <div className="absolute top-[50%] left-[45%] w-14 h-9 bg-[#A6D1FF] rounded-full blur-md opacity-60" />
                      </div>

                      {/* Light reflection */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full" />
                    </div>

                    {/* Outer Glow Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#4FAEFF]/50"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Glowing GCC Country Markers */}
                    {[
                      { name: 'UAE', x: '65%', y: '48%', delay: 1.5 },
                      { name: 'Qatar', x: '60%', y: '45%', delay: 1.6 },
                      { name: 'Saudi Arabia', x: '58%', y: '50%', delay: 1.7 },
                      { name: 'Kuwait', x: '60%', y: '42%', delay: 1.8 },
                      { name: 'Bahrain', x: '61%', y: '46%', delay: 1.9 },
                      { name: 'Oman', x: '68%', y: '52%', delay: 2.0 },
                    ].map((location, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: location.delay, type: 'spring' }}
                        style={{
                          position: 'absolute',
                          left: location.x,
                          top: location.y,
                          transform: 'translate(-50%, -50%)',
                        }}
                        className="group cursor-pointer z-10"
                      >
                        {/* Pulsing Glow */}
                        <motion.div
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: location.delay,
                          }}
                          className="absolute inset-0 w-6 h-6 bg-[#4FAEFF] rounded-full blur-sm"
                          style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
                        />
                        
                        {/* Pin */}
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className="relative z-10 w-3 h-3 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-full shadow-xl border-2 border-white"
                        />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-white text-gray-900 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-gray-200">
                            {location.name}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Orbital Rings */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{
                      rotateZ: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-72 h-72 sm:w-96 sm:h-96 border border-[#4FAEFF]/20 rounded-full" />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{
                      rotateZ: -360,
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] border border-[#A6D1FF]/15 rounded-full" />
                  </motion.div>
                </div>

                {/* Bottom Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="text-center mt-8"
                >
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-sm text-white">Serving the GCC Region</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Vision Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 80px rgba(166, 209, 255, 0.4)'
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 overflow-hidden group"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#A6D1FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                    Vision
                  </span>
                </h1>
                
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  To become the leading ethical investment platform in MENA, creating a thriving community of investors who grow together while adhering to Islamic principles.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Traction & Milestones */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-4 tracking-tight">
              Traction &{' '}
              <span className="block bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Early Milestones */}
            <div className="space-y-8">
              {/* Q1 2025 - FEATURED */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: 'spring' }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-2xl border-4 border-[#FFD700] relative overflow-hidden">
                  {/* Gold shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Winner Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-1.5 rounded-full text-sm shadow-lg">
                    🏆 Winner
                  </div>

                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Rocket className="w-8 h-8" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-3">Q1 2025: QFTH/QDB Hackathon</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Won <span className="text-4xl bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mx-1">25k QR</span> seed capital as Top 3 finalist among 200+ entries.
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Top 3 Finalist</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">200+ Entries</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Q2 AIX Hackathon */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">Q2 AIX Hackathon</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Participated to develop AI solution for Tharwa and understand how it works.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Q2 2025 Regulatory */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">Q2 2025: Regulatory Roadmap</h3>
                      <p className="text-gray-600 leading-relaxed">
                        QFC/QCB registration in process, documents complete for license applications.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Recent Milestones */}
            <div className="space-y-8">
              {/* 2024 Customer Validation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">2024 - Customer Validation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Through 100+ user surveys - 87% cited high investment minimums as a barrier, 90% Sharia-compliant options.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Q2 2025 Development */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white">
                      <Code className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">Q2 2025 - App & Website Development Complete</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Worked with service providers and wone.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Q3 2025 Sharia Partnership */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center text-white">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">Q3 2025 - Sharia Partnership</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Partnered with lawyers to comply Sharia and prepare for AAOIFI certifications etc.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 tracking-tight">
              Meet the experts
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                behind Tharwa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings decades of combined experience in fintech, Islamic finance, and business strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder/CEO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={founderImage}
                  alt="Maryam Faizan Munshi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Maryam Faizan Munshi</h3>
                  <div className="text-base text-[#4FAEFF] mb-1">Founder & CEO</div>
                  <div className="text-xs text-gray-500">5 Years of Experience in Fintech</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Visionary leadership driving innovation in ethical investing. Pioneered the platform's fractional investment model, making Sharia-compliant opportunities accessible to middle-class investors across the GCC.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sharia Advisory Lawyer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={shariaAdvisorImage}
                  alt="Adil Khoualdi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Scale className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Adil Khoualdi</h3>
                  <div className="text-base text-emerald-600 mb-1">Sharia Advisory Lawyer</div>
                  <div className="text-xs text-gray-500">17+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ensures all investment opportunities meet strict Sharia compliance standards. Leads the advisory board that vets every investment, maintaining the highest ethical and religious standards for our community.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Analyst */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={businessAnalystImage}
                  alt="Faizan Munshi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <BarChart className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Faizan Munshi</h3>
                  <div className="text-base text-purple-600 mb-1">Senior Business Analyst</div>
                  <div className="text-xs text-gray-500">22+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Provides strategic insights through comprehensive market analysis and risk assessment. Develops data-driven investment strategies that maximize returns while maintaining conservative risk profiles for our investors.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engineerImage1}
                  alt="Senior Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Irshad</h3>
                  <div className="text-base text-cyan-600 mb-1">Senior Software Engineer</div>
                  <div className="text-xs text-gray-500">10+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Develops and maintains the platform's core software infrastructure. Ensures high performance, scalability, and security for our investment management system.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engineerImage2}
                  alt="Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Saheer KP</h3>
                  <div className="text-base text-cyan-600 mb-1">Frontend Software Engineer</div>
                  <div className="text-xs text-gray-500">8+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Focuses on developing user-friendly interfaces and enhancing the overall user experience. Implements new features and optimizations to improve the platform's functionality and accessibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineer 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.3)' }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={engineerImage3}
                  alt="Backend Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl text-gray-900 mb-1">Badusha</h3>
                  <div className="text-base text-cyan-600 mb-1">Backend Software Engineer</div>
                  <div className="text-xs text-gray-500">6+ Years of Experience</div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contribution to Tharwa</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Specializes in developing and maintaining the platform's backend systems. Ensures efficient data processing, storage, and retrieval, supporting the platform's core functionalities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-[#4FAEFF]/10 rounded-full mb-6">
              <span className="text-sm text-[#4FAEFF] uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="text-5xl sm:text-6xl text-gray-900 mb-6 tracking-tight">
              Principles that
              <br />
              <span className="bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] bg-clip-text text-transparent">
                guide everything
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, boxShadow: '0 30px 80px rgba(79, 174, 255, 0.2)' }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-2xl flex items-center justify-center text-white mb-6"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}