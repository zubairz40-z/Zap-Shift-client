import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import L from "leaflet";

const Coverage = () => {
  const serviceCenters = useLoaderData(); // load JSON from loader
  const mapRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    const center = serviceCenters.find(
      c => c.district.toLowerCase() === searchTerm.toLowerCase()
    );
    if (center) {
      const map = mapRef.current;
      if (map) {
        map.flyTo([center.latitude, center.longitude], 12, { animate: true });
      }
      setError("");
    } else {
      setError("District not found");
    }
  };

  const defaultPosition = [23.8103, 90.4125]; // Dhaka center

  // Fix leaflet default marker icon
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 space-y-6">
      <h3 className="text-3xl font-bold text-secondary text-center">
        We are available in 64 districts
      </h3>

      {/* Search Box */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <div className="flex items-center  rounded-lg overflow-hidden shadow-sm w-full max-w-md">
          <CiLocationOn className="text-2xl text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Search by district"
            className="input input-bordered flex-grow focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn btn-primary rounded-lg" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Map */}
      <div className="w-full h-[700px] border rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={defaultPosition}
          zoom={7}
          scrollWheelZoom={true}
          className="w-full h-full"
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker
              key={index}
              position={[center.latitude, center.longitude]}
              title={center.district}
            >
              <Popup>
                <strong className="text-lg">{center.district}</strong>
                <br />
                <span className="text-sm text-gray-600">
                  Service Area: {center.covered_area.join(", ")}
                </span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
