import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Place from "../components/Places";
import HotelCard from "../components/HotelCard";
import FlightCard from "../components/FlightCard";
import Payment from "../components/Payment";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Booking from "../components/Booking";
import Details from "../components/Details";
import Success from "../components/Success";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/destinations" element={<Place />} />
        <Route path="/hotels" element={<HotelCard />} />
        <Route path="/flights" element={<FlightCard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/details" element={<Details />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
