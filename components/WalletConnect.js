import React from "react";
import { useMoralis } from "react-moralis";
import MetamaskIcon from "../assets/images/metamask.svg";
import Walletconnect from "../assets/images/walletconnect.svg";
import Image from "next/image";
function WalletConnect() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  return (
    <div className="font-Poppins  ">
      <label for="my-modal-3" className="btn w-full  modal-button">
        Connect
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle " />

      <div className="modal">
        <div className="modal-box  relative">
          <label
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-lg font-bold text-center text-[#A5ADBA]  ">
            Connect Wallet!
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-3 pt-4">
            <div
              className="btn  block h-fit py-4"
              onClick={() => authenticate({ chainId: 137 })}
            >
              <div className="pb-3">
                <Image src={MetamaskIcon} alt="logo" width={50} height={50} />
              </div>
              <div>
                <h1> Metamask</h1>
              </div>
            </div>
            <div
              className="btn  block h-fit py-4"
              onClick={() =>
                authenticate({ provider: "walletconnect", chainId: 137 })
              }
            >
              <div className="pb-3">
                <Image src={Walletconnect} alt="logo" width={50} height={50} />
              </div>
              <div>
                <h1>WalletConnect</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletConnect;
