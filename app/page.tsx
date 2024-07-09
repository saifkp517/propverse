'use client'

import Image from "next/image";
import React, { useRef, useEffect, useState, Component, Suspense } from 'react';
import Link from "next/link";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Head from 'next/head';
import Modal from 'react-modal';
import MyNav from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/cards/newProperty";
import { Typography } from "@mui/material";
import RecentlyAdded from "./components/sections/RecentlyAdded";
import OurPartners from "./components/sections/OurPartners";
import OurServices from "./components/sections/OurServices";
import { useSession } from "next-auth/react";

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


export default function Home() {

  const { data: session, status } = useSession();

  console.log(status)

  //calendly
  const subtitle = useRef<HTMLHeadingElement>(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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

  //marquee
  useEffect(() => {
    const targets = document.querySelectorAll(".logo-container img");
    const numberOfTargets = targets.length;
    const duration = 0.7;
    const pause = 0.75; // change this
    const stagger = duration + pause;
    const repeatDelay = stagger * (numberOfTargets - 1) + pause;

    // Postion all the elments just outside of teh container and set their scale to 0
    gsap.set(targets, {
      xPercent: 200,
      scale: 0
    });

    // Timeline with default duration
    const tl = gsap.timeline({
      defaults: {
        duration: duration
      }
    });

    // Animation #1
    tl.to(targets, {
      xPercent: "-=100", // move from it's current postion 1 postion over
      scale: 1,
      transformOrigin: "center left", // set the scale  to come from from the correct side 
      stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: repeatDelay
      }
    });

    // Animation #2
    tl.to(
      targets,
      {
        xPercent: "-=100", // move from it's current postion 1 postion over
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        }
      },
      stagger // start when the first has animated
    );

    // Animation #3
    tl.to(
      targets,
      {
        xPercent: "-=100", // move from it's current postion 1 postion over

        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        }
      },
      stagger * 2 // start when the second has animated
    );

    // Animation #4
    tl.to(
      targets,
      {
        xPercent: "-=100", // move from it's current postion 1 postion over
        transformOrigin: "center right", // change the scale  to come from from the correct side 
        scale: 0,
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        }
      },
      stagger * 3 // start when the third has animated
    );

  }, [])

  const features = [
    {
      name: 'Why Fractional Ownership?',
      points:
        ['Introduction to fractional Ownership', 'Reasons for choosing fractional ownership', 'Legal & Regulatory Aspects of fractional ownership', 'Types of fractional ownership']
    },
    {
      name: 'Why PropertyVerse?',
      points:
        ['PropertyVerse - A one stop destination for all your fractional ownership needs', 'Streamlined access to diverse fractional ownership platforms', 'Credit Risk Analysis Report of every Project', 'Educational Content & Guides']
    },
    {
      name: 'Why to Invest?',
      points:
        ['Wealth diversification through fractional ownership', 'Access to high-value assets with lower capital', 'Enjoy financial returns of premium real estate', 'Access to nation-wide micro-markets']
    },
  ]

  return (
    <div className="">
      <section>

        <div className="max-h-screen max-w-screen-xl xl:mx-auto grid grid-cols-1 lg:grid-cols-2 mx-2">
          {/* Beautiful UI Design awaits */}
          <div className="lg:mx-auto py-0 lg:py-20 px-6">
            <h2 className="text-lg font-bold leading-7 bg-gradient-to-r from-blueTheme to-green-700 text-transparent inline-block bg-clip-text">PropertyVerse</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Own a Slice of Luxury: Fractional Real Estate Investment</p>
            <p className="my-5 font-semibold text-sm  text-gray-800">Unlock your dream property with Fractional Ownership: Invest in luxury real estate for a fraction of the cost and enjoy exclusive benefits!</p>
            <a href="/properties"><button type="button" className="focus:outline-none text-white hover:text-blueTheme bg-blueTheme hover:bg-transparent hover:ring-1 hover:ring-blueTheme duration-300/ font-medium rounded-xl text-sm px-5 py-2.5 ">Explore Properties</button></a>
          </div>
          {/* <div className="lg:mx-auto py-0 lg:py-20 px-6">
            <h1 className="text-blueTheme text-7xl lg:text-6xl font-medium lg:font-semibold tracking-tighter">Property<br /><span className="text-green-700">Verse</span></h1>
            <p className="mt-4 ml-2 my-5 text-md font-semibold text-gray-800">Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike.</p>
            <a href="/properties"><button type="button" className="focus:outline-none text-white hover:text-blueTheme bg-blueTheme hover:bg-transparent hover:ring-1 hover:ring-blueTheme duration-300/ font-medium rounded-xl text-sm px-5 py-2.5 ">Explore Properties</button></a>
          </div> */}
          <div className="lg:mx-auto flex items-center justify-center">
            <Image
              alt="bg"
              src={"/main.gif"}
              width="0"
              unoptimized
              height="0"
              sizes="100vw"
              className="w-full h-auto "
            />
          </div>
        </div>
      </section>
      <br />
      <section className="mb-20">
        <OurPartners />
      </section>
      <section>
        <RecentlyAdded />
      </section>
      <section className="bg-blue-50 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 mx-auto max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-blueTheme">Projected Market Size</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Real Estate Of <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-orange-500 via-white to-green-400 inline-block text-transparent bg-clip-text">India</span>
            </p>
            <p className="mt-6 text-md tracking-tight leading-8 text-gray-700">
              Efficiently growing and contributing significantly to the GDP, the real estate industry in India is poised for substantial expansion. This growth is driven by rapid urbanization, increasing foreign investments, and supportive government policies and reforms, setting the stage for the industry to reach a market size of $650 billion by 2025.
            </p>
          </div>
          <div className="p-10 mx-auto">
            <div className="flex">
              <div className="grid grid-cols-2">
                <div className="inline-block p-2 lg:p-10">
                  <h1 className="text-4xl font-semibold text-gray-700 tracking-tighter">$650 Billion</h1>
                  <p className="text-sm  text-gray-600">Expected Market Size by 2025</p>
                </div>
                <div className="inline-block p-2 lg:p-10">
                  <h1 className="text-4xl font-semibold text-gray-700 tracking-tighter">13%</h1>
                  <p className="text-sm  text-gray-600">Contribution to GDP by 2025</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="grid grid-cols-2">
                <div className="inline-block p-2 lg:p-10">
                  <h1 className="text-4xl font-semibold text-gray-700 tracking-tighter">$200 Billion</h1>
                  <p className="text-sm  text-gray-600">Market Size in 2021</p>
                </div>
                <div className="inline-block p-2 lg:p-10">
                  <h1 className="text-4xl font-semibold text-gray-700 tracking-tighter">19.5%</h1>
                  <p className="text-sm  text-gray-600">Annual Growth Rate (2017-2028)</p>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className="p-10">
              <Image alt="returns" src={"/howitworks.jpg"} height={1000} width={1000} className=" object-contain w-full rounded-xl" />
            </div>
          </div>
          <div className="p-10 mx-auto max-w-2xl">
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </p>
            <br />

            {/* Accordion */}
            <Accordion placeholder={undefined} open={open === 1}>
              <AccordionHeader placeholder={undefined} className={open == 1 ? "font-bold" : "text-gray-700"} onClick={() => handleOpen(1)}>Invest With Ease</AccordionHeader>
              <hr className="border-b border-gray-300" />
              <AccordionBody>
                <div className="space-y-2">
                  <h1 className="text-xl font-bold text-gray-900">Seamless and Secure Investment Process.</h1>
                  <ul className=" list-disc font-medium space-y-3">
                    <li><a href="/login" className="font-semibold text-blueTheme">Log In/Sign Up: </a> Access your account to start investing.</li>
                    <li><a href="/properties" className="font-semibold text-blueTheme">Fill KYC Form: </a>  Complete your KYC process to get started.</li>
                  </ul>
                  
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion placeholder={undefined} open={open === 2}>
              <AccordionHeader placeholder={undefined} className={open == 2 ? "font-bold" : "text-gray-700"} onClick={() => handleOpen(2)}>Choose Your Property</AccordionHeader>
              <hr className="border-b border-gray-300" />
              <AccordionBody>
              <div className="space-y-2">
                  <h1 className="text-xl font-bold text-gray-900">Find your perfect investment.</h1>
                  <p className=" font-medium">Browse our curated list of premium real estate properties. Each listing includes detailed information, images, and investment terms to help you make an informed decision.</p>
                  <br />
                  <ul className=" list-disc text-blueTheme font-semibold">
                    <li><a href="#">View Available Properties</a></li>
                  </ul>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion placeholder={undefined} open={open === 3}>
              <AccordionHeader placeholder={undefined} className={open == 3 ? "font-bold" : "text-gray-700"} onClick={() => handleOpen(3)}>Maximize Your Returns</AccordionHeader>
              <hr className="border-b border-gray-300" />
              <AccordionBody>
                <div className="space-y-2">
                  <h1 className="text-xl font-bold text-gray-900">Enjoy The Benefits Of Ownership.</h1>
                  <p className=" font-medium">As a fractional owner, you'll receive:</p>
                  <br />
                  <ul className=" list-disc font-medium space-y-3">
                    <li><span className="font-semibold text-green-700">Rental Income: </span> Earn a share of the rental income generated by your property.</li>
                    <li><span className="font-semibold text-green-700">Property Appreciation: </span> Benefit from potential property value increases over time.</li>
                    <li><span className="font-semibold text-green-700">Persnal Usage: </span> Enjoy personal use of the property during designated times, enhancing your investment experience..</li>
                  </ul>
                </div>
              </AccordionBody>
            </Accordion>
            
          </div>

        </div>


      </section>

      <section className="my-20 mx-8">
        <div className="bg-blueTheme text-white p-8 md:p-12 lg:p-16 rounded-3xl m-0 md:m-8 grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <Typography variant="h3" className="font-bold mb-10 ">Why Choose Us?</Typography>
            <p className="max-w-sm leading-8">
              Our expert team ensures each property aligns with profitability and caters to various investor preferences.
              Whether it's residential, commercial, or vacation
              properties, we tailor our offerings to meet your specific financial goals for a customized investment experience.
            </p>
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

            <button onClick={openModal} type="button" className="focus:outline-none text-blueTheme hover:text-blueTheme bg-white   font-bold rounded-xl text-sm my-8 px-8 py-3 ">CONTACT US</button>
          </div>
          <div className="hidden lg:block h-96">
            <Image alt="whychooseusgid" className="w-full h-full object-contain" unoptimized height={1000} width={1000} src={"/whychooseus.gif"} />
          </div>
        </div>
      </section>


    </div>
  );
}
