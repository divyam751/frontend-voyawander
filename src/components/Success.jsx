import React, { useEffect, useState } from "react";
import "../styles/Success.css";
import vector from "../assets/successimg.jpg";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Start from "./Start";

const Success = () => {
  const [complete, setComplete] = useState(false);
  const [start, setStart] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setComplete(true);
    }, 5000);
    setTimeout(() => {
      setStart(true);
    }, 7000);
  }, []);

  const handleBookMore = () => {
    navigate("/destinations");
  };
  const handleHome = () => {
    navigate("/#home");
  };

  return (
    <div className="success-container">
      {start ? <Start setStart={setStart} /> : ""}
      {!complete ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div className="spinner"></div>
          <h1>Please wait your transaction is in progress</h1>
        </div>
      ) : (
        <div className="success-box">
          <div className="success-LHS">
            <Container maxW={"5xl"}>
              <Stack
                textAlign={"center"}
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"60%"}
                >
                  Payment Successful{" "}
                </Heading>
                <Text color={"gray.500"} maxW={"3xl"}>
                  Thank you for choosing Voyawander! Your payment has been
                  received and Your journey begins here, we can't wait to
                  explore the world with you.
                </Text>
                <Stack spacing={6} direction={"row"}>
                  <Button
                    rounded={"full"}
                    px={6}
                    colorScheme={"orange"}
                    bg={"orange.400"}
                    _hover={{ bg: "orange.500" }}
                    onClick={handleBookMore}
                  >
                    Book More
                  </Button>
                  <Button rounded={"full"} px={6} onClick={handleHome}>
                    Home Page
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </div>
          <div className="success-RHS">
            <img src={vector} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
