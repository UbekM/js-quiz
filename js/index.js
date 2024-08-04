/** @format */

/** @format */

const questions = [
  {
    question:
      "What is the correct syntax to print a message to the console in JavaScript?",
    answers: [
      { text: "print('Hello World')", correct: false },
      { text: "console.log('Hello World')", correct: true },
      { text: "echo('Hello World')", correct: false },
      { text: "document.write('Hello World')", correct: false },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "Django", correct: false },
      { text: "Angular", correct: true },
      { text: "Laravel", correct: false },
      { text: "Spring", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction() {}", correct: true },
      { text: "def myFunction() {}", correct: false },
      { text: "create myFunction() {}", correct: false },
      { text: "func myFunction() {}", correct: false },
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      { text: "var myVariable;", correct: true },
      { text: "variable myVariable;", correct: false },
      { text: "v myVariable;", correct: false },
      { text: "let myVariable;", correct: true },
    ],
  },
  {
    question:
      "Which of the following is used to enclose the condition in an if statement in JavaScript?",
    answers: [
      { text: "{}", correct: false },
      { text: "[]", correct: false },
      { text: "()", correct: true },
      { text: "<>", correct: false },
    ],
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answers: [
      { text: "// This is a comment", correct: true },
      { text: "/* This is a comment */", correct: false },
      { text: "# This is a comment", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
    ],
  },
  {
    question:
      "Which of the following methods can be used to combine two arrays in JavaScript?",
    answers: [
      { text: "combine()", correct: false },
      { text: "append()", correct: false },
      { text: "concat()", correct: true },
      { text: "join()", correct: false },
    ],
  },
  {
    question: "How do you check the length of an array in JavaScript?",
    answers: [
      { text: "array.size", correct: false },
      { text: "array.length", correct: true },
      { text: "array.count", correct: false },
      { text: "array.length()", correct: false },
    ],
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: true },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "/* comment */", correct: false },
      { text: "// comment", correct: true },
      { text: "# comment", correct: false },
      { text: "<!-- comment -->", correct: false },
    ],
  },
  {
    question: "How do you create an array in JavaScript?",
    answers: [
      { text: "var colors = ['red', 'green', 'blue'];", correct: true },
      { text: "var colors = 'red', 'green', 'blue';", correct: false },
      { text: "var colors = (1:'red', 2:'green', 3:'blue');", correct: false },
      {
        text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');",
        correct: false,
      },
    ],
  },
  {
    question: "Which method converts a JSON string to a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "'22'", correct: true },
      { text: "undefined", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "How do you remove the last element from an array in JavaScript?",
    answers: [
      { text: "pop()", correct: true },
      { text: "remove()", correct: false },
      { text: "splice()", correct: false },
      { text: "delete()", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript keyword is used to define a variable that cannot be reassigned?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "static", correct: false },
    ],
  },
  {
    question:
      "What is the correct way to write an object literal in JavaScript?",
    answers: [
      { text: "var obj = { name: 'John', age: 30 };", correct: true },
      { text: "var obj = ( name: 'John', age: 30 );", correct: false },
      { text: "var obj = name: 'John', age: 30;", correct: false },
      { text: "var obj = 'name': 'John', 'age': 30;", correct: false },
    ],
  },
  {
    question:
      "Which method adds one or more elements to the end of an array and returns the new length of the array?",
    answers: [
      { text: "push()", correct: true },
      { text: "append()", correct: false },
      { text: "add()", correct: false },
      { text: "concat()", correct: false },
    ],
  },
  {
    question: "How do you declare an asynchronous function in JavaScript?",
    answers: [
      { text: "async function myFunction() {}", correct: true },
      { text: "function async myFunction() {}", correct: false },
      { text: "async: function myFunction() {}", correct: false },
      { text: "function myFunction() async {}", correct: false },
    ],
  },
  {
    question: "What will be the output of the following code: `typeof null`?",
    answers: [
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'object'", correct: true },
      { text: "'boolean'", correct: false },
    ],
  },
  {
    question: "How can you add a comment in JavaScript?",
    answers: [
      { text: "<!-- This is a comment -->", correct: false },
      { text: "// This is a comment", correct: true },
      { text: "** This is a comment", correct: false },
      { text: "/* This is a comment", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a way to declare a JavaScript variable?",
    answers: [
      { text: "variant", correct: false },
      { text: "let", correct: true },
      { text: "constant", correct: false },
      { text: "print", correct: false },
    ],
  },
  {
    question: "How do you write an if statement in JavaScript?",
    answers: [
      { text: "if i = 5 then", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i == 5 then", correct: false },
      { text: "if i = 5", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to create a class in JavaScript?",
    answers: [
      { text: "class MyClass {}", correct: true },
      { text: "class = MyClass {}", correct: false },
      { text: "function class MyClass() {}", correct: false },
      { text: "MyClass class {}", correct: false },
    ],
  },
  {
    question: "What will `console.log(3 > 2 > 1)` print?",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "undefined", correct: false },
      { text: "NaN", correct: false },
    ],
  },
];

const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn2");
const questionNumberEl = document.getElementById("question-number");
const resultEl = document.getElementById("result");
const instructionsEl = document.getElementById("instructions");
const continueButton = document.getElementById("continue-btn");
const quizEl = document.getElementById("quiz");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;
  questionNumberEl.innerHTML = `Question ${questionNo} of ${questions.length}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtonsEl.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  resultEl.style.display = "none";
  resultEl.innerHTML = "";
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;

  const isCorrect = !!selectedBtn.dataset.correct;

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    resultEl.innerHTML = "Correct!";
  } else {
    selectedBtn.classList.add("incorrect");
    resultEl.innerHTML = "Incorrect!";
  }

  resultEl.style.display = "block";

  Array.from(answerButtonsEl.children).forEach((btn) => {
    if (btn.dataset.correct) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextButton.style.display = "block";

  document.addEventListener("keydown", handleEnterKey);
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    handleNextButton();
  }
}

function showScore() {
  resetState();
  const percentage = (score / questions.length) * 100;
  questionEl.innerHTML = `You scored ${score} out of ${
    questions.length
  } (${percentage.toFixed(1)}%)`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  questionNumberEl.innerHTML = "";
  document.removeEventListener("keydown", handleEnterKey);
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }

  document.removeEventListener("keydown", handleEnterKey);
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

continueButton.addEventListener("click", () => {
  instructionsEl.style.display = "none";
  quizEl.style.display = "block";
  startQuiz();
});

startQuiz();
