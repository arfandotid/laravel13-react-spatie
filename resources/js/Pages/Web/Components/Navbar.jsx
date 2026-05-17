import { AnimatedThemeToggler } from "@/Components/ui/animated-theme-toggler";
import { Button } from "@/Components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import { LayoutDashboard, LogIn, Menu } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { APP_URL } from "@/constants/app";

export default function Navbar({ user }) {
    // destructure "setting" dari props page
    const { settings } = usePage().props;
    const { url } = usePage();

    const menus = [
        { name: "Home", href: "/home" },
        { name: "Tentang Kami", href: "/about" },
        { name: "Kontak", href: "/contact" },
        { name: "Cari Tukang", href: "/cari-tukang" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50",
                "backdrop-blur-md bg-background/70",
                "border-b",
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* LEFT - LOGO */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight flex items-center gap-2"
                        >
                            {settings?.app_logo && (
                                <img
                                    src={`${APP_URL}/${settings?.app_logo || ""}`}
                                    alt="Logo Aplikasi"
                                    className="w-8 h-8 object-contain border rounded-full"
                                />
                            )}
                            {settings?.app_name || "AlamKoding"}
                        </Link>
                    </div>

                    {/* CENTER - MENU */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menus.map((menu, index) => {
                            const isActive = url === menu.href;

                            return (
                                <Link
                                    key={index}
                                    href={menu.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors",
                                        isActive
                                            ? "text-foreground font-bold"
                                            : "text-muted-foreground hover:text-foreground",
                                    )}
                                >
                                    {menu.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* RIGHT - BUTTON */}
                    <div className="flex items-center gap-3">
                        <AnimatedThemeToggler />
                        {user ? (
                            <Link href="/">
                                <Button size="sm">
                                    <div className="flex items-center gap-2">
                                        <LayoutDashboard className="w-4 h-4" />
                                        <span className="hidden md:flex">
                                            Dashboard
                                        </span>
                                    </div>
                                </Button>
                            </Link>
                        ) : (
                            <Link href="/login">
                                <Button size="sm">
                                    <div className="flex items-center gap-2">
                                        <LogIn className="w-4 h-4" />
                                        <span className="hidden md:flex">
                                            Login
                                        </span>
                                    </div>
                                </Button>
                            </Link>
                        )}

                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="md:hidden p-2">
                                    <Menu size={22} />
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="w-70 sm:w-[320px] p-6"
                            >
                                <SheetHeader className="px-0 py-4">
                                    <SheetTitle className="flex items-center gap-4">
                                        {settings?.app_logo && (
                                            <img
                                                src={
                                                    APP_URL +
                                                        settings?.app_logo || ""
                                                }
                                                alt="Logo Aplikasi"
                                                className="w-8 h-8 object-contain border rounded-full"
                                            />
                                        )}
                                        {settings?.app_name || "AlamKoding"}
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col gap-6">
                                    {menus.map((menu, index) => {
                                        const isActive = url === menu.href;

                                        return (
                                            <SheetClose asChild key={index}>
                                                <Link
                                                    href={menu.href}
                                                    className={cn(
                                                        "text-base font-medium transition-colors",
                                                        isActive
                                                            ? "text-foreground font-bold"
                                                            : "text-muted-foreground hover:text-foreground",
                                                    )}
                                                >
                                                    {menu.name}
                                                </Link>
                                            </SheetClose>
                                        );
                                    })}

                                    <div className="mx-auto">
                                        <SocialIcons />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
