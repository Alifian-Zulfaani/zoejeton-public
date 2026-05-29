const testimonials = [
  {
    initials: 'FA',
    name: 'Fajar & Ayu',
    location: 'Yogyakarta',
    color: 'text-primary',
    bg: 'bg-primary-fixed',
    quote: '"Hemat 5 juta dari budget cetak undangan! Uangnya bisa buat honeymoon. Win-win solution banget."'
  },
  {
    initials: 'AS',
    name: 'Andi & Sari',
    location: 'Jakarta',
    color: 'text-secondary',
    bg: 'bg-secondary-fixed',
    quote: '"Hasilnya sangat elegan dan eksklusif! Kirim ke ratusan tamu via WhatsApp jadi jauh lebih berkesan."'
  },
  {
    initials: 'BR',
    name: 'Budi & Rina',
    location: 'Bandung',
    color: 'text-tertiary',
    bg: 'bg-tertiary-fixed',
    quote: '"Bisa tau real-time siapa aja yang udah buka undangan dan konfirmasi hadir. Gampang atur katering!"'
  },
  {
    initials: 'HN',
    name: 'Hendra & Nina',
    location: 'Surabaya',
    color: 'text-primary',
    bg: 'bg-primary-fixed',
    quote: '"Fitur RSVP otomatisnya sangat membantu! Tamu tinggal klik, data kehadiran langsung tercatat rapi di dashboard."'
  },
  {
    initials: 'DK',
    name: 'Dika & Karin',
    location: 'Medan',
    color: 'text-secondary',
    bg: 'bg-secondary-fixed',
    quote: '"Banyak pilihan lagu latar romantis yang bikin vibes undangannya dapet banget. Sangat puas pakai Zoejeton."'
  },
  {
    initials: 'RL',
    name: 'Rian & Lia',
    location: 'Semarang',
    color: 'text-tertiary',
    bg: 'bg-tertiary-fixed',
    quote: '"Desain neo-brutalist-nya beda dari yang lain, dibilang unik dan keren banget sama temen-temen kantor!"'
  },
  {
    initials: 'TP',
    name: 'Taufik & Putri',
    location: 'Bali',
    color: 'text-primary',
    bg: 'bg-primary-fixed',
    quote: '"Gampang banget buatnya, bahkan lewat HP sekalipun. CS-nya juga ramah dan membantu sewaktu kami ada kesulitan."'
  }
];

export default function Testimonials() {
  // Duplicate the array to create a seamless infinite loop
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden border-b-4 border-on-background bg-surface">
      <div className="max-w-container-max mx-auto px-gutter mb-16">
        <h2 className="font-display-lg text-headline-lg uppercase text-center">Kisah Bahagia Mereka</h2>
      </div>
      <div className="relative group">
        <div className="animate-scroll flex gap-8 py-4 px-4">
          {displayTestimonials.map((t, idx) => (
            <div key={idx} className="brutalist-card bg-surface-container-lowest p-8 w-[400px] flex-shrink-0">
              <span className={`material-symbols-outlined ${t.color} text-5xl mb-4`}>format_quote</span>
              <p className="font-body-lg mb-8 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${t.bg} brutalist-border flex items-center justify-center font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-label-bold">{t.name}</p>
                  <p className="text-sm text-on-surface-variant">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
