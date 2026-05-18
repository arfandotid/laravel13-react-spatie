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

export default function TukangIndex() {
    const { tukang } = usePage().props;

    return (
        <>
            <Head title={`Tukang`} />
            <LayoutApp>
                <PageHeader
                    showButton
                    title="Tukang"
                    description="Kelola tukang yang terdaftar"
                    action="/admin/tukang/create"
                    actionText="Tambah Tukang"
                    permission="tukang.create"
                />

                <div className="space-y-5">
                    <Search URL={"/admin/tukang"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Keahlian</TableHead>
                                <TableHead className="w-7">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tukang && tukang.data.length > 0 ? (
                                tukang.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (tukang.current_page - 1) *
                                                    tukang.per_page}
                                        </TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>
                                            {item.tukang.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang.spesialis.length}{" "}
                                            Keahlian
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {hasAnyPermission([
                                                    "tukang.edit",
                                                ]) && (
                                                    <Link
                                                        href={`/admin/tukang/${item.id}/edit`}
                                                        title="Edit"
                                                    >
                                                        <Button
                                                            size="icon"
                                                            variant="outline"
                                                        >
                                                            <Edit />
                                                        </Button>
                                                    </Link>
                                                )}
                                                {hasAnyPermission([
                                                    "tukang.delete",
                                                ]) && (
                                                    <Delete
                                                        URL={"/admin/tukang"}
                                                        id={item.id}
                                                    />
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmpty
                                    title="Tidak ada Permission"
                                    description="Silahkan tambahkan permission baru"
                                    colSpan={5}
                                />
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination links={tukang.links} />
                </div>
            </LayoutApp>
        </>
    );
}
