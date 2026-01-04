import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
    lat: number
    lng: number
}

export default function MapView ({lat, lng}:Props){
    return(
        <MapContainer center={[lat, lng]} zoom={13} className="map">
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <Marker position={[lat, lng]} />
        </MapContainer>
    )
}