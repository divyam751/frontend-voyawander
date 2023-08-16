import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Place from "../components/Places";
import HotelCard from "../components/HotelCard";
import FlightCard from "../components/FlightCard";
import BookingForm from "../components/BookingForm";
import CompleteDetails from "../components/CompleteDetails";
import Payment from "../components/Payment";
import Ticket from "../components/Ticket";
import FinalPage from "../components/FinalPage";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/destinations' element={<Place />} />
        <Route path='/hotels' element={<HotelCard />} />
        <Route path='/flights' element={<FlightCard />} />
        <Route path='/booking' element={<BookingForm />} />
        <Route path='/details' element={<CompleteDetails />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/finalpage' element={<FinalPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
