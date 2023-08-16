import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  CardBody,
  Heading,
  Card,
} from "@chakra-ui/react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import watermarkImage from "../Images/stamp.png";

const FinalPage = () => {
  const [details, setDetails] = useState(null);
  const containerRef = useRef(null);

  async function handleDelete() {
    const url = "https://voyawander-json.onrender.com/data/1"; // Replace with your delete endpoint
    try {
      const response = await axios.delete(url);
      console.log("Data deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting data:", error.response.data);
    }
  }

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

  useEffect(() => {
    if (details) {
      setTimeout(() => {
        const options = {
          filename: "Voyawander.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 1 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        html2canvas(containerRef.current).then((canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF(options.jsPDF);

          pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);

          const watermarkWidth = 100;
          const watermarkHeight =
            (watermarkWidth / canvas.width) * canvas.height;
          const x = (pdf.internal.pageSize.getWidth() - watermarkWidth) / 2;
          const y = (pdf.internal.pageSize.getHeight() - watermarkHeight) / 2;
          pdf.addImage(
            watermarkImage,
            "PNG",
            x,
            y,
            watermarkWidth,
            watermarkHeight
          );

          pdf.save(options.filename);
        });
      }, 3000);

      setTimeout(() => {
        handleDelete();
        console.log("Deleted Data DC");
      }, 7000);

      setTimeout(() => {
        window.location.href = "/";
      }, 8000);
    }
  }, [details]);

  if (!details) {
    return (
      // <Box mt={-20} bg={"#d5f6ff"}>
      <Box mt={-20} bg={"white"}>
        <Box bgColor={"#29335c"} h={20}></Box>

        <Text fontSize={30}>Data has been Downloaded</Text>
        <Flex justifyContent={"center"}>
          <img
            // src='https://cdn.dribbble.com/users/2359873/screenshots/6714149/the-trash-can.gif'
            src='https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif'
            alt='dust'
          />
        </Flex>
      </Box>
    );
  }

  return (
    <>
      <Box mt={-40} minH='150vh' bg={"#cceaf7"} pb={10}>
        <Box bgColor={"#29335c"} h={160} mb={10}></Box>
        <Flex justifyContent='center' pr={20}></Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <div ref={containerRef}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow='hidden'
              variant='outline'
              alignItems='center'
              p={10}
              mb={1}
              maxW='110%'
            >
              <Stack>
                <CardBody>
                  <Heading size='m' pb={5}>
                    Passenger Details
                  </Heading>
                  <hr />
                  <Flex flexDirection='column' alignItems='flex-start' gap={1}>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Name :
                      </Flex>
                      <Box>{details.formName}</Box>
                    </Flex>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Age :
                      </Flex>
                      <Box>{details.formAge}</Box>
                    </Flex>

                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Gender :
                      </Flex>
                      <Box>{details.formGender}</Box>
                    </Flex>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Address :
                      </Flex>
                      <Box>{details.formAddress}</Box>
                    </Flex>
                  </Flex>
                  <hr />
                  <br />
                  <Heading size='m' pb={5}>
                    Holiday Details
                  </Heading>
                  <hr />
                  <Flex flexDirection='column' alignItems='flex-start' gap={1}>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Place :
                      </Flex>
                      <Box>{details.placeName}</Box>
                    </Flex>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Hotel Name :
                      </Flex>
                      <Box>{details.hotelName}</Box>
                    </Flex>

                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Flight Name :
                      </Flex>
                      <Box>{details.flightName}</Box>
                    </Flex>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Departure Time :
                      </Flex>
                      <Box>{details.departureTime} AM</Box>
                    </Flex>
                    <Flex flexDirection='row' gap={10}>
                      <Flex w={129} alignItems='flex-start'>
                        Landing Time :
                      </Flex>
                      <Box>{details.landingTime} AM</Box>
                    </Flex>
                  </Flex>
                  <hr />
                  <br />
                  <Box
                    style={{
                      backgroundImage: `url('https://png.pngtree.com/png-vector/20230208/ourmid/pngtree-paid-stamp-vector-illustration-png-image_6585127.png')`,
                      backgroundSize: "180px",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Heading size='m' pb={5}>
                      Payment Details
                    </Heading>
                    <hr />
                    <Flex
                      flexDirection='column'
                      alignItems='flex-start'
                      gap={1}
                    >
                      <Flex flexDirection='row' gap={10}>
                        <Flex w={129} alignItems='flex-start'>
                          Trip Amount :
                        </Flex>
                        <Box>₹{details.placePrice} /-</Box>
                      </Flex>

                      <Flex flexDirection='row' gap={10}>
                        <Flex w={129} alignItems='flex-start'>
                          Hotel Amount :
                        </Flex>
                        <Box>₹{details.hotelPrice} /-</Box>
                      </Flex>

                      <Flex flexDirection='row' gap={10}>
                        <Flex w={129} alignItems='flex-start'>
                          Flight Amount :
                        </Flex>
                        <Box>₹{details.flightPrice} /-</Box>
                      </Flex>
                      <Flex flexDirection='row' gap={10}>
                        <Flex w={129} alignItems='flex-start'>
                          No. of Passengers :
                        </Flex>
                        <Box>{details.numTickets} Nos</Box>
                      </Flex>
                    </Flex>
                  </Box>
                  <br />
                  ==================================
                  <Flex flexDirection='row' gap={10}>
                    <Flex w={129} alignItems='flex-start'>
                      <Heading size='m' pb={5} pt={2}>
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
                  ==================================
                </CardBody>
              </Stack>
            </Card>
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default FinalPage;
