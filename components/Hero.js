import React from "react";
import { useMoralis } from "react-moralis";
import HeroImage from "../assets/images/hero-image.png";
import WalletConnect from "./WalletConnect";
import Image from "next/image";
function Hero() {
  const { isAuthenticated, authenticate } = useMoralis();

  return (
    <div className="lg:py-10 py-5 mx-3 lg:mx-10 ">
      <div className="lg:flex items-center   ">
        <div className="p-5 lg:p-0  lg:w-1/2 ">
          <h1 className="font-Poppins text-[28px] font-semibold leading-snug	 text-white text-center lg:text-left lg:text-4xl  ">
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <p className="font-Poppins text-lg font-normal text-white opacity-70  mt-3 text-center lg:text-left lg:text-lg lg:mt-5">
            Discover, collect, and charity in extraordinary NFT marketplace
          </p>

          {isAuthenticated ? (
            <div className="flex justify-center gap-3 mt-6 lg:mt-8 lg:justify-start">
              <button className="btn bg-[#001EFF] text-white">Explore</button>
              <button className="btn">Create</button>
            </div>
          ) : (
            <div className="flex lg:justify-start justify-center pt-6">
              <WalletConnect />
            </div>
          )}
        </div>
        <div className="lg:w-1/2 p-4">
          <Image src={HeroImage} alt="" className="  " layout="responsive" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
