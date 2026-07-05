"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

const products: Record<string, { duration: string; warranty: string; terms: string[] }> = {
  "Canva": {
    duration: "1 bulan / 1 tahun",
    warranty: "Garansi 7 hari",
    terms: [
      "Akun shared/team, bukan personal.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Spotify": {
    duration: "1 bulan / 3 bulan / 1 tahun",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun premium individual/family.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun expired sebelum waktunya.",
      "Tidak garansi jika login di lebih dari 1 device.",
    ],
  },
  "YouTube Premium": {
    duration: "1 bulan / 3 bulan / 1 tahun",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun family/individual.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Netflix": {
    duration: "1 bulan",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun shared/private.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "CapCut": {
    duration: "1 bulan / 1 tahun",
    warranty: "Garansi 7 hari",
    terms: [
      "Akun premium CapCut.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "ChatGPT": {
    duration: "1 bulan",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun ChatGPT Plus.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Apple Music": {
    duration: "1 bulan / 3 bulan / 1 tahun",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun Apple Music individual.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Disney+": {
    duration: "1 bulan",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun shared.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "HBO Max": {
    duration: "1 bulan",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun shared.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Zoom": {
    duration: "1 bulan / 1 tahun",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun Zoom Pro/Business.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Microsoft 365": {
    duration: "1 tahun",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun Microsoft 365 Personal/Family.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
  "Adobe Creative Cloud": {
    duration: "1 bulan / 1 tahun",
    warranty: "Garansi 30 hari",
    terms: [
      "Akun Adobe CC All Apps.",
      "Dilarang mengganti email atau password.",
      "Garansi berlaku jika akun tidak bisa dipakai.",
      "Tidak garansi jika terkena suspend karena pelanggaran.",
    ],
  },
};

const productNames = Object.keys(products);

export default function TermsPage() {
  const [selected, setSelected] = useState("");

  const data = selected ? products[selected] : null;

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <AnimatedBackground />

      {/* Glass Section */}
      <div className="glass-section relative z-10 flex w-full max-w-md flex-col items-center rounded-2xl px-5 py-6">
        <h1 className="text-3xl font-bold text-center tracking-tight text-purple-800">
          Ketentuan & Garansi Fastorium
        </h1>
        <p className="mt-3 text-gray-500 text-center max-w-md">
          Pilih produk untuk melihat detail ketentuan layanan dan garansinya.
        </p>

        {/* Dropdown */}
        <div className="mt-6 w-full relative">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full appearance-none rounded-full border border-purple-200/60 bg-white/40 px-5 py-3 pr-10 text-base text-purple-800 backdrop-blur-xl shadow-lg shadow-purple-500/5 transition focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
          >
            <option value="">-- Pilih Produk --</option>
            {productNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="mt-6 w-full">
          {data ? (
            <div className="rounded-2xl border border-purple-200/60 bg-white/40 p-6 backdrop-blur-xl shadow-lg shadow-purple-500/5">
              <h2 className="text-xl font-bold text-purple-800">{selected}</h2>
              <div className="mt-4 space-y-3">
                <div>
                  <span className="text-sm font-semibold text-purple-400">
                    Masa Aktif
                  </span>
                  <p className="text-gray-700">{data.duration}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-400">
                    Garansi
                  </span>
                  <p className="text-gray-700">{data.warranty}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-400">
                    Syarat & Ketentuan
                  </span>
                  <ul className="mt-2 space-y-2">
                    {data.terms.map((t, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-0.5 text-purple-500">•</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-purple-200/60 bg-white/40 p-6 text-center text-gray-400 backdrop-blur-xl shadow-lg shadow-purple-500/5">
              Silakan pilih salah satu produk dari menu dropdown di atas untuk
              membaca detail ketentuan layanan dan garansi yang berlaku.
            </div>
          )}
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
