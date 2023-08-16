import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import Card from "../Images/card.png";

const Payment = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.cardNumber === "1111 2222 3333 4444" &&
      formData.expirationDate === "07/25" &&
      formData.cvv === "123" &&
      formData.name === "DIVYAM CHAUHAN"
    ) {
      const success = () => {
        toast({
          title: "Details Submitted.",
          description: "Please wait for Confirmation",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      };
      success();
      window.location.href = "/success";
    } else {
      console.log("not working");
    }
  };

  return (
    <Box bgColor={"#cceaf7"} marginTop={-40}>
      <Box bgColor={"#29335c"} h={160}></Box>
      <Flex justifyContent={"center"} pt={20}>
        <img src={Card} alt='' />
      </Flex>
      <Flex
        fontSize={40}
        color={"gray.300"}
        fontWeight={""}
        mt={-180}
        pl='32%'
        pb={30}
      >
        {formData.cardNumber}
      </Flex>
      <Flex fontSize={25} color={"gray.300"} fontWeight={""} mt={-15} pl='37%'>
        <Box pr={20}> {formData.expirationDate !== "" ? "07/23" : " "} </Box>{" "}
        <Box pl={5}>{formData.expirationDate}</Box>
      </Flex>
      <Flex fontSize={25} color={"gray.300"} fontWeight={""} pl='36%'>
        <Box pl={5}>{formData.name}</Box>
      </Flex>

      <Center>
        <Box
          bg='gray.200'
          p={8}
          borderRadius='lg'
          boxShadow='lg'
          width='400px'
          mt={170}
          mb={20}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input
                type='text'
                name='cardNumber'
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type='text'
                name='expirationDate'
                value={formData.expirationDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>CVV</FormLabel>
              <Input
                type='password'
                name='cvv'
                value={formData.cvv}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type='submit'
              colorScheme='blue'
              mt={4}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default Payment;
