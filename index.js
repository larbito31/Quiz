var selectedAnswer= "";
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var startbtn = document.getElementById("startBtn");
const nextBtn = document.getElementById('next1'); // Get the next button and questionNumber element
nextBtn.style.display='none';
var questionNumber = document.getElementsByTagName("h2")[0];
const answrchoice = document.querySelectorAll(".answer-choice"); // Get all answer choice elements
var scoreDom = document.getElementById("score");
var score = 0;

// Get the question and answer elements
const questionElement = document.getElementById("question");
const answerElements= [
document.getElementById('answr1').querySelector("span"),
document.getElementById('answr2').querySelector("span"),
document.getElementById('answr3').querySelector("span"),
document.getElementById('answr4').querySelector("span"),
]





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
  var currentQuestion  = 0;
 
  

// Set the initial question and answer choices

// Initialize the question counter


startbtn.onclick = ()=> {
    setQuesandAnswr();
    form1.style.left= "-750px"
    form2.style.left= "100px"
    //currentQuestion++;
};


function setQuesandAnswr() {
    questionNumber.innerHTML = "Question "+ (currentQuestion+1);
    questionElement.textContent = questions[currentQuestion].question;
    questions[currentQuestion].answers.forEach((answer, i) => {
    answerElements[i].textContent = answer.text;
    
    
  });
}




nextBtn.addEventListener('click', ()=> {
    nextBtn.style.display='none'; //hide bottun

    if (currentQuestion >= questions.length-1) {
      scoreDom.innerHTML = ` the score is ${score}`
        console.log("Quiz completed!");
        form2.style.left= "-750px"
        form3.style.left= "100px"
        return;
    }
    currentQuestion++;
    setQuesandAnswr();
    
    //remove the selected answer from answchoice
    answrchoice.forEach((choice) => {
      
        choice.classList.remove('correct');
        choice.classList.remove('incorrect');
        choice.removeAttribute('disabled');
        

    });
})

 // Add click event listener to each answer choice
 answrchoice.forEach((choice) => {

    choice.addEventListener('click', (event) => {

        correctAnswer = questions[currentQuestion].answers.find(answer => answer.correct).text;
        selectedAnswer = event.target.querySelector('span').textContent;
        console.log("the correct answer is: "+ correctAnswer);
        console.log("the select answer is: "+ selectedAnswer);
        const correctChoice = event.target.parentElement.querySelector(`[title="${correctAnswer}"]`);
        // Check if the selected answer is correct
        
        if (selectedAnswer === correctAnswer){
          score++;
            answrchoice.forEach((choice) => {
                choice.setAttribute('disabled','disabled'); 
                             
            });
            event.target.classList.add('correct');
        } else {
            event.target.classList.add('incorrect');
            answrchoice.forEach((choice) => {
                choice.setAttribute('disabled','disabled'); 
                
                
            });
        }
      
        nextBtn.style.display='block'; 
            
    });
});







