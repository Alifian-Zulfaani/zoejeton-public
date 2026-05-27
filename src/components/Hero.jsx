import { useState, useEffect } from 'react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 59,
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  // Simple countdown tick animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[auto] lg:min-h-[800px] flex flex-col lg:flex-row items-center px-margin-mobile md:px-margin-desktop py-16 lg:py-24 max-w-container-max mx-auto gap-16 overflow-hidden">
      {/* Background Accent Grid / Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left Content Column */}
      <div className="flex-1 space-y-6 md:space-y-8 z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-on-background text-surface px-4 py-1.5 font-label-caps text-[11px] md:text-label-caps font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          Wedding invitation 2026
        </div>
        <h1 className="font-display-lg text-[44px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-tight uppercase">
          KREASIKAN MEMORI <br className="hidden sm:block" />
          <span className="bg-primary-container px-4 brutalist-border inline-block mt-2 md:mt-4 rotate-[-1deg] text-primary">
            BUKAN HANYA LINK
          </span>
        </h1>
        <p className="font-body-lg text-base md:text-body-lg max-w-xl mx-auto lg:mx-0 text-on-surface-variant leading-relaxed">
          Zoejeton menghadirkan undangan pernikahan digital premium dengan estetika <strong>neo-brutalis editorial</strong> yang clean, berani, dan berkelas. Bagikan kebahagiaan Anda secara instan dan personal.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start pt-2">
          <a href="#pricing" className="px-8 py-4 bg-primary text-on-primary font-headline-md brutalist-btn uppercase w-full sm:w-auto text-center font-bold">
            Buat Sekarang
          </a>
          <a href="#themes" className="px-8 py-4 bg-surface text-on-surface font-headline-md brutalist-btn uppercase flex items-center justify-center gap-2 w-full sm:w-auto text-center font-bold">
            <span className="material-symbols-outlined font-black">visibility</span> Lihat Tema
          </a>
        </div>
        
        {/* Simple Stats for proof */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-surface-container-highest max-w-md mx-auto lg:mx-0">
          <div>
            <h4 className="font-display-lg text-2xl md:text-3xl text-primary font-black">15k+</h4>
            <p className="font-label-bold text-xs uppercase text-on-surface-variant">Pasangan</p>
          </div>
          <div>
            <h4 className="font-display-lg text-2xl md:text-3xl text-secondary font-black">99.8%</h4>
            <p className="font-label-bold text-xs uppercase text-on-surface-variant">Uptime Server</p>
          </div>
          <div>
            <h4 className="font-display-lg text-2xl md:text-3xl text-tertiary font-black">4.9/5</h4>
            <p className="font-label-bold text-xs uppercase text-on-surface-variant">Rating User</p>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Phone Mockup */}
      <div className="flex-1 relative w-full h-auto flex justify-center items-center py-8 lg:py-0">
        {/* Decorative Grid Behind Mockup */}
        <div className="absolute w-[360px] h-[360px] border-4 border-dashed border-surface-container-highest rounded-full -z-10 animate-[spin_60s_linear_infinite] hidden sm:block" />
        
        {/* Smartphone Container */}
        <div className="relative w-full max-w-[310px] aspect-[9/18] brutalist-border bg-on-background brutalist-shadow-lg rounded-[36px] p-3 overflow-hidden select-none">
          {/* Phone Top Notch/Camera */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-on-background rounded-b-2xl z-30 flex items-center justify-center">
            <div className="w-12 h-1 bg-surface-container-highest rounded-full" />
          </div>
          
          {/* Inner Display Screen */}
          <div className="w-full h-full bg-surface-container-low rounded-[28px] overflow-hidden relative flex flex-col justify-between border-2 border-on-background">
            {/* Top Cover Banner */}
            <div className="relative w-full h-40 overflow-hidden border-b-2 border-on-background bg-secondary-container">
              <div className="absolute inset-0 bg-[radial-gradient(#8b3c2a_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
              <div className="absolute bottom-4 left-4 z-10 text-left">
                <span className="bg-on-background text-surface px-2 py-0.5 font-label-caps text-[9px] font-bold uppercase tracking-wider">
                  The Wedding of
                </span>
                <h3 className="font-display-lg text-2xl text-on-background mt-1 font-black leading-none uppercase">
                  Ariya & Kirana
                </h3>
              </div>
              {/* Badge Rotation */}
              <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 text-[9px] font-label-bold rotate-12 brutalist-border scale-90">
                26 JULI 2026
              </div>
            </div>

            {/* Content Body Area */}
            <div className="flex-1 p-4 flex flex-col justify-between items-center text-center space-y-4">
              <span className="font-body-md text-xs tracking-wider text-on-surface-variant font-bold">
                KAMI MENGUNDANG ANDA UNTUK MERAYAKAN HARI BAHAGIA KAMI
              </span>

              {/* Ticking Live Countdown inside phone */}
              <div className="w-full bg-surface border-2 border-on-background brutalist-shadow-sm p-3 flex justify-around">
                <div>
                  <span className="font-display-lg text-xl block text-primary font-black leading-none">{timeLeft.days}</span>
                  <span className="font-label-bold text-[8px] uppercase">Hari</span>
                </div>
                <div className="border-r border-on-background/20" />
                <div>
                  <span className="font-display-lg text-xl block text-primary font-black leading-none">{timeLeft.hours}</span>
                  <span className="font-label-bold text-[8px] uppercase">Jam</span>
                </div>
                <div className="border-r border-on-background/20" />
                <div>
                  <span className="font-display-lg text-xl block text-primary font-black leading-none">{timeLeft.minutes}</span>
                  <span className="font-label-bold text-[8px] uppercase">Menit</span>
                </div>
                <div className="border-r border-on-background/20" />
                <div>
                  <span className="font-display-lg text-xl block text-primary font-black leading-none">{timeLeft.seconds}</span>
                  <span className="font-label-bold text-[8px] uppercase">Detik</span>
                </div>
              </div>

              {/* Location Detail */}
              <div className="text-center">
                <p className="font-label-bold text-[10px] text-on-surface uppercase tracking-wide">LOKASI UPACARA</p>
                <p className="font-body-lg text-xs font-bold text-secondary">Amanjiwo Resort, Yogyakarta</p>
              </div>

              {/* RSVP Mock Button */}
              <button className="w-full py-2.5 bg-primary text-on-primary font-label-bold text-[11px] uppercase brutalist-border brutalist-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[14px] font-black">mail</span>
                Konfirmasi Kehadiran
              </button>
            </div>

            {/* Audio Indicator */}
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-surface border-2 border-on-background flex items-center justify-center shadow-[2px_2px_0px_#1A1A1A] animate-bounce">
              <span className="material-symbols-outlined text-xs font-black text-on-surface">volume_up</span>
            </div>

            {/* Safe Area bar at bottom of phone display */}
            <div className="w-full py-1.5 bg-on-background flex justify-center items-center">
              <div className="w-20 h-1 bg-surface rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
