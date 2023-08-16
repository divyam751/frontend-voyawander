import React, { useEffect, useState } from "react";
import "../styles/FlightCard.css";
import { Button } from "@chakra-ui/react";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
const FlightCard = () => {
  const [flightData, setFlightData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/FlightData")
      .then((response) => {
        setFlightData(response.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);
  console.log(flightData);
  return (
    <div id='flightCardsBody'>
      Available Flights
      {flightData.map((flight) => {
        return (
          <div>
            <div id='FlightContianer'>
              <div id='Section1'>
                <div id='SectionLeft'>
                  <Button id='Deal' colorScheme='whatsapp'>
                    DEAL
                  </Button>
                  <p>
                    Independence Day Sale is live, Flat 14% Off (up to Rs.
                    2,017) on using American Express Cards and RBL Bank Credit
                    Cards. TnC apply
                  </p>
                </div>
              </div>
              <div id='Section2'>
                <div id='Devider1'>
                  <div id='FlightDetails'>
                    <div id='FlightLogo'>
                      <img src={flight.FlightLogo} alt='logo' />
                    </div>
                    <div id='FlightName'>
                      <p>{flight.FlightName}</p>
                      <p>{flight.FlightNumber}</p>
                    </div>
                  </div>
                  <div id='TimeSection'>
                    <div id='TimeBox'>
                      <p>{flight.DepartureTime}</p>
                      <p>{flight.DepartureDestination}</p>
                    </div>
                    <div id='Line'></div>
                    <div id='TimeBox'>
                      <p>{flight.ArrivalTime}</p>
                      <p>Mumbai</p>
                    </div>
                  </div>
                </div>
                <div id='Devider2'>
                  <div id='TotalTime'>
                    <p>{flight.TotalTime}</p>
                    <p>Non Stop</p>
                  </div>
                  <div id='FlightPrice'>
                    <p>$ {flight.FlightPrice}</p>
                    <Button colorScheme='red' variant='outline'>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
              <div id='Section3'>
                <div>
                  <select>
                    <option>Flight Details</option>
                  </select>
                </div>
                <div id='FlightFooter'>
                  <div id='MealSection'>
                    <ImSpoonKnife />
                    <p>Free Meal</p>
                  </div>
                  <div id='Emissions'>
                    <p>Emissions: 142 Kg CO2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightCard;
