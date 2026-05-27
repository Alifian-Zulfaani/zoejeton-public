export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden border-b-4 border-on-background bg-surface">
      <div className="max-w-container-max mx-auto px-gutter mb-16">
        <h2 className="font-display-lg text-headline-lg uppercase text-center">Kisah Bahagia Mereka</h2>
      </div>
      <div className="relative group">
        <div className="animate-scroll flex gap-8 py-4 px-4">
          <div className="brutalist-card bg-surface-container-lowest p-8 w-[400px] flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">format_quote</span>
            <p className="font-body-lg mb-8 italic">"Hemat 5 juta dari budget cetak undangan! Uangnya bisa buat honeymoon. Win-win solution banget."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-fixed brutalist-border flex items-center justify-center font-bold">FA</div>
              <div>
                <p className="font-label-bold">Fajar & Ayu</p>
                <p className="text-sm text-on-surface-variant">Yogyakarta</p>
              </div>
            </div>
          </div>
          <div className="brutalist-card bg-surface-container-lowest p-8 w-[400px] flex-shrink-0">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4">format_quote</span>
            <p className="font-body-lg mb-8 italic">"Hasilnya sangat elegan dan eksklusif! Kirim ke ratusan tamu via WhatsApp jadi jauh lebih berkesan."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-fixed brutalist-border flex items-center justify-center font-bold">AS</div>
              <div>
                <p className="font-label-bold">Andi & Sari</p>
                <p className="text-sm text-on-surface-variant">Jakarta</p>
              </div>
            </div>
          </div>
          <div className="brutalist-card bg-surface-container-lowest p-8 w-[400px] flex-shrink-0">
            <span className="material-symbols-outlined text-tertiary text-5xl mb-4">format_quote</span>
            <p className="font-body-lg mb-8 italic">"Bisa tau real-time siapa aja yang udah buka undangan dan konfirmasi hadir. Gampang atur katering!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary-fixed brutalist-border flex items-center justify-center font-bold">BR</div>
              <div>
                <p className="font-label-bold">Budi & Rina</p>
                <p className="text-sm text-on-surface-variant">Bandung</p>
              </div>
            </div>
          </div>
          {/* Duplicates for Infinite Loop */}
          <div className="brutalist-card bg-surface-container-lowest p-8 w-[400px] flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">format_quote</span>
            <p className="font-body-lg mb-8 italic">"Hemat 5 juta dari budget cetak undangan! Uangnya bisa buat honeymoon. Win-win solution banget."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-fixed brutalist-border flex items-center justify-center font-bold">FA</div>
              <div>
                <p className="font-label-bold">Fajar & Ayu</p>
                <p className="text-sm text-on-surface-variant">Yogyakarta</p>
              </div>
            </div>
          </div>
          <div className="brutalist-card bg-surface-container-lowest p-8 w-[400px] flex-shrink-0">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4">format_quote</span>
            <p className="font-body-lg mb-8 italic">"Hasilnya sangat elegan dan eksklusif! Kirim ke ratusan tamu via WhatsApp jadi jauh lebih berkesan."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-fixed brutalist-border flex items-center justify-center font-bold">AS</div>
              <div>
                <p className="font-label-bold">Andi & Sari</p>
                <p className="text-sm text-on-surface-variant">Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
