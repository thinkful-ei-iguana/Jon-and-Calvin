'use strict';
const STORE = {
  score: 0,
  questionNumber: 0,

  questionsAndAnswers: [
    {
      question: 'What is one of the most important principles to follow when backpacking or camping?',
      answers: [
        'Always remeber to take advantage of what nature has to offer',
        'Leave no trace',
        'Moss always grows on the north side of a rock',
        'Be as loud as you want to outdoors because that\'s what adventure is all about'
      ],
      correctAnswer: 'Leave no trace',
      src: 'https://i.pinimg.com/originals/2f/53/7a/2f537a79b3222328ea148c68b30425cd.png',
      icon: 'https://i.imgur.com/Rue4wCj.png',
      alt: 'tent icon'
    },
    {
      question: 'What are the 10 essentials for backpacking or camping?',
      answers: [
        'Entertainment | Food | Tent | Cell Phone | Water Guns | Your pet | Cooler | Cooking utensils | Clothing | Portable sound system',
        'Cell phone | Junk food | binoculars | sunglasses | pepper spray | ice | Sleeping bag | Camera | Enertainment | Water',
        'Navigation | Sun protection | Insulation | First-aid supplies | Fire | Repair kit and tools | Nutrition | Hydration | Emergency Shelter',
        'GPS | Sunglasses | Tent | Hydration | Enertainment | Insulation | Bandages | Cooler | Tools | Books'
      ],
      correctAnswer: 'Navigation | Sun protection | Insulation | First-aid supplies | Fire | Repair kit and tools | Nutrition | Hydration | Emergency Shelter',
      icon: 'https://i.imgur.com/iQ0FBhB.png',
      alt: 'shield for 10 essentials icon'
    },
    {
      question: 'When backpacking what is the weight you should aim for when packing your backpack?',
      answers: [
        '25 lbs',
        '50 lbs',
        '70 lbs',
        '100 lbs'
      ],
      correctAnswer: '25 lbs',
      icon: 'https://i.imgur.com/uXukVjk.png',
      alt: 'weight icon'
    },
    {
      question: 'You are camping in bear country. How should you store your food?',
      answers: [
        'Bears are a myth. There\'s no need to worry about them',
        'Always store your food on you person at all times.',
        'Store your food in your tent',
        'Always use a bear canistern or hang your food and personal hygiene items on a tree limb in a bear backpacking'
      ],
      correctAnswer: 'Always use a bear canistern or hang your food and personal hygiene items on a tree limb in a bear backpacking',
      icon: 'https://i.imgur.com/i0Q515j.png',
      alt: 'bear paw icon'
    },
    {
      question: 'What should you never day hike without?',
      answers: [
        'Extra food',
        'Hat',
        'GPS',
        'Cell phone'
      ],
      correctAnswer: 'Extra food',
      icon: 'https://i.imgur.com/LHRMcBd.png',
      alt: 'hat icon'
    },
    {
      question: 'You forgot your water filter in the backcountry. What should you do?',
      answers: [
        'Just drink straight from the stream',
        'Drink your own urine',
        'Find a water source and boil the water to neutralize it',
        'Don\'t drink any water'
      ],
      correctAnswer: 'Find a water source and boil the water to neutralize it',
      icon: 'https://i.imgur.com/XEwf3tK.png',
      alt: 'water bottle icon'
    },
    {
      question: 'What is the safest way to cross a stream while hiking?',
      answers: [
        'Find flat rocks to hop across on',
        'Look for the deepest section and cross there',
        'Avoid acrossing where the current is strong. Look for a straight, wide, and shallow section.',
        'Always follow the marked route no matter what'
      ],
      correctAnswer: 'Avoid acrossing where the current is strong. Look for a straight, wide, and shallow section.',
      icon: 'https://i.imgur.com/Kk9t3qL.png',
      alt: 'stream icon'
    },
    {
      question: 'While hiking you get lost. What should you do now?',
      answers: [
        'Stay put and wait for someone to find you',
        'Follow streams or rivers. They will eventually lead to roads',
        'Take off running in one direction. you will eventually hit a trail.',
        'Eat all of your food now to get the most energy that you can.'
      ],
      correctAnswer: 'Stay put and wait for someone to find you',
      icon: 'https://i.imgur.com/A2cWS88.png',
      alt: 'compass icon'
    },
    {
      question: 'You just spotted a black bear while hiking. What should you do now?',
      answers: [
        'Play dead',
        'Throw your food at the bear so that it will be distracted',
        'Approach the bear. It might want to be friends with you!',
        'If you spot the bear before it spots you, back away keeping your eyes on the bear and wait for it to pass before continuing on.'
      ],
      correctAnswer: 'If you spot the bear before it spots you, back away keeping your eyes on the bear and wait for it to pass before continuing on.',
      icon: 'https://i.imgur.com/VwFRlXL.png',
      alt: 'bear head icon'
    },
    {
      question: 'What is the most dangerous animal in the wilderness?',
      answers: [
        'Grizzly bears',
        'Birds',
        'Insects',
        'Humanbeings'
      ],
      correctAnswer: 'Humanbeings',
      icon: 'https://i.imgur.com/YdcTVPW.png',
      alt: 'skull and crossbones icon'
    }
  ]
};


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
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
  });
}

// render question in DOM
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
} //this should, when called, check whether it has gone through the entire array.length of questionsAndAnswers

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

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  // let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(score);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://i.imgur.com/OPODnDn.gif" alt="campfire animated icon"/><p>You got ${score} / 10</p><p>You're ready to plan your backpacking trip!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://i.imgur.com/41Jnnxk.gif" alt="raccoona animated icon"/><p>You got ${score} / 10</p><p>Bone up on your backpacking knowledge a little more and you'll be ready to go!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://i.imgur.com/iGqoVcM.gif" alt="car animcated icon"/><p>You got ${score} / 10</p><p>With more camping and outdoor experience you'll be able to pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
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
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);

function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
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
    $('.questionNumber').text(10)
  }
}