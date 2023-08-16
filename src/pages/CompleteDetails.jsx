import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  CardBody,
  Heading,
  Card,
  WrapItem,
  Wrap,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const CompleteDetails = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get("https://voyawander-json.onrender.com/data")
      .then((response) => {
        setDetails(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(details);

  if (!details) {
    return <Text>Loading...</Text>;
  }
  const handleClick = () => {
    window.location.href = "/payment";
  };

  return (
    <>
      <Box mt={-40} minH='150vh' bg={"#cceaf7"} pb={10}>
        {" "}
        <Box bgColor={"#29335c"} h={160} mb={10}></Box>
        <Flex justifyContent='center' pr={20}>
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
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow='hidden'
            variant='outline'
            alignItems='center'
            p={10}
            mb={1}
            maxW='80%'
          >
            <Stack>
              <CardBody>
                <Heading size={"m"} pb={5}>
                  {" "}
                  Passenger Details
                </Heading>
                <hr />
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={1}
                >
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Name :
                    </Flex>
                    <Box>{details.formName}</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Age :
                    </Flex>
                    <Box>{details.formAge}</Box>
                  </Flex>

                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Gender :
                    </Flex>
                    <Box>{details.formGender}</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Address :
                    </Flex>
                    <Box>{details.formAddress}</Box>
                  </Flex>
                </Flex>
                <hr />
                <br />
                <Heading size={"m"} pb={5}>
                  {" "}
                  Holiday Details
                </Heading>
                <hr />
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={1}
                >
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Place :
                    </Flex>
                    <Box>{details.placeName}</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Hotel Name :
                    </Flex>
                    <Box>{details.hotelName}</Box>
                  </Flex>

                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Flight Name :
                    </Flex>
                    <Box>{details.flightName}</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Departure Time :
                    </Flex>
                    <Box>{details.departureTime} AM</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Landing Time :
                    </Flex>
                    <Box>{details.landingTime} AM</Box>
                  </Flex>
                </Flex>
                <hr />
                <br />
                <Heading size={"m"} pb={5}>
                  {" "}
                  Payment Details
                </Heading>
                <hr />
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={1}
                >
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Trip Amount :
                    </Flex>
                    <Box>₹{details.placePrice} /-</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Hotel Amount :
                    </Flex>
                    <Box>₹{details.hotelPrice} /-</Box>
                  </Flex>

                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      Flight Amount :
                    </Flex>
                    <Box>₹{details.flightPrice} /-</Box>
                  </Flex>
                  <Flex flexDirection={"row"} gap={10}>
                    <Flex w={129} alignItems={"flex-start"}>
                      No. of Passengers :
                    </Flex>
                    <Box>{details.numTickets} Nos</Box>
                  </Flex>
                </Flex>
                <br />
                ============================================
                <Flex flexDirection={"row"} gap={10}>
                  <Flex w={129} alignItems={"flex-start"}>
                    <Heading size={"m"} pb={5} pt={2}>
                      {" "}
                      Total Amount :
                    </Heading>
                  </Flex>
                  <Box pt={2}>
                    ₹
                    {(details.placePrice * 1 +
                      details.hotelPrice +
                      details.flightPrice * 1) *
                      details.numTickets}{" "}
                    /-
                  </Box>
                </Flex>
                ============================================
              </CardBody>
            </Stack>
          </Card>
          <Wrap spacing={4} mt={3}>
            <WrapItem>
              <Button colorScheme='whatsapp' onClick={handleClick}>
                Proceed To Pay
              </Button>
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
    </>
  );
};

export default CompleteDetails;
