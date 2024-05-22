import React, { useState } from "react";
import "../styles/Payment.css";
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OTPModal from "./OTPModal";

const Payment = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = React.useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [ExpirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setcardHolderName] = useState("");
  const handleClick = () => setShow(!show);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      cardHolderName === "" ||
      cardNumber === "" ||
      ExpirationDate === "" ||
      cvv === ""
    ) {
      toast.error(`Please fill in all required fields.😕`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const payload = {
      cardHolderName,
      cardNumber,
      ExpirationDate,
      cvv,
    };

    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/payment`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setModal(true);
        } else if (res.status === 401) {
          toast.error(
            `Payment Failed😕,Invalid credentials. Please try again.`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      })

      .then((err) => console.log(err));
  };
  return (
    <div id="PaymentBody">
      <div id="PaymentContainer">
        <div id="PaymentLeftBox">
          <div id="imgContainer">
            <img
              src="https://cdn.dribbble.com/users/1523313/screenshots/13591454/media/b5c05bf8f1512759f199bdf613995297.gif"
              alt=""
            />
          </div>
        </div>
        <div id="PaymentRightBox">
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,64L40,96C80,128,160,192,240,192C320,192,400,128,480,122.7C560,117,640,171,720,181.3C800,192,880,160,960,170.7C1040,181,1120,235,1200,224C1280,213,1360,139,1400,101.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <Heading id="Heading">Payment Page</Heading>
          <p id="para">
            Securely complete your purchase and make a payment with our trusted
            payment gateway ✌️
          </p>
          <form onSubmit={handleSubmit} className="paymentForm">
            <InputGroup>
              <Input
                type="number"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                placeholder="Expiration Date "
                value={ExpirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                placeholder="Name"
                value={cardHolderName}
                onChange={(e) => setcardHolderName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Input id="submit" type="submit" />
            </InputGroup>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
          {modal ? <OTPModal /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Payment;
