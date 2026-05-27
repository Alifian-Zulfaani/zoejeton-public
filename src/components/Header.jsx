import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll to highlight nav items
  useEffect(() => {
    const sections = ['features', 'themes', 'testimonials', 'pricing', 'faq'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Fitur', href: '#features', id: 'features' },
    { label: 'Tema', href: '#themes', id: 'themes' },
    { label: 'Testimoni', href: '#testimonials', id: 'testimonials' },
    { label: 'Harga', href: '#pricing', id: 'pricing' },
    { label: 'FAQ', href: '#faq', id: 'faq' }
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface border-b-4 border-on-background">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto relative">
        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="#" className="text-headline-md font-display-lg font-black tracking-tighter text-on-surface uppercase select-none hover:text-primary transition-colors">
            ZOEJETON
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-label-bold text-label-bold uppercase tracking-wider transition-all relative py-2 px-1 hover:text-primary ${
                activeSection === item.id
                  ? 'text-primary underline decoration-4 underline-offset-8 font-black'
                  : 'text-on-surface'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-block font-label-bold text-label-bold px-6 py-2.5 brutalist-btn bg-primary text-on-primary uppercase font-bold">
            Buat Undangan
          </button>
          
          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 brutalist-border bg-surface-container-low text-on-surface hover:bg-primary-container transition-all active:translate-x-[2px] active:translate-y-[2px]"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl font-black block">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-surface border-b-4 border-on-background brutalist-shadow-lg p-6 flex flex-col gap-4 md:hidden z-50 animate-[slideDown_0.2s_ease-out]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-headline-md text-xl uppercase p-3 border-2 border-transparent hover:border-on-background hover:bg-primary-container transition-all ${
                  activeSection === item.id ? 'bg-primary-container border-on-background font-black' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 mt-2 bg-primary text-on-primary brutalist-btn uppercase font-bold text-center"
            >
              Buat Undangan
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
