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
        <div className="bg-[#191D24] w-full h-full rounded-xl p-0 border-none shadow-md btn">
          <div>
            <Image src={props.image} alt="" className="rounded-t-xl" />
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
