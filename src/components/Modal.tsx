import { Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { ElementType } from "react"

interface Skills {
    beginner: string;
    intermediary: string;
    Advanced: string;
    expert: string;

}

interface ModalProps {
    icon: ElementType;
    title: string;
    description: string;
    iconcolor?: string;
    skills: Skills | string;
    color?: string;
    bgBtn?: string;
    ml: number;

}

export function ModalSkiil({ icon, title, description, iconcolor, skills, color, bgBtn, ml}: ModalProps) {
    const btnColor = useColorModeValue("purple.600", "blue.500")
    const txtColor = useColorModeValue("purple.700", "blue.300")

    const { isOpen, onOpen, onClose } = useDisclosure()

    

    return(
        <>
        <Button 
            onClick={onOpen}
            bg={bgBtn}
            transition="all 0.6s"
            _hover={{
                filter: "brightness(0.8)"
            }}
            mb="6"
            color="gray.50"
        
        >
            {description}
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={color}>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Icon as={icon} color={iconcolor} fontSize="30" />
              <Text mt="4" ml="10" color={txtColor} fontWeight="600" fontSize="20">Meu nivel para esta tecnologia é: </Text>

                <Text
                    fontSize="30"
                    display="flex"
                    mt="50px"
                    ml={ml}
                    textAlign="center"
                    fontWeight="600"
                    color={color}
                >
                  {skills}
                </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button bg={btnColor} mr={3} onClick={onClose} _hover={{filter: "brightness(0.8)"}}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}