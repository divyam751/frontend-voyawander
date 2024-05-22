import React, { useEffect, useState } from "react";
import "../styles/HotelCard.css";
import { Button, Heading } from "@chakra-ui/react";
import { RiStarSFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCupHotFill } from "react-icons/bs";
import axios from "axios";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

const HotelCard = () => {
  const [hotelData, setHotelData] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/hotels`)
      .then((respose) => {
        setHotelData(respose.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiUrl]);

  const localData = JSON.parse(localStorage.getItem("currentData")) || [];
  if (!isEmpty(localData.placeName)) {
    let parts = localData.placeName.split(" ");
    var Country = parts[parts.length - 1];
  }

  const handleBookNow = (hotel) => {
    const combinedData = { ...localData, ...hotel };
    localStorage.setItem("currentData", JSON.stringify(combinedData));
    navigate("/flights");
  };

  return (
    <div id="HotelCardBody">
      <Heading>Available Hotels...</Heading>
      {hotelData.map((hotel, index) => {
        const starIcons = [];
        for (let i = 0; i < hotel.HotelStars; i++) {
          starIcons.push(<RiStarSFill key={i} />);
        }
        return (
          <div key={index}>
            <div id="HotelContainer">
              <div id="LeftHotelBox">
                <img src={hotel.HotelImage} alt="HotelImage" />
              </div>
              <div id="MiddleHotelBox">
                <div id="MiddleHotelBoxTop">
                  <div id="HotelRatings">
                    <div id="HotelStars">
                      <div id="star">
                        {starIcons.map((icon, index) => (
                          <span key={index}>{icon}</span>
                        ))}
                      </div>
                      <Button colorScheme="black" variant="outline" size="sm">
                        RESORT
                      </Button>
                    </div>
                    <div id="HotelRatingTag">
                      <Button colorScheme="whatsapp" size="sm">
                        {hotel.HotelRating}
                      </Button>
                      <p>{hotel.ReviewRating} Ratings</p>
                    </div>
                  </div>
                  <div id="HotelName">
                    <p>{hotel.HotelName}</p>
                  </div>
                  <div id="HotelLocation">
                    <FaMapMarkerAlt />
                    <p>{Country}</p>
                  </div>
                  <p>{hotel.HotelLocation}</p>
                </div>
                <div id="MiddleHotelBoxBtm">
                  <div id="HotelMiddleBtmSection">
                    <p>{hotel.HotelDescription}</p>
                  </div>
                </div>
              </div>

              <div id="RightHotelBox">
                <p id="HotelPrice">$ {hotel.HotelPrice}</p>
                <p>+ $ {hotel.HotelTax}TAXES & FEES</p>
                <p>1 room per night</p>
                <div id="BreakFastSection">
                  <BsCupHotFill />
                  <p>INCL OF FREE BREAKFAST</p>
                </div>
                <Button
                  colorScheme="whatsapp"
                  onClick={() => {
                    handleBookNow(hotel);
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelCard;
