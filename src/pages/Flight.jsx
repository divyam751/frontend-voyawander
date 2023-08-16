import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

const Flight = () => {
  const [flights, setFlights] = useState([]);
  const [lastBookedData, setLastBookedData] = useState(null);

  const handleClick = (flight) => {
    const lastDataObject = lastBookedData;
    const updatedData = {
      flightName: flight.flightName,
      flightPrice: flight.price,
      flightImage: flight.image,
      departureTime: flight.departureTime,
      landingTime: flight.landingTime,
      id: lastDataObject.id,
    };
    axios
      .patch(
        "https://voyawander-json.onrender.com/data/" + lastDataObject.id,
        updatedData
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      window.location.href = "/signup";
    }, 3000);
  };

  useEffect(() => {
    fetchFlightData();
  }, []);

  const fetchFlightData = async () => {
    axios
      .get("https://voyawander-json.onrender.com/flights")
      .then((response) => {
        setFlights(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    //booked data
    axios
      .get("https://voyawander-json.onrender.com/data")
      .then((booking) => {
        setLastBookedData(booking.data[booking.data.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box mt={-40} minH='150vh' bg={"#cceaf7"}>
        {" "}
        <Box bgColor={"#29335c"} h={160} mb={10}></Box>
        <Flex justifyContent='center'>
          <img
            src='https://www.freepnglogos.com/uploads/plane-png/plane-png-flights-airlines-msp-airport-1.png'
            alt='poster'
            width={400}
          />
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent={"center"}
          alignItems={"center"}
        >
          {flights.map((flight, index) => (
            <Card
              key={index}
              direction={{ base: "column", sm: "row" }}
              overflow='hidden'
              variant='outline'
              alignItems='center'
              maxH={20}
              p={10}
              mb={1}
              maxW='80%'
            >
              <Image
                objectFit='cover'
                maxW={{ base: "100%", sm: "100px" }}
                src={flight.image}
                alt='flight'
              />

              <Stack>
                <CardBody>
                  <Flex g={20} justifyContent='space-around' pt={5} pl={50}>
                    <Box max w={40}>
                      <Heading size='md'>{flight.flightName}</Heading>
                    </Box>
                    <Flex flexDirection='column'>
                      <Text pl={20}>
                        {flight.departureTime} ------ {flight.landingTime}
                      </Text>

                      <Flex>
                        <Text fontSize={10} pl={20}>
                          {flight.departureLocation}
                        </Text>
                        <Text fontSize={10} pl={12}>
                          {flight.arrivalLocation}
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex flexDirection='column' pl={20}>
                      <Text> | {flight.totalTime}</Text>
                      <Text fontSize={10}>{flight.nonStop}</Text>
                    </Flex>
                    <Text pl={20}>₹ {flight.price} /-</Text>
                    <Button
                      ml={20}
                      variant='solid'
                      colorScheme='blue'
                      onClick={() => {
                        handleClick(flight);
                      }}
                    >
                      Book Now
                    </Button>
                  </Flex>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Flight;
