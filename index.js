var selectedAnswer= "";
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var startbtn = document.getElementById("startBtn");

// Get the question and answer elements
const questionElement = document.getElementById("question");
const answerElements= [
document.getElementById('answr1').querySelector("span"),
document.getElementById('answr2').querySelector("span"),
document.getElementById('answr3').querySelector("span"),
document.getElementById('answr4').querySelector("span"),
]


// Get the next button and heading elements
const nextBtn = document.getElementById('next1');
var questionNumber = document.getElementsByTagName("h2")[0];

// Get all answer choice elements
const answrchoice = document.querySelectorAll(".answer-choice");

// Define the questions and their respective answers
const questions = [
    {
      question: "Which language has the more native speakers?",
      answers: [
        { text: "English", correct: false },
        { text: "Spanish", correct: true },
        { text: "French", correct: false },
        { text: "Romanian", correct: false }
      ]
    },
    {
      question: "What is the most common surname in the United States?",
      answers: [
        { text: "Smith", correct: true },
        { text: "Touri", correct: false },
        { text: "Mohammed", correct: false },
        { text: "Khan", correct: false }
      ]
    },
    {
      question: "What year was the United Nations established?",
      answers: [
        { text: "1920", correct: false },
        { text: "1911", correct: false },
        { text: "1945", correct: true },
        { text: "1990", correct: false }
      ]
    },
    {
      question: "What company was originally called Cadabra?",
      answers: [
        { text: "Volkswagen", correct: false },
        { text: "Amazon", correct: true },
        { text: "Aliexpress", correct: false },
        { text: "Zalando", correct: false }
      ]
    }
  ];
  var i = 0;
 
  

// Set the initial question and answer choices

// Initialize the question counter


startbtn.onclick = ()=> {
    setQuesandAnswr();
    form1.style.left= "-750px"
    form2.style.left= "100px"
    i++;
};


function setQuesandAnswr() {
    questionNumber.innerHTML = "Question "+ (i+1);
    questionElement.textContent = questions[i].question;
    questions[i].answers.forEach((answer, i) => {
    answerElements[i].textContent = answer.text;
  });


}

















nextBtn.addEventListener('click', ()=> {

    if (i >= questions.length) {
        console.log("Quiz completed!");
        form2.style.left= "-750px"
        form3.style.left= "100px"
        return;
    }

    setQuesandAnswr();
   
///*
    // Check if all questions have been answered
    i++;
    //remove the selected answer from answchoice
    answrchoice.forEach((choice) => {
        choice.classList.remove('selected');
    });
    /*// Check if the selected answer is correct
    if (selectedAnswer === correctAnswr[i-1]) {
        console.log("Correct! Selected answer: " + selectedAnswer + ", Correct answer: " + correctAnswr[i-1]);
    } else {
        console.log('Incorrect! Selected answer: ' + selectedAnswer + ", Correct answer: " + correctAnswr[i-1]);
    }*/
})

 // Add click event listener to each answer choice
 answrchoice.forEach((choice) => {
    choice.addEventListener('click', (event) => {

        answrchoice.forEach((choice) => {
            choice.classList.remove('selected');
        });

        event.target.classList.add('selected');
        // Set selectedAnswer to the text content of the selected answer choice
        selectedAnswer = event.target.querySelector('span').textContent;
        console.log("Selected answer: " + selectedAnswer);
    });
});


console.log("test")






