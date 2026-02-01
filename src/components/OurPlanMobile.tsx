import { motion } from 'motion/react';
import {
  PieChart,
  Eye,
  Users,
  Wallet,
  Globe,
} from 'lucide-react';

export function OurPlanMobile() {
  return (
    <div className="md:hidden space-y-4 px-2">
      {/* Step 1 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_0_30px_rgba(166,209,255,0.2)] relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Wallet className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  1
                </div>
                <h3 className="text-base text-white">We learn your <strong className="text-[#A6D1FF]">belief system</strong></h3>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed ml-13">
            Customize your portfolio so we recommend what's best for you.
          </p>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_0_30px_rgba(166,209,255,0.2)] relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#A6D1FF]/20 via-transparent to-[#4FAEFF]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <PieChart className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  2
                </div>
                <h3 className="text-base text-white"><strong className="text-[#A6D1FF]">Sharia-Compliant</strong> Allocation</h3>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-2 ml-13">
            Based on <strong className="text-[#A6D1FF]">four Maqasid al-Shariah</strong>
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs ml-13">
            <div className="text-gray-300">Hifz al-Nafs</div>
            <div className="text-gray-300">Hifz al-Nasl</div>
            <div className="text-gray-300">Hifz al-Aql</div>
            <div className="text-gray-300">Hifz al-Mal</div>
          </div>
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_0_30px_rgba(166,209,255,0.2)] relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Eye className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  3
                </div>
                <h3 className="text-base text-white"><strong className="text-[#A6D1FF]">Transparency</strong> & Risk</h3>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed ml-13">
            <strong className="text-[#A6D1FF]">Vet each opportunity</strong> with live control
          </p>
        </div>
      </motion.div>

      {/* Step 4 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_0_30px_rgba(166,209,255,0.2)] relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#A6D1FF]/20 via-transparent to-[#4FAEFF]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Users className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  4
                </div>
                <h3 className="text-base text-white"><strong className="text-[#A6D1FF]">Community</strong> Connection</h3>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed ml-13">
            <strong className="text-[#A6D1FF]">Verified platforms</strong> and investors
          </p>
        </div>
      </motion.div>

      {/* Step 5 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-[0_0_30px_rgba(166,209,255,0.2)] relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#4FAEFF]/20 via-transparent to-[#A6D1FF]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Globe className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  5
                </div>
                <h3 className="text-sm text-white leading-tight"><strong className="text-[#A6D1FF]">Decide, Analyze & Track</strong></h3>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed ml-13">
            All impact <strong className="text-[#A6D1FF]">personalized for Muslims</strong> on one platform
          </p>
        </div>
      </motion.div>
    </div>
  );
}