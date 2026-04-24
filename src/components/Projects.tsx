import { motion } from 'motion/react';

const partners = [
  { 
    name: 'Pasha Construction', 
    description: 'Azərbaycanın ən böyük tikinti layihələri',
    logo: 'https://lh3.googleusercontent.com/d/1FV5-xPwoD8EWvZfuYSahQf8Hk24KLMFG'
  },
  { 
    name: 'Baku Expo Center', 
    description: 'Beynəlxalq sərgi mərkəzi layihəsi',
    logo: 'https://lh3.googleusercontent.com/d/1TPqGdypHtDsJJho2ynka85Q_ZJAyBXZh'
  },
  { 
    name: 'SOCAR', 
    description: 'Neft və qaz sektoru əməliyyatları',
    logo: 'https://lh3.googleusercontent.com/d/1kbqbycqnHcj9qPsJwFtV9I2Dn4LCwnYv'
  },
  { 
    name: 'Azersun Holding', 
    description: 'Sənaye və kənd təsərrüfatı təchizatı',
    logo: 'https://lh3.googleusercontent.com/d/1idargYhM_Ldtor5G81QsceP-TAMFTYW1'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Tərəfdaşlarımız və Layihələrimiz</h2>
        <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:border-brand-blue transition-all overflow-hidden p-2">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed italic">
              {partner.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
