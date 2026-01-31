import Link from 'next/link';

export default function ChiSono() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-serif text-slate-900">
      <Link href="/" className="text-sm font-sans text-slate-400 hover:text-black transition uppercase tracking-widest">← Torna alla Home</Link>
      
      <h1 className="text-5xl font-bold mt-12 mb-8 italic text-black">Profilo e Impegno</h1>
      
      <div className="prose prose-lg leading-relaxed text-slate-800 space-y-10">
        
        <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h2 className="text-2xl font-bold font-sans text-blue-900 mb-4 mt-0">Mantova Adesso</h2>
          <p className="mb-0 text-blue-900/80">
            Da dicembre 2025 coordino il progetto <strong>"Mantova Adesso – Liberali e Riformisti"</strong>. Un'iniziativa nata per aggregare l'area di centro, le forze liberal-democratiche e le realtà civiche in vista delle elezioni amministrative di Mantova della primavera 2026. Lavoriamo per una città moderna, europea e pragmatica.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-sans mb-4 text-slate-900 border-b pb-2">Formazione e Specializzazione</h2>
          <p>
            Dopo la laurea in <strong>Economia presso l'Università degli Studi di Milano-Bicocca</strong>, ho scelto di completare il mio profilo con la <strong>Magistrale in Giurisprudenza</strong>. Il mio piano di studi è focalizzato su <strong>"Concorrenza e Mercati"</strong>, un ambito dove la regolamentazione giuridica incontra le dinamiche economiche globali.
          </p>
          <p>
            Questa duplice competenza guida la mia attività di <strong>Revisore dei Conti</strong> e la gestione di <strong>Aurora ESG</strong>, società di consulenza che ho fondato per supportare le imprese nell'integrazione dei criteri di sostenibilità nei processi decisionali.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-sans mb-4 text-slate-900 border-b pb-2">Attivismo e Network</h2>
          <p>
            La mia passione politica ha radici profonde: sono un <strong>attivista da quando avevo 14 anni</strong>. Un percorso iniziato nel metodo radicale e proseguito nel <strong>Movimento Federalista Europeo</strong>, dove da novembre 2025 ricopro l'incarico di <strong>Tesoriere della GFE Mantova</strong>.
          </p>
          <p>
            A Milano, in qualità di <strong>Vicepresidente di E•Club Bicocca</strong>, mi occupo di promuovere la cultura imprenditoriale tra i giovani, convinto che il network e l'iniziativa individuale siano i veri motori del cambiamento sociale.
          </p>
        </section>
      </div>

      <div className="mt-16 flex flex-wrap gap-4">
        <a href="https://www.linkedin.com/in/francescoliottavioli" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-8 py-3 rounded-full font-sans text-sm hover:bg-blue-700 transition">LinkedIn</a>
        <a href="https://linktr.ee/francescoliottavioli" target="_blank" rel="noopener noreferrer" className="border border-slate-200 px-8 py-3 rounded-full font-sans text-sm hover:bg-slate-50 transition text-slate-600">Linktree</a>
      </div>
    </main>
  );
}