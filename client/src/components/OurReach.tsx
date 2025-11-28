import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const OurReach = () => {
  
  // 1. DEFINE YOUR 4 LOCATIONS HERE
  // You can get these numbers from Google Maps by right-clicking a spot
  const locations = [
    {
      id: 1,
      name: "TRUK HQ - Kigali",
      description: "Main Logistics Hub & Cold Storage",
      position: [-1.9441, 30.0619] as [number, number] // Kigali
    },
    {
      id: 2,
      name: "Rubavu Station",
      description: "Cross-border trade (DRC)",
      position: [-1.6763, 29.2536] as [number, number] // Rubavu
    },
    {
      id: 3,
      name: "Huye Branch",
      description: "Southern Province Hub",
      position: [-2.6006, 29.7404] as [number, number] // Huye
    },
    {
      id: 4,
      name: "Kayonza Depot",
      description: "Eastern Agriculture Collection",
      position: [-1.9526, 30.5130] as [number, number] // Kayonza
    }
  ];

  // Center the initial view roughly in the middle of Rwanda
  const centerPosition: [number, number] = [-1.9441, 29.8739]; 

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight mb-8">
          Our Reach
        </h2>

        {/* Map Container */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-200 relative z-0">
          <MapContainer 
            center={centerPosition} 
            zoom={9} 
            scrollWheelZoom={false} 
            style={{ height: "100%", width: "100%" }}
          >
            {/* The Map Tiles */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* 2. LOOP THROUGH LOCATIONS TO CREATE PINS */}
            {locations.map((loc) => (
              <Marker key={loc.id} position={loc.position}>
                <Popup className="text-center">
                  <strong className="text-trukGreen text-sm block mb-1">{loc.name}</strong>
                  <span className="text-gray-600 text-xs">{loc.description}</span>
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>

        <p className="mt-8 text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          From our headquarters in Kigali to regional depots in Rubavu, Huye, and Kayonza, 
          we ensure your goods remain fresh across the entire country.
        </p>

      </div>
    </section>
  );
};

export default OurReach;