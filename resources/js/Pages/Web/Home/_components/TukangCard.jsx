import { ArrowRight, Hammer, Home, Droplet, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "@inertiajs/react";

const TukangCard = ({ icon, title, price }) => {
    return (
        <Card className="group flex flex-col justify-between transition-all hover:border-primary/50 hover:shadow-md">
            <CardHeader className="space-y-4">
                {/* Icon dengan efek hover scale khas shadcn */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {icon}
                </div>
                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold tracking-tight">
                        {title}
                    </CardTitle>
                    <CardDescription>Spesialis berpengalaman</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Mulai Dari
                    </span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">
                            {price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                            /hari
                        </span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="block">
                <Link href="/cari-tukang">
                    <Button
                        className="justify-between w-full"
                        variant="outline"
                    >
                        Pesan Tukang
                        <ArrowRight className="h-4 w-4 transition-transform" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default function TukangGrid() {
    const daftarTukang = [
        {
            icon: <Hammer className="h-6 w-6" />,
            title: "Tukang Bangunan",
            price: "Rp200.000",
        },
        {
            icon: <Home className="h-6 w-6" />,
            title: "Tukang Atap",
            price: "Rp400.000",
        },
        {
            icon: <Droplet className="h-6 w-6" />,
            title: "Tukang Instalasi Air",
            price: "Rp100.000",
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Tukang Listrik",
            price: "Rp150.000",
        },
    ];

    return (
        <section className="container mx-auto space-y-16 py-24 md:py-32">
            <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl tracking-tight">
                    Pilih Spesialisasi Sesuai Kebutuhan Anda
                </h2>
                <p className="max-w-full text-muted-foreground sm:text-lg leading-normal px-5">
                    Layanan tukang profesional dengan keahlian spesifik untuk
                    hasil perbaikan rumah yang maksimal.
                </p>
            </div>
            <div className="mx-auto grid max-w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {daftarTukang.map((tukang, index) => (
                    <TukangCard
                        key={index}
                        icon={tukang.icon}
                        title={tukang.title}
                        price={tukang.price}
                    />
                ))}
            </div>
        </section>
    );
}
