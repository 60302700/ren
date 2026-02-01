import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'How It Works', id: 'how-it-works' },
      { name: 'Invest', id: 'invest' },
      { name: 'Contact', id: 'contact' },
    ],
    resources: [
      { name: 'Blog', id: 'blog' },
      { name: 'Help Center', id: 'help' },
      { name: 'Investment Guide', id: 'guide' },
      { name: 'Sharia Board', id: 'sharia' },
    ],
    legal: [
      { name: 'Terms of Service', id: 'terms' },
      { name: 'Privacy Policy', id: 'privacy' },
      { name: 'Risk Disclosure', id: 'risk' },
      { name: 'Licenses', id: 'licenses' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                  Tharwa Capital
                </h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering middle-class investors across the GCC with Sharia-compliant,
                accessible investment opportunities. Build your wealth the ethical way.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[#4FAEFF]" />
                  <span>tharwacapitalreach@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[#4FAEFF]" />
                  <span>+974 70905211</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#4FAEFF]" />
                  <span>Doha, Qatar</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#A6D1FF] hover:to-[#4FAEFF] transition-all"
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-[#4FAEFF] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#4FAEFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#4FAEFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for weekly investment opportunities and insights
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Tharwa Capital. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Made with Support of QFTH Incubator and QDB
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span>Regulated by DFSA</span>
              <span>•</span>
              <span>Licensed in UAE</span>
              <span>•</span>
              <span>Sharia Certified</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl"
        >
          <p className="text-sm text-yellow-200">
            <strong>Investment Disclaimer:</strong> All investments carry risk. Past performance
            is not indicative of future results. Please read all investment documentation
            carefully and consult with a financial advisor before making investment decisions.
            Tharwa Capital does not guarantee returns and investors may lose some or all of
            their invested capital.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}