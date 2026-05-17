import { Head, usePage } from "@inertiajs/react";
import LayoutWeb from "@/Layouts/LayoutWeb";
import { Card, CardContent } from "@/Components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const { settings } = usePage().props;
    const contactDetails = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Alamat Kantor",
            description: "Jl. Contoh No. 123, Bandung, Jawa Barat",
            actionText: "Lihat di Peta",
            href: "#",
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            description: "support@tukangharian.com",
            actionText: "Kirim Email",
            href: "mailto:support@tukangharian.com",
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Telepon / WhatsApp",
            description: "0812-3456-7890",
            actionText: "Hubungi Kami",
            href: "tel:+6281234567890",
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Jam Operasional",
            description: "Senin – Jumat \n 08.00 – 17.00 WIB",
            actionText: "Tutup di Hari Libur",
            href: null,
        },
    ];

    return (
        <>
            <Head
                title={"Kontak Kami - " + settings?.app_name || "TukangNow"}
            />
            <LayoutWeb>
                <div className="flex flex-col min-h-screen pb-20">
                    <section className="bg-slate-50 dark:bg-slate-900/20 py-20 md:py-28 border-b">
                        <div className="container mx-auto px-5 flex flex-col items-center text-center space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Kontak Kami
                            </h1>
                            <p className="max-w-[42rem] text-muted-foreground sm:text-xl leading-relaxed">
                                Hubungi kami untuk pertanyaan, bantuan, maupun
                                kerja sama.
                            </p>
                        </div>
                    </section>

                    <section className="container mx-auto space-y-16 py-24 md:py-32">
                        {/* Header Section */}
                        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Informasi Kontak
                            </h2>
                            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
                                Punya pertanyaan lebih lanjut atau butuh
                                bantuan? Jangan ragu untuk menghubungi tim kami
                                melalui kontak di bawah ini.
                            </p>
                        </div>

                        {/* Grid Kontak */}
                        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {contactDetails.map((item, index) => (
                                <Card
                                    key={index}
                                    className="group relative overflow-hidden transition-all hover:border-primary/50 hover:shadow-md"
                                >
                                    <CardContent className="flex flex-col items-center p-6 text-center h-full justify-between gap-6">
                                        <div className="flex flex-col items-center gap-4">
                                            {/* Ikon */}
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                {item.icon}
                                            </div>

                                            {/* Teks */}
                                            <div className="space-y-1">
                                                <h3 className="font-semibold tracking-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground whitespace-pre-line">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Link (Opsional) */}
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-sm font-medium text-primary hover:underline hover:underline-offset-4"
                                            >
                                                {item.actionText}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-medium text-muted-foreground/50">
                                                {item.actionText}
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </LayoutWeb>
        </>
    );
}
