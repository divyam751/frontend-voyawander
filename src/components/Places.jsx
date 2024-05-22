import React, { useState, useEffect } from "react";
import axios from "axios";
import _debounce from "lodash/debounce";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import "../styles/Places.css";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Place = () => {
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const debouncedSearch = _debounce((value) => {
    // Fetch data using Axios with search parameter

    axios
      .get(`${apiUrl}/places?search=${value}`)
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
    setLoading(true);
    axios
      .get(`${apiUrl}/places`)
      .then((response) => {
        setPlacesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(setLoading(false));
  }, [apiUrl]);

  const handleBook = (place) => {
    const userData = JSON.stringify(place);
    localStorage.setItem("currentData", userData);
    navigate("/hotels");
  };

  return (
    <div className="mainBody">
      <Heading>Find Popular Destinations</Heading>
      <Flex justifyContent={"center"}>
        <InputGroup
          mt={4}
          mb={6}
          w={600}
          size={"lg"}
          backgroundColor={"whiteAlpha.500"}
          borderRadius={"5px"}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaSearch} color="black.500" />}
          />
          <Input
            type="text"
            placeholder="Search places..."
            onChange={handleSearchInputChange}
            value={searchInput}
          />
        </InputGroup>
      </Flex>
      <div id="holidaysContainer">
        {loading ? (
          <Loader />
        ) : (
          placesData.map((place) => (
            <div className="box" key={place.placeName}>
              <div className="holidayImage">
                <img src={place.imageURL} alt={place.placeName} />
              </div>
              <div className="content">
                <Heading>{place.placeName}</Heading>
                <h2>{place.tripDuration}</h2>
                <div className="bookingBox">
                  <div className="priceBox">
                    <span id="starts">Starts from</span>
                    <span id="price">${place.price} / person</span>
                  </div>
                  <Button
                    id="btn"
                    onClick={() => {
                      handleBook(place);
                    }}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Place;
