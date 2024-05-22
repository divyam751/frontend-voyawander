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
import { ToastContainer, toast } from "react-toastify";

const OTPModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => setShow(!show);
  const tooast = useToast();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/otp`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("OTP", res.OTP);
        if (res.status === 200) {
          toast.success(`Verification Successful`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            toast.success(`Thank you for varification!`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 1000);
          setTimeout(() => {
            navigate("/success");
          }, 5000);
        } else if (res.status === 401) {
          tooast({
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
          tooast({
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <center>
              Verify Credentials for Transaction
              <img src={safe} style={{ width: "200px" }} alt="secure" />
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
              </form>
            </center>
          </ModalBody>
        </ModalContent>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Modal>
    </>
  );
};

export default OTPModal;
