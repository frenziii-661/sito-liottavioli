import client from "@/tina/__generated__/client";
import Link from "next/link";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "home.md" });
  const data = res.data.page;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* LOGO PERSONALE */}
            <img src="/logo-personale.png" alt="Logo FL" className="h-12 w-auto" />
            <span className="font-bold tracking-tight text-xl uppercase">
              {data.titolo_grande}
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-slate-500">
            <Link href="/" className="text-slate-900 border-b-2 border-slate-900">Home</Link>
            <Link href="/biografia" className="hover:text-slate-900 transition">Biografia</Link>
            <Link href="/news" className="hover:text-slate-900 transition">News</Link>
            <Link href="/contatti" className="hover:text-slate-900 transition">Contatti</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] italic uppercase">
              {data.titolo_grande}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-xl border-l-4 border-slate-900 pl-6">
              {data.sottotitolo}
            </p>
            
            {/* LOGO MANTOVA ADESSO */}
            <div className="pt-4 flex items-center gap-6">
              <img src="/logo-mantova-adesso.png" alt="Mantova Adesso" className="h-20 w-auto" />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-slate-800 transition shadow-xl">
                Il Progetto
              </button>
            </div>
          </div>

          {/* FOTO FRANCESCO */}
          <div className="flex-1 w-full relative">
            <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl">
              <img 
                src="/foto-francesco.jpeg" 
                alt="Francesco Liotta Violi" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-slate-100 rounded-full -z-0"></div>
          </div>

        </div>
      </main>
    </div>
  );
}