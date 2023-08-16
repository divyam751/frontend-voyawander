import { Box } from "@chakra-ui/react";
import React from "react";
import flight from "../Images/flight.gif";

const PaymentSuccess = () => {
  setTimeout(() => {
    window.location.href = "/final";
  }, 4000);
  return (
    <Box mt={-20} bg={"#cbe4fe"} minH='100vh'>
      <Box bgColor={"#29335c"} h={20}></Box>
      <center>
        <img src={flight} alt='flight' />
      </center>
    </Box>
  );
};

export default PaymentSuccess;
