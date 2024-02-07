import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Assicurati di importare lo stile CSS di Leaflet
import apepugi from "../apepugi.png";
// Definizione dell'icona personalizzata

const customIcon = L.icon({
  iconUrl: apepugi, // Utilizza la variabile importata per l'iconUrl
  iconSize: [85, 85], // Adatta queste dimensioni secondo le necessità
  iconAnchor: [40, 79], // Centra l'icona rispetto alla posizione del marker
  popupAnchor: [0, -35], // Ajusta la posizione del popup se necessario
});

const MyMap = () => {
  const position = [43.345994, 12.9189]; // Esempio di coordinate

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%", border: "7px solid #FFD700" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Pugilistica Fabrianese</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
