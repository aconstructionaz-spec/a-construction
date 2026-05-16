import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center transition-transform hover:scale-105 active:scale-95 duration-300">
              <img 
                src="https://lh3.googleusercontent.com/d/1i_B0qfP6BBUevY9by6BlfAC0t9VY7py1" 
                alt="A Construction Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-gray-400 leading-relaxed text-sm">
              2015-ci ildən bəri Azərbaycanın tikinti, sənaye və logistika sahələrində ən yüksək standartlara cavab verən həllər təqdim edirik.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Sürətli Keçid</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-brand-blue transition-colors">Haqqımızda</a></li>
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Xidmətlər</a></li>
              <li><a href="#projects" className="hover:text-brand-blue transition-colors">Layihələr</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Əlaqə</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Xidmətlərimiz</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Tikinti və Təmir</li>
              <li>Xüsusi Yükdaşımalar</li>
              <li>Material Təchizatı</li>
              <li>Ağır Texnika</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Əlaqə Vasitələri</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-brand-blue" />
                <a href="tel:+994102416565" className="hover:text-white transition-colors">+994 10 241 65 65</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-brand-blue" />
                <a href="tel:+994502551963" className="hover:text-white transition-colors">+994 50 255 19 63</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-brand-blue" />
                <span>info@a-construction.az</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} A Construction MMC. Bütün hüquqlar qorunur.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Məxfilik Siyasəti</a>
            <a href="#" className="hover:text-white transition-colors">İstifadə Şərtləri</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
