import { motion } from 'motion/react';

const products = [
  { 
    name: 'Qum', 
    image: 'https://lh3.googleusercontent.com/d/GOOG_DRIVE_ID_FOR_QUM',
    description: 'Yüksək keyfiyyətli tikinti qumu'
  },
  { 
    name: 'Şeben', 
    image: 'https://lh3.googleusercontent.com/d/GOOG_DRIVE_ID_FOR_SEBEN',
    description: 'Müxtəlif fraksiyalı qırmadaş (şeben)'
  },
  { 
    name: 'Asept', 
    image: 'https://lh3.googleusercontent.com/d/GOOG_DRIVE_ID_FOR_ASEPT',
    description: 'Tikinti üçün izolyasiya və ya asfalt materialları'
  },
  { 
    name: 'Çınqıl', 
    image: 'https://lh3.googleusercontent.com/d/GOOG_DRIVE_ID_FOR_CINQIL',
    description: 'Təbiəıt çınqılı'
  },
  { 
    name: 'Beton', 
    image: 'https://lh3.googleusercontent.com/d/GOOG_DRIVE_ID_FOR_BETON',
    description: 'Yüksək markalı beton qarışıqları'
  },
  { 
    name: 'Armatur', 
    image: 'https://lh3.googleusercontent.com/d/GOOG_DRIVE_ID_FOR_ARMATUR',
    description: 'Polad armatur və metal konstruksiyalar'
  }
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4 text-brand-blue font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-0.5 bg-brand-blue" />
              <span>Məhsullarımız</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Yüksək Keyfiyyətli İnert Materiallar
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Tikinti və infrastruktur layihələri üçün yüksək keyfiyyətli inert materialların satışı və operativ təchizatını həyata keçiririk.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg italic border-l-4 border-brand-blue pl-6">
              Keyfiyyətə nəzarət, münasib qiymətlər və peşəkar yanaşma şirkətimizin əsas üstünlüklərindəndir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Təklif etdiyimiz məhsullar:</h3>
            <div className="flex flex-wrap gap-3">
              {products.map((product) => (
                <span 
                  key={product.name}
                  className="px-6 py-3 bg-gray-50 text-gray-700 rounded-full font-bold border border-gray-100 hover:border-brand-blue hover:text-brand-blue transition-all cursor-default"
                >
                  {product.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...products, ...products].map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="flex-shrink-0 w-[300px] flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-500 italic whitespace-normal text-center">
                  {product.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
