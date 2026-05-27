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
                <span className="material-symbols-outlined text-2xl font-black">facebook</span>
              </a>
              <a className="w-14 h-14 border-4 border-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#" aria-label="Instagram">
                <span className="material-symbols-outlined text-2xl font-black">camera</span>
              </a>
              <a className="w-14 h-14 border-4 border-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#" aria-label="Email">
                <span className="material-symbols-outlined text-2xl font-black">alternate_email</span>
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
        
        {/* Watermark Logo & Copyright */}
        <div className="relative overflow-hidden pt-12 border-t-4 border-surface/20">
          <span className="text-[80px] md:text-[180px] lg:text-[240px] font-display-lg font-black uppercase leading-none opacity-10 select-none pointer-events-none absolute -bottom-10 left-0">
            ZOEJETON
          </span>
          <div className="flex flex-col md:flex-row justify-between items-end relative z-10">
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
