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

export default function PelangganIndex() {
    const { pelanggan } = usePage().props;

    return (
        <>
            <Head title={`Pelanggan`} />
            <LayoutApp>
                <PageHeader
                    title="Pelanggan"
                    description="Kelola pelanggan yang terdaftar"
                />

                <div className="space-y-5">
                    <Search URL={"/admin/pelanggan"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>No. HP</TableHead>
                                <TableHead>Alamat</TableHead>
                                <TableHead>Provinsi</TableHead>
                                <TableHead>Kabupaten</TableHead>
                                <TableHead>Kecamatan</TableHead>
                                <TableHead>Nama Bank</TableHead>
                                <TableHead>No. Rekening</TableHead>
                                <TableHead className="w-7">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pelanggan && pelanggan.data.length > 0 ? (
                                pelanggan.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {++index +
                                                (pelanggan.current_page - 1) *
                                                    pelanggan.per_page}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan.nama}
                                        </TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>
                                            {item.pelanggan.no_hp}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan.alamat}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan?.provinsi?.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan?.kabupaten?.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan?.kecamatan?.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan.nama_bank}
                                        </TableCell>
                                        <TableCell>
                                            {item.pelanggan.no_rekening}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {hasAnyPermission([
                                                    "pelanggan.edit",
                                                ]) && (
                                                    <Link
                                                        href={`/admin/pelanggan/${item.id}/edit`}
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
                                                    "pelanggan.delete",
                                                ]) && (
                                                    <Delete
                                                        URL={"/admin/pelanggan"}
                                                        id={item.id}
                                                    />
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmpty
                                    title="Tidak ada Pelanggan"
                                    description="Belum ada pelanggan terdaftar"
                                    colSpan={11}
                                />
                            )}
                        </TableBody>
                    </Table>

                    <TablePagination links={pelanggan.links} />
                </div>
            </LayoutApp>
        </>
    );
}
