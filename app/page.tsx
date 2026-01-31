import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Banner Politico Mantova Adesso */}
      <div className="bg-blue-600 text-white py-3 px-6 text-center text-sm font-bold tracking-wide uppercase">
        Verso Mantova 2026: Scopri il progetto <Link href="/chi-sono" className="underline ml-2">Mantova Adesso</Link> ➔
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 italic leading-none">
              FRANCESCO<br />LIOTTA VIOLI
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-tight text-slate-500 max-w-2xl">
              Economia, Diritto e Politica. <br />
              Dall'impegno per <strong>Mantova</strong> alla visione <strong>Europea</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Link href="/chi-sono" className="bg-black text-white px-10 py-5 rounded-full font-bold text-center hover:scale-105 transition-transform">
              Profilo
            </Link>
            <Link href="/battaglie" className="border border-slate-200 px-10 py-5 rounded-full font-bold text-center hover:bg-slate-50 transition">
              Battaglie
            </Link>
          </div>
        </div>
      </section>

      {/* Sezione Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 italic">Leadership Politica</h3>
            <p className="text-xl leading-relaxed font-medium">Coordinatore di <strong>Mantova Adesso</strong> e Tesoriere GFE. Attivista politico dai 14 anni.</p>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-green-600 mb-6 italic">Impresa & ESG</h3>
            <p className="text-xl leading-relaxed font-medium">Fondatore di <strong>Aurora ESG</strong> e Vicepresidente di E•Club Bicocca. Consulenza e network.</p>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-purple-600 mb-6 italic">Competenza Tecnica</h3>
            <p className="text-xl leading-relaxed font-medium">Revisore dei Conti. Specializzando in <strong>Concorrenza e Mercati</strong> (Giurisprudenza).</p>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
        <p>© 2026 Francesco Liotta Violi</p>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/francescoliottavioli" className="hover:text-black">LinkedIn</a>
          <a href="mailto:info@liottavioli.eu" className="hover:text-black">Contatti</a>
        </div>
      </footer>
    </main>
  );
}