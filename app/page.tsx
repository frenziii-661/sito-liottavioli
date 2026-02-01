import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-20">
      <Navbar />

      {/* Hero Section con la tua Foto */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic leading-none">
              FRANCESCO<br />LIOTTA VIOLI
            </h1>
            <p className="text-2xl md:text-3xl font-light text-slate-500 mb-8">
              Economia, Diritto e Politica. <br />
              Un progetto liberale per il futuro di Mantova.
            </p>
            <div className="flex gap-4">
              <Link href="/chi-sono" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">Profilo</Link>
              <Link href="/contatti" className="border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition">Scrivimi</Link>
            </div>
          </div>
          
          {/* Tua Foto */}
          <div className="flex-1 w-full max-w-md">
            <img src="/foto-francesco.jpeg" alt="Francesco Liotta Violi" className="rounded-3xl shadow-2xl object-cover transition duration-500" />
          </div>
        </div>
      </section>

      {/* Banner Mantova Adesso con Logo */}
<section className="bg-blue-600 py-16">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
    <div className="flex items-center gap-6">
      {/* Ho corretto il nome in mantova con la 'a' */}
      <img 
        src="/logo-mantova-adesso.png" 
        alt="Logo Mantova Adesso" 
        className="h-24 md:h-32 object-contain" 
      />
      <div>
        <h2 className="text-3xl font-black italic uppercase">Mantova Adesso</h2>
        <p className="text-xl opacity-90 font-light">Liberali e Riformisti per il 2026</p>
      </div>
    </div>
    <Link href="/news" className="bg-white text-blue-600 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 transition">
      Scopri il Progetto
    </Link>
  </div>
</section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-100 flex justify-between text-slate-400 text-xs font-bold uppercase tracking-widest mt-20">
        <p>© 2026 Francesco Liotta Violi</p>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/francescoliottavioli" target="_blank" className="hover:text-black">LinkedIn</a>
          <a href="mailto:info@liottavioli.eu" className="hover:text-black">Email</a>
        </div>
      </footer>
    </main>
  );
}