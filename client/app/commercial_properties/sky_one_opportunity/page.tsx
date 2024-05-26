'use client'

import Image from "next/image";
import MyNav from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

export default function PropertyDetails() {



  const images = [
    {
      image: "/siteimage1.png",
      alt: "visuals"
    },
    {
      image: "/siteimage2.png",
      alt: "visuals"
    },
    {
      image: "/siteimage3.png",
      alt: "visuals"
    }
  ]

  return (
    <div className="">
      <MyNav />
      <div className="max-w-screen-xl my-24 mx-auto">
        <Typography variant="h4" className="text-center my-8 font-extrabold tracking-tight text-blueTheme">Sky One Opportunity</Typography>
        <div className=" max-w-screen-sm lg:max-w-screen-xl mx-auto">
          <Image
            src={"/skyoneopportunity.png"}
            alt={"main"}
            width={1000}
            height={1000}
            className="object-contain mx-auto"
          />
        </div>
      </div>

      <div className="max-w-screen-xl my-24 mx-auto">
        <Typography variant="h3" className="text-center text-2xl lg:text-5xl font-extrabold tracking-tighter text-blueTheme">INVESTMENT DETAILS</Typography>
        <div className="grid grid-cols-4 gap-y-8 mt-16 max-w-screen-lg mx-auto">
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Building Name</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">Sky One Opportunity</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Asset Type</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">Grade A</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Investment Floor</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">13th Floor</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Lease Lock-in</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">December 2028</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Gross Entry Yield</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">9.6%</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Target IRR</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">15.1</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Sq.Ft</h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">58,661</p>
          </div>
          <div className="">
            <h1 className="text-md lg:text-xl  font-bold text-center text-gray-600">Minimum Investment </h1>
            <p className="text-lg lg:text-2xl font-bold text-center text-blueTheme">25 Lacs</p>
          </div>

        </div>

        <div className="grid grid-cols-2 mx-4 lg:mx-16 gap-x-8 mt-16 lg:mt-24">
          <div className="">
            <Typography variant="h5" className=" font-bold text-gray-600">Location and Tenant</Typography>
            <h1 className="text-gray-700">Strategic Location</h1>
            <h1 className="text-blueTheme font-bold">Viman Nagar, <br /> Pune[Airport Road]</h1>
            <hr className="w-1/3 my-4 " />
            <h1 className="text-gray-700">Fortune 600 Marquee Tenant</h1>
            <h1 className="text-blueTheme font-bold">Vertiv Energy</h1>
          </div>
          <div className="text-sm tracking-tighter text-gray-600 mx-2 lg:mx-8">
            <   Typography variant="h5" className=" font-bold text-blueTheme underline">Overview</Typography>
            <br />
            <p>
              A rare opportunity to invest
              in 58,661 Sq. Ft. of A+ Grade Office space in
              Viman Nagar, Pune. The proposed space is
              situated on the 9th floor of newly
              constructed Sky One Corporate Park
              Building. The asset is located in one of the
              most sought after office micro-market in
              Pune with proximity to Pune International
              Airport and an upcoming Metro line.
            </p>
            <br />
            <p>
              The tower houses numerous blueTheme Chip
              tenants. Our tenant, Vertiv Energy, has
              strategically expanded their footprint in the
              building, currently occupying in excess of
              1.2L Sq. Ft. with further plans on expanding.
              Vertiv is a Fortune 600 NYSE Listed Company
              with a market Capitalization of USD 20+
              Billion
            </p>
          </div>
        </div>
        <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className="mb-8 font-bold text-gray-600">Floor Plan</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
            <div className="col-span-2">
              <Image width={2000} height={2000} className="object-contain w-fit h-96" src={'/floorplansky.png'} alt="FloorPlan" />
            </div>
            <div className="col-span-1 mt-12 lg:mt-0 mx-8 lg:mx-0">
              <Typography variant="h5" className=" font-bold text-blueTheme ">Features</Typography>
              <ul className=" list-disc leading-1 lg:leading-10 list-outside">
                <li><h1><span className="text-blueTheme font-bold">High Floor Plate Efficiency: </span> Efficient design achieving 50%+ floor plate efficiency</h1></li>
                <li><h1>Designed with highest national & international Bylaws making it one of the <span className="text-blueTheme font-bold">Best EHS [Environment, Health and Safety] compliant project of Pune</span></h1></li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className=" font-bold text-gray-600">Property Visuals</Typography>
          <div className="mx-auto mt-8 w-full">
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
        <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className=" font-bold text-gray-600">Purchase Details</Typography>
          <Typography><span className="text-blueTheme font-bold">Note: </span>Purchase Price Calculated with per sqft rate of 8,675</Typography>
          <div className="mx-auto mt-8">
            <div className="relative overflow-x-auto">
              <table className=" border border-black w-full text-sm text-left rtl:text-right text-gray-500 ">
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
                      Price Per Sq. Ft.
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      12,165
                    </td>
                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Area (Sq Ft.)
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      58,661
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Base Price
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      71,35,84,304
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Add: Stamp Duty and Registration
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      4,23,90,574
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Add : Acquisition Expenses
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      3,19,58,824
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Add : Reserve
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      50,26,978
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Add : Property/Municipality Tax
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      70,39,320
                    </td>

                  </tr>
                  <tr className=" ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Add : Legal Expenses
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      40,00,000
                    </td>

                  </tr>
                  <tr className="bg-blueTheme text-white">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                      Net Purchase price
                    </th>
                    <td className="px-3 lg:px-6 py-2 lg:py-4">
                      ₹ 80,40,00,000
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <div className=" mt-14 lg:mt-24 mx-4 lg:mx-16">
          <Typography variant="h5" className=" font-bold text-gray-600">Lease & Sale Comparables</Typography>
          <div className="mx-auto mt-8">
            <Typography variant="h5" className="font-bold text-2xl text-blueTheme">Lease Comparable</Typography>
            <Typography>The lease rental range lies between <span className="text-blueTheme font-bold">INR 90-105</span> in the market</Typography>
            <div className="relative overflow-x-auto mt-8">
              <table className=" border border-black w-full text-sm text-left rtl:text-right text-gray-900 ">
                <thead className="text-white uppercase bg-blueTheme ">
                  <tr>
                    <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Building</th>
                    <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Tenant</th>
                    <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Area(SF)</th>
                    <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Rent PSF Per Month (Leasable Area)</th>
                  </tr>
                </thead>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Panchshil Business Park</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Trans Union</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">63,048</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 93</th>
                </tr>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Panchshil Business Park</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Marvell</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">92,470</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 93</th>
                </tr>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Panchshil Business Park</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Tablespace</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">30,450</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 93</th>
                </tr>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Panchshil Business Park</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Tablespace</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">60,900</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 96</th>
                </tr>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Sky Vista</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Faber</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">9,800</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 102</th>
                </tr>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Marvel Edge [Solitaire]</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Plastic Omnium</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">12,872</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 103</th>
                </tr>
                <tr>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Nyati Empress</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Royal Apollo</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">2,218</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 104</th>
                </tr>
                <tr className="bg-blueTheme text-white">
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Our Rental</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium"></th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">58,661</th>
                  <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 95</th>
                </tr>
              </table>

              <Typography variant="h5" className="font-bold text-blueTheme mt-8">Sale Comparable</Typography>
              <Typography>The purchase price range between INR 13,000-15,000. Our Purchase price is at a <span className="text-blueTheme font-bold">-13.4% discount</span> to the prevailing market rate</Typography>
              <div className="relative overflow-x-auto mt-8">
                <table className=" border border-black w-full text-sm text-left rtl:text-right text-gray-900 ">
                  <thead className="text-white uppercase bg-blueTheme ">
                    <tr>
                      <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Building</th>
                      <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Tenant</th>
                      <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Area(SF)</th>
                      <th scope="col" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Rent PSF Per Month (Leasable Area)</th>
                    </tr>
                  </thead>
                  <tr>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Marvel Edge [Solitaire]</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Manpreet Singh Uppal</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">6,801</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 12,919</th>
                  </tr>
                  <tr>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Marvel Edge [Solitaire]</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Nilesh Jagannath Nazare</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">4,008</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 14,619</th>
                  </tr>
                  <tr>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Marvel Edge [Solitaire]</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Deepak Keshav Agarwal</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">1.955</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 12,207</th>
                  </tr>
                  <tr>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Amar Tech Center</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Northstar & Fortuna</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">53,210</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 13,907</th>
                  </tr>
                  <tr className="bg-blueTheme text-white">
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">Our Purchase</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium"></th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">58,661</th>
                    <th scope="row" className="px-3 lg:px-6 py-2 lg:py-4 text-center font-medium">INR 12,165</th>
                  </tr>
                </table>
              </div>

            </div>
          </div>

        </div>


      </div>
      <Footer />
    </div>
  );
}
