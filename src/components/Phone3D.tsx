import { motion } from 'motion/react';
import maqasidScreen from 'figma:asset/03316042abb937db5a6f7216b3e88b57d8783265.png';

export function Phone3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative preserve-3d"
        animate={{
          rotateY: [0, 20, -20, 0],
          rotateX: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Phone Container */}
        <div className="relative w-[280px] h-[560px] rounded-[40px] bg-gradient-to-br from-gray-900 to-black shadow-2xl p-3 preserve-3d">
          {/* Outer Frame */}
          <div className="absolute inset-0 rounded-[40px] border-4 border-gray-800"></div>
          
          {/* Side Buttons */}
          <div className="absolute -left-1 top-24 w-1 h-12 bg-gray-700 rounded-l"></div>
          <div className="absolute -left-1 top-40 w-1 h-16 bg-gray-700 rounded-l"></div>
          <div className="absolute -right-1 top-28 w-1 h-10 bg-gray-700 rounded-r"></div>

          {/* Screen */}
          <motion.div
            className="relative w-full h-full rounded-[32px] bg-white overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 30px rgba(79, 174, 255, 0.5)",
                "0 0 50px rgba(79, 174, 255, 0.8)",
                "0 0 30px rgba(79, 174, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl flex items-center justify-center gap-2 z-20">
              <div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>

            {/* Maqasid Screen Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full h-full"
            >
              <img 
                src={maqasidScreen} 
                alt="Maqasid Al Shariah Investment Options"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Screen Reflection */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Phone Shadow */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[250px] h-8 bg-black/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}