// import helper
import hasAnyPermission from "@/Utils/Permission";

// import icons
import {
    Users,
    UserCog,
    Settings,
    Key,
    Shield,
    LayoutDashboard,
    Table2,
    BriefcaseBusiness,
    Wallet,
} from "lucide-react";

// Menu items dengan permission check
export const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        permissions: ["dashboard.index"],
        href: "/admin/dashboard",
    },
    {
        name: "Data Master",
        icon: Table2,
        dropdown: [
            {
                name: "Spesialis",
                href: "/admin/spesialis",
                permissions: [],
            },
            {
                name: "Tukang",
                href: "/admin/tukang",
                permissions: [],
            },
            {
                name: "Pelanggan",
                href: "/admin/pelanggan",
                permissions: [],
            },
        ],
    },
    {
        name: "Pesanan",
        icon: BriefcaseBusiness,
        permissions: [],
        href: "/admin/pesanan",
    },
    {
        name: "Pembayaran",
        icon: Wallet,
        permissions: [],
        href: "/admin/pembayaran",
    },
    {
        name: "User Management",
        icon: UserCog,
        permissions: ["roles.index", "permissions.index", "users.index"],
        dropdown: [
            {
                name: "Roles",
                href: "/admin/roles",
                permissions: ["roles.index"],
            },
            {
                name: "Permissions",
                href: "/admin/permissions",
                permissions: ["permissions.index"],
            },
            {
                name: "Users",
                href: "/admin/users",
                permissions: ["users.index"],
            },
        ],
    },
    {
        name: "Settings",
        icon: Settings,
        dropdown: [
            {
                name: "Aplikasi",
                href: "/admin/settings",
                permissions: ["settings.index"],
            },
            {
                name: "Provinsi",
                href: "/admin/provinsi",
                permissions: [],
            },
            {
                name: "Kabupaten",
                href: "/admin/kabupaten",
                permissions: [],
            },
            {
                name: "Kecamatan",
                href: "/admin/kecamatan",
                permissions: [],
            },
        ],
    },
];

// Filter menu items berdasarkan permission
export const getFilteredMenuItems = () => {
    return menuItems.filter((item) => {
        if (item.permissions && item.permissions.length > 0) {
            return hasAnyPermission(item.permissions);
        }
        return true;
    });
};

// Fungsi untuk filter dropdown items berdasarkan permission
export const getFilteredDropdown = (dropdownItems) => {
    if (!dropdownItems) return [];

    return dropdownItems.filter((subItem) => {
        if (subItem.permissions && subItem.permissions.length > 0) {
            return hasAnyPermission(subItem.permissions);
        }
        return true;
    });
};
