import { Head, useForm, usePage } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp";
import PageHeader from "@/Shared/PageHeader";
import { Field, FieldDescription, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Save } from "lucide-react";
import WilayahSelect from "@/Components/WilayahSelect";
import { Textarea } from "@/Components/ui/textarea";

export default function InformasiAkunIndex() {
    const { pelanggan, provinsi, kabupaten, kecamatan } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        nama: pelanggan?.nama || "",
        kode_provinsi: pelanggan?.kode_provinsi || "",
        kode_kabupaten: pelanggan?.kode_kabupaten || "",
        kode_kecamatan: pelanggan?.kode_kecamatan || "",
        alamat: pelanggan?.alamat || "",
        nama_bank: pelanggan?.nama_bank || "",
        no_rekening: pelanggan?.no_rekening || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put("/informasi-akun", {
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
                    <Field>
                        <FieldLabel>Nama</FieldLabel>
                        <Input
                            type="text"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            className={`${errors.nama ? "border-red-500" : ""}`}
                        />
                        {errors.nama && (
                            <FieldDescription className="mt-1 text-sm text-red-600">
                                {errors.nama}
                            </FieldDescription>
                        )}
                    </Field>
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
                        <FieldLabel>Alamat</FieldLabel>
                        <Textarea
                            value={data.alamat}
                            onChange={(e) => setData("alamat", e.target.value)}
                            className={`${errors.alamat ? "border-red-500" : ""}`}
                            placeholder="Nama Jalan, RT/RW, No Rumah"
                        />
                        {errors.alamat && (
                            <FieldDescription className="mt-1 text-sm text-red-600">
                                {errors.alamat}
                            </FieldDescription>
                        )}
                    </Field>
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
                    <Button type="submit" disabled={processing}>
                        <Save />
                        {processing ? "Menyimpan..." : "Simpan Perubahan"}
                    </Button>
                </form>
            </LayoutApp>
        </>
    );
}
