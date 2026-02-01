import client from "@/tina/__generated__/client";
import Link from "next/link";

export default async function NewsPage() {
  // Recuperiamo tutti gli articoli dalla cartella content/posts
  const res = await client.queries.postConnection();
  const posts = res.data.postConnection.edges;

  return (
    <div className="min-h-screen bg-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Intestazione Sezione */}
        <h1 className="text-4xl font-black italic uppercase mb-12 border-b-4 border-slate-900 pb-4 inline-block">
          News & Progetti
        </h1>
        
        <div className="grid gap-12">
          {posts?.map((post) => (
            <div key={post?.node?.id} className="group border-b border-slate-100 pb-12">
              {/* Il link porta alla pagina del singolo articolo */}
              <Link href={`/news/${post?.node?._sys.filename}`}>
                <div className="flex flex-col md:flex-row gap-8 items-start cursor-pointer">
                  
                  {/* Immagine dell'articolo */}
                  <div className="w-full md:w-64 h-40 overflow-hidden rounded-xl shadow-md">
                    <img 
                      src={post?.node?.image || "/logo-mantova-adesso.png"} 
                      alt={post?.node?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Testi dell'articolo nella lista */}
                  <div className="flex-1">
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2">
                      {post?.node?.date ? new Date(post?.node?.date).toLocaleDateString('it-IT') : "Data Recente"}
                    </p>
                    <h2 className="text-2xl font-bold group-hover:text-slate-600 transition mb-4 uppercase">
                      {post?.node?.title}
                    </h2>
                    <span className="text-slate-900 font-bold uppercase text-xs tracking-tighter border-b-2 border-slate-900">
                      Leggi l'articolo →
                    </span>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}