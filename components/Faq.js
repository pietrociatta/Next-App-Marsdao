import React from 'react';

function Faq() {
  return (
    <div className="py-14 md:mx-20 mx-4">
      <div>
        <h1 className="font-Poppins text-2xl font-semibold text-slate-50 text-center  lg:text-4xl  ">
          Faq
        </h1>
        <p className="font-Poppins text-md font-normal text-slate-50 opacity-70 mb-12  mt-2 text-center  lg:text-xl lg:mt-2">
          Latest collection available.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-200 text-slate-50 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How to buy Nfts?
          </div>
          <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-200 text-slate-50 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            When will i get the Prize?
          </div>
          <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-200 text-slate-50 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Is the smart-cotract safe?
          </div>
          <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-plus border border-base-200 text-slate-50 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How many Nfts can i mint?
          </div>
          <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
