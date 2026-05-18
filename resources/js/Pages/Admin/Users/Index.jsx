import { Head, Link, usePage } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import hasAnyPermission from "@/Utils/Permission";
import { Edit } from "lucide-react";
import PageHeader from "@/Shared/PageHeader";
import TableEmpty from "@/Shared/TableEmpty";
import Search from "@/Shared/Search";
import Delete from "@/Shared/Delete";
import TablePagination from "@/Shared/TablePagination";
import { Button } from "@/Components/ui/button";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/Components/BasicTable";
import { Badge } from "@/Components/ui/badge";
import { APP_URL } from "@/constants/app";

export default function UsersIndex() {
    const { users } = usePage().props;

    return (
        <>
            <Head title={`Users`} />
            <LayoutApp>
                <PageHeader
                    showButton
                    title="Users"
                    description="Kelola data pengguna dan role akses"
                    action="/admin/users/create"
                    actionText="Tambah User"
                    permission="users.create"
                />

                <div className="space-y-5">
                    <Search URL={"/admin/users"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-5">No.</TableHead>
                                <TableHead className="w-5">Foto</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Username</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="w-7">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users && users.data.length > 0 ? (
                                users.data.map((user, index) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (users.current_page - 1) *
                                                    users.per_page}
                                        </TableCell>
                                        <TableCell>
                                            {user.photo && (
                                                <img
                                                    src={`${APP_URL}/uploads/avatars/${user.photo}`}
                                                    alt={user.name}
                                                    className="h-8 w-8 rounded-full object-cover"
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>
                                            {user.roles.length > 0
                                                ? user.roles
                                                      .map((role) => role.name)
                                                      .join(", ")
                                                : "-"}
                                        </TableCell>
                                        <TableCell>
                                            {user.is_active == "1" ? (
                                                <Badge
                                                    variant="default"
                                                    className="bg-green-500"
                                                >
                                                    Aktif
                                                </Badge>
                                            ) : (
                                                <Badge
                                                    variant="default"
                                                    className="bg-red-500"
                                                >
                                                    Non Aktif
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {hasAnyPermission([
                                                    "users.edit",
                                                ]) && (
                                                    <Link
                                                        href={`/admin/users/${user.id}/edit`}
                                                        title="Edit"
                                                    >
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                        >
                                                            <Edit />
                                                        </Button>
                                                    </Link>
                                                )}
                                                {hasAnyPermission([
                                                    "users.delete",
                                                ]) && (
                                                    <Delete
                                                        URL={"/admin/users"}
                                                        id={user.id}
                                                    />
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmpty
                                    title="Tidak ada User"
                                    description="Silahkan tambahkan user baru"
                                    colSpan={8}
                                />
                            )}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <TablePagination links={users.links} />
                </div>
            </LayoutApp>
        </>
    );
}
