export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface-container-low px-gutter border-b-4 border-on-background">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-display-lg text-headline-lg uppercase mb-4">Fitur Lengkap</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">Semua yang Anda butuhkan untuk undangan digital yang praktis dan elegan.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 brutalist-border bg-on-background">
          <div className="bg-surface p-10 border-b-4 lg:border-b-0 md:border-r-4 border-on-background hover:bg-primary-container transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">qr_code_2</span>
            <h3 className="font-headline-md uppercase mb-4">Check-in QR</h3>
            <p className="font-body-md text-on-surface-variant">Tamu scan QR saat datang, kehadiran langsung tercatat otomatis di dashboard.</p>
          </div>
          <div className="bg-surface p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-on-background hover:bg-secondary-fixed transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">payments</span>
            <h3 className="font-headline-md uppercase mb-4">Amplop Digital</h3>
            <p className="font-body-md text-on-surface-variant">Tamu bisa kirim kado langsung lewat undangan. Praktis dan tetap sopan.</p>
          </div>
          <div className="bg-surface p-10 border-b-4 md:border-b-0 md:border-r-4 border-on-background hover:bg-primary-fixed transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">event_available</span>
            <h3 className="font-headline-md uppercase mb-4">RSVP Otomatis</h3>
            <p className="font-body-md text-on-surface-variant">Konfirmasi kehadiran langsung masuk ke sistem tanpa perlu rekap manual.</p>
          </div>
          <div className="bg-surface p-10 hover:bg-tertiary-fixed transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">map</span>
            <h3 className="font-headline-md uppercase mb-4">Navigasi Maps</h3>
            <p className="font-body-md text-on-surface-variant">Integrasi Google Maps memudahkan tamu menemukan lokasi acara Anda.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 brutalist-border border-t-0 bg-on-background">
          <div className="bg-surface p-10 border-b-4 lg:border-b-0 md:border-r-4 border-on-background hover:bg-surface-container-highest transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">music_note</span>
            <h3 className="font-headline-md uppercase mb-4">Musik Latar</h3>
            <p className="font-body-md text-on-surface-variant">Tambahkan lagu favorit untuk membangun suasana saat tamu membuka undangan.</p>
          </div>
          <div className="bg-surface p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-on-background hover:bg-surface-container-highest transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">timer</span>
            <h3 className="font-headline-md uppercase mb-4">Countdown</h3>
            <p className="font-body-md text-on-surface-variant">Hitung mundur hari bahagia Anda untuk meningkatkan antusiasme tamu.</p>
          </div>
          <div className="bg-surface p-10 border-b-4 md:border-b-0 md:border-r-4 border-on-background hover:bg-surface-container-highest transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">chat</span>
            <h3 className="font-headline-md uppercase mb-4">Ucapan & Doa</h3>
            <p className="font-body-md text-on-surface-variant">Kolom pesan digital bagi tamu untuk memberikan doa restu terbaik mereka.</p>
          </div>
          <div className="bg-surface p-10 hover:bg-surface-container-highest transition-colors group">
            <span className="material-symbols-outlined text-5xl mb-6 block group-hover:scale-110 transition-transform">devices</span>
            <h3 className="font-headline-md uppercase mb-4">Mobile Ready</h3>
            <p className="font-body-md text-on-surface-variant">Tampilan sempurna dan responsif di semua perangkat tamu Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
