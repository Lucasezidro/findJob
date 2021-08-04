import { Box, Button, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { SwitchMode } from "../components/switch";


export default function Home() {

  const router = useRouter()

  function handleGetStarted() {
    router.push('/create')
  }

  const bgColor = useColorModeValue("gray.50", "gray.900")
  const headerColor = useColorModeValue("gray.200", "gray.800")
  const titleColor = useColorModeValue("purple.800", "White")
  const subtitleColor = useColorModeValue("gray.600", "gray.400")
  const btnColor = useColorModeValue("purple.700", "blue.700")
  const btnhover = useColorModeValue("purple.800", "blue.800")

  return (
    <Flex
      w="100%"
      h="100vh"
      display="flex"
      align="center"
      justify="center"
      bg={bgColor}

    >

      <Box
        as="header"
        pos="absolute"
        top="0"
        w="100%"
        h="400px"
        bg={headerColor}
      >
      <SwitchMode />

      <Heading mt="50px" ml="70px" color={titleColor}>
        Find the best professional for your team
      </Heading>

      <Text mt="50px" ml="170px" color={subtitleColor}>
        The app where recruiters find workers and workers find opportunities
      </Text>

      <Button
        pos="relative"
        top="100px"
        left="280px"
        bg={btnColor}
        color="gray.50"
        _hover={{bg: btnhover}}
        onClick={handleGetStarted}

      >
        Get Started
      </Button>

      <Button
        pos="relative"
        top="100px"
        left="310px"
        color={btnColor}
        bg={headerColor}
        border="1px solid"
        _hover={{bg: bgColor}}
        onClick={handleGetStarted}
      >
        Learn More
      </Button>

      </Box>


      
    </Flex>
  )
}
