import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Textarea,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [married, setMarried] = useState(false);
  const [address, setAddress] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const toast = useToast();

  const handleIncrement = () => {
    setNumTickets(numTickets + 1);
  };

  const handleDecrement = () => {
    if (numTickets > 1) {
      setNumTickets(numTickets - 1);
    }
  };

  const handleSubmit = () => {
    const updatedData = {
      formName: name,
      formAge: age,
      formGender: gender,
      married: married,
      formAddress: address,
      aadharCard: aadharCard,
      numTickets: numTickets,
      id: 1,
    };
    axios
      .patch("https://voyawander-json.onrender.com/data/" + 1, updatedData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    handleSuccess();
    setTimeout(() => {
      window.location.href = "/details";
    }, 5000);
  };

  const handleSuccess = () => {
    toast({
      title: "Form Submitted",
      description: "Form data has been successfully updated.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <Box bg={"#CCEAF7"} minH='110vh' mt={-40}>
      <Box bgColor={"#29335c"} h={40}></Box>
      <Center>
        <Box w={500} pt={10}>
          <Flex>
            <Box flex='1' p={5} bg={"white"}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your name'
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Age</FormLabel>
                <Input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder='Enter your age'
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder='Select your gender'
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Checkbox
                  isChecked={married}
                  onChange={(e) => setMarried(e.target.checked)}
                >
                  Married
                </Checkbox>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Enter your address'
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Aadhar Card Number</FormLabel>
                <Input
                  value={aadharCard}
                  onChange={(e) => setAadharCard(e.target.value)}
                  placeholder='Enter your Aadhar Card number'
                />
              </FormControl>
              <Flex alignItems={"center"}>
                <FormControl mt={4}>
                  <FormLabel>Number of Tickets</FormLabel>
                  <Flex align='center'>
                    <Button size='sm' onClick={handleDecrement} mr={2}>
                      -
                    </Button>
                    <Box>{numTickets}</Box>
                    <Button size='sm' onClick={handleIncrement} ml={2}>
                      +
                    </Button>
                  </Flex>
                </FormControl>
              </Flex>
              <Button mt={4} colorScheme='blue' onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default BookingForm;
