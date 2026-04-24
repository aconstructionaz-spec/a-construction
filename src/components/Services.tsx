import { motion } from 'motion/react';
import { Building2, Truck, HardHat, Cog } from 'lucide-react';

const services = [
  {
    title: 'Tikinti və Təmir',
    description: 'Mülki və sənaye tikintisi, yol işləri, söküntü və təmir işlərinin yüksək səviyyədə icrası.',
    icon: Building2,
    image: 'https://lh3.googleusercontent.com/d/1NH0k_CiQROF2OFXhRudVQGODXFj-H_FK',
  },
  {
    title: 'Xüsusi və Təhlükəli Yükdaşımalar',
    description: 'Təhlükəli yüklərin daşınması, neft-qaz çənlərinin təmizlənməsi və təhlükəsizlik standartlarına əməl edilməsi.',
    icon: Truck,
    image: 'https://lh3.googleusercontent.com/d/1ebZH_GVEOU4RsUpebPF-ufdIB3KzRNUb',
  },
  {
    title: 'Tikinti Materiallarının Təchizatı',
    description: 'Qum, çınqıl, beton, armatur və digər vacib tikinti materiallarının keyfiyyətli təchizatı.',
    icon: HardHat,
    image: 'https://lh3.googleusercontent.com/d/1jg64NQfNMXhQybrckcGhXk0WAKZDb8sv',
  },
  {
    title: 'Ağır Texnika Xidmətləri',
    description: 'Qazma, yükləmə və daşıma işləri üçün müasir ağır texnika parkı və təcrübəli operatorlar.',
    icon: Cog,
    image: 'https://lh3.googleusercontent.com/d/1_CR_n4wXEkW7CqcpE3ulrkLHz0lPtU1w',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Xidmətlərimiz</h2>
        <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Geniş xidmət spektrimizlə tikinti və sənaye sahələrində ən yüksək standartlara cavab verən həllər təqdim edirik.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/10 transition-colors" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
