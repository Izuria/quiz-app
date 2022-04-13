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

import QuizGame from './QuizGame'

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


export default function Home() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <QuizGame/>
  )
}

