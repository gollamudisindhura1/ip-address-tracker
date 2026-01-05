import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
    lat: number
    lng: number
    city: string
}

export default function MapView ({lat, lng, city}:Props){
    return(
        <MapContainer center={[lat, lng]} zoom={13} className="map">
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
             <Marker position={[lat, lng]}>
                <Popup>{city}</Popup>
             </Marker>

        </MapContainer>
    )
}