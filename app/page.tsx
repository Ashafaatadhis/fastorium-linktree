import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShoppingBag, FileText } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 py-0">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <AnimatedBackground />

      {/* Glass Section */}
      <div className="glass-section relative z-10 flex w-full max-w-md flex-col items-center gap-4 rounded-2xl px-5 py-6 text-center">
        <Image
          src="/logo.png"
          alt="Fastorium"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-3xl font-bold text-purple-800">Fastorium</h1>
        <p className="text-base text-gray-500">
          ✨ Solusi Produk Digital Terbaik ✨
        </p>

        <nav className="mt-1 flex flex-col gap-2 w-full max-w-[260px]">
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link
            href="/reseller"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10"
          >
            <ShoppingBag className="h-4 w-4" />
            Reseller
          </Link>
          <Link
            href="/terms"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10"
          >
            <FileText className="h-4 w-4" />
            S&K
          </Link>
        </nav>

        <footer className="mt-2 text-xs text-gray-400">© Fastorium</footer>
      </div>
    </main>
  );
}
