export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-gutter bg-surface-container-low border-b-4 border-on-background">
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-primary text-on-primary px-3 py-1 font-label-caps text-xs font-bold uppercase mb-4 tracking-wider">
            Investasi Kebahagiaan
          </div>
          <h2 className="font-display-lg text-headline-lg uppercase mb-4">PILIHAN PAKET ZOEJETON</h2>
          <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto">Pilih paket terbaik yang sesuai dengan kebutuhan hari bahagia Anda.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* Plan 1: Standard */}
          <div className="brutalist-card brutalist-card-hover bg-surface p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-label-bold text-secondary uppercase mb-2 tracking-wider">Standard</h3>
              <p className="text-xs text-on-surface-variant mb-6">Cocok untuk uji coba fitur & desain dasar.</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display-lg text-4xl lg:text-display-md font-black leading-none">Gratis</span>
              </div>
              <ul className="space-y-4 mb-10 border-t-2 border-surface-container-highest pt-6">
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Maksimal 20 Tamu Undangan
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Tema Undangan Standar
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Masa Aktif Selama 7 Hari
                </li>
              </ul>
            </div>
            <button className="w-full py-4 bg-surface text-on-surface font-label-bold uppercase brutalist-btn text-sm font-bold">
              Mulai Uji Coba
            </button>
          </div>

          {/* Plan 2: Pro/Premium (Highlighted) */}
          <div className="brutalist-card brutalist-card-hover bg-primary-container p-10 flex flex-col justify-between relative md:-translate-y-4 md:scale-105 z-10">
            {/* Best Seller Stamp */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-5 py-1.5 font-label-bold text-xs uppercase tracking-widest brutalist-border rotate-[-2deg]">
              Paling Populer
            </div>
            
            <div className="pt-2">
              <h3 className="font-label-bold text-primary uppercase mb-2 tracking-wider font-black">Premium</h3>
              <p className="text-xs text-on-surface-variant mb-6">Pilihan terlengkap untuk pesta pernikahan Anda.</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display-lg text-4xl lg:text-display-md font-black leading-none text-primary">Rp 149k</span>
                <span className="font-label-bold text-xs uppercase text-primary">/ acara</span>
              </div>
              
              <ul className="space-y-4 mb-10 border-t-2 border-primary/20 pt-6">
                <li className="flex items-center gap-3 font-body-md text-sm font-bold text-primary">
                  <span className="material-symbols-outlined font-black text-lg">check_circle</span>
                  Tamu Undangan Tanpa Batas
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm font-bold text-primary">
                  <span className="material-symbols-outlined font-black text-lg">check_circle</span>
                  Semua Akses Tema Premium
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm font-bold text-primary">
                  <span className="material-symbols-outlined font-black text-lg">check_circle</span>
                  Musik Latar & Upload Galeri Foto
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm font-bold text-primary">
                  <span className="material-symbols-outlined font-black text-lg">check_circle</span>
                  Bebas Watermark Zoejeton
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm font-bold text-primary">
                  <span className="material-symbols-outlined font-black text-lg">check_circle</span>
                  Dashboard RSVP & RSVP Real-time
                </li>
              </ul>
            </div>
            <button className="w-full py-4 bg-primary text-on-primary font-label-bold uppercase brutalist-btn text-sm font-bold">
              Pilih Paket Premium
            </button>
          </div>

          {/* Plan 3: Expert/Exclusive */}
          <div className="brutalist-card brutalist-card-hover bg-surface p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-label-bold text-secondary uppercase mb-2 tracking-wider">Eksklusif</h3>
              <p className="text-xs text-on-surface-variant mb-6">Bagi Anda yang menginginkan sentuhan personal & kustom.</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display-lg text-4xl lg:text-display-md font-black leading-none">Rp 399k</span>
                <span className="font-label-bold text-xs uppercase text-on-surface-variant">/ bundle</span>
              </div>
              <ul className="space-y-4 mb-10 border-t-2 border-surface-container-highest pt-6">
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Semua Fitur Paket Premium
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Custom Subdomain (e.g. anda.zoejeton.com)
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Prioritas Support Desainer 24/7
                </li>
                <li className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined font-black text-secondary text-lg">check_circle</span>
                  Integrasi Buku Tamu QR Khusus
                </li>
              </ul>
            </div>
            <button className="w-full py-4 bg-surface text-on-surface font-label-bold uppercase brutalist-btn text-sm font-bold">
              Pilih Paket Eksklusif
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
