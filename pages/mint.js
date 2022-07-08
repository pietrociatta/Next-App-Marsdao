import React from 'react';
import MintSection from '../components/MintSection';

function Mint() {
  return (
    <div className="bg-base-100 text-slate-50  ">
      {/* <div className="bg-black text-center py-8 ">
        <h1 className="font-Poppins text-2xl font-semibold text-white  lg:text-4xl">
          MINT
        </h1>
      </div> */}
      <div className="max-w-screen-xl bg-base-100 mx-auto ">
        <MintSection />
      </div>
    </div>
  );
}

export default Mint;
