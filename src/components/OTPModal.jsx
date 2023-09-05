import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import safe from "../assets/safe.gif";

const OTPModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    // console.log(payload);
    fetch("http://localhost:8000/otp", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("OTP", res.OTP);
        if (res.status === 200) {
          setTimeout(() => {
            navigate("/success");
          }, 2000);
        } else if (res.status === 401) {
          toast({
            title: "Login Failed",
            description: "Invalid credentials. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setTimeout(() => {
            navigate("/payment");
          }, 5000);
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
      })

      .then((err) => console.log(err));
  };
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {/* <ModalContent bg={"#51CCE0"}> */}
        <ModalContent>
          <ModalHeader>
            <center>
              Verify Credentials for OTP
              <img src={safe} style={{ width: "200px" }} alt='secure' />
            </center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <center>
              <form
                onSubmit={handleSubmit}
                style={{ boxShadow: "none", width: "100%" }}
              >
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <AiOutlineMail color='gray.300' />
                  </InputLeftElement>
                  <Input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? "text" : "password"}
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <InputGroup>
                  <Input id='submit' type='submit' />
                </InputGroup>
              </form>
            </center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OTPModal;
