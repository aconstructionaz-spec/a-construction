import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      {/* Background Image Content */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
          alt="Construction Site"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-white uppercase border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            Peşəkar Tikinti Həlləri
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-tight">
            Gələcəyi <span className="text-brand-blue">Güclü Təməllər</span> Üzərində Qururuq
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A Construction MMC olaraq yüksək keyfiyyət, etibarlılıq və peşəkarlıq prinsipləri ilə Azərbaycanın ən önəmli layihələrində imzamızı atırıq.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center space-x-2 px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              <span>Bizimlə əlaqə</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-lg font-bold text-lg transition-all duration-300 border border-white/20"
            >
              Xidmətlərimiz
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-1" />
        </div>
      </motion.div>
    </section>
  );
}
