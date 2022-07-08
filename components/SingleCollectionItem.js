import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SingleCollectionItem = ({ video, color, image, name }) => {
  return (
    <div>
      <div
        className={`${
          color != null ? 'bg-base-300' : 'bg-base-100'
        } w-full h-full rounded-xl p-0 border-none shadow-md btn`}
      >
        <div>
          {video != null ? (
            <div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-xl"
              >
                <source src={video} type="video/webm" />
              </video>
            </div>
          ) : (
            <Image src={image} alt="" className="rounded-t-xl" />
          )}
        </div>
        <div className="text-center p-5">
          <h1 className="text-white font-Poppins">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCollectionItem;
