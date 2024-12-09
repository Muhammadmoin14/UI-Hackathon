import React from "react";
import Image from "next/image";
import address1 from "../../public/Group 155.webp";
import End from "../../public/Frame 161.webp";

function page() {
  return (
    <div className="w-full h-full md:px-[150px] sm:px-[25px]  ">
      <div className="py-[41px]">
        <h1 className="font-Helvetica font-bold text-5xl text-center">
          Get In Touch With Us
        </h1>
        <h3 className="text-[#4F4F4F] pt-[21px] text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </h3>
      </div>
      <div className="flex sm:flex-col md:flex-row ">
        <div className="md:w-1/2 sm:w-full sm:px-[25px] ">
          <Image src={address1} alt="address" width={393} height={437} />
        </div>
        <div className="md:w-1/2 sm:w-full md: sm:px-[25px] pt-14 space-y-6">
          <div className="flex flex-col space-y-5 ">
            <h3>Your Name</h3>
            <input
              type="text"
              placeholder="Abc"
              className="w-full h-[48px] border-[#9F9F9F] border-2 px-4  rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-5 ">
            <h3>Email Address</h3>
            <input
              type="text"
              placeholder="Abc@def.com"
              className="w-full h-[48px] border-[#9F9F9F] border-2 px-4  rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-5 ">
            <h3>Subject</h3>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full h-[48px] border-[#9F9F9F] border-2 px-4  rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-5 ">
            <h3>Message</h3>
            <input
              type="text"
              placeholder="Abc"
              className="w-full h-[76px] border-[#9F9F9F] border-2 px-4 rounded-lg "
            />
          </div>
          <button className="w-[212px] h-[48px] bg-[#029FAE] flex justify-center items-center text-white font-Inter">
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[48px]">
        <Image src={End} alt="end" width={1320} height={270} />
      </div>
    </div>
  );
}

export default page;
