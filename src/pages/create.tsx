import { Box, Button, Flex, FormLabel, Heading, Image, Input as chakraInput, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { SwitchMode } from "../components/switch";
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/input'

type CreateUserFormData = {
    email: string;
    password: string;
    password_confirmation: string;
  }

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail is required').email('E-mail invalid'),
    password: yup.string().required('Password is required').min(8, "At least 8 characters"),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'Passwords must match')
  
  })


export default function CreateAccount() {
    const router = useRouter()

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
      })
    
    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {

        router.push('/dashboard')
    }

    const bgColor = useColorModeValue("gray.50", "gray.900")
    const titleColor = useColorModeValue("purple.800", "White")
    const bgForm = useColorModeValue("gray.200", "gray.800")
    const btnColor = useColorModeValue("purple.700", "blue.700")
    const btnhover = useColorModeValue("purple.800", "blue.800")


    return(

        <Flex
            w="100%"
            h="100vh"
            bg={bgColor}

        >
            <SwitchMode />

            <Heading ml="100px" mt="30px" color={titleColor}>Let's get started by creating your account!</Heading>
            
            <Flex
                as="form"
                onSubmit={handleSubmit(handleCreateUser)}
                display="flex"
                flexDir="column"
                w="360px"
                h="440px"
                bg={bgForm}
                pos="absolute"
                top="120px"
                left="250px"
                borderRadius="10"
                boxShadow="4px 4px 10px rgba(0, 0, 0, 0.4)"
            >
                <Text pos="relative" top="5px" ml="20px" fontSize="20px" color={titleColor}>Create your Account</Text>

              
                <Input 
                    name="email" 
                    label="Your best E-mail" 
                    type="email" 
                    error={errors.email}
                    {...register('email')}
                  
                />

                
                <Input
                     name="password" 
                     type="password" 
                     label=" Choose a password" 
                     error={errors.password}
                     {...register('password')} 
                    
                />

                <Input 
                     name="password_confirmation" 
                     label="Confirm Password" 
                     type="password" 
                     error={errors.password_confirmation}
                     {...register('password_confirmation')}
                />

                <Button
                    type="submit"
                    w="150px"
                    ml="105px"
                    mt="10"
                    bg={btnColor}
                    color="gray.50"
                    borderRadius="50"
                    _hover={{bg: btnhover}}
                    isLoading={formState.isSubmitting}
                >
                    Sign up
                </Button>

            </Flex>

            <Box size="lg" mt="100px" ml="20px">
                <Image src="/images/avatar.png" alt="avatar" />
            </Box>

        </Flex>
    )
}