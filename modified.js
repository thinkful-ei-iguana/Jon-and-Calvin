//'use strict';
// I’m a start quiz button. 
// I listen for the eventHandler ‘click’ target function. 
// When I see the function has been activated I call the page to switch to quiz question 1.

//radio button function that does a for loop through the array of questions and increments as answers are handed back by the user

//

// Functions: Start quiz function (Takes us to the first question, should start a tally of current question, #of correct answers, #of incorrect answers)
// Once button is clicked to start, should perform following functions: Should remove startquiz. Should keep track of current question. 
// Should have number of correct/incorrect answers.
// Functions: generateQuestion (for looping through array of STORE questions), else return renderResults, restartQuiz,
// Functions: userSelectAnswer should determine which radio button was selected.
// Functions: for submitting an answer via radio buttons
// Functions: Determine score correctness. IF correct call correct answer function, else call incorrect answer function
// Functions: Respond with correct answer iterate current question and update score, play sound file
// Functions: Respond with incorrect answer, iterate current question and update score, play sound file
// Functions: should iterate score when called
// Functions: loopBack function to send user back to answer further questions. Unless user has reached STORE.length-1. 
// If they have then call finalResults function.




// startQuiz(should have an eventHandler that listens for a button ('click') and then calls to: 
//      (remove the startQuiz button), (generateQuestion), (questionNumberDisplay), (questionAnswerForm).css)
// currentQuestionNumber(show number of questions already answered)
// generateQuestion(should request the next question in the array)
// userSubmitAnswer(should listen for an eventHandler('click') basically activating once the user has clicked the submit button)
// incrementScore(should increment the score if called)
// renderQuestion(should render the question into the DOM)
// ifAnswerCorrect(should call correctMusic, correctAnswerImg, loopBack, incrementScore, increment question number)
// ifAnswerWrong(should call wrongMusic, wrongAnswerImg, loopBack, increment question number)
// loopBack(sends user back to answer further questions unless array is exhausted, at which point it calls renderResults)
// finalResults(should equal current score)
// renderResults(should show call quizFinish)
// quizFinish(should call finalResults showing score, should have total questions answered, 
// should have a final screen with text encouraging a retake, should have a restartButton eventHandler listening for button ('click'))
// correctAnswers(${score} + ' / ' + ${questionNumber})


// for loop where 3 or less gives response to practice more
// for loop where 4-7 means you are on track for music theory start
// for loop where 8-10 means you've completely mastered everything about music forever, congrats!




// QUESTIONS, ANSWERS, etc.

const STORE = [
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
    {
      question: 'This is a question?'
      answers: [
        'answer A',
        'answer B',
        'answer C',
        'answer D'
      ],
      correctAnswer: 'Correct',
      icon: 'link.png',
      alt: 'alt text for hyperlink'
    },
  
  ];