import React, { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
    const wareHouses = useLoaderData();
    console.log(wareHouses)
    const position = [23.685, 90.3563];
    const mapRef = useRef(null)
    const handleSearch = e =>{
      e.preventDefault();
      const location = e.target.location.value;
      const district = wareHouses.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
      if(district){
        const coord = [district.latitude, district.longitude];
        mapRef.current.flyTo(coord,12,{
          duration: 1.5
        })
      }
    }
  return (
    <div className="my-10">
      <div className="p-10">
        <h2 className="text-2xl font-semibold">
          We are available in 64 districts
        </h2>

        <div className="my-4">
          <form action="" onSubmit={handleSearch}>
            <label className="input rounded-2xl outline-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input type="search" name="location" placeholder="Search" />

            <button type="submit"  className="btn btn-primary text-black -mr-3 rounded-2xl">
              Search
            </button>
          </label>
          </form>
          
        </div>

        {/* Map */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden">
          <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="w-full h-full"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                wareHouses.map(houses => <Marker position={[houses.latitude, houses.longitude]}>
              <Popup>
                <strong>{houses.city}</strong> <br />
                Service Area : {houses.covered_area.join(", ")}
              </Popup>
            </Marker>)
            }
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;