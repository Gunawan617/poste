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
      title: "Senior Frontend Developer",
      company: "TechCorp Indonesia",
      period: "2022 - Sekarang",
      description: "Memimpin tim frontend untuk mengembangkan aplikasi enterprise dengan React dan TypeScript. Meningkatkan performa aplikasi hingga 60%.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Mengembangkan berbagai website dan aplikasi untuk klien dari berbagai industri. Fokus pada responsive design dan user experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Computer Science",
      company: "Universitas Indonesia",
      period: "2016 - 2020",
      description: "Lulus dengan IPK 3.8. Fokus pada Software Engineering dan Human-Computer Interaction.",
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "UI/UX Designer Intern",
      company: "Startup Studio",
      period: "2019 - 2020",
      description: "Merancang interface untuk berbagai aplikasi mobile dan web. Melakukan user research dan usability testing.",
      color: "from-orange-500 to-red-500"
    },
    {
      type: "achievement",
      icon: Award,
      title: "Hackathon Winner",
      company: "National Tech Competition",
      period: "2019",
      description: "Juara 1 hackathon nasional dengan membuat aplikasi edukasi berbasis AI untuk anak-anak.",
      color: "from-yellow-500 to-amber-500"
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
