/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
