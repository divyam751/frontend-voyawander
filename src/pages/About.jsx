import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box mt={-40} minH='150vh'>
      <Box bgColor={"#29335c"} h={160} mb={10}></Box>
      <Box
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        py={20}
        bg={"#cceaf7"}
        mt={-10}
      >
        <Box maxW='800px' mx='auto' px={6} mt={-59}>
          <img
            src='https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif'
            alt=''
          />
          <Flex
            direction='column'
            align='center'
            justify='center'
            bg='transparent'
            mt={-100}
            position='relative'
            zIndex={1}
          >
            <Heading color='black' fontSize='6xl' textAlign='center' mt={20}>
              <Text color={"black"}>Welcome to Voyawander</Text>
            </Heading>
            <Text
              color='black'
              fontSize='20'
              textAlign='center'
              mt={4}
              //   pb={400}
            >
              Explore the world with Voyawander, your ultimate travel companion.
            </Text>

            <Box bg='orange.200' p={6} mt={40} borderRadius='md' boxShadow='md'>
              <Heading mb={4} fontSize='2xl'>
                Our Mission
              </Heading>
              <Text fontSize='lg'>
                At Voyawander, we believe that traveling is the best way to
                enrich your life and create lasting memories. Our mission is to
                inspire and empower travelers to discover new destinations,
                connect with diverse cultures, and create unforgettable
                experiences.
              </Text>
            </Box>
            <Box bg='pink.200' p={6} mt={20} borderRadius='md' boxShadow='md'>
              <Heading mb={4} fontSize='2xl'>
                Our Team
              </Heading>
              <Text fontSize='lg'>
                We have a dedicated team of travel enthusiasts who are
                passionate about curating the best travel experiences for our
                users. Our team combines extensive knowledge of different
                destinations with a deep understanding of traveler preferences,
                ensuring that every trip planned through Voyawander is tailored
                to perfection.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
