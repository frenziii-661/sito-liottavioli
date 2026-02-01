import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Tuo Logo Personale */}
        <Link href="/">
          <img src="/logo-personale.png" alt="Logo Francesco Liotta Violi" className="h-12 md:h-16 hover:opacity-80 transition" />
        </Link>

        {/* Menu Navigazione */}
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-slate-600">
          <Link href="/chi-sono" className="hover:text-black transition">Chi Sono</Link>
          <Link href="/news" className="hover:text-black transition">News</Link>
          <Link href="/contatti" className="hover:text-black transition">Contatti</Link>
        </div>
      </div>
    </nav>
  );
}