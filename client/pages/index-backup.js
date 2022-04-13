import Head from 'next/head'
import { Formik } from "formik"
const axios = require('axios')

import {
  Text,
  useColorMode,
  Heading,
  Flex,
  Stack,
  FormControl,
  Select,
  SimpleGrid,
  Button
} from '@chakra-ui/react'

import Container from '../components/Container'

const ValidateSelections = () => {
  var topic = document.getElementById('topic')
  var diff = document.getElementById('dif')
  var button = document.getElementById('but')
  if(topic.value != "" && diff.value != "")
  {
    button.disabled = false
  }
  else
    button.disabled = true
}

const RetrieveQuestions = (a, b) =>
{
    //check if choices are done
    
    axios.get('http://localhost:8000/api/?category='+ a + '&dif=' + b)
    .then(result => {
        console.log(result.data)
    })
    .catch(e =>{
        console.log(e)
    })
    
}


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
            Quiz Game
          </Heading>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor lectus, semper sit amet libero et, vehicula suscipit enim. Quisque dignissim scelerisque turpis placerat varius. Praesent ac nisl eu mauris posuere rutrum sit amet ut diam. Phasellus varius turpis lacus, non sagittis augue ornare nec. Maecenas maximus facilisis enim, vitae condimentum arcu consectetur vitae. Nullam iaculis, ante eu ullamcorper accumsan, leo magna blandit dui, at faucibus risus augue non sapien. Nullam nisi ligula, euismod luctus neque ac, hendrerit imperdiet nisl. Mauris eu est a ipsum sagittis pulvinar quis vitae ipsum. Aenean convallis eget urna id consequat. Maecenas mollis magna eu risus ultrices, vel pellentesque tortor tincidunt. Nullam sagittis quis arcu ac blandit. Praesent fermentum diam vitae eros pulvinar ullamcorper. Aliquam commodo, justo a finibus rhoncus, nulla turpis facilisis erat, non laoreet nibh ipsum a mi.
          </Text>
          <FormControl >
            <SimpleGrid columns = {2} mt = {10} spacing = {10}>
              <Select name = 'topic' id='topic' placeholder = 'Select a topic' onClick={ValidateSelections}>
                <option>All random</option>
                <option>Linux</option>
                <option>Bash</option>
                <option>Uncategorized</option>
                <option>Docker</option>
                <option>SQL</option>
                <option>CMS</option>
                <option>Code</option>
                <option>DevOp</option>
              </Select>
              <Select id='dif' placeholder = 'Select a difficulty' onClick={ValidateSelections}>
                <option>All difficulties</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </Select>
            </SimpleGrid>
            <Button id = 'but' mt={10} onClick={RetrieveQuestions('code','hard')} isFullWidth={true}>
               Play
            </Button>
          </FormControl>
        </Flex>
      </Stack>
    </Container>
  )
}
