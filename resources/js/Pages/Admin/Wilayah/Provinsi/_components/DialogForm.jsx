import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Field, FieldDescription, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";
import { Edit, Loader2, Plus, Save } from "lucide-react";
import { useState } from "react";

export default function DialogForm({ item = null }) {
    const isEdit = !!item;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        kode: item?.kode ?? "",
        nama: item?.nama ?? "",
    });

    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const options = {
            onSuccess: () => {
                setOpen(false);

                if (!isEdit) {
                    reset();
                }
            },
        };

        if (isEdit) {
            put(`/admin/provinsi/${item.id}`, options);
        } else {
            post(`/admin/provinsi`, options);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {isEdit ? (
                    <Button size="icon" variant="outline">
                        <Edit className="h-4 w-4" />
                    </Button>
                ) : (
                    <Button>
                        <Plus /> Tambah
                    </Button>
                )}
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? "Edit" : "Tambah"} Provinsi
                    </DialogTitle>

                    <DialogDescription>
                        Silahkan {isEdit ? "edit" : "tambah"} provinsi sesuai
                        kebutuhan
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Field>
                        <FieldLabel>Kode</FieldLabel>

                        <Input
                            type="text"
                            value={data.kode}
                            onChange={(e) => setData("kode", e.target.value)}
                            className={errors.kode ? "border-red-500" : ""}
                        />

                        {errors.kode && (
                            <FieldDescription className="text-sm text-red-600">
                                {errors.kode}
                            </FieldDescription>
                        )}
                    </Field>

                    <Field>
                        <FieldLabel>Nama</FieldLabel>

                        <Input
                            type="text"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            className={errors.nama ? "border-red-500" : ""}
                        />

                        {errors.nama && (
                            <FieldDescription className="text-sm text-red-600">
                                {errors.nama}
                            </FieldDescription>
                        )}
                    </Field>

                    <div className="flex items-center gap-3">
                        <Button type="submit" disabled={processing}>
                            {processing ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Menyimpan...
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
                                    Simpan
                                </>
                            )}
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                        >
                            Batal
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
