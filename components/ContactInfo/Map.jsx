"use client";

import React from "react";

const Map = () => {

  return (
    <div className="relative h-[60vh] ">
      <div className="bg-none overflow-hidden h-full w-full">
        <iframe
          className="h-full w-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=500&hl=en&q=blackfox digital&t=&z=13&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
