class Quiz {


    constructor(questionsValue, timeLimitValue, timeRemainingValue) {
        this.questions = questionsValue
        this.timeLimit = timeLimitValue
        this.timeRemaining = timeRemainingValue
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }



    //MODIFICACION
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



}
