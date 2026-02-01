import Link from 'next/link';

export default function News() {
  const articoli = [
    {
      data: "1 Febbraio 2026",
      titolo: "Lancio del progetto Mantova Adesso",
      estratto: "Inizia oggi un percorso di ascolto e proposta per la città di Mantova..."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-sans">
      <Link href="/" className="text-sm text-slate-400 hover:text-black transition uppercase tracking-widest">← Home</Link>
      <h1 className="text-5xl font-black mt-10 mb-12 italic">News & Interventi</h1>
      
      <div className="space-y-12">
        {articoli.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <p className="text-sm text-blue-600 font-bold mb-2">{post.data}</p>
            <h2 className="text-3xl font-bold group-hover:text-blue-700 transition mb-4">{post.titolo}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{post.estratto}</p>
            <span className="text-sm font-bold border-b-2 border-black">Leggi tutto</span>
          </article>
        ))}
      </div>
    </main>
  );
}