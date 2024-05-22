import React, { useState } from "react";
import "../styles/Signup.css";
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.gif";

const Signup = () => {
  const [show, setShow] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();
  const handleClick = () => setShow(!show);

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    const payload = {
      name,
      email,
      password,
    };
    fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        toast({
          title: "Signup Successful",
          description: "You have successfully signed up!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      });
  };
  return (
    <div id="SignupBody">
      <div id="SignupContainer">
        <div id="SingupLeftBox">
          <div id="imgContainer">
            <img src={signup} alt="" />
          </div>
        </div>
        <div id="SingupRightBox">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffd700"
              fillOpacity="1"
              d="M0,32L40,74.7C80,117,160,203,240,245.3C320,288,400,288,480,266.7C560,245,640,203,720,186.7C800,171,880,181,960,197.3C1040,213,1120,235,1200,224C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <Heading>Signup</Heading>
          <p id="para">to explore and book your next trip with us ✌️</p>
          <form
            onSubmit={handleSubmit}
            style={{ boxShadow: "none", width: "90%" }}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsPersonSquare color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineMail color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input id="submit" type="submit" />
            </InputGroup>
            <h6
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Already on Voyawander ?{" "}
              <b>
                <u>Sign in</u>
              </b>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
