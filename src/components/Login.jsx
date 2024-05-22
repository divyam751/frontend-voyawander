import React, { useState } from "react";
import "../styles/Login.css";
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/Login.gif";
const Login = () => {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.token);
        if (res.status === 200) {
          toast({
            title: "Login Successful",
            description: "You have successfully Login!",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          setTimeout(() => {
            navigate("/booking");
          }, 3000);
        } else if (res.status === 401) {
          toast({
            title: "Login Failed",
            description: "Invalid credentials. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        } else if (res.status === 404) {
          toast({
            title: "User Not Found",
            description: "User not found, please sign up first.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      });
  };
  return (
    <div id="LoginBody">
      <div id="LoginContainer">
        <div id="LoginLeftBox">
          <div id="imgContainer">
            <img src={loginImg} alt="" />
          </div>
        </div>
        <div id="LoginRightBox">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#22C4F9"
              fillOpacity="1"
              d="M0,64L40,96C80,128,160,192,240,192C320,192,400,128,480,122.7C560,117,640,171,720,181.3C800,192,880,160,960,170.7C1040,181,1120,235,1200,224C1280,213,1360,139,1400,101.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <Heading>Login</Heading>
          <p id="para">to explore and book your next trip with us ✌️</p>
          <form
            onSubmit={handleSubmit}
            style={{ boxShadow: "none", width: "90%" }}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineMail color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer" }}
            >
              Don't have an account ?{" "}
              <b>
                <u>Sign up</u>
              </b>
            </h6>
          </form>
          <svg
            id="svg2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#22C4F9"
              fillOpacity="1"
              d="M0,160L24,170.7C48,181,96,203,144,176C192,149,240,75,288,58.7C336,43,384,85,432,101.3C480,117,528,107,576,117.3C624,128,672,160,720,176C768,192,816,192,864,192C912,192,960,192,1008,186.7C1056,181,1104,171,1152,160C1200,149,1248,139,1296,133.3C1344,128,1392,128,1416,128L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
