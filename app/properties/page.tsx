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
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/properties`)
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
      <div className="py-10 bg-gray-100">
        <div className="flex justify-between p-3 ">
          <form className="flex items-center w-1/3">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-xl focus:ring-blueTheme-500 focus:border-blueTheme block w-full ps-10 p-2.5" placeholder="Search Property..." required
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>

          <div className="flex gap-x-4">

            <select
              id="location"
              value={selectedLocation}
              onChange={handleLocationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueTheme-500 focus:border-blueTheme block w-full p-1"
            >
              <option value=""><em>All Locations</em></option>
              <option value={`Bangalore`}>Bengaluru</option>
              <option value="Pune">Pune</option>
              {/* Add more locations as needed */}
            </select>
            {/* <select
              id="location"
              value={selectedLocation}
              onChange={handleLocationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueTheme-500 focus:border-blueTheme block w-full p-1"
            >
              <option value=""><em>Sort By</em></option>
              <option value="Bangalore">IRR</option>
              <option value="Pune">Risk</option>
              <option value="Pune">Funded</option>
              Add more locations as needed
            </select> */}
          </div>
        </div>

        <section className="my-10">
          {filteredProperties.map((property: any, index) => (
            <div key={index} className="inline-block mx-5">
              <Property
                id={property.id}
                name={property.building_name}
                image={property.images[property.images.length - 1]}
                location={property.location}
                funded={property.funded}
                invamt={property.minimum_investment}
                irr={property.irr}
              />
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}
