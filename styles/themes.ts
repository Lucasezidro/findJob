import { extendTheme, ThemeConfig  } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,

}

const global = {
    styles: {
        global: {
            body: {
                bg: "gray.900",
                color: "gray.50",
                fontFamily: "Poppins"
            }
        }
    }
}

const theme = extendTheme({ config, global });

export default theme;