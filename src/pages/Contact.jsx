import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsInstagram, BsDiscord, BsPerson } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSuccess = () => {
    toast({
      title: "Message sent.",
      description: "Your message has been sent successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://voyawander-json.onrender.com/messages",
        formData
      );
      console.log(response.data);

      handleSuccess();
      setFormData({
        Name: "",
        Email: "",
        Message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={-40}>
      {" "}
      <Box bgColor={"#29335c"} h={160}></Box>
      <Container
        bg='blue.200'
        maxW='full'
        mt={0}
        centerContent
        overflow='hidden'
      >
        <Flex>
          <Box
            bg='white'
            color='black'
            borderRadius='lg'
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems='flex-start'>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='black'
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color='#1970F1' size='20px' />}
                        >
                          +91-9719635838
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='black'
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color='#1970F1' size='20px' />}
                        >
                          mi.divyam@gamil.com
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='black'
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color='#1970F1' size='20px' />
                          }
                        >
                          Noida, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems='flex-start'
                    >
                      <IconButton
                        aria-label='facebook'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: "green.200" }}
                        icon={<MdFacebook size='28px' />}
                      />
                      <IconButton
                        aria-label='github'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: "green.200" }}
                        icon={<BsInstagram size='28px' />}
                      />
                      <IconButton
                        aria-label='discord'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: "green.200" }}
                        icon={<BsDiscord size='28px' />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg='green.100' borderRadius='lg'>
                    <Box m={8} color='black'>
                      <VStack spacing={5}>
                        <FormControl id='Name'>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor='black'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<BsPerson color='gray.800' />}
                            />
                            <Input
                              type='text'
                              size='md'
                              id='Name'
                              value={formData.Name}
                              onChange={handleInputChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id='Email'>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor='black'>
                            <InputLeftElement
                              pointerEvents='none'
                              children={<MdOutlineEmail color='gray.800' />}
                            />
                            <Input
                              type='text'
                              size='md'
                              id='Email'
                              value={formData.Email}
                              onChange={handleInputChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id='Message'>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor='black'
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder='Enter your message'
                            id='Message'
                            value={formData.Message}
                            onChange={handleInputChange}
                          />
                        </FormControl>
                        <FormControl id='submit' float='right'>
                          <Button
                            variant='solid'
                            bg='#0D74FF'
                            color='white'
                            onClick={handleSubmit}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
