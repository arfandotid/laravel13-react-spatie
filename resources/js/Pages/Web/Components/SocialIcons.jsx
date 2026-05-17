import { Button } from "@/Components/ui/button";
import { SiInstagram } from "react-icons/si";

export default function SocialIcons() {
    const links = [
        { icon: SiInstagram, href: "https://instagram.com/alamkoding/" },
    ];

    return (
        <div className="flex items-center gap-2">
            {links.map((link, index) => (
                <a key={index} href={link.href} target="_blank">
                    <Button
                        size="icon-sm"
                        variant="outline"
                        className="rounded-full"
                    >
                        <link.icon size={20} />
                    </Button>
                </a>
            ))}
        </div>
    );
}
