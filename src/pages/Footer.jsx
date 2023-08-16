import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoWhatsapp, BiMailSend } from "react-icons/bi";
import Logo from "../Images/Logo/Logo.png";

const Footer = () => {
  return (
    <Box bg={"royalblue"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <img src={Logo} alt='logo' width={250} />
            <Text fontWeight={"500"} fontSize={"lg"} mb={2} pl={20} mt={-5}>
              Discover the World!!!
            </Text>
          </Stack>
          <Stack align={"flex-start"}></Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Social
            </Text>
            <Link href={"#"}>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <FaInstagram />
                <Text>Instagram</Text>
              </Stack>
            </Link>
            <Link href={"#"}>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <FaTwitter />
                <Text>Twitter</Text>
              </Stack>
            </Link>
            <Link href={"#"}>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <FaYoutube />
                <Text>YouTube</Text>
              </Stack>
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Contact
            </Text>
            <Link href={"#"}>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <BiMailSend />
                <Text>mi.divyam@gmail.com</Text>
              </Stack>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <BiLogoWhatsapp />
                <Text>+91 9719635838</Text>
              </Stack>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderTopColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
        >
          <Text>© 2023 Voyawander. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
