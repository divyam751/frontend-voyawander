import axios from "axios";
import { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "../Images/Logo/Logo.png";

export default function SigninCard() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSuccessLogin = (email) => {
    toast({
      title: "Login Successful",
      description: "You have successfully logged in.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    console.log(email);
    if (email === "admin@voyawander.com") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/booking";
    }
  };

  const handleInvalidLogin = () => {
    toast({
      title: "Invalid Login",
      description: "Please check your credentials and try again.",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://voyawander-json.onrender.com/users"
      );
      const users = response.data;
      console.log(users);

      if (users) {
        const user = users.find(
          (u) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          handleSuccessLogin(user.email);
        } else {
          handleInvalidLogin();
        }
      } else {
        console.log("Users array is undefined");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box mt={-40}>
      {" "}
      <Box bgColor={"#29335c"} h={160}></Box>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("green.500")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <img src={Logo} alt='logo' width={250} />
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"white"}>
              to explore and booking your next trip with us ✌️{" "}
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form>
                <FormControl id='email'>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmit}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
