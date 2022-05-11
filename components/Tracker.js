import React from "react";

function Tracker({ events }) {
  return (
    <div className="h-300px overflow-y-scroll">
      {events.map((event, index) => (
        <div key={index}>
          <div>{event.args[0]}</div>
        </div>
      ))}
    </div>
  );
}

export default Tracker;
