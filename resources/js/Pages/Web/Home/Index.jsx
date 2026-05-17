import { Head, usePage } from "@inertiajs/react";
import LayoutWeb from "@/Layouts/LayoutWeb";
import Hero from "./_components/Hero";
import FeaturesSection from "./_components/FeaturesSection";
import TukangCard from "./_components/TukangCard";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
    const { settings } = usePage().props;

    return (
        <>
            <Head title={settings?.app_name || "TukangNow"} />
            <LayoutWeb>
                <Hero />
                <FeaturesSection />
                <TukangCard />
                <HowItWorks />
            </LayoutWeb>
        </>
    );
}
