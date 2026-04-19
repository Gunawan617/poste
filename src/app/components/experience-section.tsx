import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Software Engineer",
      company: "PT Optimal Untuk Negeri",
      period: "Agustus 2025 - November 2025",
      description: "Membangun platform e-learning CBT UKOM dengan Laravel & React untuk sistem ujian berbasis komputer. Mengintegrasikan CMS untuk landing page dinamis dan fitur artikel populer dosen, sambil mengelola dokumentasi teknis dan aset IT.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Researcher Elektronika",
      company: "PT Delameta Bilano",
      period: "Januari 2023 - Februari 2025",
      description: "Mengembangkan firmware IoT berbasis C/C++ dan merancang sistem embedded untuk integrasi perangkat IoT. Melakukan troubleshooting perangkat elektronik, debugging sistem embedded, serta optimalisasi performa untuk memastikan sistem berjalan optimal.",
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "D3 Teknik Komputer",
      company: "Politeknik / Universitas",
      period: "2020 - 2023",
      description: "Fokus pada Software Engineering, Embedded Systems, dan IoT Development. Membangun fondasi kuat dalam pemrograman, sistem komputer, dan integrasi hardware-software.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-purple-50 to-white" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-purple-600 font-medium mb-2 block tracking-wide">PERJALANAN</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Pengalaman & Pencapaian</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Timeline perjalanan profesional dan pendidikan saya
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-28 md:pl-0`}>
                    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl text-gray-900 mb-1">{exp.title}</h3>
                          <p className="text-blue-600">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
