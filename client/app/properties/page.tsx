import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import MyNav from "../components/Navbar";
import Property from "../components/cards/Property";
import SwitchTypes from "../components/cards/SwitchType";
import Footer from "../components/Footer";



export default function Home() {


  return (
    <div>
      <MyNav />
      <SwitchTypes />
      <form className="flex items-center max-w-2xl mx-auto">
        <label className="sr-only">Search</label>
        <div className="relative w-full mx-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-blue text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue block w-full ps-10 p-2.5  " placeholder="Search Property..." required />
        </div>
      </form>
      <section className="my-8 mx-4 lg:mx-28 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        <div className="mx-auto">
          <Property
            name="Brigade Tech Park"
            image="briagadetechpark1.png"
            location="Whitefield, Bengaluru"
            area={"32300 sqft"}
            price={"8,675"}
            yeild={"9.00%"}
            returntarget={"38,73,666"}
          />
        </div>
        <div className="mx-auto">
          <Property
            name="Sky One Opportunity"
            image="skyoneopportunity.png"
            location="Virman Nagar, Pune"
            area={"1.2L sqft"}
            price={"12,165"}
            yeild={"9.6%"}
            returntarget={"38,73,666"}
          />
        </div>
      </section>

      <Footer />

    </div>
  );
}
