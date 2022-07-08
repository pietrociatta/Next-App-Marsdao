import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SingleCollectionItem = ({ color, image, name }) => {
  return (
    <div className="w-[300px] h-full ">
      <div
        className={`${
          color != null ? 'bg-base-300' : 'bg-base-100'
        } w-full h-full rounded-xl p-0 border-none shadow-md btn`}
      >
        <div>
          <div
            className={`${
              color != null ? 'bg-white rounded-t-xl' : 'bg-base-100'
            }`}
          >
            <Image
              src={image}
              alt=""
              className="rounded-t-xl  "
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="text-center p-5">
          <h1 className="text-white font-Poppins">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCollectionItem;
