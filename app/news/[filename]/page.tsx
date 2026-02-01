import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// Definiamo con precisione cosa si aspetta la pagina
interface PageProps {
  params: Promise<{ filename: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  // 1. Aspettiamo che i parametri siano pronti
  const resolvedParams = await params;
  
  // 2. Usiamo il filename per chiedere i dati a Tina
  const res = await client.queries.post({ 
    relativePath: `${resolvedParams.filename}.md` 
  });
  const data = res.data.post;

  return (
    <article className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Intestazione */}
        <div className="mb-8">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">
            {data.date ? new Date(data.date).toLocaleDateString('it-IT') : "Data recente"}
          </p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-tight text-slate-900">
            {data.title}
          </h1>
        </div>

        {/* Immagine di Copertina */}
        {data.image && (
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Testo dell'Articolo */}
        <div className="prose prose-lg prose-slate max-w-none">
          {/* Questo componente trasforma il testo di Tina in HTML pulito */}
          <TinaMarkdown content={data.body} />
        </div>

        {/* Bottone Indietro */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <a href="/news" className="text-slate-900 font-bold uppercase tracking-tighter border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition">
            ← Torna a tutte le news
          </a>
        </div>

      </div>
    </article>
  );
}