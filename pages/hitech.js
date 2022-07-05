import React from 'react';
import CollectionItem from '../components/CollectionItem';
import Box1 from '../assets/images/box-1.png';
import Hidden from '../assets/images/hidden-box.png';
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
            <div>
              <CollectionItem
                image={Box1}
                video={'/video/iphone.mp4'}
                name="IPHONE"
                link="/mint"
                color={'bg-base-300'}
              />
            </div>
            <div>
              <CollectionItem image={Hidden} name="Available Soon" link="/" />
            </div>
            <div>
              <CollectionItem image={Hidden} name="Available Soon" />
            </div>
            <div>
              <CollectionItem image={Hidden} name="Available Soon" />
            </div>
            <div>
              <CollectionItem image={Hidden} name="Available Soon" />
            </div>
            <div>
              <CollectionItem image={Hidden} name="Magical Flower" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hitech;
