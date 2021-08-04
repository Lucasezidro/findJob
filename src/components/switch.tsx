import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Icon, useColorMode } from "@chakra-ui/react"
import Switch from 'react-switch'


export function SwitchMode(){
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Box pos="absolute" top="20px" right="50px">
        <Switch
          onChange={toggleColorMode}
          checked={colorMode === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#805AD5"
          onColor="#3182CE"
          offHandleColor="#322659"
          onHandleColor="#1A365D"
        />

          { colorMode === "light" ? 
            <Icon 
              as={SunIcon}  
              pos="relative"
              left="20px"
              bottom="7px"
              fontSize="20"
              color="purple.400"
              /> : 
              
              <Icon 
                as={MoonIcon} 
                pos="relative"
                left="20px"
                bottom="7px"
                fontSize="20"
                color="blue.400"
              />  }
      </Box>
    )
}