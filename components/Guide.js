import React from "react";
import Step1 from "../assets/images/step1.png";
import Image from "next/image";

function Guide() {
  return (
    <div className="lg:mx-10  py-16">
      <div className="bg-[#001EFF]">
        <h1 className="font-Poppins text-3xl font-semibold text-white text-center  lg:text-4xl  ">
          How to get started
        </h1>
        <p className="font-Poppins text-md font-normal text-white opacity-70 mb-8  mt-2 text-center  lg:text-xl lg:mt-2">
          Latest collection available.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-8 gap-y-3 mt-16 ">
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base font-bold text-white font-Poppins pt-3 ">
              Download Metamask
            </h1>
            <p className=" mx-8 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center  lg:text-2xs lg:mx-0 lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base font-bold  text-white font-Poppins pt-3 ">
              Add Matic Blockchain
            </h1>
            <p className=" mx-8 lg:mx-0 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center  lg:text-2xs lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base font-bold  text-white font-Poppins pt-3 ">
              Choose one category
            </h1>
            <p className=" mx-8 font-Poppins text-md font-light text-white mb-12  mt-2 text-center lg:mx-0  lg:text-2xs lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="text-center">
            <Image src={Step1} alt="" className="mx-auto lg:w-2/3 w-1/2" />
            <h1 className="text-lg lg:text-base font-bold  text-white font-Poppins pt-3 ">
              Mint your NFT and WIN!{" "}
            </h1>
            <p className=" mx-8 font-Poppins text-md font-normal text-white mb-12  mt-2 text-center  lg:text-2xs lg:mx-0 lg:mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
