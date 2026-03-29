"use client"; // Recommended for modern JavaScript

import React from "react";
import GoogleMapReact from "google-map-react";
import { RiMapPinFill } from "@remixicon/react";

const Marker = () => {
  // Use CSS to position the marker icon at its center
  return <RiMapPinFill color="red" />;
};

const htmlData = `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&height=500&hl=en&q=Plot 14, Nilachal, Banasree Main Rd, Dhaka 1219&t=&z=13&ie=UTF8&iwloc=B&output=embed"></iframe><a href="https://embedmapfree.com">embed google map</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:500px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:500px;}.gmap_iframe {width:600px!important;height:500px!important;}</style></div>`;

const Map = () => {
  const defaultProps = {
    center: { lat: 23.766106880940423, lng: 90.4286136772632 },
    zoom: 11,
  };

  return (
    <div className="relative h-[60vh] ">
      <div className="bg-none overflow-hidden h-full w-full">
        <iframe
          className="h-full w-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=500&hl=en&q=blackfox limited&t=&z=13&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
