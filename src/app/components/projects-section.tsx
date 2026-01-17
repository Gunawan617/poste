import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur real-time inventory dan payment gateway integration",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3Njc3NDM5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Task Management App",
      description: "Aplikasi produktivitas dengan drag-and-drop interface dan kolaborasi tim real-time",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      image: "https://images.unsplash.com/photo-1767473907132-9e52351d023a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhc3RlbHxlbnwxfHx8fDE3Njc4Mjk5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard analytics dengan visualisasi data interaktif dan custom reporting",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3Njc3NDM5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Media App",
      description: "Platform social media dengan fitur posting, messaging, dan content discovery",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "https://images.unsplash.com/photo-1767473907132-9e52351d023a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhc3RlbHxlbnwxfHx8fDE3Njc4Mjk5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan video streaming dan progress tracking",
      tags: ["Next.js", "Prisma", "AWS", "Stripe"],
      image: "https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3Njc3NDM5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop website builder untuk membuat portfolio profesional dengan mudah",
      tags: ["React", "TypeScript", "Tailwind", "Vercel"],
      image: "https://images.unsplash.com/photo-1767473907132-9e52351d023a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhc3RlbHxlbnwxfHx8fDE3Njc4Mjk5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-purple-50" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-blue-600 font-medium mb-2 block tracking-wide">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Karya Terpilih</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa project yang telah saya kerjakan dengan penuh dedikasi dan kreativitas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setSelectedProject(index)}
                onHoverEnd={() => setSelectedProject(null)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden h-64">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedProject === index ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                    >
                      <button className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                        <Github className="w-5 h-5 text-gray-700" />
                      </button>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs hover:bg-gray-100 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
