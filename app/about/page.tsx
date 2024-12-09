import React from "react";
import Image from "next/image";
import i1 from "../../public/Image Block.webp";
import OurProducts from "@/components/OurProducts";

function page() {
  return (
    <div className="w-full md:px-[150px] sm:px-[25px] bg-white md:py-[100px]">
      <div className="flex sm:flex-col md:flex-row md:space-x-6 sm:space-x-0 md:space-y-0 sm:space-y-6">
        <div className="md:w-[672px] md:h-[478px] bg-[#007580] px-[64px] py-[64px] flex flex-col justify-between">
          <div className="">
            <h1 className="text-white text-3xl">About Us - Comforty</h1>
            <h3 className="text-white pt-3">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.{" "}
            </h3>
          </div>
          <button className="bg-[#2caab5] w-[212px] h-[48px] flex justify-center items-center text-white">
            View Collection
          </button>
        </div>
        <div>
          <Image src={i1} alt="image" width={672} height={488} />
        </div>
      </div>
      <div>
        <h2 className="text-center text-secondary pb-[48px] md:pt-[132px] sm:pt-[50px]">
          What makes our Brand Different
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 md:space-x-6 sm:space-x-0 md:space-y-0 sm:space-y-2">
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex flex-col justify-center space-y-2 px-[48px]">
            <h3 className="text-[#007580]">Next day as standard</h3>
            <h3 className="text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </h3>
          </div>
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex flex-col justify-center space-y-2 px-[48px]">
            <h3 className="text-[#007580]">Next day as standard</h3>
            <h3 className="text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </h3>
          </div>
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex flex-col justify-center space-y-2 px-[48px]">
            <h3 className="text-[#007580]">Next day as standard</h3>
            <h3 className="text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </h3>
          </div>
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex flex-col justify-center space-y-2 px-[48px]">
            <h3 className="text-[#007580]">Next day as standard</h3>
            <h3 className="text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </h3>
          </div>
        </div>
      </div>
      <OurProducts />
    </div>
  );
}

export default page;
