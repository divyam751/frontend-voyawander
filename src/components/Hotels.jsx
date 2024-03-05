import { Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Hotels.css";
import map from "../assets/map.png";

const Hotels = () => {
  return (
    <div id="hotels">
      <div id="text">
        <Heading>Great Locations across the World</Heading>
        <div className="desc">
          <p>
            Travel to the most breathtaking and exotic location across the globe
            with us. From the majestic mountains of Patagonia to the pristine
            beaches of Bali. we'll take you there.
          </p>
        </div>
      </div>
      <div>
        <img src={map} alt="map" className="hotels-mapImage" />
      </div>
    </div>
  );
};

export default Hotels;
