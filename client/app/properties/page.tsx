'use client'

import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import MyNav from "../components/Navbar";
import Property from "../components/cards/newProperty";
import SwitchTypes from "../components/cards/SwitchType";
import Footer from "../components/Footer";

export default function Home() {

  const [properties, setProperties] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(`${process.env.SERVER_DOMAIN}/properties`)
      .then(res => {
        setProperties(res.data.properties);
      });
  }, []);

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredProperties = properties.filter((property: any) =>
    (selectedLocation ? property.location.includes(selectedLocation) : true) &&
    (searchQuery ? property.building_name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
  );

  return (
    <div>
      <MyNav />
      <SwitchTypes />
      <form className="flex items-center max-w-2xl mx-auto">
        <label className="sr-only">Search</label>
        <div className="relative w-full mx-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-blueTheme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-blueTheme text-gray-900 text-sm rounded-xl focus:ring-blueTheme-500 focus:border-blueTheme block w-full ps-10 p-2.5" placeholder="Search Property..." required
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </form>

      <div className="my-4 mx-4 lg:mx-28 w-full md:w-1/2">
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">Location</label>
        <select
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueTheme-500 focus:border-blueTheme block w-full p-2.5"
        >
          <option value=""><em>All Locations</em></option>
          <option value={`Bangalore`}>Bengaluru</option>
          <option value="Pune">Pune</option>
          {/* Add more locations as needed */}
        </select>
      </div>

      <section className="my-8 mx-4 lg:mx-28 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredProperties.map((property: any, index) => (
          <div key={index} className="mx-auto">
            <Property
              name={property.building_name}
              image={property.images[0]}
              location={property.location}
              funded={"8"}
              invamt={property.minimum_investment}
              irr={property.irr}
            />
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
