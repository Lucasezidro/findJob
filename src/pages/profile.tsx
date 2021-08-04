import { Flex, useColorModeValue } from "@chakra-ui/react";
import { SwitchMode } from "../components/switch";

export default function Profile() {
    const bgColor = useColorModeValue("gray.50", "gray.900")

    return (
        <Flex
            w="100%"
            h="100vh"
            bg={bgColor}
        >
            
            <SwitchMode />
        </Flex>
    )
}