import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  MessageSquare,
  Star,
  Sparkles,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'tharwacapitalreach@gmail.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+974 70905211',
      subdetails: 'Mon-Fri, 9AM-6PM GST',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'Doha, Qatar',
      subdetails: 'State of Qatar',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Click on "Get Started" or "Download App" button, fill in your details, and complete the KYC verification process. Your account will be ready within 24-48 hours.',
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment varies by opportunity but starts from as low as $250, making it accessible for middle-class investors.',
    },
    {
      question: 'How are investments verified as Sharia-compliant?',
      answer: 'Every investment opportunity is reviewed and certified by our independent Sharia board consisting of renowned Islamic scholars before being listed on our platform.',
    },
    {
      question: 'Can I withdraw my investment anytime?',
      answer: 'Investment terms vary by opportunity. Some investments have lock-in periods while others offer more flexibility. All details are clearly stated before you invest.',
    },
    {
      question: 'What fees does Tharwa Capital charge?',
      answer: 'We charge a transparent management fee ranging from 0.5% to 2% annually depending on the investment type. There are no hidden fees.',
    },
    {
      question: 'How do I receive returns on my investments?',
      answer: 'Returns are automatically distributed to your registered bank account according to the investment schedule. You can track all distributions in your dashboard.',
    },
    {
      question: 'Is my investment insured?',
      answer: 'While investments carry inherent risks and are not government-insured, we conduct thorough due diligence and only list vetted opportunities with detailed risk assessments.',
    },
    {
      question: 'Can I invest from outside the GCC?',
      answer: 'Currently, we only accept investors from GCC countries. We are working on expanding to other regions in the near future.',
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: 'hover:text-pink-600' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8c] to-[#1a2642]">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4FAEFF] rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A6D1FF] rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4FAEFF]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Feedback Widget Section - NOW AT TOP */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] rounded-full blur-xl opacity-50"
                />
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#4FAEFF] to-[#A6D1FF] rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-[#4FAEFF]/50">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-tight"
            >
              Give Us Your
              <br />
              <span className="bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] bg-clip-text text-transparent">
                Feedback
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Your feedback helps us improve our platform and serve you better
            </motion.p>
          </motion.div>

          {feedbackSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center shadow-2xl shadow-[#4FAEFF]/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-400/50"
                >
                  <CheckCircle className="w-14 h-14 text-white" />
                </motion.div>
              </motion.div>
              
              <h3 className="text-3xl text-white mb-4">Thank You!</h3>
              <p className="text-xl text-gray-300 mb-6">
                Your feedback has been received and we truly appreciate your input
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFeedbackSubmitted(false);
                  setFeedback('');
                  setRating(0);
                }}
                className="px-8 py-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-xl hover:bg-white/30 transition-colors shadow-lg shadow-white/10"
              >
                Submit Another Feedback
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-[#4FAEFF]/20"
            >
              {/* Star Rating */}
              <div className="mb-8">
                <label className="block text-white text-lg mb-4 text-center">
                  How would you rate your experience?
                </label>
                <div className="flex items-center justify-center gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-10 h-10 transition-all ${
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                            : 'text-white/30 hover:text-white/50'
                        }`}
                      />
                    </motion.button>
                  ))}
                </div>
                {rating > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-white/70 mt-3"
                  >
                    {rating === 5 && '🌟 Excellent!'}
                    {rating === 4 && '😊 Great!'}
                    {rating === 3 && '👍 Good'}
                    {rating === 2 && '😐 Fair'}
                    {rating === 1 && '😞 Needs Improvement'}
                  </motion.p>
                )}
              </div>

              {/* Feedback Textarea */}
              <div className="mb-8">
                <label htmlFor="feedback" className="block text-white text-lg mb-4">
                  Share your thoughts with us
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={8}
                    placeholder="Tell us what you love, what we can improve, or any suggestions you have..."
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF]/50 transition-all resize-none shadow-inner"
                  />
                  
                  {/* Floating Sparkles */}
                  {feedback.length > 0 && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <Sparkles className="w-5 h-5 text-[#4FAEFF] drop-shadow-[0_0_10px_rgba(79,174,255,0.5)]" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-4 right-4 text-white/50 text-sm"
                      >
                        {feedback.length} characters
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={() => {
                  if (feedback.trim()) {
                    setFeedbackSubmitted(true);
                  }
                }}
                disabled={!feedback.trim()}
                whileHover={feedback.trim() ? { scale: 1.02, y: -2 } : {}}
                whileTap={feedback.trim() ? { scale: 0.98 } : {}}
                className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 transition-all ${
                  feedback.trim()
                    ? 'bg-gradient-to-r from-[#4FAEFF] to-[#A6D1FF] text-white shadow-lg shadow-[#4FAEFF]/50 hover:shadow-xl hover:shadow-[#4FAEFF]/60'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                <Send className="w-6 h-6" />
                <span className="text-lg">Submit Feedback</span>
              </motion.button>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <p className="text-white/60 text-sm">
                  💡 Your feedback is anonymous and will be used to improve our services
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-4 text-white text-5xl sm:text-6xl lg:text-7xl">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions? We're here to help you on your investment journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-2xl shadow-[#4FAEFF]/20"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-[#4FAEFF]/50"
                >
                  {info.icon}
                </motion.div>
                <h3 className="mb-3 text-white">{info.title}</h3>
                <p className="text-gray-200 mb-1">{info.details}</p>
                <p className="text-sm text-gray-400">{info.subdetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-white">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-8 text-center shadow-2xl shadow-emerald-400/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-400/50"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-emerald-300 mb-2">Message Sent!</h3>
                  <p className="text-emerald-200/80">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF]/50 transition-all shadow-inner"
                      placeholder="Ahmed Al-Mansoori"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF]/50 transition-all shadow-inner"
                      placeholder="ahmed@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF]/50 transition-all shadow-inner"
                      placeholder="Investment Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 focus:border-[#4FAEFF]/50 transition-all resize-none shadow-inner"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#4FAEFF]/50 hover:shadow-xl hover:shadow-[#4FAEFF]/60 transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Support Hours */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-[#4FAEFF]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] rounded-xl flex items-center justify-center shadow-lg shadow-[#4FAEFF]/50">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white">Support Hours</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-br from-[#A6D1FF] to-[#4FAEFF] rounded-3xl p-8 text-white shadow-2xl shadow-[#4FAEFF]/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-white">Need Quick Help?</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Chat with our AI assistant or connect with a support specialist instantly
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-white text-[#4FAEFF] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Start Live Chat
                </motion.button>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-[#4FAEFF]/20">
                <h3 className="mb-6 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-white transition-colors hover:bg-white/20 shadow-lg shadow-white/5"
                    >
                      {social.icon}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-[#4FAEFF]/20">
                <h3 className="mb-4 text-white">Newsletter</h3>
                <p className="text-gray-300 mb-6">
                  Get weekly investment opportunities and market insights
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 backdrop-blur border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4FAEFF]/50 shadow-inner"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] text-white rounded-xl shadow-lg shadow-[#4FAEFF]/50"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-[#4FAEFF]/20"
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <span className="text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 relative bg-gradient-to-r from-[#A6D1FF] to-[#4FAEFF] shadow-2xl shadow-[#4FAEFF]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">Download Our Mobile App</h2>
            <p className="text-xl text-white/90 mb-8">
              Manage your investments on the go with our mobile app
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#4FAEFF] rounded-full shadow-xl hover:shadow-2xl transition-shadow"
              >
                Download for iOS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full border-2 border-white shadow-lg hover:shadow-xl transition-shadow"
              >
                Download for Android
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}