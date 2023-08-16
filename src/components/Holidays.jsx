import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Holidays.css";

const Holidays = ({ setShowPlaces }) => {
  const handleExplore = () => {
    setShowPlaces(true);
  };
  return (
    <div id='holidays'>
      <div id='text'>
        <Heading>Find Popular Destinations</Heading>

        <text>
          Escape the ordinary and explore the extraordinary - with our
          handpicked selection of destinatations and travel deails. you will be
          able to create the trip of your dreams.
        </text>
        <Button id='Explore' onClick={handleExplore}>
          Explore More
        </Button>
      </div>
      <div id='holidaysContainer'>
        <div class='box'>
          <div className='holidayImage'>
            <img
              src='https://static.theceomagazine.net/wp-content/uploads/2021/08/23114340/maldives-travel.jpg'
              alt='muontain'
            />
          </div>
          <Heading>Magical Maldives</Heading>
          <h2>7N/8D</h2>
          <div class='bookingBox'>
            <div className='priceBox'>
              <span id='starts'>Starts from</span>
              <span id='price'>$220 / person</span>
            </div>
            <Button id='btn'>Book</Button>
          </div>
        </div>
        <div class='box'>
          <div className='holidayImage'>
            <img
              src='https://blytheandcompany.com/wp-content/uploads/2022/08/pexels-aleksandar-pasaric-2044434-1280x853.jpg'
              alt=''
            />
          </div>
          <Heading>Dazzling Dubai</Heading>
          <h2>7N/8D</h2>
          <div class='bookingBox'>
            <div className='priceBox'>
              <span id='starts'>Starts from</span>
              <span id='price'>$220 / person</span>
            </div>
            <Button id='btn'>Book</Button>
          </div>
        </div>
        <div class='box'>
          <div className='holidayImage'>
            <img
              src='https://www.rajras.in/wp-content/uploads/2016/12/Rajasthan-Camel.jpg'
              alt=''
            />
          </div>
          <Heading>Royal Rajasthan</Heading>
          <h2>7N/8D</h2>
          <div class='bookingBox'>
            <div className='priceBox'>
              <span id='starts'>Starts from</span>
              <span id='price'>$220 / person</span>
            </div>
            <Button id='btn'>Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
