'use client'

import Image from "next/image";
import Link from "next/link";
import MyNav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Bar } from 'react-chartjs-2';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useSession } from "next-auth/react";
import { Chart as ChartJS, registerables, LinearScale, BarElement } from 'chart.js';
import chartTrendline from 'chartjs-plugin-trendline';
import { useParams } from 'next/navigation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import MyModal from "@/app/components/MyModal";
import Speedometer from "@/app/components/SpeedoMeter";

ChartJS.register(...registerables, ChartDataLabels, LinearScale, BarElement, chartTrendline);

export default function PropertyDetails() {

  const params = useParams();

  const { data, status } = useSession();
  console.log(data?.user)

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
      <div className="px-6 lg:px-20">
        <div className="mt-10 mx-auto">
          <h1 className="text-start text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-4xl ">{details.building_name}</h1>
          <h1 className="my-2 text-gray-600 mb-12">{details.location}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="m-0 h-full col-span-2 ">
              <Carousel>
                {
                  details.images.map((image) => (
                    <div key={image} className="h-64 lg:h-144 w-full ">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/${image}`}
                        alt={image}
                        width={1000}
                        height={1000}
                        className="object-contain w-full h-full mx-auto rounded-xl"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  ))
                }
              </Carousel>
            </div>
            <div className=" rounded-3xl shadow-md bg-gray-50 border-blueTheme border mt-10 lg:mt-0 h-fit lg:h-144 w-full p-5 lg:p-10">
              <h1 className="font-bold text-2xl tracking-tight mb-10">Calculate Your Investment</h1>

              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-900">Investment</label>
                <label className="block text-sm font-medium text-gray-900">Investment</label>
              </div>
              <input id="default-range" type="range" value="50" className="w-full h-3 mb-5 bg-gray-200 rounded-lg appearance-none cursor-pointer border border-black" />


              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-900">IRR</label>
                <label className="block text-sm font-medium text-gray-900">Investment</label>
              </div>
              <input id="default-range" type="range" value="" className="w-full h-3 mb-5 bg-gray-200 rounded-lg appearance-none cursor-pointer border border-black" />


              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-900">Period</label>
                <label className="block text-sm font-medium text-gray-900">Investment</label>
              </div>
              <input id="default-range" type="range" value="50" className="w-full h-3 mb-5 bg-gray-200 rounded-lg appearance-none cursor-pointer border border-black" />

              <div className="flex justify-between mt-5">
              <h1 className="font-semibold text-2xl tracking-tight mb-10">Returns:</h1>
              <h1 className="font-bold text-2xl tracking-tight mb-10">$ 24,00,000</h1>
              </div>

              <Speedometer riskPercentage={50} />
            </div>
          </div >
          <div className="my-10">
            <h1 className=" text-blueTheme font-bold text-2xl mb-2 tracking-tight">Overview</h1>
            <p className="text-md">{details.overview}</p>
          </div>

          <div className="my-10">
            <h1 className="tracking-tight text-2xl text-blueTheme font-bold mb-2">Highlights</h1>
            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full lg:w-2/3">
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 10V22H10V14H14V22H20V10L12 4L4 10Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Building Name</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.building_name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21H23L12 2Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Asset Type</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.asset_type}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7L3 11V17L12 21L21 17V11L12 7Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Investment Size</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.investment_size} sq.ft</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21H23L12 2ZM12 16.5L7 21H17L12 16.5Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Lease Lock-in</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.lockin}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 11H21V13H3V11Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Gross Entry Yield</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.entry_yeild}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 12H21V14H13V12ZM3 6H15V8H3V6ZM3 18H15V20H3V18Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Target IRR</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.irr}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 11H21V13H3V11Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Multiplier</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.multiplier}x</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center mr-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3C6.48 3 2 7.48 2 13C2 18.52 6.48 23 12 23C17.52 23 22 18.52 22 13C22 7.48 17.52 3 12 3ZM12 21C7.59 21 4 17.41 4 13C4 8.59 7.59 5 12 5C16.41 5 20 8.59 20 13C20 17.41 16.41 21 12 21ZM11 7H13V14H11V7ZM11 17H13V19H11V17Z"></path>
                  </svg>
                </div>
                <div className="block">
                  <h1 className="text-sm font-bold text-start text-gray-600">Minimum Investment</h1>
                  <p className="text-lg font-bold text-start text-blueTheme">{details.minimum_investment} Lacs</p>
                </div>
              </div>
            </div>

          </div>

          <div className="my-10 block">
            <h1 className="tracking-tight text-2xl text-blueTheme font-bold mb-2">Tenant Details</h1>
            <h1 className="text-gray-800 font-bold">{details.tenant}</h1>
          </div>

          <div className="chart mx-auto">
            {
              Object.keys(details.additional).reverse().map(key => {
                if (key.startsWith("chart-")) {
                  const chartData = details.additional[key].data;
                  if (chartData && chartData.labels && chartData.values) {
                    return (
                      <div key={key} className="lg:my-20">
                        <h1 className="font-bold text-gray-600 text-3xl my-5">{details.additional[key].heading}</h1>
                        <p className="my-5 text-xl">{details.additional[key].description}</p>
                        <div className="max-w-screen-lg h-[30vh] md:h-[50vh] lg:h-[70vh]">
                          <Bar
                            key="uniqueKey" // Ensure a unique key for each chart
                            options={{
                              scales: {
                                x: {
                                  type: 'category',
                                  ticks: {
                                    color: 'black', // color of the labels
                                  },
                                  grid: {
                                    display: false,
                                  },
                                },
                                y: {
                                  ticks: {
                                    color: 'black', // color of the labels
                                  },
                                  grid: {
                                    display: false,
                                  },
                                },
                              },
                              maintainAspectRatio: false,
                              responsive: true,
                              plugins: {
                                tooltip: {
                                  callbacks: {
                                    label: function (context) {
                                      let value = context.raw;
                                      return `${value}%`
                                    }
                                  }
                                },
                                legend: {
                                  position: 'top',
                                  labels: {
                                    color: 'black' // Set font color for legend
                                  }
                                },
                                title: {
                                  display: true,
                                  color: 'black', // Set font color for title
                                  fullSize: true,
                                  font: {
                                    weight: 'bold',
                                  }
                                },
                                datalabels: {
                                  anchor: 'end',
                                  align: 'top',
                                  color: 'black', // Set font color for data labels
                                  font: {
                                    size: 16,
                                  },
                                  formatter: (value) => value.toString() + '%' // Convert the value to a string if needed
                                }
                              }
                            }}
                            data={{
                              labels: chartData.labels,
                              datasets: [
                                {
                                  label: 'Returns',
                                  data: chartData.values.map((value: string) => parseFloat(value)),
                                  backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                                  borderColor: ['#4287f5'],
                                  borderWidth: 1,
                                  barPercentage: 0.5,
                                  categoryPercentage: 1,
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
                      <div key={key} className="my-20 rounded-lg">
                        <h1 className="font-bold text-gray-600 text-3xl my-5">{details.additional[key].heading}</h1>
                        <p className="my-5 text-xl">{details.additional[key].description}</p>
                        <div className="overflow-x-auto">
                          <table className="table-auto overflow-auto w-full border-collapse bg-white">
                            <tbody>
                              {tableData.map((row: any, rowIndex: number) => (
                                rowIndex == 0 ? (
                                  <tr key={rowIndex}>
                                    {row.map((cell: any, colIndex: number) => (
                                      <th className="border border-black bg-blue-500 text-white px-4 py-2" key={colIndex}>
                                        {cell}
                                      </th>
                                    ))}
                                  </tr>
                                )
                                  :
                                  (
                                    <tr key={rowIndex}>
                                      {row.map((cell: any, colIndex: number) => (
                                        <td className="border border-black px-4 py-2" key={colIndex}>
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  )
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  }

                }
                return null; // Return null if chart data is not available
              })
            }

          </div>


        </div >

        <div className="my-24 mx-auto">

        </div>
      </div >
      <Footer />

    </div>

  );
}
