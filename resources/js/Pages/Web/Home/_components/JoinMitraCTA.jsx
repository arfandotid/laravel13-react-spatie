import { ArrowRight, Sparkles, UserPlus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinMitraCTA() {
    return (
        <section className="container mx-auto space-y-16 py-24 md:py-32 px-5">
            {/* Container Utama: Visibilitas Penuh 
        - Light Mode: bg-primary (sangat menonjol)
        - Dark Mode: bg-primary/90 atau bg-primary (tetap menonjol di tengah kegelapan)
      */}
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl shadow-primary/30 sm:px-12 md:py-24 lg:px-20 border border-primary-foreground/10">
                {/* --- DEKORASI LATAR BELAKANG --- */}
                {/* 1. Pola Titik (Dot Pattern) untuk Tekstur */}
                <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]">
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <pattern
                                id="dotPattern"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle
                                    cx="2"
                                    cy="2"
                                    r="1.5"
                                    fill="currentColor"
                                    className="text-primary-foreground"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#dotPattern)"
                        />
                    </svg>
                </div>

                {/* 2. Efek Cahaya Sorot (Spotlight) lembut di pojok */}
                <div className="absolute -top-40 -left-40 -z-0 h-80 w-80 rounded-full bg-white/20 blur-[100px]" />
                <div className="absolute -bottom-40 -right-40 -z-0 h-80 w-80 rounded-full bg-black/10 blur-[100px]" />

                {/* --- KONTEN UTAMA --- */}
                <div className="relative z-10 mx-auto max-w-3xl space-y-8">
                    {/* Badge Atas: Menggunakan warna foreground agar kontras */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-2 text-sm font-semibold text-primary-foreground shadow-inner">
                        <Zap className="h-4 w-4 text-primary-foreground" />
                        <span>Peluang Pendapatan Harian Tanpa Batas</span>
                    </div>

                    {/* Judul & Subteks: Keras & Jelas (Menggunakan text-primary-foreground) */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl leading-[1.1]">
                            Siap Kebanjiran Order?
                            <br /> Gabung Mitra Tukang!
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-primary-foreground/80 font-medium leading-relaxed">
                            Dapatkan akses ke ribuan pelanggan di sekitar Anda
                            dengan mudah. Atur jadwal sendiri, tentukan tarif
                            Anda, dan jadilah bos bagi diri Anda sendiri.
                        </p>
                    </div>

                    {/* Tombol Aksi Utama: Warna Putih/Terang agar sangat kontras dengan bg-primary */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                        <Button
                            size="lg"
                            variant="secondary" // BiasanyaSecondary adalah Putih/Abu muda di tema default shadcn
                            className="w-full sm:w-auto font-bold shadow-xl text-lg px-14 py-7 group h-auto rounded-xl hover:scale-105 transition-transform"
                        >
                            <UserPlus className="mr-2.5 h-5 w-5" />
                            Daftar Sekarang (Gratis!)
                            <ArrowRight className="ml-2.5 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                        </Button>

                        <Button
                            size="lg"
                            variant="ghost" // Ghost agar tidak mengganggu tombol utama, tapi tetap terlihat
                            className="w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-14 py-7 h-auto text-lg rounded-xl"
                        >
                            Pelajari Selengkapnya
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
