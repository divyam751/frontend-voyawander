import React, { useState, useEffect } from "react";
import "../styles/Details.css";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Details() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };

  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/booking`)
      .then((res) => setData(res.data))
      .then((error) => console.log(error));
  }, [apiUrl]);

  let n = data.length;
  let len = Number.parseInt(n);
  if (len === 0) {
    return <div>Loading...</div>;
  }

  const bookingData = data[len - 1];
  return (
    <div id="DetailsBody">
      <div id="DetailsContainer">
        <p id="Headings">Passenger Details</p>
        <table>
          <tr>
            <td>Name</td>
            <td>{bookingData.bookingName}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{bookingData.bookingAge}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{bookingData.bookingGender}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{bookingData.address}</td>
          </tr>
        </table>
        {/* Holiday */}
        <p id="Headings">Holiday Details</p>
        <table>
          <tr>
            <td>Place</td>
            <td>{bookingData.placeName}</td>
          </tr>
          <tr>
            <td>Hotel Name</td>
            <td>{bookingData.HotelName}</td>
          </tr>
          <tr>
            <td>Flight Name</td>
            <td>{bookingData.FlightName}</td>
          </tr>
          <tr>
            <td>Departure Time </td>
            <td>{bookingData.tripDuration}</td>
          </tr>
          <tr>
            <td>Arrival Time </td>
            <td>{bookingData.ArrivalTime}</td>
          </tr>
        </table>
        {/* Holiday */}
        <p id="Headings">Payment Details</p>
        <table>
          <tr>
            <td>Trip Amount</td>
            <td>$ {bookingData.price}</td>
          </tr>
          <tr>
            <td>Hotel Amount</td>
            <td>$ {bookingData.HotelPrice}</td>
          </tr>
          <tr>
            <td>Flight Amount</td>
            <td>$ {bookingData.FlightPrice}</td>
          </tr>
          <tr>
            <td>No. of Passengers </td>
            <td>{bookingData.numTickets} </td>
          </tr>
        </table>
        <p id="Headings">Payment Details</p>
        <table>
          <tr>
            <td>Total Amount</td>
            <td>
              $
              {(bookingData.price +
                bookingData.HotelPrice +
                bookingData.FlightPrice) *
                bookingData.numTickets}
            </td>
          </tr>
        </table>
        <Button id="pay" colorScheme="whatsapp" onClick={handleClick}>
          Proceed To Pay
        </Button>
      </div>
    </div>
  );
}

export default Details;
