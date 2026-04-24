import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoUrl = `mailto:a.construction.az@gmail.com?subject=Yeni müraciət: ${name}&body=Ad: ${name}%0D%0AE-poçt: ${email}%0D%0A%0D%0AMesaj:%0D%0A${message}`;
    
    window.location.href = mailtoUrl;
    alert('Mesajınız üçün e-poçt tətbiqi açılır. Təşəkkür edirik!');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-4 text-brand-blue font-bold tracking-widest uppercase text-sm">
            <span className="w-8 h-0.5 bg-brand-blue" />
            <span>Bizimlə Əlaqə</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Layihəniz Üçün Bizə Müraciət Edin
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Hər hansı bir sualınız və ya layihə təklifiniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin. Komandamız sizə kömək etməyə hazırdır.
          </p>

          <div className="space-y-6">
            <a 
              href="tel:+994502551963" 
              className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Telefon</div>
                <div className="text-xl font-bold text-gray-900">+994 50 255 19 63</div>
              </div>
            </a>
            <a 
              href="mailto:info@a-construction.az" 
              className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">E-poçt</div>
                <div className="text-xl font-bold text-gray-900">info@a-construction.az</div>
              </div>
            </a>
            <div className="flex items-center space-x-4 p-4 rounded-xl">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Ünvan</div>
                <div className="text-xl font-bold text-gray-900">Bakı şəhəri, Azərbaycan</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Adınız</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Məs: Əli Əliyev"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-poçtunuz</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Məs: ali@example.com"
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Layihəniz haqqında qısa məlumat..."
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-8 py-5 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-500/20 group"
            >
              <span>Mesajı Göndər</span>
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
