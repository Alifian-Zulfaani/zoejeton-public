import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Themes from './components/Themes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Themes />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
