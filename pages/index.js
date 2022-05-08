import React from "react";
import { useMoralis } from "react-moralis";
import Hero from "../components/Hero";
import Header from "../components/Header";

function index() {
  const {
    authenticate,
    isAuthenticated,

    user,
    logout,
  } = useMoralis();
  return (
    <div className="bg-black  mx-auto">
      <div className="">
        <Header />
      </div>
      <div className="max-w-screen-xl mx-auto ">
        <Hero />
      </div>
    </div>
  );
}

export default index;
