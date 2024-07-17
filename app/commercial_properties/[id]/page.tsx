'use client'

import Image from "next/image";
import Link from "next/link";
import MyNav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Modal from 'react-modal';
import Carousel from 'react-material-ui-carousel'
import { Bar } from 'react-chartjs-2';
import { useState, useEffect, Component, useRef } from "react";
import axios from 'axios';
import { useSession } from "next-auth/react";
import { Chart as ChartJS, registerables, LinearScale, BarElement } from 'chart.js';
import chartTrendline from 'chartjs-plugin-trendline';
import { useParams } from 'next/navigation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Speedometer from "@/app/components/SpeedoMeter";

ChartJS.register(...registerables, ChartDataLabels, LinearScale, BarElement, chartTrendline);

class Calendly extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head!.appendChild(script);
  }

  componentWillUnmount() {
    // Cleanup if necessary
  }

  render() {
    return (
      <div>
        <div id="schedule_form">
          <div className="calendly-inline-widget" data-url="https://calendly.com/saifkhan501721/30min" style={{ minWidth: '320px', height: '700px' }} />
        </div>
      </div>
    );
  }
}

export default function PropertyDetails() {

  const { data: session, status } = useSession();
  // if (status === "unauthenticated") {
  //   window.location.href = "/"
  // }

  //calendly
  const subtitle = useRef<HTMLHeadingElement>(null);

  const [modalIsOpen, setIsOpen] = useState(false);

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

  const [investment, setInvestment] = useState(10); // Default investment in Lakhs
  const [irr, setIRR] = useState(10); // Default IRR in percentage
  const [period, setPeriod] = useState(5); // Default period in years
  const [returns, setReturns] = useState(0);

  const calculateReturns = () => {
    // Convert investment to Lakhs
    const investmentInCrores = investment / 100;

    // Calculate returns using a simplified formula (you may need to use a more complex formula for accurate IRR calculations)
    const calculatedReturns = investmentInCrores * Math.pow(1 + irr / 100, period);

    // Update state with calculated returns
    setReturns(calculatedReturns);
  };

  const handleInputChange = (e, type) => {
    calculateReturns();
    const value = parseFloat(e.target.value);
    switch (type) {
      case 'investment':
        setInvestment(value);
        break;
      case 'irr':
        setIRR(value);
        break;
      case 'period':
        setPeriod(value);
        break;
      default:
        break;
    }
  };

  const params = useParams();


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
    tenant_details: "",
    userId: "" 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/property/commercial/${params.id}`)
      .then((data: any) => {
        console.log(data.data.property)
        setDetails(data.data.property)
        setLoading(false);
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
      {
        loading ?
          (
            <div className="h-screen flex items-center justify-center">
              <div role="status" className="space-y-2.5 animate-pulse ">
                <div className="flex items-center w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full max-w-[480px]">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full max-w-[400px]">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full max-w-[480px]">
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full max-w-[440px]">
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div className="flex items-center w-full max-w-[360px]">
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                  <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                  <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>

            </div>


          )
          :
          (
            <div className="px-6 lg:px-20">
              <div className="mt-10 mx-auto">
                <h1 className="text-start text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-4xl ">{details.building_name}</h1>
                <h1 className="mt-2 text-gray-600">{details.location}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 space-x-10">
                  <div className="m-0 h-full col-span-2">
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
                  {/* <Speedometer riskPercentage={50} /> */}
                  <div className="my-auto">
                    <div className="rounded-3xl shadow-md bg-gray-50 border-blueTheme border lg:mt-0 h-fit lg:h-fit w-full p-1 lg:p-5">
                      <h1 className="font-bold text-xl tracking-tight mb-5">Calculate Your Investment</h1>

                      {/* Investment Input */}
                      <div className="mb-5">
                        <div className="flex justify-between">
                          <label className="block text-xs font-medium text-gray-900">Investment (in Lakhs)</label>
                          <label className="block text-xs font-medium text-gray-900">{investment} Lakhs</label>
                        </div>
                        <input
                          type="range"
                          min="25"
                          max="100"
                          value={investment}
                          onChange={(e) => handleInputChange(e, 'investment')}
                          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer border border-black"
                        />
                      </div>

                      {/* IRR Input */}
                      <div className="mb-5">
                        <div className="flex justify-between">
                          <label className="block text-xs font-medium text-gray-900">IRR (%)</label>
                          <label className="block text-xs font-medium text-gray-900">{irr}%</label>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={20}
                          value={irr}
                          onChange={(e) => handleInputChange(e, 'irr')}
                          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer border border-black"
                        />
                      </div>

                      {/* Period Input */}
                      <div className="mb-5">
                        <div className="flex justify-between">
                          <label className="block text-xs font-medium text-gray-900">Period (in years)</label>
                          <label className="block text-xs font-medium text-gray-900">{period} years</label>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={period}
                          onChange={(e) => handleInputChange(e, 'period')}
                          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer border border-black"
                        />
                      </div>

                      {/* Returns Display */}
                      <div className="flex justify-between my-5">
                        <h1 className="font-semibold text-xl tracking-tight">Returns:</h1>
                        <h1 className="font-bold text-xl tracking-tight">{Number(returns) > 1 ? returns.toFixed(2) + " Crores" : (Number(returns) * 100).toFixed(2) + " Lakhs"} </h1>
                      </div>

                      {/* Calculate Button */}
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={{
                          overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 50,
                          },
                          content: {
                            position: 'relative',
                            inset: 'auto',
                            width: '80%', // Adjust width as needed
                            maxWidth: '800px', // Ensures the modal doesn't get too wide
                            height: 'auto', // Adjust height as needed
                            maxHeight: '80vh', // Ensures the modal height is responsive
                            margin: 'auto',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '20px',
                            overflow: 'auto', // Prevents scrolling
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                          }
                        }}
                        contentLabel="Calendly"
                      >
                        <Calendly />
                      </Modal>
                      <button
                        onClick={openModal}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                      >
                        Interested?
                      </button>
                    </div>
                  </div>
                </div >
                <div className="my-10">
                  <h1 className=" text-blueTheme font-bold text-2xl mb-2 tracking-tight">Overview</h1>
                  <p className="text-md" dangerouslySetInnerHTML={{ __html: details.overview }} />

                </div>

                <div className="my-10">
                  <h1 className="tracking-tight text-2xl text-blueTheme font-bold mb-3">Highlights</h1>
                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full lg:w-2/3 rounded-3xl border-gray-100 border bg-gray-50 p-5">
                    {[
                      { label: "Building Name", value: details.building_name, icon: "M4 10V22H10V14H14V22H20V10L12 4L4 10Z" },
                      { label: "Asset Type", value: details.asset_type, icon: "M12 2L1 21H23L12 2Z" },
                      { label: "Investment Size", value: `${details.investment_size} sq.ft`, icon: "M12 7L3 11V17L12 21L21 17V11L12 7Z" },
                      { label: "Lease Lock-in", value: details.lockin, icon: "M12 2L1 21H23L12 2ZM12 16.5L7 21H17L12 16.5Z" },
                      { label: "Gross Entry Yield", value: `${details.entry_yeild}%`, icon: "M3 11H21V13H3V11Z" },
                      { label: "Target IRR", value: `${details.irr}%`, icon: "M13 12H21V14H13V12ZM3 6H15V8H3V6ZM3 18H15V20H3V18Z" },
                      { label: "Multiplier", value: `${details.multiplier}x`, icon: "M3 11H21V13H3V11Z" },
                      { label: "Minimum Investment", value: `${details.minimum_investment} Lacs`, icon: "M12 3C6.48 3 2 7.48 2 13C2 18.52 6.48 23 12 23C17.52 23 22 18.52 22 13C22 7.48 17.52 3 12 3ZM12 21C7.59 21 4 17.41 4 13C4 8.59 7.59 5 12 5C16.41 5 20 8.59 20 13C20 17.41 16.41 21 12 21ZM11 7H13V14H11V7ZM11 17H13V19H11V17Z" }
                    ].map((item, index) => (
                      <div className="flex items-center" key={index}>
                        <div className="bg-gray-200 rounded-full h-fit w-fit p-2 flex justify-center items-center mr-2">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d={item.icon}></path>
                          </svg>
                        </div>
                        <div className="flex flex-col h-16 w-fit justify-around">
                          <h1 className="text-xs font-semibold text-start text-gray-600 truncate">{item.label}</h1>
                          <p className="text-xl leading-tight font-bold text-start text-blueTheme">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="my-10 block">
                  <h1 className="tracking-tight text-2xl text-blueTheme font-bold mb-2">Tenant Details</h1>
                  <h1 className="text-gray-800 font-bold">{details.tenant}</h1>
                  <br />
                  <p className="text-md" dangerouslySetInnerHTML={{ __html: details.tenant_details }} />
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
                                        display: false
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
                                        label: '',
                                        data: chartData.values.map((value: string) => parseFloat(value)),
                                        backgroundColor: ['rgba(54, 162, 235, 0.6)'],
                                        borderColor: ['#4287f5'],
                                        borderWidth: 2,
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
                      } else if (key.startsWith('amenities-')) {
                        const logoList = details.additional[key].data;
                        if (logoList) {
                          return (
                            <div key={key} className="border-black hover:border p-2 hover:rounded-lg">
                              <div className="relative w-full h-full">
                                <h1 className='font-bold text-lg text-green-500'>{details.additional[key].heading}</h1>
                                <p className=''>{details.additional[key].description}</p>
                                <ul className="space-y-4">
                                  {logoList.map((item: any, index: number) => (
                                    <li key={index} className="flex items-center p-1 border border-transparent">
                                      <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d={item.logo} />
                                      </svg>
                                      <p>{item.description}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                          )
                        }
                      }
                      return null; // Return null if chart data is not available
                    })
                  }

                </div>


              </div >

              <div className="my-24 mx-auto">

              </div>
            </div>
          )
      }

    </div >

  );
}
