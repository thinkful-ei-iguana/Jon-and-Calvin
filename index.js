'use strict';
const STORE = [
  {
    question: 'https://i.pinimg.com/originals/2f/53/7a/2f537a79b3222328ea148c68b30425cd.png',
    answers: [
      ' i4/3',
      'i6',
      'VII',
      'III'
    ],
    correctAnswer: 'i6',
    icon: '',
    alt: 'In the key of C minor, what is the Roman numeral and inversion symbol for the following chord?'
  },
  {
    question: 'https://i.pinimg.com/originals/cd/06/02/cd0602ae9c79e2a8c696d200f32716d6.png',
    answers: [
      'Perfect Fourth',
      'Diminished Fourth',
      'Augmented Fourth',
      'Major Third'
    ],
    correctAnswer: 'Augmented Fourth',
    icon: '',
    alt: 'What is the interval between these two pitches?'
  },
  {
    question: 'https://i.pinimg.com/originals/a8/f0/84/a8f0846debfe7e74acacc97c2eb49422.png',
    answers: [
      'Doubled Leading Tone',
      'Voice Crossing',
      'Parallel Octaves',
      'Parallel Fifths'
    ],
    correctAnswer: 'Parallel Fifths',
    icon: '',
    alt: 'What part-writing error is shown in this example?'
  },
  {
    question: 'https://i.pinimg.com/originals/af/fd/32/affd32af6ef956b99b06213f12b3baa7.png',
    answers: [
      'Major Seventh',
      'Minor Seventh',
      'Diminished Seventh',
      'Half-Diminished Seventh'
    ],
    correctAnswer: 'Diminished Seventh',
    icon: '',
    alt: 'What is the quality of this chord?'
  },
  {
    question: 'https://i.pinimg.com/originals/1c/2d/3c/1c2d3c6ff688352b5b6ceef39960d634.png',
    answers: [
      'Doubled Third',
      'Soprano voice is out of range',
      'Tripled Root',
      'Incomplete Chord'
    ],
    correctAnswer: 'Doubled Third',
    icon: '',
    alt: 'What part-writing error is shown in this example'
  },
  {
    question: 'https://i.pinimg.com/originals/3f/cf/03/3fcf03cee944a18eea064e71014e482f.png',
    answers: [
      'Marcato',
      'Legato',
      'Staccato',
      'Tenuto'
    ],
    correctAnswer: 'Staccato',
    icon: '',
    alt: 'In this example, what type of articulation marking is show in the left-hand?'
  },
  {
    question: 'https://i.pinimg.com/originals/7e/87/65/7e8765c1a7a1dd15586ed930bb0fcda5.png',
    answers: [
      'V6/5',
      'V4/3',
      'V6/4',
      'vii°'
    ],
    correctAnswer: 'V6/5',
    icon: '',
    alt: 'In the key of E major, what is the Roman numeral and inversion symbol for the following chord?'
  },
  {
    question: 'https://i.pinimg.com/originals/04/12/6f/04126f6071993ecb9c8b5640cde024fd.png',
    answers: [
      'Diminished Seventh',
      'Augmented Seventh',
      'Minor Seventh',
      'Major Seventh'
    ],
    correctAnswer: 'Major Seventh',
    icon: '',
    alt: 'What is the harmonic interval between these two pitches?'
  },
];

let questionNumber = 0;
let score = 0;

//generate question html
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <img src= "${STORE[questionNumber].question}" alt="${STORE[questionNumber].alt}">
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
  } else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(8)
  }
}

//increment question number
function changeQuestionNumber () {
  //if (questionNumber < STORE.length) {
  questionNumber ++;
  //}
  $('.questionNumber').text(questionNumber+1);
}

//increment score
function changeScore () {
  score ++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
  $('.quizStart').on('click', '.startButton', function (event) {
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
  });
}

// render question in DOM
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

const rightAnswerImg = 'https://i.pinimg.com/originals/03/e8/33/03e8330ad0272fac3713fab8626fad18.jpg';
const wrongAnswerImg = 'https://i.pinimg.com/originals/97/52/b4/9752b48c2b57577f27815b0ba4757c6e.jpg';



//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${rightAnswerImg}" alt="happy cat"/></div><p><b>Correct!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${wrongAnswerImg}" alt="confused cat"/></div><p><b>Incorrect!</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(score);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You know more about music than most people!</h3><p>You got ${score} / 8</p><p>You're ready for collegiate music theory!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 5 && score >= 3) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>So close</h3><p>You got ${score} / 8</p><p>You might want to practice your music theory...</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to sing in the shower</h3><p>You got ${score} / 8</p><p>Practice a bit more and you'll succeed at this quiz!</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//run quiz functions
function createQuiz () {
  startQuiz();

}

$(createQuiz);
