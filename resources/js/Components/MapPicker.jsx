import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
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
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;

            setPosition({
                lat,
                lng,
            });
        },
    });

    return position ? <Marker position={[position.lat, position.lng]} /> : null;
}

export default function MapPicker({
    latitude,
    longitude,
    setLatitude,
    setLongitude,
}) {
    const [position, setPosition] = useState(
        latitude && longitude
            ? {
                  lat: latitude,
                  lng: longitude,
              }
            : {
                  lat: -6.9175,
                  lng: 107.6191,
              },
    );

    const handleSetPosition = (pos) => {
        setPosition(pos);

        setLatitude(pos.lat);
        setLongitude(pos.lng);
    };

    return (
        <div className="rounded-2xl overflow-hidden border">
            <MapContainer
                center={[position.lat, position.lng]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker
                    position={position}
                    setPosition={handleSetPosition}
                />
            </MapContainer>
        </div>
    );
}
