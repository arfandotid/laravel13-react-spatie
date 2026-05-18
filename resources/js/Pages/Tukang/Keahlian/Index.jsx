import { Head, usePage } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
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
import formatRupiah from "@/lib/format-rupiah";

export default function KeahlianIndex() {
    const { keahlian, spesialis } = usePage().props;

    return (
        <>
            <Head title={`Keahlian`} />
            <LayoutApp>
                <div className="flex justify-between items-center">
                    <PageHeader
                        title="Keahlian"
                        description="Kelola keahlian"
                    />
                    <DialogForm spesialis={spesialis} />
                </div>

                <div className="space-y-5">
                    <Search URL={"/tukang/keahlian"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Spesialis</TableHead>
                                <TableHead>Harga Per Hari</TableHead>
                                <TableHead className="w-7">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {keahlian && keahlian.data.length > 0 ? (
                                keahlian.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (keahlian.current_page - 1) *
                                                    keahlian.per_page}
                                        </TableCell>
                                        <TableCell>
                                            {item.spesialis.nama}
                                        </TableCell>
                                        <TableCell>
                                            {formatRupiah(item.harga_per_hari)}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                <DialogForm
                                                    spesialis={spesialis}
                                                    item={item}
                                                />
                                                <Delete
                                                    URL={"/tukang/keahlian"}
                                                    id={item.id}
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmpty
                                    title="Tidak ada Data"
                                    description="Silahkan tambahkan keahlian baru"
                                    colSpan={4}
                                />
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination links={keahlian.links} />
                </div>
            </LayoutApp>
        </>
    );
}
