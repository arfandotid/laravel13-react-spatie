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

export default function SpesialisIndex() {
    const { spesialis } = usePage().props;

    return (
        <>
            <Head title={`Spesialis`} />
            <LayoutApp>
                <PageHeader
                    showButton
                    title="Spesialis"
                    description="Kelola spesialis yang terdaftar"
                    action="/admin/spesialis/create"
                    actionText="Tambah Spesialis"
                    permission="spesialis.create"
                />

                <div className="space-y-5">
                    <Search URL={"/admin/spesialis"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead className="w-7">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {spesialis && spesialis.data.length > 0 ? (
                                spesialis.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (spesialis.current_page - 1) *
                                                    spesialis.per_page}
                                        </TableCell>
                                        <TableCell>{item.nama}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {hasAnyPermission([
                                                    "spesialis.edit",
                                                ]) && (
                                                    <Link
                                                        href={`/admin/spesialis/${item.id}/edit`}
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
                                                    "spesialis.delete",
                                                ]) && (
                                                    <Delete
                                                        URL={"/admin/spesialis"}
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
                                    colSpan={3}
                                />
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination links={spesialis.links} />
                </div>
            </LayoutApp>
        </>
    );
}
