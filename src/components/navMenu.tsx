import { Box, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link'


export function Navmenu() {

    const subtitleColor = useColorModeValue("gray.600", "gray.400")
    const hover = useColorModeValue("gray.700", "gray.500")

    return(
            <Box 
            as="header"
            display="flex"
            ml="100px"
            mt="4"
            
        >
            <Box mr="6" fontSize="18px" color={subtitleColor} transition="all 0.5s" _hover={{
                color: hover,
                textDecoration: "underline"
            }}>
                <Link href="/dashboard">
                    Home
                </Link>
            </Box>

            <Box fontSize="18px" color={subtitleColor} transition="all 0.5s" _hover={{
                color: hover,
                textDecoration: "underline"
            }}>
                <Link href="/profile">
                    Profile
                </Link>
            </Box>

            <Box ml="6" fontSize="18px" color={subtitleColor} transition="all 0.5s" _hover={{
                color: hover,
                textDecoration: "underline"
            }}>
                <Link href="/projects">
                    Projects
                </Link>
            </Box>
        </Box>

    )
}