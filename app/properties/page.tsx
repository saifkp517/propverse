'use client'

import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Tabs } from '@mui/base/Tabs';
import { styled } from '@mui/system';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { buttonClasses } from '@mui/base/Button';
import MyNav from "../components/Navbar";
import Property from "../components/cards/newProperty";
import SwitchTypes from "../components/cards/SwitchType";
import Footer from "../components/Footer";

const baseColor = '#0A66C2';

const blue = {
  50: '#0A66C20D', // 5% opacity
  100: '#0A66C21A', // 10% opacity
  200: '#0A66C233', // 20% opacity
  300: '#0A66C24D', // 30% opacity
  400: '#0A66C266', // 40% opacity
  500: '#0A66C2FF', // 100% opacity (fully opaque)
  600: '#0A66C2B3', // 70% opacity
  700: '#0A66C2CC', // 80% opacity
  800: '#0A66C2E6', // 90% opacity
  900: '#0A66C2FF', // 100% opacity (fully opaque, same as 500 for consistency)
};

const Tab = styled(BaseTab)`
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
    };
  `,
);


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

          <Tabs defaultValue={1}>
            <div className="mx-auto max-w-full sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
              <TabsList>
                <Tab value={1}>Commercial</Tab>
                <Tab value={2}>Residential</Tab>
                <Tab value={3}>Holiday</Tab>
              </TabsList>
              <br />
              <div className="flex gap-x-4">
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
              </div>
            </div>



            <TabPanel value={1}>
              <section className="my-10">
                {filteredProperties.map((property: any, index) => (
                  <div key={index} className="flex justify-center items-center flex-wrap w-full ">
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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
                    <div className=" m-5">
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


                  </div>
                ))}
              </section>
            </TabPanel>
            <TabPanel value={2}>
              <section className="my-10">
                {/* {filteredProperties.map((property: any, index) => (
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
                ))} */}
                <p className="text-blueTheme font-bold text-center">No Properties Listed Currently</p>
              </section>
            </TabPanel>
            <TabPanel value={3}>
              <section className="my-10">
                {/* {filteredProperties.map((property: any, index) => (
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
                ))} */}
                <p className="text-blueTheme font-bold text-center">No Properties Listed Currently</p>
              </section>
            </TabPanel>
          </Tabs>
        </div>

      </div>

      <Footer />
    </div>
  );
}
