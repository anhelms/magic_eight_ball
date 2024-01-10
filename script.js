let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely",
  "Make it so"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!",
  "Highly illogical"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again",
  "Partial"
];

const NO_QUESTION_WARNING = "You need to ask a question!";


function chooseRandomAnswerType() {
  let randomNumber = getRandomNumber(0,2);
  if (randomNumber === 0) {
    return "positive";
  } else if (randomNumber === 1) {
    return "negative";
  } else {
    return "maybe";
  }
}
chooseRandomAnswerTypeTest();

function chooseRandomAnswer(answerType) {
  let randomType = getRandomNumber(0,5);
  if (answerType === "positive") {
    return positiveAnswers[randomType];
  } else if (answerType === "negative") {
    return negativeAnswers[randomType];
  } else {
    return maybeAnswers[randomType];
  }
}
 chooseRandomAnswerTest();


function onAnswerRequested() {
  if (getQuestionText() === "") {
    supplyAnswer(NO_QUESTION_WARNING);
  } else {
    let type = chooseRandomAnswerType();
    let randomAnswer = chooseRandomAnswer(type);
    supplyAnswer(randomAnswer);
  }
}
 onAnswerRequestedTest();
