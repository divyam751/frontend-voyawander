import React, { useEffect, useState } from "react";
import "../styles/FlightCard.css";
import { Button, Heading } from "@chakra-ui/react";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
const FlightCard = () => {
  const [flightData, setFlightData] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios.get(`${apiUrl}/flights`).then((response) => {
      setFlightData(response.data);
    });
  }, [apiUrl]);
  // console.log(flightData);

  const localData = JSON.parse(localStorage.getItem("currentData")) || [];
  if (!isEmpty(localData.placeName)) {
    let parts = localData.placeName.split(" ");
    var Country = parts[1];
  }

  const handleBookNow = (flight) => {
    const combinedData = { ...localData, ...flight };
    localStorage.setItem("currentData", JSON.stringify(combinedData));
    navigate("/signup");
  };

  return (
    <div id="flightCardsBody">
      <Heading>Available Flights...</Heading>
      {flightData.map((flight, index) => {
        return (
          <div key={index}>
            <div id="FlightContianer">
              <div id="Section1">
                <div id="SectionLeft">
                  <Button id="Deal" colorScheme="whatsapp">
                    DEAL
                  </Button>
                  <p>
                    Independence Day Sale is live, Flat 14% Off (up to Rs.
                    2,017) on using American Express Cards and RBL Bank Credit
                    Cards. TnC apply
                  </p>
                </div>
              </div>
              <div id="Section2">
                <div id="Devider1">
                  <div id="FlightDetails">
                    <div id="FlightLogo">
                      <img src={flight.FlightLogo} alt="logo" />
                    </div>
                    <div id="FlightName">
                      <p>{flight.FlightName}</p>
                      <p>{flight.FlightNumber}</p>
                    </div>
                  </div>
                  <div id="TimeSection">
                    <div id="TimeBox">
                      <p>{flight.DepartureTime}</p>
                      <p>{flight.DepartureDestination}</p>
                    </div>
                    <div id="Line"></div>
                    <div id="TimeBox">
                      <p>{flight.ArrivalTime}</p>
                      <p>{Country}</p>
                    </div>
                  </div>
                </div>
                <div id="Devider2">
                  <div id="TotalTime">
                    <p>{flight.TotalTime}</p>
                    <p>Non Stop</p>
                  </div>
                  <div id="FlightPrice">
                    <p>$ {flight.FlightPrice}</p>
                    <Button
                      colorScheme="red"
                      variant="outline"
                      onClick={() => {
                        handleBookNow(flight);
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
              <div id="Section3">
                <div>
                  <select>
                    <option>Flight Details</option>
                  </select>
                </div>
                <div id="FlightFooter">
                  <div id="MealSection">
                    <ImSpoonKnife />
                    <p>Free Meal</p>
                  </div>
                  <div id="Emissions">
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
