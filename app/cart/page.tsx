import React from "react";
import i3 from "../../public/product03.webp";
import i9 from "../../public/Category02.webp";
import Image from "next/image";
import hearticon from "../../public/Whislist Icon.webp";
import deleteicon from "../../public/Deleteicon.webp";

function page() {
  return (
    <div className="w-full md:h-lvh sm:h-full md:px-[150px] sm:px-[25px] py-[76px] flex md:flex-row sm:flex-col  space-x-20">
      <div className="md:w-3/4 sm:w-full flex flex-col space-y-6 ">
        <h4 className="text-[22px]">Bag</h4>
        <div className="flex flex-row  space-x-6  ">
          <Image src={i3} alt="image" width={150} height={150} />
          <div className="w-full flex justify-between">
            <div className="flex flex-col space-y-[26px] ">
              <h3>Library Stool Chair</h3>
              <div>
                <h3 className="text-[#757575]">Ashen Slate/Cobalt Bliss</h3>
                <div className="flex justify-between items-center pt-1">
                  <h3 className="text-[#757575] ">Size L</h3>
                  <h3 className="text-[#757575] ">Quantity 1</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src={hearticon} alt="image" width={24} height={24} />
                <Image src={deleteicon} alt="image" width={24} height={24} />
              </div>
            </div>
            <div>
              <h3>MRP: $99</h3>
            </div>
          </div>
        </div>
        <div className="w-full border-b-[#757575] border-b-2 pb-4 "></div>

        <div className="flex flex-row space-x-6 ">
          <Image src={i9} alt="image" width={150} height={150} />
          <div className="w-full flex  justify-between">
            <div className="flex flex-col space-y-[26px]">
              <h3>Library Stool Chair</h3>
              <div>
                <h3 className="text-[#757575]">Ashen Slate/Cobalt Bliss</h3>
                <div className="flex justify-between items-center pt-1">
                  <h3 className="text-[#757575] ">Size L</h3>
                  <h3 className="text-[#757575] ">Quantity 1</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src={hearticon} alt="image" width={24} height={24} />
                <Image src={deleteicon} alt="image" width={24} height={24} />
              </div>
              <div className="w-full border-b-[#757575] "></div>
            </div>
            <div>
              <h3>MRP: $99</h3>
            </div>
          </div>
        </div>

        <div className="w-full border-b-[#757575] border-b-2 pb-4 "></div>
      </div>
      <div className="md:w-1/4 flex flex-col space-y-6 md:items-start sm:items-center md:pt-0 sm:pt-6 ">
        <h4 className="text-xl">Summary</h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3>Subtotal</h3>
            <h3>$198.00</h3>
          </div>
          <div className="flex items-center justify-between">
            <h3>Estimated Delivery & Handling</h3>
            <h3>Free</h3>
          </div>
          <div className="w-full border-b-[#757575] border"></div>
          <div className="flex items-center justify-between">
            <h3>Total</h3>
            <h3>$198.00</h3>
          </div>
          <div className="w-full border-b-[#757575] border"></div>
          <button className="bg-bluesecond w-[334px] h-[60px] rounded-full text-white font-Inter flex items-center justify-center">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
