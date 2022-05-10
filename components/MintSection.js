import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import HeroImage from "../assets/images/hero-image.png";
import Image from "next/image";
import WalletConnect from "./WalletConnect";
function MintSection() {
  const { isAuthenticated, authenticate } = useMoralis();
  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1);
  };
  return (
    <div>
      <div className="lg:py-10 py-5 lg:mx-10">
        <div className="lg:flex justify-center   ">
          <div className="lg:w-1/2 w-full flex justify-center p-5 lg:p-0  ">
            <Image src={HeroImage} alt="" className="mx-auto w-full  p-5 " />
          </div>
          <div className="p-5 lg:p-0 lg:pl-8 w-full  lg:w-1/2 ">
            <h1 className="font-Poppins text-2xl font-semibold text-black text-center lg:text-left lg:text-4xl  ">
              Magical Flower
            </h1>
            <p className="font-Poppins text-sm font-normal text-black opacity-70  mt-3 text-center lg:text-left lg:text-sm lg:mt-3">
              Saskehh Rio
            </p>
            <p className="font-Poppins text-base font-normal text-black   mt-3 text-center lg:text-left lg:text-xl lg:mt-3">
              0,20 ETH
            </p>
            <div className="">
              <div className="mt-4 flex justify-center lg:justify-start">
                <button
                  className="bg-black btn text-white rounded-lg px-5  "
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  value={mintAmount}
                  type="number"
                  className="bg-white border-[1px] input w-1/2 lg:w-1/3   border-gray-200 text-black text-center rounded-lg mx-2"
                />
                <button
                  className="bg-black btn text-white rounded-lg px-5 "
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <p className="font-Poppins text-[20px] font-normal text-black   mt-3 text-center lg:text-left lg:text-[20px] lg:mt-3">
                Description
              </p>
              <p className="font-Poppins text-[15px] font-normal text-black   mt-3 text-center lg:text-left lg:text-[15px] lg:mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text.
              </p>
            </div>
            {isAuthenticated ? (
              <div className="flex justify-center gap-3 mt-6 lg:mt-6 lg:justify-start">
                <button className="btn btn-wide bg-[#001EFF] text-white">
                  Mint Now
                </button>
              </div>
            ) : (
              <div className="flex lg:justify-start justify-center mt-4">
                <WalletConnect />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintSection;
