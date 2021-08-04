import { Avatar, Box, Flex, Icon, Link, Text, useColorModeValue, ChakraProps } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'

interface CardProps extends ChakraProps{
    avatar?: string;
    name: string;
    email: string;
    job: string;
    alt: string;
}

export function Card(props: CardProps) {
    const bgForm = useColorModeValue("gray.200", "gray.800")
    const linkColor = useColorModeValue("purple.400", "blue.500")
    const textcolor = useColorModeValue("gray.700", "gray.400")
    const iconColor = useColorModeValue("gray.900", "gray.300")

    return(
            <Flex
            pos="absolute"
            top="150px"
            display="flex"
            left="100px"
            w="300px"
            h="200px"
            bg={bgForm}
            borderRadius="10"
        >
                <Avatar 
                    name={props.alt} 
                    size="lg" 
                    src={props.avatar}
                    ml="4"
                    mt="4" 
                />

                <Text
                    fontSize="14"
                    pos="absolute"
                    top="25px"
                    left="100px"
                >
                    {props.name}
                </Text>
                <Text
                    fontSize="14"
                    pos="relative"
                    top="45px"
                    left="20px"
                    color={textcolor}
                >
                    {props.email}
                </Text>

                <Text
                    pos="absolute"
                    top="120px"
                    left="4"
                    color={textcolor}
                >
                    {props.job}
                </Text>

                <Link
                    href="/profile"
                    pos="absolute"
                    top="160px"
                    left="4"
                    color={linkColor}
                >
                    View Profile
                </Link>

                <Box>
                    <Link href="https://github.com/Lucasezidro">
                        <Icon 
                            as={FaGithub} 
                            mt="120px"
                            pos="relative"
                            right="60px"
                            fontSize="20"
                            color={iconColor}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lucasezidro/">
                        <Icon 
                            as={FaLinkedin} 
                            mt="120px"
                            pos="relative"
                            right="50px"
                            fontSize="20"
                            color={iconColor}
                        />
                    </Link>
                    <Link href="/profile">
                        <Icon 
                            as={AiOutlineMessage} 
                            mt="120px"
                            pos="relative"
                            right="40px"
                            fontSize="20"
                            color={iconColor}
                        />
                    </Link>
                </Box>

        </Flex>
    )
}