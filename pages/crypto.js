import React from 'react';
import Hidden from '../public/static/images/hidden-light.png';

import SingleCollectionItem from '../components/SingleCollectionItem';

import collections from '../assets/category-crypto.json';
import Link from 'next/link';
function Crypto() {
  return (
    <div className="bg-base-100 text-slate-50 h-max max-w-screen-xl mx-auto  ">
      <div className="lg:mx-10 py-16 mx-5 ">
        <div>
          <h1 className="font-Poppins text-3xl font-semibold text-slate-50 text-center  lg:text-4xl  ">
            Select Collection
          </h1>
          <h1 className="font-Poppins text-base font-normal text-slate-50 opacity-70 mb-12  mt-2 text-center  lg:text-xl lg:mt-2">
            Latest collection available.
          </h1>
          <div className="grid lg:grid-cols-3 mx-auto md:grid-cols-2 gap-2 gap-y-10 lg:px-0 px-4">
            {collections.map((collection, i) => (
              <div className="mx-auto" key={i}>
                <Link href={{ pathname: '/mint', query: collection }} passHref>
                  <a>
                    <SingleCollectionItem
                      color="bg-white"
                      image={collection.image}
                      name={collection.name}
                      collectionData={collection}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
