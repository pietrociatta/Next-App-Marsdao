import React from 'react';

import Hero from '../components/Hero';

import Collections from '../components/Collections';
import Guide from '../components/Guide';
import CollectionSwiper from '../components/CollectionSwiper';
import Faq from '../components/Faq';
import How from '../components/How';

function index() {
  return (
    <div className="bg-base-300">
      <div className="bg-base-100  mx-auto">
        <div className="max-w-screen-xl mx-auto ">
          <Hero />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto bg-base-300 ">
        <How />
      </div>
      <div className="max-w-screen-xl mx-auto bg-base-300 ">
        <CollectionSwiper />
      </div>

      <div className="bg-base-100">
        <div className="max-w-screen-xl mx-auto  ">
          <Guide />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto bg-base-300 ">
        <Collections />
        <Faq />
      </div>
    </div>
  );
}

export default index;
