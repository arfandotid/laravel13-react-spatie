import { usePage } from "@inertiajs/react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    const { settings } = usePage().props;
    return (
        <footer className="w-full h-16 z-10 bg-background/50 backdrop-blur-md border-t flex items-center">
            <section className="container mx-auto px-6 flex items-center justify-between 2xl:px-0">
                <p className="text-muted-foreground text-sm">
                    © 2026 -{" "}
                    <span className="font-bold">{settings?.app_name}</span>
                </p>
                <SocialIcons />
            </section>
        </footer>
    );
}
