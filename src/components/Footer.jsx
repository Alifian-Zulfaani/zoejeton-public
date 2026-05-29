export default function Footer() {
  return (
    <footer className="bg-on-background text-surface border-t-4 border-on-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start mb-24">
          <div className="lg:col-span-1">
            <span className="text-4xl font-display-lg font-black uppercase mb-8 block text-primary-fixed">Zoejeton</span>
            <p className="font-body-md text-surface-variant mb-10 max-w-xs leading-relaxed">
              Zoejeton menghadirkan undangan pernikahan digital premium dengan estetika neo-brutalist editorial. Kami menciptakan kenangan digital yang berkesan untuk momen bersejarah Anda.
            </p>
            <div className="flex gap-4">
              <a className="w-14 h-14 border-4 border-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a className="w-14 h-14 border-4 border-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#" aria-label="Instagram">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a className="w-14 h-14 border-4 border-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#" aria-label="Email">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-label-bold text-lg uppercase mb-8 text-primary-fixed">Layanan</h5>
            <ul className="space-y-6">
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#features">Fitur Lengkap</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#themes">Tema Premium</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#pricing">Daftar Harga</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#">Affiliate <span className="bg-primary text-on-primary px-2 py-0.5 text-xs ml-2">10%</span></a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-bold text-lg uppercase mb-8 text-primary-fixed">Perusahaan</h5>
            <ul className="space-y-6">
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#">Tentang Kami</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#">Blog Terbaru</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-bold text-lg uppercase mb-8 text-primary-fixed">Bantuan</h5>
            <ul className="space-y-6">
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#faq">FAQ</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#">Panduan User</a></li>
              <li><a className="text-surface-variant hover:text-primary-fixed transition-colors uppercase font-label-bold" href="#">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>
        
        {/* Watermark Section (Only top half of the letters visible) */}
        <div className="relative overflow-hidden h-[8.1vw] xl:h-[105px] w-full mt-12">
          <span className="text-[16.2vw] xl:text-[210px] font-display-lg font-black uppercase leading-none opacity-10 select-none pointer-events-none absolute top-0 left-0">
            ZOEJETON
          </span>
        </div>
        
        {/* Border / Line & Copyright */}
        <div className="border-t-4 border-surface/20 pt-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <p className="font-label-bold text-surface-variant uppercase mb-4 md:mb-0">
              © 2026 Zoejeton. Brutally crafted for beautiful milestones.
            </p>
            <p className="font-label-bold text-surface-variant uppercase">
              Made with Passion in ID
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
