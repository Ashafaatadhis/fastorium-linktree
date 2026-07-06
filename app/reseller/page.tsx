import Link from "next/link";
import { Rocket, Bot, Package, DollarSign, PartyPopper, Check, ArrowLeft } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

const steps = [
  {
    icon: Rocket,
    title: "Siap Jadi Reseller?",
    desc: "Tanpa perlu daftar, langsung mulai!",
  },
  {
    icon: Bot,
    title: "Gunakan BOT Otomatis",
    desc: "Akses & pesan produk via BOT canggih.",
  },
  {
    icon: Package,
    title: "Order Produk Mudah",
    desc: "Pilih & pesan produk digital 24/7.",
  },
  {
    icon: DollarSign,
    title: "Jual & Atur Harga",
    desc: "Kamu tentukan sendiri margin profit.",
  },
  {
    icon: PartyPopper,
    title: "Nikmati Profitnya!",
    desc: "Keuntungan instan masuk ke kamu.",
  },
];

const advantages = [
  "100% tanpa stok barang",
  "Order tanpa nunggu admin",
  "Semua proses serba otomatis",
  "Fokus hanya promosi & jualan",
  "Fleksibel, jualan kapan & di mana saja",
  "Mulai jualan instan, tanpa registrasi",
];

export default function ResellerPage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-start overflow-x-hidden overflow-y-auto px-6 py-8 sm:min-h-screen sm:px-4 sm:py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <AnimatedBackground />

      {/* Glass Section */}
      <div className="glass-section relative z-10 flex w-full max-w-full flex-col items-center rounded-2xl px-5 py-6 sm:max-w-4xl">
        <h1 className="text-3xl font-bold text-center tracking-tight text-purple-800 max-w-md">
          Mulai Perjalananmu Bersama Fastorium
        </h1>

        {/* Steps */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-purple-200/60 bg-white/40 p-6 backdrop-blur-xl shadow-lg shadow-purple-500/5 transition hover:bg-white/60"
            >
              <step.icon className="h-8 w-8 text-purple-600" />
              <h3 className="mt-3 text-lg font-semibold text-purple-800">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Profit Example */}
        <div className="mt-8 w-full max-w-md rounded-2xl border border-purple-200/60 bg-white/40 p-6 backdrop-blur-xl shadow-lg shadow-purple-500/5">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Contoh Simpel
          </p>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Kamu order produk <strong>A</strong> di BOT seharga{" "}
            <strong>Rp10.000</strong>. Jual ke customer seharga{" "}
            <strong>Rp20.000</strong>.{" "}
            <span className="font-bold text-green-600">
              Untung: Rp10.000 langsung!
            </span>
          </p>
        </div>

        {/* Advantages */}
        <div className="mt-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-purple-800">
            Keunggulan Fastorium
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-purple-200/60 bg-white/40 px-4 py-3 text-sm font-medium text-gray-700 backdrop-blur-xl shadow-lg shadow-purple-500/5"
              >
                <Check className="h-4 w-4 text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-purple-800">Siap Mulai Jualan Digital?</h2>
          <p className="text-gray-500">
            Langsung akses BOT-nya dan mulai cuan hari ini juga!
          </p>
          <a
            href="https://t.me/fastorium_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full border border-purple-200/60 bg-white/40 px-8 py-4 text-lg font-semibold text-purple-800 shadow-lg shadow-purple-500/5 backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-purple-500/10"
          >
            Akses BOT Sekarang
          </a>
        </div>

        {/* Back */}
        <Link
          href="/"
          className="mt-6 flex items-center gap-1 text-sm text-purple-400 transition hover:text-purple-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Home
        </Link>
      </div>
    </main>
  );
}
