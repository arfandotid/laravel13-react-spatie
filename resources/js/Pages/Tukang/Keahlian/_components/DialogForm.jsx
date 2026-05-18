import AppCombobox from "@/Components/AppCombobox";
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
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/Components/ui/input-group";
import { useForm } from "@inertiajs/react";
import { Edit, Loader2, Plus, Save } from "lucide-react";
import { useEffect, useState } from "react";

export default function DialogForm({ item = null, spesialis = [] }) {
    const isEdit = !!item;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        spesialis_id: String(item?.spesialis_id ?? ""),
        harga_per_hari: item?.harga_per_hari ?? "",
    });

    useEffect(() => {
        if (item) {
            setData({
                spesialis_id: String(item.spesialis_id),
                harga_per_hari: item.harga_per_hari,
            });
        }
    }, [item]);

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
            put(`/tukang/keahlian/${item.id}`, options);
        } else {
            post(`/tukang/keahlian`, options);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} modal={false}>
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
                        {isEdit ? "Edit" : "Tambah"} Keahlian
                    </DialogTitle>

                    <DialogDescription>
                        Form {isEdit ? "edit" : "tambah"} keahlian
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Field>
                        <FieldLabel>Spesialis</FieldLabel>

                        <AppCombobox
                            key={data.spesialis_id}
                            items={spesialis.map((item) => ({
                                value: String(item.id),
                                label: item.nama,
                            }))}
                            value={String(data.spesialis_id)}
                            onChange={(val) => setData("spesialis_id", val)}
                            className={`${errors.spesialis_id ? "border-red-500" : ""}`}
                            placeholder="Pilih spesialis"
                            emptyText="Spesialis tidak ditemukan"
                        />

                        {errors.spesialis_id && (
                            <FieldDescription className="text-sm text-red-600">
                                {errors.spesialis_id}
                            </FieldDescription>
                        )}
                    </Field>

                    <Field>
                        <FieldLabel>Harga Per Hari</FieldLabel>
                        <InputGroup>
                            <InputGroupAddon>Rp</InputGroupAddon>
                            <InputGroupInput
                                type="text"
                                value={data.harga_per_hari}
                                onChange={(e) =>
                                    setData("harga_per_hari", e.target.value)
                                }
                                className={
                                    errors.harga_per_hari
                                        ? "border-red-500"
                                        : ""
                                }
                            />
                        </InputGroup>

                        {errors.harga_per_hari && (
                            <FieldDescription className="text-sm text-red-600">
                                {errors.harga_per_hari}
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
