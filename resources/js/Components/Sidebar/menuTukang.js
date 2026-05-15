// import icons
import {
    BriefcaseBusiness,
    Cog,
    LayoutDashboard,
    User,
    UserCog,
    Wallet,
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
