import { Head, useForm, usePage } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import PageHeader from "@/Shared/PageHeader";
import { Field, FieldDescription, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Download, Save } from "lucide-react";
import WilayahSelect from "@/Components/WilayahSelect";
import { APP_URL } from "@/constants/app";

export default function InformasiAkunIndex() {
    const { tukang, provinsi, kabupaten, kecamatan } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        nama: tukang?.nama || "",
        no_hp: tukang?.no_hp || "",
        kode_provinsi: tukang?.kode_provinsi || "",
        kode_kabupaten: tukang?.kode_kabupaten || "",
        kode_kecamatan: tukang?.kode_kecamatan || "",
        dokumen_pendukung: null,
        nama_bank: tukang?.nama_bank || "",
        no_rekening: tukang?.no_rekening || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put("/tukang/informasi-akun", {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title={`Informasi Akun`} />
            <LayoutApp>
                <PageHeader
                    title="Informasi Akun"
                    description="Kelola informasi"
                />

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel>Nama</FieldLabel>
                            <Input
                                type="text"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                className={`${errors.nama ? "border-red-500" : ""}`}
                            />
                            {errors.nama && (
                                <FieldDescription className="mt-1 text-sm text-red-600">
                                    {errors.nama}
                                </FieldDescription>
                            )}
                        </Field>
                        <Field>
                            <FieldLabel>Nomor HP</FieldLabel>
                            <Input
                                type="text"
                                value={data.no_hp}
                                onChange={(e) =>
                                    setData("no_hp", e.target.value)
                                }
                                className={`${errors.no_hp ? "border-red-500" : ""}`}
                            />
                            {errors.no_hp && (
                                <FieldDescription className="mt-1 text-sm text-red-600">
                                    {errors.no_hp}
                                </FieldDescription>
                            )}
                        </Field>
                    </div>
                    <WilayahSelect
                        provinsi={provinsi}
                        kabupaten={kabupaten}
                        kecamatan={kecamatan}
                        value={data}
                        errors={errors}
                        onChange={(val) =>
                            setData({
                                ...data,
                                ...val,
                            })
                        }
                    />
                    <Field>
                        <FieldLabel>Nama Bank</FieldLabel>
                        <Input
                            type="text"
                            value={data.nama_bank}
                            onChange={(e) =>
                                setData("nama_bank", e.target.value)
                            }
                            className={`${errors.nama_bank ? "border-red-500" : ""}`}
                            placeholder="co: BCA, BNI, BRI"
                        />
                        {errors.nama_bank && (
                            <FieldDescription className="mt-1 text-sm text-red-600">
                                {errors.nama_bank}
                            </FieldDescription>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel>Nomor Rekening</FieldLabel>
                        <Input
                            type="text"
                            value={data.no_rekening}
                            onChange={(e) =>
                                setData("no_rekening", e.target.value)
                            }
                            className={`${errors.no_rekening ? "border-red-500" : ""}`}
                            placeholder="Nomor Rekening"
                        />
                        {errors.no_rekening && (
                            <FieldDescription className="mt-1 text-sm text-red-600">
                                {errors.no_rekening}
                            </FieldDescription>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel>Dokumen Pendukung</FieldLabel>
                        {tukang.dokumen_pendukung && (
                            <div className="flex">
                                <a
                                    href={`${APP_URL}/uploads/dokumen-tukang/${tukang?.dokumen_pendukung}`}
                                    target="_blank"
                                >
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                    >
                                        <Download />
                                        Lihat Dokumen
                                    </Button>
                                </a>
                            </div>
                        )}

                        {!tukang.dokumen_pendukung && (
                            <>
                                <Input
                                    type="file"
                                    onChange={(e) =>
                                        setData(
                                            "dokumen_pendukung",
                                            e.target.files[0],
                                        )
                                    }
                                    className={`${errors.dokumen_pendukung ? "border-red-500" : ""}`}
                                />
                                {errors.dokumen_pendukung && (
                                    <FieldDescription className="mt-1 text-sm text-red-600">
                                        {errors.dokumen_pendukung}
                                    </FieldDescription>
                                )}
                                <FieldDescription className="mt-1 text-sm text-gray-600">
                                    Co: Sertifikat, Identitas dll
                                </FieldDescription>
                            </>
                        )}
                    </Field>
                    <Button type="submit" disabled={processing}>
                        <Save />
                        {processing ? "Menyimpan..." : "Simpan Perubahan"}
                    </Button>
                </form>
            </LayoutApp>
        </>
    );
}
