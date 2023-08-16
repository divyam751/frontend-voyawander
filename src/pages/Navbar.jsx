import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Main.css";
import { Box, Button, WrapItem } from "@chakra-ui/react";
import Logo from "../Images/Logo/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className='transparent-navbar'>
      {" "}
      <img src={Logo} alt='logo' style={{ height: 70 }} />
      <Box id='headerBox'>
        <nav ref={navRef}>
          <Link to='/'>Home </Link>
          <Link to='/about'>About Us</Link>
          <Link to='/hotels'>Hotels</Link>
          <Link to='/Flight'>Flights</Link>
          <Link to='/holidays'>Holidays</Link>
          <Link to='/contact'>Contact Us</Link>

          <WrapItem>
            <Button colorScheme='orange' m={4}>
              <Link to='/signIn'>Sign In</Link>
            </Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='whatsapp'>
              <Link to='/signup'>Sign Up</Link>
            </Button>
          </WrapItem>

          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </Box>
    </header>
  );
}

export default Navbar;
