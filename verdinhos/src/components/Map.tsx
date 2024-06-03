import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrige o problema do ícone do marcador (opcional)
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Erro ao obter localização: ", error);
          // Definir uma posição padrão em caso de erro (opcional)
          setPosition([-23.55052, -46.633308]);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );

      // Limpar o watchId quando o componente for desmontado
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
      // Definir uma posição padrão em caso de não suporte (opcional)
      setPosition([-23.55052, -46.633308]);
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {position ? (
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Sua localização atual. <br /> Atualizada em tempo real.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Obtendo localização...</p>
      )}
    </div>
  );
};

export default Map;
