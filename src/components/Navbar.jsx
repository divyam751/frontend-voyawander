import { Box, Heading } from "@chakra-ui/react";
import "../styles/Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [close, setClose] = useState(true);
  const [visible, setVisible] = useState("");
  const [height, setHight] = useState("");

  const hamburger = () => {
    if (close) {
      setHight("h-nav-resp");
      setVisible("v-class-resp");
    } else {
      setHight("");
      setVisible("");
    }
    setClose(!close);
  };

  return (
    <Box>
      <nav className={height}>
        <Heading id='logo'>Voyawander</Heading>
        <ul className={visible}>
          <li>
            <a href='/#home'> Home</a>
          </li>
          <li>
            <a href='/#about'>About Us</a>
          </li>
          <li>
            <a href='/#hotels'>Hotels</a>
          </li>
          <li>
            <a href='/#flights'>Flights</a>
          </li>
          <li>
            <a href='/#holidays'>Holidays</a>
          </li>
          <li>
            <a href='/#contact'>Contact Us</a>
          </li>
        </ul>
        <div className='burger' onClick={hamburger}>
          {close ? <GiHamburgerMenu /> : <RxCross2 />}
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;
