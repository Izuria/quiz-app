"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 9597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9134);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);





const axios = __webpack_require__(2167);
var qList;
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
];
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
];
class QuizGame extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(){
        super();
        this.state = {
            gameStart: false,
            gameOver: false,
            quizDifficulty: "",
            quizTopic: "",
            quizLength: 0,
            playerScore: 0,
            questionNum: 0,
            totalQuestions: 0,
            question: "",
            difficulty: "",
            category: "",
            answers: [],
            multipleAnswers: "",
            correctAnswers: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect = (e)=>{
        console.log(e.target.value);
        console.log(e.target.id);
        if (e.target.id === "topic") this.setState({
            quizTopic: e.target.value
        });
        else if (e.target.id === "dif") this.setState({
            quizDifficulty: e.target.value
        });
    };
    retrieveQuestions = async ()=>{
        //check if choices are done
        const result = await axios.get("http://localhost:8000/api/?category=" + this.state.quizTopic + "&dif=" + this.state.quizDifficulty);
        return result.data;
    };
    loadNewQuestion = ()=>{
        let num = this.state.questionNum;
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
        });
    };
    startGame = async ()=>{
        qList = await this.retrieveQuestions();
        this.setState({
            gameStart: true,
            quizLength: qList.length
        });
        this.loadNewQuestion();
    };
    resetGame = ()=>{
        this.setState({
            gameStart: false,
            gameOver: false,
            quizDifficulty: "",
            quizTopic: "",
            playerScore: 0,
            questionNum: 0,
            totalQuestions: 0,
            question: "",
            difficulty: "",
            category: "",
            answers: [],
            multipleAnswers: "",
            correctAnswers: []
        });
    };
    checkAnswer = (e)=>{
        //choice will be a number from 0 - 5, corresponding for answers a - f  
        let choice = e.target.getAttribute("num");
        if (this.state.correctAnswers[choice] === "true") {
            this.setState({
                playerScore: this.state.playerScore + 1
            });
        } else this.setState({}) // blank code to update state even if the answer is wrong. Will probably refactor in the future
        ;
        if (this.state.questionNum < this.state.quizLength) this.loadNewQuestion();
        else {
            //debug statement OwO
            this.setState({
                gameOver: true,
                gameStart: false
            });
        }
    };
    choiceButton = (choice, cID)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            style: {
                whiteSpace: "normal",
                wordWrap: "break-word"
            },
            width: "100%",
            variant: "solid",
            onClick: this.checkAnswer,
            num: cID,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                fontSize: "xs",
                children: [
                    choice,
                    " "
                ]
            })
        });
    };
    renderChoices = ()=>{
        var rows = [];
        for(let i = 0; i < 6; i++){
            if (this.state.answers[i] != null) rows.push(this.choiceButton(this.state.answers[i], i));
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
            spacing: 5,
            children: rows
        });
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Next.js Quiz game"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    as: "main",
                    spacing: 8,
                    m: "0 auto 4rem auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        maxWidth: "768px",
                        children: [
                            !this.state.gameStart && !this.state.gameOver && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
                                        mb: 2,
                                        children: "The Ultimate Quiz Game."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                        children: "Welcome to the ultimate quiz game. Choose from several categories and difficulties to test your knowledge in technical topics. Quiz questions provided by QuizAPI."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
                                                columns: 2,
                                                mt: 10,
                                                spacing: 10,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                                        id: "topic",
                                                        value: this.state.quizTopic,
                                                        onChange: this.handleSelect,
                                                        children: topics.map((topic)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: topic.value,
                                                                children: topic.label
                                                            }, topic.id)
                                                        )
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                                        id: "dif",
                                                        value: this.state.quizDifficulty,
                                                        onChange: this.handleSelect,
                                                        children: difficulties.map((diff)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: diff.value,
                                                                children: diff.label
                                                            }, diff.id)
                                                        )
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                id: "but",
                                                mt: 10,
                                                isFullWidth: true,
                                                onClick: this.startGame,
                                                children: "Play"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            this.state.gameStart && !this.state.gameOver && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                        children: this.state.quizTopic
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                        h: "20vh",
                                        mb: 25,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                            p: 3,
                                            shadow: "md",
                                            borderWidth: "1px",
                                            borderRadius: "1px",
                                            mb: 25,
                                            maxWidth: "700px",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
                                                    columns: 2,
                                                    mb: 3,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
                                                            children: [
                                                                "Question ",
                                                                this.state.questionNum
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                                            fontWeight: "bold",
                                                            textAlign: "right",
                                                            children: [
                                                                this.state.difficulty,
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                " ",
                                                                this.state.category
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                                    fontSize: "lg",
                                                    children: this.state.question
                                                })
                                            ]
                                        })
                                    }),
                                    this.renderChoices()
                                ]
                            }),
                            this.state.gameOver && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
                                        children: "Congratulations on finishing!"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                                        fontSize: "lg",
                                        mb: 50,
                                        children: [
                                            " You got ",
                                            this.state.playerScore / this.state.quizLength * 100,
                                            "% or ",
                                            this.state.playerScore,
                                            "/",
                                            this.state.quizLength,
                                            " questions correct."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        width: "100%",
                                        variant: "solid",
                                        onClick: this.resetGame,
                                        children: "Click Here to play again!"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizGame);


/***/ })

};
;