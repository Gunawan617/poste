import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: Mail, label: "Email", value: "@Gunawan", href: "mailto:gunawantegal3@gmail.com", color: "from-red-500 to-orange-500" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/Gunawan", href: "https://linkedin.com", color: "from-blue-500 to-cyan-500" },
    { icon: Github, label: "GitHub", value: "@Gunawan617", href: "https://github.com/Gunawan617", color: "from-gray-600 to-gray-800" },
    { icon: Twitter, label: "Twitter", value: "@Gunawan", href: "https://twitter.com", color: "from-blue-400 to-blue-600" }
  ];

  const contactInfo = [
    { icon: MapPin, text: "Jakarta, Indonesia" },
    { icon: Phone, text: "+62 89510735378" },
    { icon: Mail, text: "gunawantegal3@gmail.com" }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-blue-600 font-medium mb-2 block tracking-wide">HUBUNGI SAYA</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Mari Berkolaborasi!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Punya project menarik atau sekadar ingin ngobrol? Saya selalu terbuka untuk peluang baru dan diskusi kreatif
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white">
                <h3 className="text-2xl text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-2xl">
                        <info.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{info.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl text-gray-900">Temukan Saya Di</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-white hover:-translate-y-1"
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${social.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-gray-900 mb-1">{social.label}</p>
                      <p className="text-xs text-gray-500">{social.value}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white">
                <h3 className="text-2xl text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Nama Anda</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Pesan</label>
                    <textarea
                      rows={5}
                      placeholder="Ceritakan tentang project atau ide Anda..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-white">
              <p className="text-gray-600">
                © 2026 Gunawan. Dibuat dengan <span className="text-red-500">❤️</span> dan React
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
