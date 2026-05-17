import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({ position, setPosition }) {
    useMapEvents({
        click(e) {
            setPosition({
                lat: e.latlng.lat,
                lng: e.latlng.lng,
            });
        },
    });

    return <Marker position={[position.lat, position.lng]} />;
}

export default function MapPicker({
    latitude,
    longitude,
    setLatitude,
    setLongitude,
}) {
    const [darkMode, setDarkMode] = useState(false);

    const [position, setPosition] = useState({
        lat: latitude || -6.9175,
        lng: longitude || 107.6191,
    });

    useEffect(() => {
        const html = document.documentElement;

        const checkDark = () => {
            setDarkMode(html.classList.contains("dark"));
        };

        checkDark();

        const observer = new MutationObserver(checkDark);

        observer.observe(html, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const handleSetPosition = (pos) => {
        setPosition(pos);

        setLatitude(pos.lat);
        setLongitude(pos.lng);
    };

    return (
        <div className="overflow-hidden rounded-2xl border">
            <MapContainer
                center={[position.lat, position.lng]}
                zoom={13}
                style={{
                    height: "400px",
                    width: "100%",
                }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url={
                        darkMode
                            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }
                />

                <LocationMarker
                    position={position}
                    setPosition={handleSetPosition}
                />
            </MapContainer>
        </div>
    );
}
