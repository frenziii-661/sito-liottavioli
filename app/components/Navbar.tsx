import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-2"> {/* Ridotto py da 4 a 2 */}
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-4 group">
          <img 
            src="/logo-personale.png" 
            alt="Logo Francesco Liotta Violi" 
            className="h-10 md:h-14 transition w-auto" // Logo leggermente più grande
          />
          <span className="text-lg font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition">
            Francesco Liotta Violi
          </span>
        </Link>

        {/* Menu Navigazione */}
        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-600">
          <Link href="/chi-sono" className="hover:text-black transition text-[10px] md:text-xs">Chi Sono</Link>
          <Link href="/news" className="hover:text-black transition text-[10px] md:text-xs">News</Link>
          <Link href="/contatti" className="hover:text-black transition text-[10px] md:text-xs">Contatti</Link>
        </div>
      </div>
    </nav>
  );
}