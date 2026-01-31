import Link from 'next/link';

export const metadata = {
  title: 'Francesco Liotta Violi | Politico e Attivista',
  description: 'Sito ufficiale di Francesco Liotta Violi. Focus su riforme del lavoro, diritti civili e visione federalista europea.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200">
      
      {/* Navigazione */}
      <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-100">
        <span className="font-bold tracking-tighter text-xl">FLV</span>
        <div className="space-x-8 font-medium text-sm uppercase tracking-widest text-slate-500">
          <Link href="/chi-sono" className="hover:text-black transition">Chi Sono</Link>
          <Link href="/battaglie" className="hover:text-black transition">Battaglie</Link>
          <Link href="/contatti" className="hover:text-black transition">Contatti</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Francesco <span className="text-slate-400 font-light underline decoration-1 underline-offset-8">Liotta Violi</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 font-medium tracking-wide">
          Politico • Attivista • Diritti, Lavoro, Mercato
        </p>

        {/* Manifesto */}
        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-16">
          <p className="text-2xl leading-relaxed font-serif italic text-slate-800">
            "Credo in una politica che non urla, ma progetta. Il mio percorso nasce dall’ascolto dei territori e si nutre della convinzione che diritti civili, dignità del lavoro e dinamismo del mercato non siano nemici, ma pilastri di una società moderna."
          </p>
        </section>

        {/* Pulsanti di Azione */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/chi-sono" className="w-full sm:w-auto text-center bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200">
            Scopri la mia storia
          </Link>
          <Link href="mailto:info@liottavioli.eu" className="w-full sm:w-auto text-center border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition">
            Contattami
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-100 text-slate-400 text-sm flex justify-between">
        <p>© 2026 Francesco Liotta Violi</p>
        <p>info@liottavioli.eu</p>
      </footer>
    </div>
  )
}