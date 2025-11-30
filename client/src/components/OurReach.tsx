import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Reveal } from './Reveal';

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
  
  const locations = [
    {
      id: 1,
      name: "TRUK HQ - Kigali",
      description: "Main Logistics Hub & Cold Storage",
      position: [-1.9441, 30.0619] as [number, number] 
    },
    {
      id: 2,
      name: "Rubavu Station",
      description: "Cross-border trade (DRC)",
      position: [-1.6763, 29.2536] as [number, number] 
    },
    {
      id: 3,
      name: "Huye Branch",
      description: "Southern Province Hub",
      position: [-2.6006, 29.7404] as [number, number] 
    },
    {
      id: 4,
      name: "Kayonza Depot",
      description: "Eastern Agriculture Collection",
      position: [-1.9526, 30.5130] as [number, number] 
    }
  ];

  const centerPosition: [number, number] = [-1.9441, 29.8739]; 

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-8">
            <Reveal width="100%">
                <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
                    Our Reach
                </h2>
            </Reveal>
        </div>

        {/* Map Container - Heavy element, so give it a nice slow reveal */}
        <Reveal width="100%" delay={0.2}>
            <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-200 relative z-0">
            <MapContainer 
                center={centerPosition} 
                zoom={9} 
                scrollWheelZoom={false} 
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
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
        </Reveal>

        {/* Bottom Text */}
        <Reveal width="100%" delay={0.4}>
            <p className="mt-8 text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            From our headquarters in Kigali to regional depots in Rubavu, Huye, and Kayonza, 
            we ensure your goods remain fresh across the entire country.
            </p>
        </Reveal>

      </div>
    </section>
  );
};

export default OurReach;