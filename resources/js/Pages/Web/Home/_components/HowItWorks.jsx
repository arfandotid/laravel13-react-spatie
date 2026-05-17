import { Search, CheckCircle2, CreditCard, HardHat, Star } from "lucide-react";

const StepItem = ({ number, icon, title, description, isLast = false }) => {
    return (
        <div className="relative flex flex-col items-center text-center group flex-1">
            {/* Garis Penghubung Antar Langkah (Hanya muncul di Desktop) */}
            {!isLast && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-[2px] bg-border group-hover:bg-primary/50 transition-colors z-0" />
            )}

            {/* Kontainer Ikon dan Nomor */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-background bg-muted text-muted-foreground shadow-sm transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                {icon}
                {/* Badge Nomor Langkah */}
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold border text-secondary-foreground shadow-sm group-hover:bg-background group-hover:text-foreground">
                    {number}
                </span>
            </div>

            {/* Teks Deskripsi */}
            <div className="mt-6 space-y-2 max-w-[240px]">
                <h3 className="font-bold text-lg tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            icon: <Search className="h-6 w-6" />,
            title: "Cari Tukang",
            description:
                "Pilih spesialisasi keahlian yang Anda butuhkan dan tentukan lokasi rumah Anda.",
        },
        {
            number: "2",
            icon: <CheckCircle2 className="h-6 w-6" />,
            title: "Tukang Menerima Pesanan",
            description:
                "Tukang terdekat akan meninjau dan menerima atau menolak pesanan Anda.",
        },
        {
            number: "3",
            icon: <CreditCard className="h-6 w-6" />,
            title: "Lakukan Pembayaran",
            description:
                "Sistem mengamankan dana Anda setelah pesanan resmi diterima oleh tukang.",
        },
        {
            number: "4",
            icon: <HardHat className="h-6 w-6" />,
            title: "Tukang Mulai Bekerja",
            description:
                "Tukang datang ke lokasi dan melakukan pekerjaan sesuai jadwal yang disepakati.",
        },
        {
            number: "5",
            icon: <Star className="h-6 w-6" />,
            title: "Beri Rating",
            description:
                "Selesai bekerja, Anda dan tukang bisa saling memberikan penilaian jujur.",
        },
    ];

    return (
        <section className="bg-slate-50/50 dark:bg-slate-900/20 py-20 md:py-28 border-y">
            <div className="container mx-auto space-y-16 py-24 md:py-32">
                {/* Header Section */}
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl tracking-tight">
                        Cara Kerja Sistem Kami
                    </h2>
                    <p className="max-w-[85%] text-muted-foreground sm:text-base">
                        Proses mudah, aman, dan terstruktur dari awal pencarian
                        hingga pekerjaan selesai dikerjakan.
                    </p>
                </div>

                {/* Alur Flow Grid */}
                <div className="mx-auto flex flex-col gap-12 sm:gap-16 lg:flex-row lg:gap-4 max-w-6xl justify-between items-center lg:items-start">
                    {steps.map((step, index) => (
                        <StepItem
                            key={index}
                            number={step.number}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
