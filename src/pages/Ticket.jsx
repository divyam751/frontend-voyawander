import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";

const Ticket = ({
  airline,
  flightNumber,
  departure,
  destination,
  date,
  time,
}) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='md'
      padding='4'
      marginBottom='4'
      boxShadow='md'
    >
      <Text fontSize='xl' fontWeight='bold' marginBottom='2'>
        {airline}
      </Text>
      <Text marginBottom='2'>
        Flight Number: <b>{flightNumber}</b>
      </Text>
      <Text marginBottom='2'>
        Departure: <b>{departure}</b>
      </Text>
      <Text marginBottom='2'>
        Destination: <b>{destination}</b>
      </Text>
      <Text marginBottom='2'>
        Date: <b>{date}</b>
      </Text>
      <Text marginBottom='2'>
        Time: <b>{time}</b>
      </Text>
    </Box>
  );
};

Ticket.propTypes = {
  airline: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Ticket;
