import { Head, usePage } from "@inertiajs/react";
import LayoutWeb from "@/Layouts/LayoutWeb";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    CheckCircle2,
    Compass,
    Droplet,
    Hammer,
    HomeIcon,
    Paintbrush,
    Target,
    Zap,
} from "lucide-react";

export default function About() {
    const { settings } = usePage().props;
    const misis = [
        "Mempermudah pencarian tukang berdasarkan lokasi dan spesialisasi.",
        "Memberikan informasi harga jasa yang transparan.",
        "Meningkatkan kepercayaan melalui sistem rating dan review.",
        "Membantu tukang mendapatkan pelanggan lebih mudah.",
    ];

    const services = [
        { name: "Tukang Bangunan", icon: <Hammer className="h-6 w-6" /> },
        { name: "Tukang Atap", icon: <HomeIcon className="h-6 w-6" /> },
        { name: "Tukang Instalasi Air", icon: <Droplet className="h-6 w-6" /> },
        { name: "Tukang Listrik", icon: <Zap className="h-6 w-6" /> },
        {
            name: "Tukang Renovasi Rumah",
            icon: <Paintbrush className="h-6 w-6" />,
        },
    ];

    return (
        <>
            <Head
                title={"Tentang Kami - " + settings?.app_name || "TukangNow"}
            />
            <LayoutWeb>
                <div className="flex flex-col min-h-screen pb-20">
                    <section className="bg-slate-50 dark:bg-slate-900/20 py-20 md:py-28 border-b">
                        <div className="container mx-auto px-5 flex flex-col items-center text-center space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Tentang Kami
                            </h1>
                            <p className="max-w-[42rem] text-muted-foreground sm:text-xl leading-relaxed">
                                Platform yang membantu masyarakat menemukan
                                tukang harian terpercaya dengan mudah dan cepat.
                            </p>
                        </div>
                    </section>

                    <section className="container mx-auto space-y-16 py-24 md:py-32">
                        <div className="rounded-3xl bg-secondary/50 p-8 md:p-12 text-center space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                                Profil Platform
                            </h2>
                            <p className="text-muted-foreground leading-relaxed md:text-lg">
                                <strong>
                                    Platform Pencarian Tukang Harian
                                </strong>{" "}
                                adalah aplikasi berbasis web yang membantu
                                pengguna mencari tukang sesuai kebutuhan seperti
                                tukang bangunan, atap, dan instalasi air. Sistem
                                ini dirancang untuk mempermudah proses pencarian
                                jasa tukang secara online dengan melengkapinya
                                melalui fitur pencarian, pemesanan, serta rating
                                dan ulasan.
                            </p>
                        </div>
                    </section>

                    <section className="container  px-5 mx-auto space-y-16 py-24 md:py-32">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Card Visi */}
                            <Card className="flex flex-col h-full border-primary/20 bg-primary/5">
                                <CardHeader className="space-y-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Compass className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">
                                        Visi Kami
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Menjadi platform layanan tukang harian
                                        terpercaya yang mempermudah masyarakat
                                        dalam menemukan tenaga kerja
                                        profesional, sekaligus memajukan
                                        kesejahteraan para pekerja teknis.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Card Misi */}
                            <Card className="flex flex-col h-full">
                                <CardHeader className="space-y-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                                        <Target className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">
                                        Misi Kami
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {misis.map((misi, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground leading-relaxed">
                                                    {misi}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="container mx-auto space-y-16 py-24 md:py-32">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Layanan yang Tersedia
                            </h2>
                            <p className="text-muted-foreground">
                                Beragam spesialisasi siap membantu menyelesaikan
                                masalah rumah Anda.
                            </p>
                        </div>

                        <div className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className="group hover:border-primary/50 hover:shadow-md transition-all text-center flex flex-col items-center justify-center p-6 h-40"
                                >
                                    <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
                                        {service.icon}
                                    </div>
                                    <span className="font-semibold text-sm md:text-base leading-tight">
                                        {service.name}
                                    </span>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </LayoutWeb>
        </>
    );
}
