import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Figma, Database, Smartphone, Globe, Zap } from 'lucide-react';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Database,
      title: "Backend & Database",
      items: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Figma,
      title: "UI/UX Design",
      items: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      items: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-orange-400 to-red-400"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      items: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      color: "from-yellow-400 to-amber-400"
    },
    {
      icon: Zap,
      title: "Tools & Others",
      items: ["Git", "Docker", "CI/CD", "Agile"],
      color: "from-indigo-400 to-violet-400"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-blue-50 to-white" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-purple-600 font-medium mb-2 block tracking-wide">KEAHLIAN</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Toolkit Saya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kombinasi teknologi dan tools yang saya gunakan untuk mewujudkan ide menjadi realitas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl text-gray-900 mb-4">{skill.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <p className="text-gray-600 mb-2">Selalu belajar hal baru setiap hari</p>
              <p className="text-2xl text-gray-900">📚 Continuous Learning</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
