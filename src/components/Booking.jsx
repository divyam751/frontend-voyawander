import React, { useState } from "react";
import "../styles/Booking.css";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const [bookingName, setBookingName] = useState("");
  const [bookingAge, setBookingAge] = useState("");
  const [bookingGender, setBookingGender] = useState("");
  const [address, setAddress] = useState("");
  const [adharNumber, setAdharNumber] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const toast = useToast();
  const navigate = useNavigate();

  const handleIncrement = () => {
    setNumTickets(numTickets + 1);
  };

  const handleDecrement = () => {
    if (numTickets > 1) {
      setNumTickets(numTickets - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const localData = JSON.parse(localStorage.getItem("currentData")) || [];

    let preload = {
      bookingName,
      bookingAge,
      bookingGender,
      address,
      adharNumber,
      numTickets,
    };

    const payload = { ...preload, ...localData };
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/booking/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
        if (res.status === 200) {
          toast({
            title: "Success!",
            description: "Details Submitted  Successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setTimeout(() => {
            navigate("/details");
          }, 5000);
        } else {
          toast({
            title: "Error",
            description: "Something went wrong ,Try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      })

      .then((err) => console.log(err));
  };
  return (
    <div id="BookingBody">
      <div id="BookingContainer">
        <form onSubmit={handleSubmit}>
          <svg
            id="fromsvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,320L21.8,293.3C43.6,267,87,213,131,202.7C174.5,192,218,224,262,213.3C305.5,203,349,149,393,117.3C436.4,85,480,75,524,106.7C567.3,139,611,213,655,229.3C698.2,245,742,203,785,176C829.1,149,873,139,916,160C960,181,1004,235,1047,245.3C1090.9,256,1135,224,1178,208C1221.8,192,1265,192,1309,202.7C1352.7,213,1396,235,1418,245.3L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
            ></path>
          </svg>
          <Heading id="bookingForm">Booking Form</Heading>
          <InputGroup>
            <Input
              type="text"
              placeholder="Full Name"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="number"
              placeholder="Age"
              value={bookingAge}
              onChange={(e) => setBookingAge(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Select
              placeholder="Select Gender"
              value={bookingGender}
              onChange={(e) => setBookingGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="number"
              placeholder="AdharCard Number"
              value={adharNumber}
              onChange={(e) => setAdharNumber(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <FormLabel>Number of Tickets</FormLabel>
            <Flex align="center">
              <Button size="sm" onClick={handleDecrement} mr={2}>
                -
              </Button>
              <Box>{numTickets}</Box>
              <Button size="sm" onClick={handleIncrement} ml={2}>
                +
              </Button>
            </Flex>
          </InputGroup>
          <InputGroup>
            <Input id="submit" type="submit" />
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default Booking;
