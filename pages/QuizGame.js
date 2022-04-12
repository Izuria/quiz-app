import {React, Component} from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import {
    Text,
    Box,
    Heading,
    Flex,
    Stack,
    FormControl,
    Select,
    SimpleGrid,
    Button,
    VStack
  } from '@chakra-ui/react'
  


const axios = require('axios')
var qList

const topics = [
    {
        label: "All Random Categories",
        value: ""
    },
    {
        label: "Linux",
        value: "Linux"
    },
    {
        label: "Bash",
        value: "Bash"
    },
    {
        label: "Uncategorized",
        value: "Uncategorized"
    },
    {
        label: "Docker",
        value: "Docker"
    },
    {
        label: "SQL",
        value: "SQL"
    },
    {
        label: "CMS",
        value: "CMS"
    },
    {
        label: "Code",
        value: "Code"
    },
    {
        label: "DevOps",
        value: "DevOps"
    },
]

const difficulties = [
    {
        label: "All difficulties",
        value: ""
    },
    {
        label: "Easy",
        value: "easy"
    },
    {
        label: "Medium",
        value: "medium"
    },
    {
        label: "Hard",
        value: "hard"
    }
]

class QuizGame extends Component{

    constructor(){
        super()
        this.state = {

            gameStart: false,
            gameOver: false,
            quizDifficulty: "",
            quizTopic:"",
            quizLength: 0,

            playerScore: 0,
            questionNum: 0,
            totalQuestions: 0,

            question: "",
            difficulty: "",
            category: "",
            answers: [],

            multipleAnswers: "",
            correctAnswers: [],


        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = e => {
        console.log(e.target.value);
        console.log(e.target.id)
        if(e.target.id === 'topic')
            this.setState({ quizTopic: e.target.value });
        else if(e.target.id === 'dif')
            this.setState({ quizDifficulty: e.target.value });
      }


    retrieveQuestions = async () =>
    {
        //check if choices are done
        const result = await axios.get('http://localhost:8000/api/?category='+ this.state.quizTopic + '&dif=' + this.state.quizDifficulty)

        return result.data
        
    }

    loadNewQuestion = () => 
    {
        let num = this.state.questionNum 
        this.setState({
            //State info about questions from the QuizAPI
            question: qList[num].question,
            category: qList[num].category,
            difficulty: qList[num].difficulty,

            answers: [
                qList[num].answers.answer_a, 
                qList[num].answers.answer_b, 
                qList[num].answers.answer_c, 
                qList[num].answers.answer_d, 
                qList[num].answers.answer_e, 
                qList[num].answers.answer_f
            ],
            multipleAnswers: qList[num].multiple_correct_answers,
            correctAnswers: [
                qList[num].correct_answers.answer_a_correct,
                qList[num].correct_answers.answer_b_correct,
                qList[num].correct_answers.answer_c_correct,
                qList[num].correct_answers.answer_d_correct,
                qList[num].correct_answers.answer_e_correct,
                qList[num].correct_answers.answer_f_correct, 
            ],

            questionNum: num + 1
        })
    }

    startGame = async () => 
    {

            qList = await this.retrieveQuestions()

            this.setState({
                gameStart: true,
                quizLength: qList.length
            })

            this.loadNewQuestion()
        
    }

    resetGame = () =>
    {
        this.setState({
            gameStart: false,
            gameOver: false,
            quizDifficulty: "",
            quizTopic:"",

            playerScore: 0,
            questionNum: 0,
            totalQuestions: 0,

            question: "",
            difficulty: "",
            category: "",
            answers: [],

            multipleAnswers: "",
            correctAnswers: [],
        })
    }

    checkAnswer = e =>
    {
        //choice will be a number from 0 - 5, corresponding for answers a - f  
        let choice = e.target.getAttribute('num')
        
        if(this.state.correctAnswers[choice] === 'true')
        {
            this.setState({
                playerScore: this.state.playerScore + 1
            })
        }
        else
            this.setState({}) // blank code to update state even if the answer is wrong. Will probably refactor in the future

        if(this.state.questionNum < this.state.quizLength)
            this.loadNewQuestion()
        else
        {
            //debug statement OwO
            this.setState({gameOver: true, gameStart: false})
        }

    }


    choiceButton = (choice, cID) =>
    {
        return <Button 
        style={{whiteSpace: 'normal', wordWrap: 'break-word'}}
        width='100%' variant='solid' onClick = {this.checkAnswer} num = {cID} >
            
            <Text fontSize='xs'>{choice} </Text>
        
        </Button>
    }

    renderChoices = () =>
    {
        var rows = []
        for(let i = 0; i < 6; i++)
        {
            if(this.state.answers[i] != null)
                rows.push(this.choiceButton(this.state.answers[i], i))
        }
        return(
            <VStack spacing={5} >
                {rows}
            </VStack>
          )
    }
    

    render()
    {

        return (
            <Container>
                <Head>
                    <title>Next.js Quiz game</title>
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
                        maxWidth = '768px'
                    >
                        
                        { !this.state.gameStart && !this.state.gameOver &&
                            <div>
                                <Heading mb = {2} >
                                    The Ultimate Quiz Game.
                                </Heading>
                                <Text>
                                    Welcome to the ultimate quiz game. Choose from several categories and difficulties to
                                    test your knowledge in technical topics. Quiz questions provided by QuizAPI.
                                </Text>

                                <FormControl >
                                    <SimpleGrid columns = {2} mt = {10} spacing = {10}>
                                        <Select id='topic' value={this.state.quizTopic} onChange={this.handleSelect}>
                                            {topics.map((topic) => (
                                                <option value={topic.value}>{topic.label}</option>
                                            ))}
                                        </Select>
                                        <Select id='dif' value={this.state.quizDifficulty} onChange={this.handleSelect}>
                                            {difficulties.map((diff) => (
                                                <option value={diff.value}>{diff.label}</option>
                                            ))}
                                        </Select>
                                    </SimpleGrid>
                                    <Button id = 'but' mt={10}  isFullWidth={true} onClick={this.startGame}>
                                    Play
                                    </Button>
                                </FormControl>
                            </div>
                        }
                        
                        {
                        this.state.gameStart && !this.state.gameOver &&
                            <div>
                                <Text>{this.state.quizTopic}</Text>
                                <Stack h='20vh' mb = {25}>
                                <Box p = {3} shadow = 'md' borderWidth='1px' borderRadius='1px' mb = {25} maxWidth='700px'>
                                    <SimpleGrid columns = {2} mb = {3}>
                                        <Heading>Question {this.state.questionNum}</Heading>
                                        <Text fontWeight='bold' textAlign='right'>{this.state.difficulty}
                                        <br/> {this.state.category}
                                        </Text>

                                    </SimpleGrid>
                                        <Text fontSize='lg'>
                                            {this.state.question}
                                        </Text>
                                </Box>
                                </Stack>
                                {this.renderChoices()}

                            </div>
                        }

                        {
                        this.state.gameOver &&
                            <div>
                                <Heading>
                                    Congratulations on finishing!
                                </Heading>
                                <Text fontSize='lg' mb={50}>You've gotten {this.state.playerScore/this.state.quizLength*100}% or {this.state.playerScore}/{this.state.quizLength} questions correct.</Text>
                                <Button width ='100%' variant='solid' onClick = {this.resetGame}>Click Here to play again!</Button>
                            </div>
                        }
                    </Flex>
                </Stack>

            </Container>
        )
    }

}

export default QuizGame

