import { Box, Button, Flex, FormLabel, Heading, Icon, Input, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { SwitchMode } from "../components/switch";
import { useState } from "react";
import { GetServerSideProps } from 'next';
import parseCookies from '../hooks/parseCookies'
import Lottie from 'react-lottie'
import animationData from '../components/animations/animations.json'
import { ModalSkiil } from "../components/Modal";
import { FaCss3, FaGithubSquare, FaHtml5, FaPython, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'



export default function Profile({ initialImgValue }) {
    const defaultOptions = { 
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false,
    })

    console.log("value: ", initialImgValue);

    const [imgPreview, setImgPreview] = useState(null)
    const [error, setError] = useState(false)


    const txtColor = useColorModeValue("gray.800", "gray.400")
    const bgColor = useColorModeValue("gray.50", "gray.900")
    const sidebar = useColorModeValue("gray.300", "gray.800")
    const boxColor = useColorModeValue("gray.500", "gray.700")
    const btnColor = useColorModeValue("purple.400", "blue.500")

    function handleImgChange(event) {
        setError(false)
        const selected = event.target.files[0]
        const ALLOWED_TYPES = ["image.png","image/jpg", "image/jpeg"]

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setImgPreview(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            setError(true)
        }
    }

    return (
        <Flex
            w="100%"
            h="100vh"
            bg={bgColor}
        >
            
            <SwitchMode />

            <Link
                href="/dashboard"
                pos="absolute"
                right="200px"
                top="4"
                color={txtColor}
            >
                Home
            </Link>

            <Flex
                w="300px"
                h="100vh"
                bg={sidebar}
                align="center"
                justify="center"
            >
                {error && <Text
                    color="red.500"
                    fontSize="20px"
                    mt="8"
                >
                    File not supported
                </Text>}

                <Box
                    pos="absolute"
                    w="250px"
                    h="250px"
                    top="50px"
                    bg={imgPreview ? `url("${imgPreview}") no-repeat center/cover` : boxColor}
                    borderRadius="full"
                >
                   {!imgPreview && (
                       <>
                       <Text
                            pos="relative"
                            top="140px"
                            left="65px"
                            color={txtColor}
                       >
                           Edit profile image
                        </Text>

                        <FormLabel 
                            htmlFor="file"
                            pos="relative"
                            top="150px"
                            left="70px"
                            fontSize="20px"
                            textDecoration="underline"
                            color={txtColor}
                            cursor="pointer"
                        >
                            Choose File
                        </FormLabel>

                       <Input
                       id="file"
                       type="file"
                       w="120px"
                       border="none"
                       overflow="hidden"
                       pos="relative"
                       top="150px"
                       left="55px"
                       onChange={handleImgChange}
                       display="none"
                   />
                   </>
                   )}

                   {imgPreview && (
                       <Button
                        pos="absolute"
                        top="270px"
                        left="50px"
                        bg={btnColor}
                        transition="all 0.6s"
                        _hover={{
                            filter: "brightness(0.8)"
                        }}
                        color="gray.900"
                        onClick={() => setImgPreview(null)}
                       >
                           Remove image
                       </Button>
                   )}
                </Box>

                <Box
                    pos="absolute"
                    bottom="0"
                    bg={boxColor}
                    w="300px"
                    h="200px"
                    display="flex"
                   
                >
                    <Stack spacing="4" ml="4">
                        <Text mt="4" color={txtColor}>
                            Name: Lucas Ezidro
                        </Text>

                        <Text color={txtColor}>
                            E-mail: lucasezidro7@gmail.com
                        </Text>

                        <Text color={txtColor}>
                            location: São Caetano do sul, SP, BR
                        </Text>

                        <Text color={txtColor}>
                            Position: CEO and cofounder Yellow
                        </Text>
                      </Stack>
                </Box>
                      
            </Flex>

            <Flex>
                <Heading ml="4" mt="4">
                    Lucas Ezidro Skills
                </Heading>
                
                <Box
                    pos="absolute"
                    top="100px"
                    left="650px"
                >
                    <Lottie 
                        options={defaultOptions}
                        height={350}
                        width={300}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />

                    <Box
                        pos="absolute"
                        top="10px"
                        left="570px"
                        display="flex"
                        flexDir="column"
                    >
                        <ModalSkiil 
                            title="ReactJS"
                            icon={FaReact}
                            description="ReactJS"
                            iconcolor="blue.500"
                            skills="Advanced"
                            color="blue.400"
                            bgBtn="blue.400"
                            ml={130}
                        />

                        <ModalSkiil 
                            title="NextJS"
                            icon={FaReact}
                            description="NextJS"
                            iconcolor="black"
                            skills="Intermediary"
                            color="black"
                            bgBtn="black"
                            ml={110}
                        />

                        <ModalSkiil 
                            title="JavaScript"
                            icon={DiJavascript1}
                            description="JavaScript"
                            iconcolor="yellow.500"
                            skills="Advanced"
                            color="yellow.500"
                            bgBtn="yellow.500"
                            ml={130}
                        />

                        <ModalSkiil 
                            title="HTML"
                            icon={FaHtml5}
                            description="HTML"
                            iconcolor="orange.400"
                            skills="Expert"
                            color="orange.400"
                            bgBtn="orange.400"
                            ml={150}
                        />

                        <ModalSkiil 
                            title="CSS"
                            icon={FaCss3}
                            description="CSS"
                            iconcolor="blue.400"
                            skills="Expert"
                            color="blue.400"
                            bgBtn="blue.400"
                            ml={150}
                        />

                        <ModalSkiil 
                            title="Python"
                            icon={FaPython}
                            description="Python"
                            iconcolor="blue.300"
                            skills="Intermediary"
                            color="blue.300"
                            bgBtn="blue.300"
                            ml={110}
                        />

                        <ModalSkiil 
                            title="Git e Github"
                            icon={FaGithubSquare}
                            description="Git e Github"
                            iconcolor="gray.800"
                            skills="Intermediary"
                            color="gray.900"
                            bgBtn="gray.800"
                            ml={110}
                        />
                    </Box>
                </Box>
            </Flex>

        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const cookies = await parseCookies(req)

    return {
        props: {
            initialImgValue: cookies.imgPreview || null
        }
    }
 }

