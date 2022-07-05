import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function CollectionItem(props) {
  const newTo = {
    pathname: props.link,
  };
  return (
    <div>
      <Link href={newTo}>
        <div
          className={`${
            props.color != null ? 'bg-base-300' : 'bg-base-100'
          } w-full h-full rounded-xl p-0 border-none shadow-md btn`}
        >
          <div>
            {props.video != null ? (
              <div>
                <video autoPlay muted loop className="w-full rounded-t-xl">
                  <source src="/video/metasilver.mp4" type="video/mp4" />
                </video>
              </div>
            ) : (
              <Image src={props.image} alt="" className="rounded-t-xl" />
            )}
          </div>
          <div className="text-center p-5">
            <h1 className="text-white font-Poppins">{props.name}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CollectionItem;
