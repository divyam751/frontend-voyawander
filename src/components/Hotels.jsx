import { Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Hotels.css";

const Hotels = () => {
  return (
    <div id='hotels'>
      <div id='text'>
        <Heading>Great Locations across the World</Heading>
        <div className='desc'>
          <p>
            Travel to the most breathtaking and exotic location across the globe
            with us. From the majestic mountains of Patagonia to the pristine
            beaches of Bali. we'll take you there.
          </p>
        </div>
      </div>
      <div>
        <img
          src='https://inato.com/static/094c124358273399e0abb5a636383989/0d4fb/inato-world.webp'
          alt='map'
        />
      </div>
    </div>
  );
};

export default Hotels;
