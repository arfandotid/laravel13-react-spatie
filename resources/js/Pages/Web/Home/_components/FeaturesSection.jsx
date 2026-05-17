import { MapPin, ShieldCheck, Star, Wallet } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="relative overflow-hidden rounded-lg border bg-background p-6 md:p-8 transition-all hover:shadow-md">
            <div className="flex flex-col gap-4">
                {/* Icon Wrapper dengan gaya khas shadcn */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {icon}
                </div>

                <div className="space-y-2">
                    <h3 className="font-bold text-xl tracking-tight">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function FeaturesSection() {
    const features = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Cari Tukang Terdekat",
            description:
                "Temukan tukang berkualitas berdasarkan lokasi presisi dan spesialisasi keahlian yang Anda butuhkan.",
        },
        {
            icon: <Wallet className="h-6 w-6" />,
            title: "Harga Transparan",
            description:
                "Tidak ada biaya tersembunyi. Estimasi dan harga jasa ditampilkan secara jelas per hari kerja.",
        },
        {
            icon: <Star className="h-6 w-6" />,
            title: "Rating & Review",
            description:
                "Pilih dengan percaya diri. Lihat penilaian asli dan ulasan jujur dari pelanggan sebelumnya.",
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Pembayaran Aman",
            description:
                "Transanksi lebih tenang. Pembayaran baru akan diteruskan setelah tukang menerima dan mengonfirmasi pesanan.",
        },
    ];

    return (
        <section className="container mx-auto space-y-16 py-24 md:py-32">
            {/* Header Section */}
            <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl tracking-tight">
                    Mengapa Memilih Layanan Kami?
                </h2>
                <p className="max-w-full text-muted-foreground sm:text-lg leading-normal px-5">
                    Kami memberikan kemudahan, keamanan, dan transparansi dalam
                    mencari tukang profesional untuk kebutuhan rumah Anda.
                </p>
            </div>

            {/* Grid Features */}
            <div className="mx-auto px-5 grid justify-center gap-6 sm:grid-cols-2 md:max-w-full lg:grid-cols-4">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
}
