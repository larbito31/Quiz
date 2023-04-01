var selectedAnswer= "";
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var startbtn = document.getElementById("startBtn");

// Get the question and answer elements
const questionElement = document.getElementById("question");
const answr1 = document.getElementById('answr1').querySelector("span");
const answr2 = document.getElementById('answr2').querySelector("span");
const answr3 = document.getElementById('answr3').querySelector("span");
const answr4 = document.getElementById('answr4').querySelector("span");

// Get the next button and heading elements
const nextBtn = document.getElementById('next1');
var myH2 = document.getElementsByTagName("h2")[0];

// Get all answer choice elements
const answrchoice = document.querySelectorAll(".answer-choice");

// Define the questions and their respective answers
const question = ["Which language has the more native speakers?",
 "What is the most common surname in the United States",
 "What year was the United Nations established?",
 "What company was originally called Cadabra?"]
 
const answrQuestions = [["English", "Spanish", "Frensh","Romanian"],
["Smith", "Trouri","Mohammed","Khan"],
["1920", "1911","1945","1990"],
["Volkswagen", "Amazon","Aliexpress","Zalando"],
 ]

 // Define the correct answers
 const correctAnswr = ["Spanish", "Smith", "1945","Amazon"]

// Set the initial question and answer choices

// Initialize the question counter
var i = 0;

startbtn.onclick = ()=> {
    questionElement.textContent = question[0];
answr1.textContent = answrQuestions[0][0];
answr2.textContent = answrQuestions[0][1];
answr3.textContent = answrQuestions[0][2];
answr4.textContent = answrQuestions[0][3];

myH2.innerHTML = "Question 1";
console.log("test")
    form1.style.left= "-750px"
    form2.style.left= "100px"
 

};


nextBtn.addEventListener('click', ()=> {

    // Increment the question counter
    i++;

    // Check if all questions have been answered
    if (i >= question.length) {
        console.log("Quiz completed!");
        form2.style.left= "-750px"
        form3.style.left= "100px"
        return;
    }

    // Set the next question and answer choices
    questionElement.textContent = question[i];
    answr1.textContent = answrQuestions[i][0];
    answr2.textContent = answrQuestions[i][1];
    answr3.textContent = answrQuestions[i][2];
    answr4.textContent = answrQuestions[i][3];
    myH2.innerHTML = "Question " + (i+1);

    // Add click event listener to each answer choice
    answrchoice.forEach((choice) => {
        choice.addEventListener('click', (event) => {
            // Set selectedAnswer to the text content of the selected answer choice
            selectedAnswer = event.target.querySelector('span').textContent;
            console.log("Selected answer: " + selectedAnswer);
        });
    });

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswr[i-1]) {
        console.log("Correct! Selected answer: " + selectedAnswer + ", Correct answer: " + correctAnswr[i-1]);
    } else {
        console.log('Incorrect! Selected answer: ' + selectedAnswer + ", Correct answer: " + correctAnswr[i-1]);
    }
})


console.log("test")






