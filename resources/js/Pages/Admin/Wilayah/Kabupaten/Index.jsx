import { Head, usePage } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import hasAnyPermission from "@/Utils/Permission";
import PageHeader from "@/Shared/PageHeader";
import TableEmpty from "@/Shared/TableEmpty";
import Search from "@/Shared/Search";
import Delete from "@/Shared/Delete";
import TablePagination from "@/Shared/TablePagination";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/Components/BasicTable";
import DialogForm from "./_components/DialogForm";

export default function KabupatenIndex() {
    const { kabupaten } = usePage().props;

    return (
        <>
            <Head title={`Kabupaten`} />
            <LayoutApp>
                <div className="flex justify-between items-center">
                    <PageHeader
                        title="Kabupaten"
                        description="Kelola data kabupaten"
                    />
                    <DialogForm />
                </div>

                <div className="space-y-5">
                    <Search URL={"/admin/kabupaten"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Kode</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead className="w-7">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {kabupaten && kabupaten.data.length > 0 ? (
                                kabupaten.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (kabupaten.current_page - 1) *
                                                    kabupaten.per_page}
                                        </TableCell>
                                        <TableCell>{item.kode}</TableCell>
                                        <TableCell>{item.nama}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {hasAnyPermission([
                                                    "kabupaten.edit",
                                                ]) && (
                                                    <DialogForm item={item} />
                                                )}
                                                {hasAnyPermission([
                                                    "kabupaten.delete",
                                                ]) && (
                                                    <Delete
                                                        URL={"/admin/kabupaten"}
                                                        id={item.id}
                                                    />
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmpty
                                    title="Tidak ada Data"
                                    description="Silahkan tambahkan kabupaten baru"
                                    colSpan={4}
                                />
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination links={kabupaten.links} />
                </div>
            </LayoutApp>
        </>
    );
}
