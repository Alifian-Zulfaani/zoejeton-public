import { useState } from 'react';

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="brutalist-card bg-surface overflow-hidden transition-all duration-300">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left font-headline-md uppercase focus:outline-none select-none hover:bg-primary-container/20 transition-colors"
      >
        <span className="pr-4 text-lg md:text-headline-md font-bold text-on-surface">{question}</span>
        <span className={`material-symbols-outlined transition-transform duration-300 font-black text-2xl ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface/50'}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-5 font-body-md border-t-4 border-on-background bg-surface-container-low/60 text-on-surface-variant leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Berapa lama proses pembuatan undangannya?",
      answer: "Proses pembuatan undangan pernikahan di Zoejeton sangat instan. Begitu Anda selesai memilih tema dan melengkapi informasi pernikahan Anda, undangan digital langsung aktif dan siap dibagikan dalam hitungan menit."
    },
    {
      question: "Apakah bisa dikirim ke tamu dalam jumlah banyak?",
      answer: "Tentu saja! Kami menyediakan generator link khusus WhatsApp sehingga Anda dapat mengirim pesan undangan yang telah dipersonalisasi dengan nama masing-masing tamu secara cepat dan tak terbatas."
    },
    {
      question: "Bagaimana cara mencatat konfirmasi kehadiran (RSVP)?",
      answer: "Setiap kali tamu mengisi form RSVP di undangan Anda, data konfirmasi akan langsung masuk ke Dashboard Zoejeton secara real-time. Anda bisa memantau jumlah kehadiran untuk perencanaan katering dan akomodasi."
    },
    {
      question: "Apakah tema undangan dapat dikustomisasi lagi?",
      answer: "Ya, Anda memiliki kontrol penuh. Anda dapat mengubah foto galeri, musik latar (backsound), detail tulisan acara, hingga mengatur ulang urutan bagian undangan agar sesuai dengan preferensi pernikahan Anda."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-primary-container px-gutter border-b-4 border-on-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-on-primary px-3 py-1 font-label-caps text-xs font-bold uppercase mb-4 tracking-wider">
            Pertanyaan Populer
          </div>
          <h2 className="font-display-lg text-headline-lg uppercase">Pertanyaan Umum</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
