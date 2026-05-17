import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
    const faqs = [
        {
            id: "item-1",
            question: "Apakah pembayaran aman?",
            answer: "Ya, pembayaran Anda sangat aman. Dana akan ditampung terlebih dahulu melalui sistem platform kami dan baru akan diteruskan ke tukang setelah pesanan resmi dikonfirmasi atau selesai dikerjakan.",
        },
        {
            id: "item-2",
            question: "Apakah bisa bayar cash?",
            answer: "Bisa, pembayaran tunai (cash) diperbolehkan di platform kami selama hal tersebut sudah sesuai dengan kesepakatan bersama antara Anda dan pihak tukang sebelum pekerjaan dimulai.",
        },
        {
            id: "item-3",
            question: "Bagaimana jika tukang membatalkan pesanan?",
            answer: "Jika tukang membatalkan pesanan secara sepihak, dana Anda akan otomatis dikembalikan secara utuh ke saldo akun Anda, dan Anda dapat langsung mencari serta memilih tukang lain yang tersedia di sekitar lokasi Anda.",
        },
    ];

    return (
        <section className="container mx-auto space-y-16 py-24 md:py-32">
            {/* Header FAQ */}
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Pertanyaan yang Sering Diajukan
                </h2>
                <p className="max-w-[85%] text-muted-foreground sm:text-base">
                    Punya pertanyaan seputar layanan kami? Temukan jawaban
                    cepatnya di bawah ini.
                </p>
            </div>

            {/* Accordion List khas shadcn/ui */}
            <div className="mx-auto max-w-3xl border rounded-xl bg-background p-4 md:p-6 shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="last:border-b-0 py-1"
                        >
                            <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors text-base md:text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-2 pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
