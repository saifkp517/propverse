'use client'

import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import { buttonClasses } from '@mui/base/Button';
import MyNav from "../components/Navbar";
import CommercialCard from "../components/cards/commercialCard";
import HolidayCard from "../components/cards/holidayCard";
import SwitchTypes from "../components/cards/SwitchType";
import Footer from "../components/Footer";

const tabs = [
  { title: 'Commercial', content: 'commercial' },
  { title: 'Holiday', content: 'holiday' },
];

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [commericalProperties, setCommercialProperties] = useState([]);
  const [holidayHomes, setHolidayHomes] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(1);


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/properties/commercial`)
      .then(res => {
        console.log(res.data.properties.filter((property: any) => property.funded !== 100));
        setCommercialProperties(res.data.properties.filter((property: any) => property.funded === 100));

        setLoading(false);
      });
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/properties/holiday`)
      .then(res => {
        setHolidayHomes(res.data.properties.filter((property: any) => property.funded === 100))
        setLoading(false)
      });
  }, []);

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  console.log(commericalProperties, holidayHomes)

  const filterCommertialProp = commericalProperties.filter((property: any) =>
    (selectedLocation ? property.location.includes(selectedLocation) : true) &&
    (searchQuery ? property.building_name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
  );
  const filterHolidayProp = holidayHomes.filter((property: any) =>
    (selectedLocation ? property.location.includes(selectedLocation) : true) &&
    (searchQuery ? property.building_name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
  );

  const renderContent = () => {
    const renderProperties = (properties, CardComponent) => (
      <div className="flex space-x-10">
        {properties.map((property, index) => {
          console.log(property); // Logs the property value
          return (
            <div className="">
              <CardComponent

                key={property.id || index}
                {...property}
              />
            </div>
          );
        })}
      </div>
    );

    const renderMessage = (message) => (
      <div className="flex justify-center items-center h-64">
        <p className="text-blueTheme font-bold text-xl">{message}</p>
      </div>
    );

    switch (activeTab) {
      case 0:
        return (
          <section className="my-10 p-6">
            {filterCommertialProp.length ?
              renderProperties(filterCommertialProp, CommercialCard) :
              renderMessage(loading ? "Loading..." : "No Commercial Properties Listed Currently")
            }
          </section>
        );
      case 1:
        return (
          <section className="my-10 p-6">
            {filterHolidayProp.length ?
              renderProperties(filterHolidayProp, HolidayCard) :
              renderMessage(loading ? "Loading..." : "No Holiday Properties Listed Currently")
            }
          </section>
        );
      case 2:
        return (
          <section className="my-10 p-6">
            {renderMessage("No Residential Properties Listed Currently")}
          </section>
        );
      default:
        return null;
    }
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      ))}
    </div>
  );


  return (
    <div>
      <div className="py-10">
        <div className="flex justify-between p-3 ">


          <div className="flex gap-x-4">

            {/* <select
              id="location"
              value={selectedLocation}
              onChange={handleLocationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueTheme-500 focus:border-blueTheme block w-full p-1"
            >
              <option value=""><em>All Locations</em></option>
              <option value={`Bangalore`}>Bengaluru</option>
              <option value="Pune">Pune</option>
            </select> */}
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
        <div className="mx-auto p-5">

          <div defaultValue={1}>
            <div className="mx-auto">
              <div className="w-full">
                <div className="relative right-0">
                  <ul className="relative flex flex-wrap p-1 gap-x-2 list-none rounded-lg bg-blue-gray-50/60" data-tabs="tabs" role="list">
                    {tabs.map((tab, index) => (
                      <li key={index} className="flex-auto text-center">
                        <a
                          className={`
                       flex items-center justify-center w-full px-4 py-2 mb-0 
                       transition-all duration-300 ease-in-out border-0 rounded-lg cursor-pointer 
                       ${activeTab === index
                              ? 'bg-blueTheme text-white shadow-md'
                              : 'text-slate-700 bg-transparent hover:bg-blue-100'}
                     `}
                          onClick={() => setActiveTab(index)}
                          role="tab"
                          aria-selected={activeTab === index}
                        >
                          <span className="ml-1 font-medium">{tab.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <br />
              <div className="flex gap-x-4">
                <form className="flex items-center w-full lg:w-1/3">
                  <label className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-xl focus:ring-blueTheme-500 focus:border-blueTheme block w-full ps-10 p-2.5" placeholder="Search Property..." required
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </form>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>

      </div>

    </div >
  );
}
