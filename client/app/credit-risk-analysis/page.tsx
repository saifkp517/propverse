import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import MyNav from "../components/Navbar";
import BlogCard from "../components/cards/BlogCard";
import Footer from "../components/Footer";

export default function CreditRiskAnalysis() {

  return (
    <div>
      <MyNav />
      <div className=" mx-36 my-24 place-items-center grid grid-cols-3">
        <div className=" col-span-2">
          <Typography variant="h2" className="mb-6 font-bold tracking-tight">Credit Risk Analysis</Typography>
          <div className="tracking-tighter">
            <p>
              Credit risk analysis is the process of evaluating the creditworthiness of individuals, businesses, or other entities to assess the likelihood that they will default on their financial obligations. Lenders and investors use credit risk analysis to make informed decisions about extending credit or providing financial resources.
            </p>
            <br />
            <p>
              Here are key components and steps involved in credit risk analysis
            </p>
            <br />
            <ul className="list-decimal">
              <li>
                 <h4>Credit Information Gathering</h4>
                 <ul>
                  <li>
                    - Collecting relevant information about the borrower, including financial statements, tax returns, bank statements, and other supporting documents.
                  </li>
                  <li>
                  - Obtaining credit reports from credit bureaus, which provide a history of the borrower's credit usage and payment behavior.
                  </li>
                 </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
