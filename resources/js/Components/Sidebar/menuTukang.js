// import icons
import {
    BriefcaseBusiness,
    LayoutDashboard,
    UserCog,
    Wallet,
    Wrench,
} from "lucide-react";

// Menu items dengan permission check
export const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/tukang/dashboard",
    },
    {
        name: "Informasi Akun",
        icon: UserCog,
        href: "/tukang/informasi-akun",
    },
    {
        name: "Keahlian Saya",
        icon: Wrench,
        href: "/tukang/keahlian",
    },
    {
        name: "Pesanan Saya",
        icon: BriefcaseBusiness,
        href: "/tukang/pesanan",
    },
    {
        name: "Riwayat Pembayaran",
        icon: Wallet,
        href: "/tukang/pembayaran",
    },
];
