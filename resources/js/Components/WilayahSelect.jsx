import { useMemo, useState } from "react";
import AppCombobox from "@/Components/AppCombobox";
import { FieldDescription } from "./ui/field";

export default function WilayahSelect({
    provinsi = [],
    kabupaten = [],
    kecamatan = [],
    value = {
        kode_provinsi: "",
        kode_kabupaten: "",
        kode_kecamatan: "",
    },
    errors = {},
    onChange,
}) {
    const [selected, setSelected] = useState({
        kode_provinsi: value.kode_provinsi || "",
        kode_kabupaten: value.kode_kabupaten || "",
        kode_kecamatan: value.kode_kecamatan || "",
    });

    /**
     * FILTER KABUPATEN
     */
    const kabupatenFiltered = useMemo(() => {
        if (!selected.kode_provinsi) return [];

        return kabupaten.filter((item) =>
            item.kode.startsWith(selected.kode_provinsi + "."),
        );
    }, [selected.kode_provinsi, kabupaten]);

    /**
     * FILTER KECAMATAN
     */
    const kecamatanFiltered = useMemo(() => {
        if (!selected.kode_kabupaten) return [];

        return kecamatan.filter((item) =>
            item.kode.startsWith(selected.kode_kabupaten + "."),
        );
    }, [selected.kode_kabupaten, kecamatan]);

    /**
     * HANDLE CHANGE
     */
    const handleChange = (field, val) => {
        let updated = { ...selected };

        if (field === "kode_provinsi") {
            updated = {
                kode_provinsi: val,
                kode_kabupaten: "",
                kode_kecamatan: "",
            };
        }

        if (field === "kode_kabupaten") {
            updated = {
                ...updated,
                kode_kabupaten: val,
                kode_kecamatan: "",
            };
        }

        if (field === "kode_kecamatan") {
            updated = {
                ...updated,
                kode_kecamatan: val,
            };
        }

        setSelected(updated);

        onChange?.(updated);
    };

    return (
        <div className="grid grid-cols-12 gap-4">
            {/* PROVINSI */}
            <div className="col-span-12 lg:col-span-4">
                <label className="text-sm font-medium">Provinsi</label>

                <AppCombobox
                    items={provinsi.map((item) => ({
                        value: item.kode,
                        label: item.nama,
                    }))}
                    value={selected.kode_provinsi}
                    onChange={(val) => handleChange("kode_provinsi", val)}
                    className={`${errors.kode_provinsi ? "border-red-500" : ""}`}
                    placeholder="Pilih provinsi"
                    emptyText="Provinsi tidak ditemukan"
                />
                {errors.kode_provinsi && (
                    <FieldDescription className="mt-1 text-sm text-red-600">
                        {errors.kode_provinsi}
                    </FieldDescription>
                )}
            </div>

            {/* KABUPATEN */}
            <div className="col-span-12 lg:col-span-4">
                <label className="text-sm font-medium">Kabupaten / Kota</label>

                <AppCombobox
                    items={kabupatenFiltered.map((item) => ({
                        value: item.kode,
                        label: item.nama,
                    }))}
                    value={selected.kode_kabupaten}
                    onChange={(val) => handleChange("kode_kabupaten", val)}
                    className={`${errors.kode_kabupaten ? "border-red-500" : ""}`}
                    placeholder="Pilih kabupaten"
                    emptyText="Kabupaten tidak ditemukan"
                />
                {errors.kode_kabupaten && (
                    <FieldDescription className="mt-1 text-sm text-red-600">
                        {errors.kode_kabupaten}
                    </FieldDescription>
                )}
            </div>

            {/* KECAMATAN */}
            <div className="col-span-12 lg:col-span-4">
                <label className="text-sm font-medium">Kecamatan</label>

                <AppCombobox
                    items={kecamatanFiltered.map((item) => ({
                        value: item.kode,
                        label: item.nama,
                    }))}
                    value={selected.kode_kecamatan}
                    onChange={(val) => handleChange("kode_kecamatan", val)}
                    className={`${errors.kode_kecamatan ? "border-red-500" : ""}`}
                    placeholder="Pilih kecamatan"
                    emptyText="Kecamatan tidak ditemukan"
                />
                {errors.kode_kecamatan && (
                    <FieldDescription className="mt-1 text-sm text-red-600">
                        {errors.kode_kecamatan}
                    </FieldDescription>
                )}
            </div>
        </div>
    );
}
