import React from "react";

import Hero from "../components/Hero";

import Collections from "../components/Collections";
import Guide from "../components/Guide";

function index() {
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

      <div className="bg-[#001EFF]">
        <div className="max-w-screen-xl mx-auto  ">
          <Guide />
        </div>
      </div>
    </div>
  );
}

export default index;
