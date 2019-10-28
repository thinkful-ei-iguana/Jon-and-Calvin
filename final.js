'use strict';
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question').getElementsByTagName('img')[0];
const answerButtonsElement = document.getElementById('answer-buttons');
const rightAnswerImg = 'https://i.pinimg.com/originals/03/e8/33/03e8330ad0272fac3713fab8626fad18.jpg';
const wrongAnswerImg = 'https://i.pinimg.com/originals/97/52/b4/9752b48c2b57577f27815b0ba4757c6e.jpg';

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions;
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

//NEW FUNCTION ADDED
function correctAnswer(){
  console.log("hello");
  return questions[2];
  
}


function setNextQuestion() {
  resetState();
  //correctOrIncorrect()
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.src = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;

    }
    button.addEventListener('click', selectAnswer); //listening for click selectAnswer
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


function setAnswerImg(correct) {
  if (correct) {
    questionElement.src = rightAnswerImg;
  } else {
    questionElement.src = wrongAnswerImg;
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  setAnswerImg(correct);
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'https://i.pinimg.com/originals/2f/53/7a/2f537a79b3222328ea148c68b30425cd.png',
    answers: [
      { text: ' i4/3', correct: false },
      { text: 'i6', correct: true},
      { text: 'VII', correct: false},
      { text: 'III', correct: false }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/cd/06/02/cd0602ae9c79e2a8c696d200f32716d6.png',
    answers: [
      { text: 'Perfect Fourth', correct: false },
      { text: 'Diminished Fourth', correct: false },
      { text: 'Augmented Fourth', correct: true },
      { text: 'Major Third', correct: false }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/a8/f0/84/a8f0846debfe7e74acacc97c2eb49422.png',
    answers: [
      { text: 'Doubled Leading Tone', correct: false },
      { text: 'Voice Crossing', correct: false },
      { text: 'Parallel Octaves', correct: false },
      { text: 'Parallel Fifths', correct: true }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/af/fd/32/affd32af6ef956b99b06213f12b3baa7.png',
    answers: [
      { text: 'Major Seventh', correct: false },
      { text: 'Minor Seventh', correct: false },
      { text: 'Diminished Seventh', correct: true },
      { text: 'Half-Diminished Seventh', correct: false }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/1c/2d/3c/1c2d3c6ff688352b5b6ceef39960d634.png',
    answers: [
      { text: 'Doubled Third', correct: true },
      { text: 'Soprano voice is out of range', correct: false },
      { text: 'Tripled Root', correct: false },
      { text: 'Incomplete Chord', correct: false }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/3f/cf/03/3fcf03cee944a18eea064e71014e482f.png',
    answers: [
      { text: 'Marcato', correct: false },
      { text: 'Legato', correct: false },
      { text: 'Staccato', correct: true },
      { text: 'Tenuto', correct: false }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/7e/87/65/7e8765c1a7a1dd15586ed930bb0fcda5.png',
    answers: [
      { text: 'V6/5', correct: true },
      { text: 'V4/3', correct: false },
      { text: 'V6/4', correct: false },
      { text: 'vii°', correct: false }
    ]
  },
  {
    question: 'https://i.pinimg.com/originals/04/12/6f/04126f6071993ecb9c8b5640cde024fd.png',
    answers: [
      { text: 'Diminished Seventh', correct: false },
      { text: 'Augmented Seventh', correct: false },
      { text: 'Minor Seventh', correct: false },
      { text: 'Major Seventh', correct: true }
    ]
  },
];

const correctAndWrongImg = [
  {correctImg: 'https://i.pinimg.com/originals/03/e8/33/03e8330ad0272fac3713fab8626fad18.jpg'},
  {incorrectImg: 'https://i.pinimg.com/originals/97/52/b4/9752b48c2b57577f27815b0ba4757c6e.jpg'}
]; 