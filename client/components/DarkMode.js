import {useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <IconButton 
            icon = {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick = {toggleColorMode}
            color = {iconColor[colorMode]}
        />
    )

}

export default DarkMode