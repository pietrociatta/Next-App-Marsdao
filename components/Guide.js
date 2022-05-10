import React from "react";
import Step1 from "../assets/images/step1.png";
import Image from "next/image";

function Guide() {
  return (
    <div className="lg:mx-10  py-16">
      <div className="bg-[#001EFF]">
        <h1 className="font-Poppins text-2xl font-semibold text-white text-center  lg:text-4xl  ">
          Getting Started
        </h1>
        <p className="font-Poppins text-md font-normal text-white opacity-70 mb-8  mt-2 text-center  lg:text-xl lg:mt-2">
          Latest collection available.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16 ">
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base text-white font-Poppins pt-3 ">
              Connect Wallet
            </h1>
            <p className=" mx-8 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center  lg:text-sm lg:mx-0 lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base text-white font-Poppins pt-3 ">
              Connect Wallet
            </h1>
            <p className=" mx-8 lg:mx-0 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center  lg:text-sm lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base text-white font-Poppins pt-3 ">
              Connect Wallet
            </h1>
            <p className=" mx-8 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center lg:mx-0  lg:text-sm lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base text-white font-Poppins pt-3 ">
              Connect Wallet
            </h1>
            <p className=" mx-8 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center  lg:text-sm  lg:mx-0 lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
