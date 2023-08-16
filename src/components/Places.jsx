import React, { useState, useEffect } from "react";
import axios from "axios";
import _debounce from "lodash/debounce";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import "../styles/Places.css";

const Place = () => {
  const [placesData, setPlacesData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const debouncedSearch = _debounce((value) => {
    // Fetch data using Axios with search parameter
    axios
      .get(`http://localhost:8000/places?search=${value}`)
      .then((response) => {
        setPlacesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, 300); // Adjust the debounce delay as needed

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    // Fetch all places initially
    axios
      .get("http://localhost:8000/places")
      .then((response) => {
        setPlacesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='mainBody'>
      <Heading>Find Popular Destinations</Heading>
      <Flex justifyContent={"center"}>
        <InputGroup mt={4} mb={6} w={600} size={"lg"}>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={FaSearch} color='gray.500' />}
          />
          <Input
            type='text'
            placeholder='Search places...'
            onChange={handleSearchInputChange}
            value={searchInput}
          />
        </InputGroup>
      </Flex>
      <div id='holidaysContainer'>
        {placesData.map((place) => (
          <div className='box' key={place.placeName}>
            <div className='holidayImage'>
              <img src={place.imageURL} alt={place.placeName} />
            </div>
            <div className='content'>
              <Heading>{place.placeName}</Heading>
              <h2>{place.tripDuration}</h2>
              <div className='bookingBox'>
                <div className='priceBox'>
                  <span id='starts'>Starts from</span>
                  <span id='price'>${place.price} / person</span>
                </div>
                <Button id='btn'>Book</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Place;
