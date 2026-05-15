import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/Components/ui/combobox";

export default function AppCombobox({
    items = [],
    value,
    onChange,
    placeholder = "Pilih data...",
    emptyText = "Tidak ditemukan",
    className = "",
}) {
    // cari selected object dari value (id)
    const selected = items.find((item) => item.value === value);

    return (
        <Combobox
            items={items}
            value={selected || null}
            itemToStringValue={(item) => (item ? item.label : "")}
            onValueChange={(item) => {
                onChange(item?.value ?? "");
            }}
        >
            <ComboboxInput className={className} placeholder={placeholder} />

            <ComboboxContent>
                <ComboboxEmpty>{emptyText}</ComboboxEmpty>

                <ComboboxList>
                    {(item) => (
                        <ComboboxItem key={item.value} value={item}>
                            {item.label}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}
