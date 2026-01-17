import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-mint-200/30 to-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-pink-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600">Membangun pengalaman digital yang bermakna</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6 text-gray-900"
          >
            Halo, Saya <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gunawan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Creative Developer & Designer yang mencintai detail, estetika, dan inovasi teknologi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Lihat Karya
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-gray-700 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
