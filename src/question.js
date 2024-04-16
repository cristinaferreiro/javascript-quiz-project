class Question {

    constructor(textValue, choicesValue, answerValue, difficultyValue) {
        this.text = textValue
        this.choices = choicesValue
        this.answer = answerValue
        this.difficulty = difficultyValue
    }



    //MODIFICACION
    shuffleChoices() {

        this.choices.forEach((choice, index) => {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [this.choices[index], this.choices[randomIndex]] = [this.choices[randomIndex], this.choices[index]];
        });
    }
}








// YOUR CODE HERE:
//
// 1. constructor (text, choices, answer, difficulty)