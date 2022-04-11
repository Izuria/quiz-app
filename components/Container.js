import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Text
} from '@chakra-ui/react'

import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkMode from '../components/DarkMode'

const Container = ({ children }) => {

    const {colorMode} = useColorMode();

    const bgColor = {
        light:'#f74868',
        dark: '#171717'
    }

    const navHoverBg = {
        light: 'gray.500',
        dark: 'gray.300'
    }

    const fontColor = {
        light: 'black',
        dark: 'white'
    }

    const StickNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(100%) blur(20px);
        transition: height .5s, line-height .5s;
    `


    return (
        <>
            <StickNav
                flexDirection='row'
                justifyContent = 'space-between'
                alignItems = 'center'
                maxWidth = '800px'
                minWidth = '356px'
                width = '100%'
                bg = {bgColor[colorMode]}
                as = 'nav'
                px = {[2, 6, 6]}
                py = {2}
                mt = {8}
                mb = {[0, 0, 8]}
                mx = 'auto'

            >
                <Box>
                    <NextLink href="/">
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{backgroundColor: navHoverBg[colorMode]}} >
                            Home
                        </Button>
                    </NextLink>
                </Box>
                <DarkMode/>
            </StickNav>
            <Flex
                as = 'main'
                justifyContent = 'center'
                flexDirection = 'column'
                bg = {bgColor[colorMode]}
                color = {fontColor[colorMode]}
                px = {[0, 4, 4]}
                mt = {[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container