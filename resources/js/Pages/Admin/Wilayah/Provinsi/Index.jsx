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

export default function ProvinsiIndex() {
    const { provinsi } = usePage().props;

    return (
        <>
            <Head title={`Provinsi`} />
            <LayoutApp>
                <div className="flex justify-between items-center">
                    <PageHeader
                        title="Provinsi"
                        description="Kelola data provinsi"
                    />
                    <DialogForm />
                </div>

                <div className="space-y-5">
                    <Search URL={"/admin/provinsi"} />

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
                            {provinsi && provinsi.data.length > 0 ? (
                                provinsi.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (provinsi.current_page - 1) *
                                                    provinsi.per_page}
                                        </TableCell>
                                        <TableCell>{item.kode}</TableCell>
                                        <TableCell>{item.nama}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {hasAnyPermission([
                                                    "provinsi.edit",
                                                ]) && (
                                                    <DialogForm item={item} />
                                                )}
                                                {hasAnyPermission([
                                                    "provinsi.delete",
                                                ]) && (
                                                    <Delete
                                                        URL={"/admin/provinsi"}
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
                                    description="Silahkan tambahkan provinsi baru"
                                    colSpan={4}
                                />
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination links={provinsi.links} />
                </div>
            </LayoutApp>
        </>
    );
}
