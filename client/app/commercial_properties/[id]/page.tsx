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
import { useSession } from "next-auth/react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { useParams } from 'next/navigation';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(...registerables, ChartDataLabels);

export default function PropertyDetails() {

  const params = useParams();

  const { data, status } = useSession();
  console.log(data?.user)

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
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/property/${params.id}`)
      .then((data: any) => {
        setDetails(data.data.property)
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

  return (
    <div className="">
      <MyNav />
      <div className=" max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-24 mx-auto px-20">
        <h1 className="text-center mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-6xl ">{details.building_name}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="m-8 lg:m-0 col-span-2 ">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/${details.images[2]}`}
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
                        <p className="mt-2 text-gray-600">Preferred Time Slot for a meet</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >10:00 AM - 02:00 PM</button>
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >02:00 PM - 06:00 PM</button>
                          <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => alert("clicked")} >6:00 PM - 10:00 PM</button>
                        </div>

                        <br />
                        <p className=" mt-2 text-gray-600">Investment Amount</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
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

      <div className="my-24 mx-auto">
        <Typography variant="h3" className="text-center text-2xl lg:text-5xl font-extrabold tracking-tight text-blueTheme">Investment Details</Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 mt-8 max-w-screen-sm  lg:max-w-screen-lg mx-6 lg:mx-auto border-2 p-2 lg:p-10 border-blue-300 rounded-lg ">
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

        <div className="grid grid-cols-2 mx-auto  max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-center gap-x-8 mt-16 lg:mt-24">
          <div className="">
            <Typography variant="h5" className=" font-bold text-gray-600">Location and Tenant</Typography>
            <h1 className="text-gray-700">Strategic Location</h1>
            <h1 className="text-blueTheme font-bold">{details.location}</h1>
            <hr className="w-1/3 my-4 mx-auto border-gray-500" />
            <h1 className="text-gray-700">Marquee Tenant</h1>
            <h1 className="text-blueTheme font-bold">{details.tenant}</h1>
          </div>
          <div className="text-md tracking-tighter text-gray-950 mx-2 lg:mx-8">
            <   Typography variant="h5" className=" font-bold text-blueTheme underline">Overview</Typography>
            <br />
            <p>{details.overview}</p>
          </div>
        </div>

        <div className="text-center mt-14 lg:mt-24  max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <h1 className=" font-bold text-4xl  text-gray-600">Property Visuals</h1>
          <div className="mx-auto mt-2 w-full -z-20">
            <Carousel>
              {
                details.images.map((image) => (
                  <div key={image} className=" h-144   w-full ">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/${image}`}
                      alt={image}
                      width={1000}
                      height={1000}
                      className="object-contain w-full h-full"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
        <div className="chart p-4 my-20  max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          {
            Object.keys(details.additional).reverse().map(key => {
              if (key.startsWith("chart-")) {
                const chartData = details.additional[key].data;
                if (chartData && chartData.labels && chartData.values) {
                  return (
                    <div key={key} className="my-20">
                      <h1 className="font-bold text-gray-600 text-3xl my-5">{details.additional[key].heading}</h1>
                      <p className="my-5 text-xl">{details.additional[key].description}</p>
                      <div className="mx-auto max-w-screen-lg">
                        <Bar
                          key="uniqueKey" // Ensure a unique key for each chart
                          options={{
                            scales: {
                              x: {
                                type: 'category'
                              }
                            },
                            responsive: true,
                            plugins: {
                              legend: {
                                position: 'top',
                                labels: {
                                  color: 'black' // Set font color for legend
                                }
                              },
                              title: {
                                display: true,
                                color: 'black', // Set font color for title
                                padding: 30,
                                fullSize: true,
                                font: {
                                  weight: 'bold',
                                  size: 24
                                }
                              },
                              datalabels: {
                                anchor: 'end',
                                align: 'top',
                                color: 'black', // Set font color for data labels
                                font: {
                                  size: 24
                                },
                                formatter: (value) => value.toString() // Convert the value to a string if needed
                              }
                            }
                          }}
                          data={{
                            labels: chartData.labels,
                            datasets: [
                              {
                                label: 'Returns',
                                data: chartData.values.map((value: string) => parseFloat(value)),
                                backgroundColor: ['#4287f5'],
                                barPercentage: 0.5,
                              },
                            ],
                          }}
                        />

                      </div>
                    </div>

                  );
                }
              }
              else if (key.startsWith("table-")) {
                const tableData = details.additional[key].data;
                if (tableData) {
                  return (
                    <div key={key} className="my-20 overflow-auto rounded-lg">
                      <h1 className="font-bold text-gray-600 text-3xl my-5">{details.additional[key].heading}</h1>
                      <p className="my-5 text-xl">{details.additional[key].description}</p>
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


      </div>
      <Footer />
    </div >
  );
}
