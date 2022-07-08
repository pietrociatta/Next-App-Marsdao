import React from 'react';
import Hidden from '../assets/images/hidden-light.png';

import SingleCollectionItem from '../components/SingleCollectionItem';

import collections from '../assets/category-hitech.json';
import Link from 'next/link';
function Hitech() {
  return (
    <div className="bg-base-100 text-slate-50 max-w-screen-xl mx-auto ">
      <div className="lg:mx-10 py-16 mx-5">
        <div>
          <h1 className="font-Poppins text-3xl font-semibold text-slate-50 text-center  lg:text-4xl  ">
            Select Collection
          </h1>
          <h1 className="font-Poppins text-base font-normal text-slate-50 opacity-70 mb-12  mt-2 text-center  lg:text-xl lg:mt-2">
            Latest collection available.
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:px-0 px-4">
            {collections.map((collection, i) => (
              <Link
                key={i}
                href={{ pathname: '/mint', query: collection }}
                passHref
              >
                <a>
                  <SingleCollectionItem
                    image={Hidden}
                    video={collection.video}
                    name={collection.name}
                    collectionData={collection}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hitech;
