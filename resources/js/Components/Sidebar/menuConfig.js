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
} from "lucide-react";

// Menu items dengan permission check
export const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin/dashboard",
    },
    {
        name: "User Management",
        icon: UserCog,
        permissions: ["roles.index", "permissions.index", "users.index"],
        dropdown: [
            {
                name: "Roles",
                href: "/admin/roles",
                icon: Shield,
                permissions: ["roles.index"],
            },
            {
                name: "Permissions",
                href: "/admin/permissions",
                icon: Key,
                permissions: ["permissions.index"],
            },
            {
                name: "Users",
                href: "/admin/users",
                icon: Users,
                permissions: ["users.index"],
            },
        ],
    },
    {
        name: "Settings",
        icon: Settings,
        href: "/admin/settings",
        permissions: ["settings.index"],
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
