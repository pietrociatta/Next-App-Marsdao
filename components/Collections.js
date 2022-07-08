import React from 'react';
import CollectionItem from './CollectionItem';
import Cash from '../public/static/images/cash-light.jpg';
import Crypto from '../public/static/images/crypto-light.jpg';
import Tech from '../public/static/images/tech-light.jpg';

import Placeholder from '../public/static/images/hidden-light.png';

function Collections() {
  return (
    <div className="lg:mx-10 py-16 mx-5">
      <div>
        <h1 className="font-Poppins text-3xl font-semibold text-slate-50 text-center  lg:text-4xl  ">
          Browse by Category
        </h1>
        <h1 className="font-Poppins text-base font-normal text-slate-50 opacity-70 mb-12  mt-2 text-center  lg:text-xl lg:mt-2">
          Latest collection available.
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:px-0 px-4">
          <div>
            <CollectionItem image={Crypto} name="CRYPTO" link="/crypto" />
          </div>
          <div>
            <CollectionItem image={Tech} name="HI-TECH" link="/hitech" />
          </div>
          <div>
            <CollectionItem image={Cash} name="CASH" link="/cash" />
          </div>
          <div>
            <CollectionItem image={Placeholder} name="Available Soon" />
          </div>
          <div>
            <CollectionItem image={Placeholder} name="Available Soon" />
          </div>
          <div>
            <CollectionItem image={Placeholder} name="Available Soon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
