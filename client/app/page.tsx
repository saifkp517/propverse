import Image from "next/image";
import Link from "next/link";
import MyNav from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/cards/newProperty";
import { Typography } from "@mui/material";
import RecentlyAdded from "./components/sections/RecentlyAdded";



export default function Home() {


  return (
    <div>
      <MyNav />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mx-4 lg:mx-auto py-0 lg:py-20 px-2 lg:px-44">
            <Typography variant="h1" className="text-blue text-4xl md:text-6xl lg:text-8xl font-bold font-sans">Property<br />Verse</Typography>
            <Typography className="mt-4 ml-2 mb-10 text-lg tracking-tighter">Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike.</Typography>
            <button type="button" className="focus:outline-none text-white hover:text-blue bg-blue hover:bg-transparent hover:ring-1 hover:ring-blue font-medium rounded-xl text-sm px-5 py-2.5 ">Explore Properties</button>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <Image
              alt="bg"
              src={"/home-bg.png"}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <br />
      <section className="my-10 ">
        <h1 className="text-4xl text-gray-700 font-bold font-roboto text-center">Our Partners</h1>
        <div className="max-w-screen-xl mx-auto mt-12 mb-24 grid grid-cols-3  gap-4 md:grid-cols-4 lg:grid-cols-7">
          <div className="mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/altdrx.jpg" />
          </div>
          <div className=" mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/alyf.jpg" />
          </div>
          <div className=" mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/assetmonk.jpg" />
          </div>
          <div className=" mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/brik-itt.jpg" />
          </div>
          <div className=" mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/hbits.jpg" />
          </div>
          <div className=" mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/propertyshare.jpg" />
          </div>
          <div className=" mx-auto w-10 md:w-16 lg:w-24">
            <Image alt="logo" className="mx-auto" layout="responsive" height={100} width={100} src="/logos/strata.jpg" />
          </div>
        </div>
      </section>
      <section className="my-10 ">
        <div className="mx-8 md:mx-16 lg:mx-32 p-4 lg:p-8 text-center rounded-lg text-white bg-blue">
          <Typography variant="h4" className="mb-2 text-center font-serif font-semibold tracking-normal">Diversified Investment Opportunities</Typography>
          <Typography className="">Explore a diverse range of fractional ownership opportunities in premium real estate</Typography>
          <br />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-blue border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Risk Mitigation and Affordability</Typography>
              <hr className="border-blue border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Experience the benefits of real estate investment without the burden of full ownership</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Expertly Vetted Properties</Typography>
              <hr className="border-blue border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Invest with confidence in meticulously vetted and high-potential properties</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">User-Friendly Platform</Typography>
              <hr className="border-blue border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Navigate seamlessly through our intuitive platform designed for your convenience</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Responsive Customer Support</Typography>
              <hr className="border-blue border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Enjoy responsive customer support for a hassle-free investing experience.</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section>
        <RecentlyAdded />
      </section>
      <section className="my-2 mb-28 mx-8 md:mx-16 lg:mx-32">
        <div className="bg-blue text-white p-8 md:p-12 lg:p-16 rounded-3xl m-0 md:m-8 lg:m-20">
          <Typography variant="h3" className="font-bold mb-10 ">Why Choose Us?</Typography>
          <p className=" max-w-sm leading-8">
            <b>Explore a diverse range of carefully selected real estate investments at our fractional ownership brokerage.</b>
            Our expert team ensures each property aligns with profitability and caters to various investor preferences.
            Whether it's residential, commercial, or vacation
            properties, we tailor our offerings to meet your specific financial goals for a customized investment experience.
          </p>
          <button type="button" className="focus:outline-none text-blue hover:text-blue bg-white   font-bold rounded-xl text-sm my-8 px-8 py-3 ">CONTACT US</button>
        </div>
      </section>

      <Footer />

    </div>
  );
}
