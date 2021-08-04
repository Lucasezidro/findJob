import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage, useColorModeValue } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    const bginput = useColorModeValue("gray.400", "gray.900")
    const btnhover = useColorModeValue("purple.800", "blue.800")
    const borderColor = useColorModeValue("purple.600", "blue.800")

    return(
        <FormControl isInvalid={!!error}>
        { !!label && <FormLabel 
                        htmlFor={name}
                        pos="relative"
                        top="18px"
                        left="30px"
                        color="gray.400"
                    >
                        {label}
                    
                    </FormLabel> }

                <ChakraInput 
                  name={name}
                  id={name}
                  focusBorderColor={borderColor}
                  bgColor={bginput}
                  variant="filled"
                  w="300px"
                  ml="30px"
                  mt="4"
                  _hover={{
                    bgColor: {btnhover}
                  }}
                  size="lg"
                  ref={ref}
                  {...rest}

                />

                  {!!error && (
                  <FormErrorMessage>
                    {error.message}
                  </FormErrorMessage>
                  )}
                </FormControl>
              
              
    )
}

export const Input = forwardRef(InputBase)