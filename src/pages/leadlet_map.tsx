// MapComponent.tsx
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngBoundsExpression } from "leaflet";

// Define prop types for CustomMarker
interface CustomMarkerProps {
  position: [number, number];
  thumbnail: string;
  price: number;
  details: {
    title: string;
    description: string;
    rating: number;
    reviews: number;
    dates: string;
  };
}

const createCustomIcon = (price: number) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="background: #de3151; color: white; font-weight: bold; border: 5px ; border-radius: 20px; padding: 2px; text-align: center;">
        ₹${price}
      </div>
    `,
    iconSize: [50, 40],
    iconAnchor: [25, -5], // Adjust as needed to anchor the icon properly
  });
};

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, thumbnail, price, details }) => {
  const icon = createCustomIcon(price);
  return (
    <Marker position={position} icon={icon}>
      <Popup>
        <div style={{ textAlign: "center" }}>
          <img src={thumbnail} alt="Hotel" style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }} />
          <div>
            <h3>{details.title}</h3>
            <p>{details.description}</p>
            <p>₹{price} night • {details.dates}</p>
            <p>⭐ {details.rating} ({details.reviews})</p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

// Define the props for MapComponent
interface MapComponentProps {
  hotels: {
    id: number;
    coordinates: [number, number];
    thumbnail: string;
    price: number;
    details: {
      title: string;
      description: string;
      rating: number;
      reviews: number;
      dates: string;
    };
  }[];
}

const MapComponent: React.FC<MapComponentProps> = ({ hotels }) => {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (mapRef.current && hotels.length > 0) {
      const bounds: LatLngBoundsExpression = hotels.map(hotel => hotel.coordinates);
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [hotels]);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        ref={mapRef}
        center={[12.9716, 77.5946]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {hotels.map(hotel => (
          <CustomMarker
            key={hotel.id}
            position={hotel.coordinates}
            thumbnail={hotel.thumbnail}
            price={hotel.price}
            details={hotel.details}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

// use different map style :
{/*
   <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
/>
 */}
