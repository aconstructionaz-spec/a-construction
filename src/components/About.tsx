import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 text-brand-blue font-bold tracking-widest uppercase text-sm">
            <span className="w-8 h-0.5 bg-brand-blue" />
            <span>Şirkət Haqqında</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            A Construction MMC <br /> Peşəkarlıq Fəlsəfəmizdir
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              “A Construction” MMC 2015-ci ildə təsis edilmiş və Azərbaycanın tikinti, sənaye və logistika sahələrində bir çox irimiqyaslı layihələrin həyata keçirilməsində fəal iştirak edən etibarlı və peşəkar təchizatçı şirkətdir.
            </p>
            <p>
              Şirkətimiz etibarlılıq, yüksək keyfiyyət və peşəkarlıq prinsiplərinə əsaslanaraq güclü nüfuz qazanmışdır. Müştərilərimizə münasib qiymətlər, yüksək keyfiyyətli məhsullar, vaxtında çatdırılma və dayanıqlı həllər təqdim edirik.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
