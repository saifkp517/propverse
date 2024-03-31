import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/cards/newProperty";
import { Typography } from "@mui/material";



export default function Home() {


  return (
    <div>
      <Navbar />
      <section>
        <div className="grid grid-cols-2">

          <div className=" py-20 px-44">
            <Typography variant="h1" className="text-green font-bold font-sans">Property<br />Verse</Typography>
            <Typography className="mt-4 ml-2 mb-10 text-lg tracking-tighter">Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike.</Typography>
            <button type="button" className="focus:outline-none text-white hover:text-green bg-green hover:bg-transparent hover:ring-1 hover:ring-green font-medium rounded-xl text-sm px-5 py-2.5 ">Explore Properties</button>
          </div>
          <div>
            <Image alt="bg" width={1000} height={1000} src={"/home-bg.png"} />
          </div>
        </div>
      </section>
      <br />
      <section className="my-10">
        <Typography variant="h3" className="text-center">Our Clients</Typography>
        <div className="my-10 grid grid-cols-4 gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </section>
      <section className="my-10">
        <div className=" mx-32 p-16 text-center rounded-lg text-white bg-green">
          <Typography variant="h4" className="mb-2 font-serif font-semibold tracking-normal">Diversified Investment Opportunities</Typography>
          <Typography className="">Explore a diverse range of fractional ownership opportunities in premium real estate</Typography>
          <br />
          <div className="grid grid-cols-3 gap-20">
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-green border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-green border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-green border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-green border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-green border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-4">
              <Typography variant="h5" className="font-semibold tracking-tighter text-left">Diversified Investment Opportunities</Typography>
              <hr className="border-green border-2 my-2 rounded-xl w-36" />
              <p className="text-sm text-left">Explore a diverse range of fractional ownership opportunities in premium real estate</p>
              <div className="grid place-items-end">
                <Image alt="cubes" width={100} height={100} src='/cubes.png' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-36 mx-20">
        <div className="flex justify-between">
          <Typography variant="h4" className="font-bold tracking-tight">Recently Added</Typography>
          <Link href={'/properties'}>
            <Typography className="text-blue font-bold no-underline hover:underline">See All</Typography>
          </Link>
        </div>
      </section>
      <section className="my-2 mx-32">
        <div className="grid grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="my-2">
        <div className="bg-green text-white p-16 rounded-3xl m-20">
          <Typography variant="h3" className="font-bold mb-10 ">Why Choose Us?</Typography>
          <p className=" max-w-sm leading-8">
            <b>Explore a diverse range of carefully selected real estate investments at our fractional ownership brokerage.</b>
            Our expert team ensures each property aligns with profitability and caters to various investor preferences.
            Whether it's residential, commercial, or vacation
            properties, we tailor our offerings to meet your specific financial goals for a customized investment experience.
          </p>
          <button type="button" className="focus:outline-none text-green hover:text-green bg-white   font-bold rounded-xl text-sm my-8 px-8 py-3 ">CONTACT US</button>
        </div>
      </section>

      <Footer />

    </div>
  );
}
