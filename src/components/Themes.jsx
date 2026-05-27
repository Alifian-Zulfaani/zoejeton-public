import { useState } from 'react';

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState(0);

  const themes = [
    {
      name: "Sage Ethereal",
      tag: "FAVORIT 2026",
      desc: "Perpaduan warna sage green lembut dan tipografi editorial modern untuk suasana pernikahan yang tenang, sakral, dan bersahaja.",
      bg: "bg-[#E2ECD9]",
      textColor: "text-[#1C3A27]",
      accentBg: "bg-[#1C3A27]",
      accentText: "text-white",
      previewText: "Ariya & Kirana",
      fontStyle: "font-serif",
      accentBorder: "border-[#1C3A27]"
    },
    {
      name: "Terracotta Bold",
      tag: "BRUTALIST EDITORIAL",
      desc: "Desain neo-brutalist dengan warna terracotta hangat dan garis tepi tebal yang mencolok. Sempurna untuk pasangan yang berani tampil beda.",
      bg: "bg-[#F2DDD9]",
      textColor: "text-[#8B3C2A]",
      accentBg: "bg-[#8B3C2A]",
      accentText: "text-white",
      previewText: "DANI & SARA",
      fontStyle: "font-sans font-black uppercase tracking-wider",
      accentBorder: "border-[#8B3C2A]"
    },
    {
      name: "Champagne Royal",
      tag: "ELEGANT & GOLDEN",
      desc: "Tampilan premium bertema champagne gold dan krem. Menghadirkan kesan mewah, anggun, dan eksklusif untuk acara resepsi formal.",
      bg: "bg-[#FAF3DD]",
      textColor: "text-[#665511]",
      accentBg: "bg-[#D4AF37]",
      accentText: "text-on-background",
      previewText: "Rama & Shinta",
      fontStyle: "font-serif italic",
      accentBorder: "border-[#D4AF37]"
    }
  ];

  return (
    <section id="themes" className="py-24 bg-surface px-gutter border-b-4 border-on-background">
      <div className="max-w-container-max mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block bg-secondary text-on-secondary px-3 py-1 font-label-caps text-xs font-bold uppercase mb-4 tracking-wider">
              Galeri Desain
            </div>
            <h2 className="font-display-lg text-headline-lg uppercase leading-none">
              PILIHAN TEMA TERBAIK
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl mt-4">
              Pilih dari katalog tema undangan digital premium kami. Setiap tema dirancang khusus agar tampil menakjubkan di semua perangkat.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-surface brutalist-border flex items-center justify-center hover:bg-primary-container transition-colors active:translate-x-[2px] active:translate-y-[2px]">
              <span className="material-symbols-outlined font-black">arrow_back</span>
            </button>
            <button className="w-12 h-12 bg-primary-container brutalist-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors active:translate-x-[2px] active:translate-y-[2px]">
              <span className="material-symbols-outlined font-black">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {themes.map((theme, index) => (
            <div 
              key={index}
              onClick={() => setSelectedTheme(index)}
              className={`brutalist-card brutalist-card-hover bg-surface-container-low p-6 cursor-pointer flex flex-col justify-between transition-all ${
                selectedTheme === index ? 'border-primary ring-2 ring-primary bg-surface' : ''
              }`}
            >
              {/* Theme Mockup Card Preview */}
              <div className={`w-full aspect-[4/3] ${theme.bg} brutalist-border p-4 flex flex-col justify-between items-center relative overflow-hidden mb-6`}>
                {/* Micro Dots Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:12px_12px] opacity-10" />
                
                <div className="w-full flex justify-between items-center z-10">
                  <span className={`text-[8px] font-label-bold px-2 py-0.5 bg-white/80 brutalist-border scale-90`}>
                    ZOEJETON.COM
                  </span>
                  <span className="material-symbols-outlined text-sm font-black text-on-background/60">
                    favorite
                  </span>
                </div>

                <div className="text-center z-10">
                  <p className={`text-[9px] uppercase tracking-widest ${theme.textColor} opacity-80 font-label-bold`}>
                    The Wedding of
                  </p>
                  <h4 className={`text-xl md:text-2xl mt-1 font-bold ${theme.textColor} ${theme.fontStyle}`}>
                    {theme.previewText}
                  </h4>
                </div>

                <div className="w-full flex justify-center z-10">
                  <div className={`px-4 py-1.5 ${theme.accentBg} ${theme.accentText} text-[8px] font-label-bold brutalist-border scale-90`}>
                    LIHAT LIVE DEMO
                  </div>
                </div>
              </div>

              {/* Theme Meta Details */}
              <div className="space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary-container text-primary font-label-bold text-[10px] px-2.5 py-1 uppercase tracking-wide">
                      {theme.tag}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-2xl uppercase font-black text-on-surface">
                    {theme.name}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-2">
                    {theme.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t-2 border-surface-container-highest">
                  <span className="font-label-bold text-xs text-on-surface-variant">Rekomendasi Tema</span>
                  <button className="px-4 py-2 bg-on-background text-surface font-label-bold text-xs uppercase brutalist-border hover:bg-primary hover:text-on-primary transition-all">
                    Pilih Desain
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
