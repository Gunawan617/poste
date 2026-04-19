import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Code, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '../../asset/unnamed.jpg';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const passions = [
    { icon: Code, title: "Full-Stack Development", desc: "Membangun solusi web yang robust dengan Laravel & React" },
    { icon: Palette, title: "IoT & Embedded Systems", desc: "Mengintegrasikan hardware dan software untuk sistem cerdas" },
    { icon: Heart, title: "Problem Solving", desc: "Menganalisis dan menyelesaikan tantangan teknis kompleks" }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-blue-50" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-blue-600 font-medium mb-2 block tracking-wide">TENTANG SAYA</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Perjalanan Kreatif</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-3xl"></div>
                <ImageWithFallback
                  // src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzgwOTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  src={profileImage}
                  alt="Profile"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Lulusan <strong className="text-gray-900">D3 Teknik Komputer</strong> dengan passion di bidang software development dan riset sistem. Saya percaya teknologi terbaik adalah yang mengintegrasikan <strong className="text-gray-900">hardware dan software</strong> secara seamless untuk menciptakan solusi yang efisien dan andal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dari membangun <strong className="text-gray-900">platform e-learning CBT UKOM</strong> hingga mengembangkan <strong className="text-gray-900">firmware IoT berbasis C/C++</strong>, saya menggabungkan keahlian full-stack development dengan pemahaman mendalam tentang sistem embedded untuk menciptakan solusi teknologi yang terintegrasi dan berdampak nyata.
              </p>

              <div className="space-y-4 mt-8">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <passion.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">{passion.title}</h3>
                      <p className="text-gray-500 text-sm">{passion.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
