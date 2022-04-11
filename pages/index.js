import Head from 'next/head'
import Image from 'next/image'

import {
  Text,
  useColorMode,
  Heading,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Home() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Next.js Quiz Game</title>
      </Head>
      <Stack
        as = 'main'
        spacing = {8}
        m = '0 auto 4rem auto'
      >
        <Flex
          flexDirection = 'column'
          justifyContent = 'flex-start'
          alignItems= 'flex-start'
          maxWidth = '700px'
        >
          <Heading mb = {2} >
            Ayo?
          </Heading>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor lectus, semper sit amet libero et, vehicula suscipit enim. Quisque dignissim scelerisque turpis placerat varius. Praesent ac nisl eu mauris posuere rutrum sit amet ut diam. Phasellus varius turpis lacus, non sagittis augue ornare nec. Maecenas maximus facilisis enim, vitae condimentum arcu consectetur vitae. Nullam iaculis, ante eu ullamcorper accumsan, leo magna blandit dui, at faucibus risus augue non sapien. Nullam nisi ligula, euismod luctus neque ac, hendrerit imperdiet nisl. Mauris eu est a ipsum sagittis pulvinar quis vitae ipsum. Aenean convallis eget urna id consequat. Maecenas mollis magna eu risus ultrices, vel pellentesque tortor tincidunt. Nullam sagittis quis arcu ac blandit. Praesent fermentum diam vitae eros pulvinar ullamcorper. Aliquam commodo, justo a finibus rhoncus, nulla turpis facilisis erat, non laoreet nibh ipsum a mi.
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}
