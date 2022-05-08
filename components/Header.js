import React from "react";
import WalletConnect from "./WalletConnect";
import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Blockie } from "web3uikit";
import Link from "next/link";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const showSidebar = () => setSidebar(!sidebar);
  const [address, setAddress] = useState();
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user.attributes.ethAddress);
    } else {
      setAddress("");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <div class="navbar py-0 bg-white text-black">
        <div class="navbar-start">
          <a
            onClick={showSidebar}
            tabindex="0"
            class="btn btn-ghost  btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </a>

          <nav
            className={
              sidebar
                ? "nav-menu active flex-col  bg-white"
                : "nav-menu flex-col"
            }
          >
            <ul className="bg-white text-black w-full p-3 mb-auto   ">
              <div className="mb-5">
                <a onClick={showSidebar} className="btn btn-ghost btn-circle ">
                  X
                </a>
              </div>
              <li className="cursor-pointer ">
                <Link href="/">
                  <h1 className="flex items-center font-Poppins mt-2 py-3 px-4 hover:text-white hover:bg-black text-base w-full gap-2 rounded-lg">
                    Home
                  </h1>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/form">
                  <h1 className="flex items-center font-Poppins mt-2 py-3 px-4 hover:text-white hover:bg-black text-base w-full gap-2 rounded-lg">
                    Form
                  </h1>
                </Link>
              </li>
            </ul>
            <div className="mt-auto px-3 mb-3">
              {!isAuthenticated && <WalletConnect />}
            </div>
          </nav>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost normal-case text-xl">MarsDAO</a>
        </div>
        <div className="navbar-end ">
          <div className="dropdown   dropdown-end ">
            <div
              className={isAuthenticated ? "avatar  online" : "avatar  offline"}
            >
              <div>
                <label className="btn btn-ghost btn-circle " tabindex="0">
                  <Blockie seed={address} />
                </label>
              </div>
            </div>
            {isAuthenticated && (
              <div>
                <ul
                  tabindex="0"
                  className="dropdown-content menu mt-0 p-2  bg-white rounded-b-xl w-52"
                >
                  <li>
                    <a className="font-Poppins">
                      <FiUser />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="font-Poppins" onClick={logout}>
                      <FiLogOut />
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
