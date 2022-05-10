import React from "react";
import CollectionItem from "./CollectionItem";
import Box1 from "../assets/images/box-1.png";
import Hidden from "../assets/images/hidden-box.png";

function Collections() {
  return (
    <div className="lg:mx-10 py-16 mx-5">
      <div>
        <h1 className="font-Poppins text-2xl font-semibold text-black text-center  lg:text-4xl  ">
          Collections
        </h1>
        <p className="font-Poppins text-md font-normal text-black opacity-70 mb-12  mt-2 text-center  lg:text-xl lg:mt-2">
          Latest collection available.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:px-0 px-4">
          <div>
            <CollectionItem image={Box1} name="Magical Flower" link="/mint" />
          </div>
          <div>
            <CollectionItem image={Hidden} name="Available Soon" link="" />
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
  );
}

export default Collections;
