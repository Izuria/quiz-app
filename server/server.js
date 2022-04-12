require('dotenv').config()

const express = require("express")
const axios = require('axios')
const cors = require('cors')


const PORT = process.env.PORT || 8000

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
    console.log("ayo?")
});



app.get('/test', cors(), (req, res) => {
    console.log("'/test' call" + '\n')
    console.log(req.query)
    console.log(req.query.category)
    axios.get('https://quizapi.io/api/v1/questions?apiKey='+process.env.QUIZ_API_KEY+'&category='+req.query.category+'&difficulty='+req.query.dif+'&limit=10')
    .then(result => {
        console.log(result.data)
        res.json(result.data)
    })
    .catch(e =>{
        console.log(e)
    })


})

app.listen(PORT, () => console.log('listening!'))


/*
axios.get('https://quizapi.io/api/v1/questions?apiKey='+process.env.QUIZ_API_KEY+'&category='+category+'&difficulty='+diff+'&limit=10')
    .then(result => {
        console.log(result.data)
    })
    .catch(e =>{
        console.log(e)
    })
*/
