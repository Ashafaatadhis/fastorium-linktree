import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShoppingBag, FileText } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-8 sm:min-h-screen sm:px-4 sm:py-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <AnimatedBackground />

      {/* Glass Section */}
      <div className="glass-section relative z-10 flex w-full max-w-full flex-col items-center justify-center gap-4 rounded-2xl px-5 py-6 text-center sm:max-w-md sm:px-5 sm:py-6">
        <Image
          src="/logo.png"
          alt="Fastorium"
          width={140}
          height={140}
          priority
        />
        <h1 className="text-3xl font-bold text-purple-800 sm:text-5xl">Fastorium</h1>
        <p className="text-base text-gray-500 sm:text-xl">
          ✨ Solusi Produk Digital Terbaik ✨
        </p>

        <nav className="mt-1 flex flex-col gap-2 w-full max-w-[260px] sm:max-w-[320px]">
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            WhatsApp
          </a>
          <Link
            href="/reseller"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
            Reseller
          </Link>
          <Link
            href="/terms"
            className="flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            S&K
          </Link>
        </nav>

        <footer className="mt-2 text-xs text-gray-400 sm:text-sm">© Fastorium</footer>
      </div>
    </main>
  );
}
