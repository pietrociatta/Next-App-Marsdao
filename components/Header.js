import React from 'react';
import WalletConnect from './WalletConnect';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { Blockie } from 'web3uikit';
import Link from 'next/link';
import { ImPriceTag } from 'react-icons/im';
import Logo from '../public/static/images/logo-header.png';
import Image from 'next/image';

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const showSidebar = () => setSidebar(!sidebar);
  const [address, setAddress] = useState();
  const [formattedAccount, setformattedAccount] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      const indirizzo = user.attributes.ethAddress;
      setAddress(indirizzo);
      let format = indirizzo.slice(0, 4) + '...' + indirizzo.slice(-3);
      setformattedAccount(format);
    } else {
      setAddress('');
      setformattedAccount('');
    }
  }, [isAuthenticated]);
  return (
    <div className="">
      <div className="navbar py-0 bg-[#1F242D] text-slate-50 ">
        <div className="navbar-start">
          <a
            onClick={showSidebar}
            tabIndex="0"
            className="btn btn-ghost  btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </a>

          <nav
            className={
              sidebar
                ? 'nav-menu active flex-col  bg-base-300'
                : 'nav-menu flex-col'
            }
          >
            <ul className=" text-slate-50 w-full p-3 mb-auto   ">
              <div className="mb-5">
                <a onClick={showSidebar} className="btn btn-ghost btn-circle ">
                  X
                </a>
              </div>
              <li
                className="cursor-pointer  border-b-[1px] border-base-100 "
                onClick={showSidebar}
              >
                <Link href="/" as="/">
                  <h1 className="flex items-center font-Poppins mt-2 py-3 px-4 hover:text-white hover:bg-black text-base w-full gap-2 rounded-lg">
                    <AiFillHome /> Home
                  </h1>
                </Link>
              </li>
              <li
                className="cursor-pointer border-b-[1px] border-base-100 "
                onClick={showSidebar}
              >
                <Link href="/categories" as="/categories">
                  <h1 className="flex items-center font-Poppins mt-2 py-3 px-4 hover:text-white hover:bg-black text-base w-full gap-2 rounded-lg">
                    <ImPriceTag size={18} /> Categories
                  </h1>
                </Link>
              </li>
            </ul>
            <div className="mt-auto px-3 mb-3">
              {!isAuthenticated && <WalletConnect />}
            </div>
          </nav>
        </div>
        <div className="navbar-center">
          <Link href="/" as="/">
            <Image src={Logo} alt="" width={187.5} height={55.5} />
          </Link>
        </div>
        <div className="navbar-end ">
          <div className="text-xs ">{formattedAccount}</div>
          <div className="dropdown   dropdown-end ">
            <div
              className={isAuthenticated ? 'avatar  online' : 'avatar  offline'}
            >
              <div>
                <label className="btn btn-ghost btn-circle " tabIndex="0">
                  <Blockie className="rounded-full" seed={address || 'fwgwe'} />
                </label>
              </div>
            </div>
            {isAuthenticated && (
              <div>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu mt-0 p-2  bg-base-300 rounded-b-xl w-52"
                >
                  <li>
                    <Link href="/form" as="/form">
                      <div className="">
                        <a className="font-Poppins flex gap-3 items-center">
                          <FiUser />
                          Profile
                        </a>
                      </div>
                    </Link>
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
