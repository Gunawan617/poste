import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cbtScreenshot1 from '../../asset/web/image.png';
import cbtScreenshot2 from '../../asset/web/image (1).png';
import cbtScreenshot3 from '../../asset/web/image (2).png';
import cbtScreenshot4 from '../../asset/web/WhatsApp Image 2026-04-20 at 2.42.24 AM.jpeg';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentScreenshots, setCurrentScreenshots] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      title: "CBT UKOM E-Learning Platform",
      description: "Platform ujian berbasis komputer lengkap dengan bank soal, timer real-time, video pembelajaran, sistem penilaian otomatis, dan laporan hasil tryout untuk persiapan UKOM",
      tags: ["Laravel", "React", "MySQL", "Video Streaming"],
      screenshots: [
        cbtScreenshot1,
        cbtScreenshot2,
        cbtScreenshot3,
        cbtScreenshot4
      ],
      image: cbtScreenshot1,
      github: "",
      demo: "",
      isPrivate: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Human Resource Management System",
      description: "Sistem manajemen SDM lengkap dengan fitur absensi, payroll, cuti karyawan, dan performance tracking untuk efisiensi HR",
      tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxocnxlbnwxfHx8fDE3Njc4MDk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Gunawan617/HumanResource",
      demo: "",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Men Parfume - E-Commerce Premium",
      description: "Platform e-commerce wewangian premium eksklusif dengan katalog produk, shopping cart, dan sistem pembayaran terintegrasi",
      tags: ["Laravel", "MySQL", "Tailwind CSS", "Payment Gateway"],
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbHV4dXJ5fGVufDF8fHx8MTc2NzgwOTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      github: "",
      demo: "https://parfumes.edgeone.dev/",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Scholar System - Platform Artikel Ilmiah",
      description: "Sistem web artikel ilmiah berbasis Laravel 11 fullstack dengan React + Filament yang terindeks Google Scholar. Panel admin untuk dosen, upload PDF dengan metadata, komentar nested, dan SEO optimized",
      tags: ["Laravel 11", "React", "Filament", "Google Scholar", "SEO"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHBhcGVyfGVufDF8fHx8MTc2NzgwOTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/Gunawan617/ArtikelJurnal",
      demo: "",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IoT Firmware Development",
      description: "Pengembangan firmware untuk perangkat IoT dengan komunikasi sensor, data logging, dan remote monitoring berbasis embedded C/C++",
      tags: ["C/C++", "Arduino", "ESP32", "MQTT"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2V8ZW58MXx8fHwxNzY3ODA5NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      github: "",
      demo: "",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CMS Landing Page System",
      description: "Content Management System untuk landing page dinamis dengan editor WYSIWYG, media management, dan SEO optimization",
      tags: ["Laravel", "React", "TinyMCE", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbXMlMjBjb250ZW50fGVufDF8fHx8MTc2NzgwOTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      github: "",
      demo: "",
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "Embedded System Integration",
      description: "Integrasi sistem embedded untuk monitoring dan kontrol perangkat elektronik dengan interface web-based dashboard",
      tags: ["C/C++", "Python", "React", "WebSocket"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXR8ZW58MXx8fHwxNzY3ODA5NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      github: "",
      demo: "",
      color: "from-red-500 to-pink-500"
    }
  ];

  // Auto-rotate screenshots for projects with multiple images
  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    
    projects.forEach((project, index) => {
      if (project.screenshots && project.screenshots.length > 1) {
        const interval = setInterval(() => {
          setCurrentScreenshots(prev => ({
            ...prev,
            [index]: ((prev[index] || 0) + 1) % project.screenshots!.length
          }));
        }, 3000); // Change image every 3 seconds
        intervals.push(interval);
      }
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const getProjectImage = (project: typeof projects[0], index: number) => {
    if (project.screenshots && project.screenshots.length > 0) {
      return project.screenshots[currentScreenshots[index] || 0];
    }
    return project.image;
  };

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
                      src={getProjectImage(project, index)}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {project.isPrivate && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                        <Lock className="w-3.5 h-3.5 text-gray-600" />
                        <span className="text-xs font-medium text-gray-700">Private Project</span>
                      </div>
                    )}

                    {project.screenshots && project.screenshots.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                        {project.screenshots.map((_, screenshotIndex) => (
                          <div
                            key={screenshotIndex}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              (currentScreenshots[index] || 0) === screenshotIndex
                                ? 'w-6 bg-white'
                                : 'w-1.5 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedProject === index ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                    >
                      {project.isPrivate ? (
                        <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
                          <p className="text-sm text-gray-700 font-medium">Confidential Client Project</p>
                        </div>
                      ) : (
                        <>
                          {project.demo && (
                            <a 
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-700" />
                            </a>
                          )}
                          {project.github && (
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                            >
                              <Github className="w-5 h-5 text-gray-700" />
                            </a>
                          )}
                        </>
                      )}
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
