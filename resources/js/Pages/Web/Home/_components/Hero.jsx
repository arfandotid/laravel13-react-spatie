import { Button } from "@/Components/ui/button";
import { ArrowRight, ArrowRightIcon, Search } from "lucide-react";
import { AnimatedGridPattern } from "@/Components/ui/animated-grid-pattern";
import { AuroraText } from "@/Components/ui/aurora-text";
import { AnimatedShinyText } from "@/Components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100svh-64px)] flex items-center overflow-hidden border">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[60%] h-[80%] relative opacity-40">
                    <AnimatedGridPattern
                        maxOpacity={0.02}
                        className="mask-gradient rounded-full"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Badge */}
                <div className="z-10 flex items-center justify-center mb-4">
                    <div
                        className={cn(
                            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Platorm Pemesanan Tukang Harian</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
                    Temukan Tukang Harian
                    <AuroraText
                        colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
                    >
                        Profesional & Terpercaya
                    </AuroraText>
                </h1>

                {/* Subheading */}
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Cari tukang bangunan, atap, dan instalasi air terpercaya di
                    sekitar Anda.
                </p>

                {/* CTA */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/cari-tukang">
                        <Button size="lg" className="rounded-4xl">
                            <span className="flex items-center gap-2">
                                Cari Tukang
                                <Search className="h-4 w-4" />
                            </span>
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-4xl dark:bg-accent dark:hover:bg-accent/50"
                        >
                            Daftar Jadi Tukang
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
