import React from "react";
import Image from "next/image";
import i1 from "../public/product01.webp";
import i2 from "../public/Product04.webp";
import i3 from "../public/product03.webp";
import i4 from "../public/product02.webp";
import i5 from "../public/i5.webp";
import i6 from "../public/i6.webp";
import i7 from "../public/i7.webp";

import carticon from "../public/Cart.webp";

function OurProducts() {
  return (
    <div className="md:w-full md:h-full space-y-20 pb-[136px]">
      <h2 className="text-center text-secondary">Our Products</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 ">
        <div className="flex flex-col space-y-5">
          <Image src={i1} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-bluesecond flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Image src={i2} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Image src={i3} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Image src={i4} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>

        {/* First row Ended */}
        <div className="flex flex-col space-y-5">
          <Image src={i5} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Image src={i6} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Image src={i7} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Image src={i1} alt="image" width={312} height={312} />
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col ">
              <h3 className="text-secondary">Library Stool Chair</h3>
              <h1 className="text-black text-sm ">$20</h1>
            </div>
            <div className="w-[44px] h-[44px] rounded-md bg-[#F0F2F3] flex items-center justify-center">
              <Image src={carticon} alt="image" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
