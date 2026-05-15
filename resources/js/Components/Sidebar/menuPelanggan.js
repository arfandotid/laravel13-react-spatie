// import icons
import {
    BriefcaseBusiness,
    LayoutDashboard,
    UserCog,
    Wallet,
} from "lucide-react";

// Menu items dengan permission check
export const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        name: "Informasi Akun",
        icon: UserCog,
        href: "/informasi-akun",
    },
    {
        name: "Pesanan Saya",
        icon: BriefcaseBusiness,
        href: "/pesanan",
    },
    {
        name: "Riwayat Pembayaran",
        icon: Wallet,
        href: "/pembayaran",
    },
];
