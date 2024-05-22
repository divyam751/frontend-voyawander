import { Box, Heading } from "@chakra-ui/react";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [close, setClose] = useState(true);
  const [visible, setVisible] = useState("display-none");
  const [height, setHight] = useState("");
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navbarShadow, setNavbarShadow] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBackground("skyblue");
        setNavbarShadow("0 2px 4px 0 rgba(0, 0, 0, 0.1)");
      } else {
        setNavbarBackground("transparent");
        setNavbarShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hamburger = () => {
    if (close) {
      setHight("h-nav-resp");
      setVisible("v-class-resp");
      setNavbarBackground("skyblue");
    } else {
      setHight("");
      setNavbarBackground("none");
      setVisible("display-none");
    }
    setClose(!close);
  };

  return (
    <Box>
      <nav
        style={{ background: navbarBackground, boxShadow: navbarShadow }}
        className={height}
      >
        <a href="/#home">
          <Heading id="logo">Voyawander</Heading>
        </a>
        <ul className={visible}>
          <li>
            <a href="/#home"> Home</a>
          </li>
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <a href="/#hotels">Hotels</a>
          </li>
          <li>
            <a href="/#flights">Flights</a>
          </li>
          <li>
            <a href="/#holidays">Holidays</a>
          </li>
          <li>
            <a href="/#contact">Contact Us</a>
          </li>
        </ul>
        <div className="burger" onClick={hamburger}>
          {close ? <GiHamburgerMenu /> : <RxCross2 />}
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;
