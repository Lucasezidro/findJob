import { Avatar, Box, Flex, Heading, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Navmenu } from "../components/navMenu";
import { SwitchMode } from "../components/switch";
import { Card } from "../components/card";

export default function Dashboard() {
    const bgColor = useColorModeValue("gray.50", "gray.900")
    
    return(
        <Flex
            w="100%"
            h="100vh"
            bg={bgColor}
        >

            <SwitchMode />
            <Navmenu />

            <Box
                pos="absolute"
                top="15px"
                right="140px"
            >
                <Link href="/profile">
                    <Avatar name="Lucas Ezidro" size="sm" src="https://avatars.githubusercontent.com/u/80000943?v=4" />
                </Link>
            </Box>

            <Heading pos="absolute" top="70px" left="100px">Make your team!</Heading>
            <Card 
                name="Lucas Ezidro"
                email="lucasezidro7@gmail.com"
                avatar="https://avatars.githubusercontent.com/u/80000943?v=4"
                job="full-stack developer"
                alt="Lucas Ezidro"
            />

            <Box pos="absolute" left="450px">
                <Card
                    name="Paula Blinofi"
                    email="pblinofi@gmail.com"
                    job="teacher"
                    alt="Paula Blinofi"
                />
            </Box>

            <Box pos="absolute" left="900px">
                <Card 
                    name="Alice Blinofi"
                    email="alice@gmail.com"
                    job="student"
                    alt="Alice Blinofi Ezidro"
                />
            </Box>

           
        </Flex>
    )
}