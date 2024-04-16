class Quiz {


    constructor(questionsValue, timeLimitValue, timeRemainingValue) {
        this.questions = questionsValue
        this.timeLimit = timeLimitValue
        this.timeRemaining = timeRemainingValue
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }




    // 1. constructor (questions, timeLimit, timeRemaining)

    getQuestion() {
        return this.questions[this.currentQuestionIndex]

    }



    moveToNextQuestion() {
        this.currentQuestionIndex += 1;
    }


    shuffleQuestions() {
        this.questions.sort(() => .5 - Math.random());
    }




    checkAnswer(answerToCheck) {
        const currentQuestion = this.getQuestion()
        const currentAnswer = currentQuestion.answer

        if (answerToCheck === currentAnswer) {
            this.correctAnswers++
        }
    }

    // 6. hasEnded()

    hasEnded() {
        if (this.currentQuestionIndex >= this.questions.length) {
            return true
        } else {
            return false
        }
    }

    filterQuestionsByDifficulty(difficulty) {

        const filteredQuestions = this.questions.filter(eachQuestion => {
            if (eachQuestion.difficulty === difficulty) {
                return true;
            } else {
                return false;
            }
        })

        if (typeof difficulty == 'number') {
            this.questions = filteredQuestions
        }
    }


    averageDifficulty() {

        const sumDifficulty = this.questions.reduce((acc, eachQuestion) => {
            return acc + eachQuestion.difficulty
        }, 0)

        const diffAverage = (sumDifficulty / this.questions.length)
        return diffAverage

        console.log(diffAverage)
    }
}










// //////////
//     const product = {
//         name: 'AmazonBasics Apple Certified Lightning to USB Cable',
//         price: 7.99,
//         manufacturer: 'Amazon',
//         reviews: [
//             { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
//             { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
//             { user: 'David Recoba', comments: 'Awesome', rate: 5 },
//             { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
//             { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
//         ]
//     }


//     const sumRatings = product.reviews.reduce((acc, eachReview) => {
//         return acc + eachReview.rate
//     }, 0)

//         console.log('LA PUNTUACIÓN TOTAL ES', sumRatings, 'Y LA MEDIA', sumRatings / product.reviews.length)







