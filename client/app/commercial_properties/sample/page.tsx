'use client'

import Image from "next/image";
import Link from "next/link";
import MyNav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Bar } from 'react-chartjs-2';
import { useState, useEffect, useRef } from "react";
import Modal from 'react-modal';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function PropertyDetails() {

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const subtitle = useRef<HTMLHeadingElement>(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  type DetailsType = {
    additional: any;
    asset_type: string;
    building_name: string;
    entry_yeild: string;
    floorplan: string | null;
    id: string;
    images: string[];
    investment_size: string;
    irr: string;
    location: string;
    lockin: string;
    minimum_investment: string;
    multiplier: string;
    overview: string;
    tables: any | null;
    tenant: string;
    tenant_details: any | null;
    userId: string;
  };

  const [details, setDetails] = useState<DetailsType>({
    additional: { table: [] },
    asset_type: "",
    building_name: "",
    entry_yeild: "",
    floorplan: null,
    id: "",
    images: [],
    investment_size: "",
    irr: "",
    location: "",
    lockin: "",
    minimum_investment: "",
    multiplier: "",
    overview: "",
    tables: null,
    tenant: "",
    tenant_details: null,
    userId: ""
  });

  useEffect(() => {
    axios.get('http://localhost:8080/properties')
      .then((data: any) => {
        setDetails(data.data.properties[0])
        console.log(data.data.properties[0])
      })
      .catch(err => console.log(err))
  }, [])


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle.current) {
      subtitle.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    // You can add your logic for form submission here
  };

  const images = [
    {
      image: "/briagadetechpark1.png",
      alt: "visuals"
    },
    {
      image: "/briadetechpark2.png",
      alt: "visuals"
    },
    {
      image: "/briadetechpark3.png",
      alt: "visuals"
    },
    {
      image: "/briadetechpark4.png",
      alt: "visuals"
    },

  ]

  return (
    <div className="">
      <MyNav />
      <div className="max-w-screen-xl my-24 mx-auto">
        <h1 className="text-center mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-6xl ">{details.building_name}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="m-8 lg:m-0 col-span-2 ">
            <Image
              src={"/briagadetechpark1.png"}
              alt={"main"}
              width={1000}
              height={1000}
              className="object-contain mx-auto rounded-xl border-black border"
            />
          </div>
          <div className="">
            <h1 className=" font-bold text-2xl tracking-tight  o text-center text-gray-700">ENQUIRE NOW</h1>
            <div className="h-full text-center">
              <iframe className="mx-auto h-48 mt-6" src="https://lottie.host/embed/ceb864b7-efa4-43ab-8df9-05d32c8d3503/z0ZkrFx1D8.json"></iframe>
              <button className="bg-blueTheme border border-gray-600 rounded-lg py-2 px-4 text-white mt-8" onClick={openModal}>Interested?</button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  },
                  content: {
                    width: '90%',
                    zIndex: 50,
                    height: '70%', // Increased height
                    padding: '0',
                    marginTop: '5%',
                    borderRadius: '10px', // Adjust the value as needed
                    top: '50%', // Center vertically
                    transform: 'translateY(-50%)', // Center vertically
                  }
                }}
                contentLabel="Example Modal"
              >
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="container hidden lg:flex">
                      <Image alt="getintouch" src="/getintouch.jpg" height={1000} width={1000} className=" h-full object-fit" />
                    </div>
                    <div className=" col-span-2 p-12">
                      <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
                      <p className=" o mt-2 text-gray-600">Have an inquiry to discuss about project? Fill out the form our team will contact you</p>

                      <form action="" className="my-20">
                        <div className="grid grid-cols-2 space-x-4">
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                            <input type="text" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="First Name" required />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                            <input type="text" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="Last Name" required />
                          </div>
                        </div>
                        <br />
                        <div className="grid grid-cols-2 space-x-4 ">
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                            <input type="tel" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="First Name" required />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" />
                          </div>
                        </div>
                        <br />
                        <p className=" o mt-2 text-gray-600">Preferred Time Slot for a meet</p>
                        <div className="grid grid-cols-3 gap-x-3">
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >10:00 AM - 02:00 PM</button>
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >02:00 PM - 06:00 PM</button>
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >6:00 PM - 10:00 PM</button>
                        </div>

                        <br />
                        <p className=" o mt-2 text-gray-600">Investment Amount</p>
                        <div className="grid grid-cols-3 gap-x-3">
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >Upto 5 Lacs</button>
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >5 - 25 Lacs</button>
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >25+ Lacs</button>
                        </div>


                      </form>


                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div >
      </div >

      <div className="max-w-screen-xl my-24 mx-auto">
        <Typography variant="h3" className="text-center text-2xl lg:text-5xl font-extrabold tracking-tight text-blueTheme">Investment Details</Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 mt-16 max-w-screen-sm  lg:max-w-screen-lg mx-6 lg:mx-auto border-2 p-2 lg:p-10 border-blue-300 rounded-lg ">
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Building Name</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.building_name}</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Asset Type</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.asset_type}</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Investment Size</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.investment_size}</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Lease Lock-in</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.lockin}</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Gross Entry Yield</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.entry_yeild}%</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Target IRR</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.irr}</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Multiplier</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.multiplier}</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Minimum Investment </h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">{details.minimum_investment} Lacs</p>
          </div>

        </div>

        <div className="grid grid-cols-2 mx-4 lg:mx-16 gap-x-8 mt-16 lg:mt-24">
          <div className="">
            <Typography variant="h5" className=" font-bold text-gray-600">Location and Tenant</Typography>
            <h1 className="text-gray-700">Strategic Location</h1>
            <h1 className="text-blueTheme font-bold">{details.location}</h1>
            <hr className="w-1/3 my-4 " />
            <h1 className="text-gray-700">Marquee Tenant</h1>
            <h1 className="text-blueTheme font-bold">{details.tenant}</h1>
          </div>
          <div className="text-md tracking-tighter text-gray-950 mx-2 lg:mx-8">
            <   Typography variant="h5" className=" font-bold text-blueTheme underline">Overview</Typography>
            <br />
            <p>{details.overview}</p>
          </div>
        </div>
        <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className="mb-8 font-bold text-gray-600">Floor Plan</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
            <div className="col-span-2">
              <Image width={1500} height={1500} className="object-contain w-fit" src={'/floorplanbrigade.png'} alt="FloorPlan" />
            </div>
            <div className="col-span-1">
              <Typography variant="h5" className=" font-bold text-blueTheme ">Features</Typography>
              <ul className=" list-disc leading-1 lg:leading-10 list-outside">
                <li><h1>Stylish Reception Areas</h1></li>
                <li><h1>300 Roomy Workstations on Every Floor</h1></li>
                <li><h1>Well-Equipped Meeting spaces</h1></li>
                <li><h1>6-Seater Conference Rooms</h1></li>
                <li><h1>4-Seater Meeting Rooms</h1></li>
                <li><h1>10-Seater Conference Rooms</h1></li>
                <li><h1>Professional 22-Seater Board Room</h1></li>
                <li><h1>Classic Pantry Area</h1></li>
                <li><h1>Relaxing Wellness Room</h1></li>
                <li><h1>Convenient Male and Female Restrooms on Each Floor</h1></li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className=" font-bold text-gray-600">Property Visuals</Typography>
          <div className="mx-auto mt-8 w-full -z-20">
            <Carousel>
              {
                images.map((image) => (
                  <Image
                    key={image.image}
                    src={image.image}
                    alt={image.alt}
                    width={5000}
                    height={5000}
                    className="object-contain w-full"
                    draggable={false}
                    loading="lazy"
                  />
                ))
              }
            </Carousel>
          </div>
        </div>
        <div className="chart p-4 my-20">
          {
            Object.keys(details.additional).map(key => {
              if (key.startsWith("chart-")) {
                const chartData = details.additional[key];
                if (chartData && chartData.labels && chartData.values) {
                  return (
                    <Bar
                      key={key} // Make sure to set a unique key for each chart
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top' as const,
                          },
                          title: {
                            display: true,
                            color: 'black',
                            text: 'Rental Yield Growth',
                            padding: 10,
                            fullSize: true,
                            font: {
                              weight: 'bold',
                              size: 24
                            }
                          },
                        },
                      }}
                      data={{
                        labels: chartData.labels,
                        datasets: [
                          {
                            label: 'Growth Yield',
                            data: chartData.values.map((value: any) => parseInt(value)),
                            backgroundColor: ['#50C878', '#228B22'],
                            barPercentage: 0.5,
                          },
                        ],
                      }}
                    />
                  );
                }
              }
              else if (key.startsWith("table-")) {
                const tableData = details.additional[key];
                if (tableData) {
                  return (
                    <div className="my-4 overflow-auto rounded-lg border">
                      <table className="table-auto w-full border-collapse bg-white">
                        <tbody>
                          {tableData.map((row: any, rowIndex: number) => (
                            rowIndex == 0 ? (
                              <tr key={rowIndex}>
                                {row.map((cell: any, colIndex: number) => (
                                  <th className="border border-black bg-blue-500 text-white px-4 py-2" key={colIndex}>
                                    <input
                                      type="text"
                                      className="bg-transparent border-none w-full text-center"
                                      value={cell}
                                    />
                                  </th>
                                ))}
                              </tr>
                            )
                              :
                              (
                                <tr key={rowIndex}>
                                  {row.map((cell: any, colIndex: number) => (
                                    <td className="border border-black px-4 py-2" key={colIndex}>
                                      <input
                                        type="text"
                                        className="bg-transparent border-none w-full text-center"
                                        value={cell}
                                      />
                                    </td>
                                  ))}
                                </tr>
                              )
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

              }
              return null; // Return null if chart data is not available
            })
          }

        </div>
        {/* <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className=" font-bold text-gray-600">Purchase Details</Typography>
          <Typography><span className="text-blueTheme font-bold">Note: </span>Purchase Price Calculated with per sqft rate of 8,675</Typography>
          <div className="mx-auto mt-8">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-white uppercase bg-blueTheme">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Particulars
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Purhase Price
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      28,02,02,500
                    </td>
                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      + Stamp Duty
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      18,633,466
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      + Legal & Structuring Expenses
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      1,500,000
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      + Acquisition Fee
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      9,500,000
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      + Reserves
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      164,034
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Net Price
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      310,000,000
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>--- */}
        {/* <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
            <Typography variant="h5" className=" font-bold text-gray-600">Lease Overview</Typography>
            <div className="mx-auto mt-8">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-white uppercase bg-blueTheme">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Particulars
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Starting rental
                      </th>
                      <td className="px-3 lg:px-6 py-2 lg:py-4">
                        56
                      </td>
                    </tr>
                    <tr className=" ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Security deposit
                      </th>
                      <td className="px-3 lg:px-6 py-2 lg:py-4">
                        16279200
                      </td>

                    </tr>
                    <tr className=" ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Average rent/sft/month
                      </th>
                      <td className="px-3 lg:px-6 py-2 lg:py-4">
                        61.3
                      </td>

                    </tr>
                    <tr className=" ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Holding Period
                      </th>
                      <td className="px-3 lg:px-6 py-2 lg:py-4">
                        5 Years
                      </td>

                    </tr>
                    <tr className=" ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Average Annual Escalation
                      </th>
                      <td className="px-3 lg:px-6 py-2 lg:py-4">
                        5% YOY
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

          </div>
          <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
            <Typography variant="h5" className=" font-bold text-gray-600">CASH FLOWS</Typography>
            <div className="mx-auto mt-8">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-2 ">
                  <thead className="text-xs text-white uppercase bg-blueTheme">
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">YEAR 0</th>
                    <th className="px-6 py-3 border-x-2">YEAR 1 </th>
                    <th className="px-6 py-3 border-x-2">YEAR 2</th>
                    <th className="px-6 py-3 border-x-2">YEAR 3</th>
                    <th className="px-6 py-3 border-x-2">YEAR 4</th>
                    <th className="px-6 py-3 border-x-2">YEAR 5</th>
                  </thead>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Investment</th>
                    <th className="px-6 py-3 border-x-2">25,00,000</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2"></th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Total Rent</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">1,75,045</th>
                    <th className="px-6 py-3 border-x-2">1,78,171</th>
                    <th className="px-6 py-3 border-x-2">1,87,548</th>
                    <th className="px-6 py-3 border-x-2">2,03,490</th>
                    <th className="px-6 py-3 border-x-2">2,13,664</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2">Credit</th>
                    <th className="px-6 py-3 border-x-2">Car Park Rent</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">7,742</th>
                    <th className="px-6 py-3 border-x-2">7,935</th>
                    <th className="px-6 py-3 border-x-2">8,332</th>
                    <th className="px-6 py-3 border-x-2">8,535</th>
                    <th className="px-6 py-3 border-x-2">8,535</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Bonus</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">33,000</th>
                    <th className="px-6 py-3 border-x-2">12,500</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Interest on Deposits</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">9,282</th>
                    <th className="px-6 py-3 border-x-2">9,282</th>
                    <th className="px-6 py-3 border-x-2">9,282</th>
                    <th className="px-6 py-3 border-x-2">9,282</th>
                    <th className="px-6 py-3 border-x-2">9,282</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Gross Yield</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">2,25,070</th>
                    <th className="px-6 py-3 border-x-2">2,07,889</th>
                    <th className="px-6 py-3 border-x-2">2,05,163</th>
                    <th className="px-6 py-3 border-x-2">2,21,308</th>
                    <th className="px-6 py-3 border-x-2">2,31,482</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2">Debit</th>
                    <th className="px-6 py-3 border-x-2">Management Fee</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">-25,000</th>
                    <th className="px-6 py-3 border-x-2">-25,000</th>
                    <th className="px-6 py-3 border-x-2">-25,000</th>
                    <th className="px-6 py-3 border-x-2">-25,000</th>
                    <th className="px-6 py-3 border-x-2">-25,000</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Property tax &amp; Others</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">-7,460</th>
                    <th className="px-6 py-3 border-x-2">-7,460</th>
                    <th className="px-6 py-3 border-x-2">-7,460</th>
                    <th className="px-6 py-3 border-x-2">-7,460</th>
                    <th className="px-6 py-3 border-x-2">-7,460</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2">Returns</th>
                    <th className="px-6 py-3 border-x-2">Surplus Reserves</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">1,323</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Sale Proceeds</th>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">-</th>
                    <th className="px-6 py-3 border-x-2">36,73,320</th>
                  </tr>
                  <tr>
                    <th className="px-6 py-3 border-x-2"></th>
                    <th className="px-6 py-3 border-x-2">Net Cash Flow</th>
                    <th className="px-6 py-3 border-x-2">-25,00,000</th>
                    <th className="px-6 py-3 border-x-2">1,92,610</th>
                    <th className="px-6 py-3 border-x-2">1,75,429</th>
                    <th className="px-6 py-3 border-x-2">1,72,703</th>
                    <th className="px-6 py-3 border-x-2">1,88,848</th>
                    <th className="px-6 py-3 border-x-2">38,73,666</th>
                  </tr>
                </table>
              </div>
            </div>


          </div>-- */}

      </div>
      <Footer />
    </div >
  );
}
