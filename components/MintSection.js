import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import HeroImage from "../assets/images/hero-image.png";
import Image from "next/image";
import WalletConnect from "./WalletConnect";
import { GiConfirmed } from "react-icons/gi";

import Abi from "../assets/abi.json";
import { ethers } from "ethers";
import { useEffect } from "react";
const ContractAddress = "0x81D9a5927046F10415d8EC46717c2C7b9DA2dBF1";
function MintSection() {
  const { isAuthenticated, authenticate, enableWeb3, Moralis, user } =
    useMoralis();
  const [mintAmount, setMintAmount] = useState(1);
  const [progress, setProgress] = useState(false);
  const [confirmed, setCofirmed] = useState(false);

  const [address, setAddress] = useState();
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user.attributes.ethAddress);
    } else {
      setAddress("");
    }
  }, [isAuthenticated]);

  // const initialize = async () => {
  //   if (isAuthenticated) {
  //     const web3Provider = await Moralis.enableWeb3();
  //     const contract = new ethers.Contract(ContractAddress, Abi, web3Provider);
  //   }
  // };

  const publicMint = async () => {
    const web3Provider = await Moralis.enableWeb3({
      provider: "walletconnect",
    });
    const contract = new ethers.Contract(ContractAddress, Abi, web3Provider);
    const options = {
      contractAddress: ContractAddress,
      functionName: "mint",
      abi: Abi,
      msgValue: ethers.utils
        .parseEther((0.001 * mintAmount).toString())
        .toString(),
      params: {
        _mintAmount: mintAmount,
      },
    };

    const transaction = await Moralis.executeFunction(options);
    setProgress(true);
    await transaction.wait(1).then((receipt) => {
      console.log(receipt);
      setCofirmed(true);
      const timer = setTimeout(() => {
        setProgress(false);
        setCofirmed(false);
      }, 3000);
    });
  };

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
                {progress ? (
                  <div className="mt-8">
                    <input
                      type="checkbox"
                      checked={progress ? true : false}
                      id="my-modal-3"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box relative text-center">
                        {!confirmed ? (
                          <div>
                            <h1 className="text-center text-xl font-Poppins font-bold">
                              WAIT! WE ARE MINTING YOUR NFT...
                            </h1>
                            <p className="text-xs pt-2 pb-2">
                              When the Mint is finished this pop-up will close.
                            </p>
                            <div className="text-center">
                              <progress className="progress progress-primary bg-black w-60"></progress>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex justify-center ">
                              <GiConfirmed size={90} color="green" />
                            </div>
                            <div>
                              <h1 className="text-center text-xl font-Poppins font-bold pt-2">
                                TRANSACTION SUCCESFUL!
                              </h1>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={publicMint}
                    className="btn btn-wide bg-[#001EFF] text-white"
                  >
                    Mint Now
                  </button>
                )}
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
