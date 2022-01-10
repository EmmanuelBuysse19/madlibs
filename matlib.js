let numberOfQuestions = 7;
let questionCounter = 0;
let askInput = `Please enter: `;
let storeArray = [
    `${askInput} an action.`,
    `${askInput} another action.`,
    `${askInput} something of the day.`,
    `${askInput} an object.`,
    `${askInput} something to drink.`,
    `${askInput} something to eat.`,
    `${askInput} another object.`,
    `${askInput} even another object.`,
];

let userInput = [];
for (let i = numberOfQuestions; i >= 0; i--) {
    console.log(storeArray[questionCounter] + ` You have ${numberOfQuestions} questions left`);
    userInput.push(
        prompt(
            storeArray[questionCounter] + ` You have ${numberOfQuestions} questions left`
        )
    );
    console.log(userInput);
    questionCounter++;
    numberOfQuestions--;
};


let catStory = `<h2>The cat was in the house and she was ${userInput[1]} about some stuff. She asked to herself what else she could do for ${userInput[2]}.</h2>
                <h2>Since she was doing ${userInput[0]}, she saw the other kitties doing the same. Maybe to wake up she could drink some ${userInput[4]} or eat ${userInput[5]}.</h2>
                <h2>While drinking, she was thinking about the future, in terms of ${userInput[2]}. "What should I knock out today, ${userInput[6]}, or ${userInput[7]}. Maybe ${userInput[3]}?"</h2>
                <h2>In the end of the day, our cat was ${userInput[1]}.</h2>`

console.log(catStory);
alert("You did it, you make the cat happy!");
console.log(catStory);
document.write(catStory);