import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4 text-brand-blue font-bold tracking-widest uppercase text-sm">
            <span className="w-8 h-0.5 bg-brand-blue" />
            <span>Bizimlə Əlaqə</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Yeni İmkanlar Üçün Bizə Müraciət Edin
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Hər hansı bir sualınız və ya layihə təklifiniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin. Komandamız sizə kömək etməyə hazırdır.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            <a 
              href="tel:+994102416565" 
              className="flex flex-col items-center space-y-4 group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg shadow-blue-500/10">
                <Phone size={28} />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Telefon</div>
                <div className="text-lg font-bold text-gray-900">+994 10 241 65 65</div>
              </div>
            </a>
            <a 
              href="mailto:info@a-construction.az" 
              className="flex flex-col items-center space-y-4 group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg shadow-blue-500/10">
                <Mail size={28} />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">E-poçt</div>
                <div className="text-lg font-bold text-gray-900 truncate max-w-full">info@a-construction.az</div>
              </div>
            </a>
            <div className="flex flex-col items-center space-y-4 p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/10">
                <MapPin size={28} />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Ünvan</div>
                <div className="text-lg font-bold text-gray-900">Bakı şəhəri, Azərbaycan</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://wa.me/994102416565"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-green-600/30 hover:-translate-y-1 active:translate-y-0"
            >
              <MessageCircle size={28} />
              <span>Layihəniz Üçün Bizə Müraciət Edin</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
