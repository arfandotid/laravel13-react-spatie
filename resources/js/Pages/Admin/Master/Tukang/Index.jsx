import { Head, Link, usePage } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import hasAnyPermission from "@/Utils/Permission";
import { Edit, File } from "lucide-react";
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

export default function TukangIndex() {
    const { tukang } = usePage().props;

    return (
        <>
            <Head title={`Tukang`} />
            <LayoutApp>
                <PageHeader
                    title="Tukang"
                    description="Kelola tukang yang terdaftar"
                />

                <div className="space-y-5">
                    <Search URL={"/admin/tukang"} />

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>No. HP</TableHead>
                                <TableHead>Keahlian</TableHead>
                                <TableHead>Provinsi</TableHead>
                                <TableHead>Kabupaten</TableHead>
                                <TableHead>Kecamatan</TableHead>
                                <TableHead>Nama Bank</TableHead>
                                <TableHead>No. Rekening</TableHead>
                                <TableHead>Dokumen Pendukung</TableHead>
                                <TableHead>Is Verified</TableHead>
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
                                        <TableCell>
                                            {item.tukang.nama}
                                        </TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>
                                            {item.tukang.no_hp}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang.spesialis.length}{" "}
                                            Keahlian
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang?.provinsi?.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang?.kabupaten?.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang?.kecamatan?.nama}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang.nama_bank}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang.no_rekening}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang.dokumen_pendukung ? (
                                                <a
                                                    target="_blank"
                                                    href={`${APP_URL}/uploads/dokumen-tukang/${item.tukang.dokumen_pendukung}`}
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        <File className="h-3 w-3" />
                                                        Lihat File
                                                    </Button>
                                                </a>
                                            ) : (
                                                <Badge
                                                    variant="default"
                                                    className="bg-yellow-500"
                                                >
                                                    Belum Upload
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.tukang.is_verified == "1" ? (
                                                <Badge
                                                    variant="default"
                                                    className="bg-green-500"
                                                >
                                                    Terverifikasi
                                                </Badge>
                                            ) : (
                                                <Badge
                                                    variant="default"
                                                    className="bg-red-500"
                                                >
                                                    Belum Terverifikasi
                                                </Badge>
                                            )}
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
                                    title="Tidak ada Tukang"
                                    description="Belum ada tukang terdaftar"
                                    colSpan={13}
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
