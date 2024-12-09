import React from "react";
import productImage from "../public/Product Image.webp";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import companylogo from "../public/Company Logo.webp";
import FeatureHero from "./FeatureHero";
import TopCategory from "./TopCategory";
import OurProducts from "./OurProducts";

function Hero() {
  return (
    <div className="w-full h-full sm:px-[25px] md:px-[150px] flex flex-col space-y-6 bg-white">
      <div className="md:w-full md:h-[850px] sm:w-full sm:h-auto bg-[#F0F2F3] flex sm:flex-col md:flex-row py-8 md:py-0 items-center rounded-bl-2xl  justify-between">
        <div className="w-full md:w-1/2 px-4 md:px-[70px] space-y-12">
          <div className="space-y-6">
            <h3 className="text-secondary text-sm md:text-base">
              Welcome to chairy
            </h3>
            <h1 className="text-secondary text-2xl md:text-6xl ">
              Best Furniture Collection for your interior.
            </h1>
          </div>

          <button className="w-[170px] h-[52px] bg-[#029FAE]  rounded-md flex items-center justify-evenly text-white">
            Shop Now <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="w-1/2 ">
          <Image
            src={productImage}
            alt="productimage"
            width={434}
            height={584}
          />
        </div>
      </div>

      <div>
        <Image src={companylogo} alt="companylogo" width={1320} height={139} />
      </div>

      <FeatureHero />
      <TopCategory />
      <OurProducts />
    </div>
  );
}

export default Hero;
