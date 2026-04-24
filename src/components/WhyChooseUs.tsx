import { motion } from 'motion/react';
import { Shield, Users, Award, Handshake } from 'lucide-react';

const advantages = [
  {
    title: 'Geniş texnika parkı',
    description: 'Hər növ tikinti və sənaye işləri üçün müasir ağır texnika və avadanlıqlarımız mövcuddur.',
    icon: Shield,
  },
  {
    title: 'Təcrübəli komanda',
    description: 'Uzun illər sektor təcrübəsinə malik peşəkar mühəndis və texniki heyətimizlə yanınızdayıq.',
    icon: Users,
  },
  {
    title: 'Yüksek standartlar',
    description: 'Keyfiyyətə nəzarət və təhlükəsizlik qaydalarına beynəlxalq standartlar səviyyəsində əməl edirik.',
    icon: Award,
  },
  {
    title: 'Etibarlı tərəfdaşlıq',
    description: 'Müştərilərimizlə etibara və dürüstlüyə əsaslanan uzunmüddətli tərəfdaşlıq əlaqələri qururuq.',
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-gray text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -mr-20 z-0" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Niyə Bizi Seçməlisiniz?</h2>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-blue/20 text-brand-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <adv.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
