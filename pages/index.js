import React from "react";
import { useMoralis } from "react-moralis";
import Hero from "../components/Hero";

import Collections from "../components/Collections";

function index() {
  const {
    authenticate,
    isAuthenticated,

    user,
    logout,
  } = useMoralis();
  return (
    <div className="bg-white">
      <div className="bg-black  mx-auto">
        <div className="max-w-screen-xl mx-auto ">
          <Hero />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto bg-white ">
        <Collections />
      </div>
    </div>
  );
}

export default index;