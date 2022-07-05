import React from 'react';
import { ImPriceTag } from 'react-icons/im';

function Tracker({ events }) {
  return (
    <div className="bg-base-300 rounded-xl p-2 mt-3 shadow-md">
      <div className="h-[300px]  font-Poppins text-base  ">
        <div className="flex justify-between sticky top-0 px-2  text-slate-50 bg-base-300 py-2 ">
          <div>
            <h1>Owners</h1>
          </div>
        </div>
        <div className="px-2 text-xs lg:text-base overflow-auto h-[240px] ">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex justify-between py-2 items-center border-b-[2px] border-gray-50"
            >
              <div className="flex md:hidden space-x-2 items-center ">
                <div>
                  <ImPriceTag fontSize={20} className="text-gray-300" />
                </div>
                <div>
                  {event.owner_of.slice(0, 7) +
                    '...' +
                    event.owner_of.slice(-3)}
                </div>
              </div>
              <div className="hidden md:flex space-x-2 items-center">
                <div>
                  <ImPriceTag fontSize={20} className="text-gray-300" />
                </div>
                <div>{event.owner_of}</div>
              </div>
              <div className="mr-2">
                {event.synced_at}

                {/* {event.synced_at.slice(5, 10) +
                  " " +
                  event.synced_at.slice(11, 16)} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracker;
