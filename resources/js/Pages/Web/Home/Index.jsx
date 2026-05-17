import { Head, usePage } from "@inertiajs/react";
import LayoutWeb from "@/Layouts/LayoutWeb";
import { Button } from "@/Components/ui/button";

export default function Home() {
    const { settings } = usePage().props;

    return (
        <>
            <Head title={settings?.app_name || "TukangNow"} />
            <LayoutWeb>
                <h1>Home</h1>
                <Button>TES</Button>
            </LayoutWeb>
        </>
    );
}
