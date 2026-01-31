import Link from 'next/link';

export default function ChiSono() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-serif text-slate-900">
      <Link href="/" className="text-sm font-sans text-slate-400 hover:text-black transition uppercase tracking-widest">← Torna alla Home</Link>
      
      <h1 className="text-5xl font-bold mt-12 mb-8">Chi Sono</h1>
      
      <div className="prose prose-lg leading-relaxed text-slate-800 space-y-6">
        <p className="font-bold text-xl">Francesco Liotta Violi è un esponente politico e attivista impegnato nell’analisi e nella riforma delle politiche pubbliche.</p>
        
        <p>Il suo focus specialistico riguarda i diritti civili, le dinamiche del mercato del lavoro e l’integrazione europea. La sua visione politica coniuga il pragmatismo economico con una rigorosa difesa delle libertà individuali.</p>
        
        <h2 className="text-2xl font-bold font-sans mt-12">Il Metodo</h2>
        <p>La politica di Francesco Liotta Violi si distingue per il rigore analitico. Ogni presa di posizione è il risultato di un processo che parte dall’ascolto dei territori e si sviluppa attraverso l’elaborazione di soluzioni strutturali e sostenibili.</p>
      </div>
    </main>
  );
}