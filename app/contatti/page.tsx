import Link from 'next/link';

export default function Contatti() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-sans">
      <Link href="/" className="text-sm text-slate-400 hover:text-black transition uppercase tracking-widest">← Home</Link>
      <h1 className="text-5xl font-black mt-10 mb-8 italic">Contatti</h1>
      <p className="text-xl text-slate-600 mb-12">Vuoi sostenere <strong>Mantova Adesso</strong> o approfondire le tematiche di <strong>Aurora ESG</strong>? Scrivimi direttamente.</p>

      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase">Nome e Cognome</label>
            <input type="text" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Mario Rossi" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase">Email</label>
            <input type="email" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="mario@esempio.it" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase">Messaggio</label>
            <textarea className="w-full p-4 border border-slate-200 rounded-xl h-40 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Come posso aiutare?"></textarea>
          </div>
          <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition w-full md:w-auto">
            Invia Messaggio
          </button>
        </form>

        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-2 italic">Email Diretta</h3>
            <a href="mailto:info@liottavioli.eu" className="text-blue-600 text-xl font-medium">info@liottavioli.eu</a>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 italic">Social & Link</h3>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/in/francescoliottavioli" className="text-slate-600 hover:text-black underline">LinkedIn Profile</a>
              <a href="https://linktr.ee/francescoliottavioli" className="text-slate-600 hover:text-black underline">Linktree (Tutti i progetti)</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}