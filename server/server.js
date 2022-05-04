//require('dotenv').config() env variables hosted on Render

const express = require("express")
const axios = require('axios')
const cors = require('cors')


const PORT = process.env.PORT || 8000

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
    console.log("ayo?")
});


app.get('/api', cors(), (req, res) => {
    console.log("'/api' call" + '\n')
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
