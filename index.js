// Initialize selectedAnswer with an empty string
var selectedAnswer= "";
console.log("test")

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
const question = ["what is your ", "who are you","ok just a test?","kaka ronaldo ?"]
const answrQuestions = [["koko", "dsfsdfs","q1","sidsfsfssi"],
["koko", "dsfsdfs","q2","sidsfsfssi"],
["koko", "dsfsdfs","q3","sidsfsfssi"],
["koko", "dsfsdfs","q4","sidsfsfssi"],
 ]

 // Define the correct answers
 const correctAnswr = ["q1", "q2", "q3","q4"]

// Set the initial question and answer choices
questionElement.textContent = question[0];
answr1.textContent = answrQuestions[0][0];
answr2.textContent = answrQuestions[0][1];
answr3.textContent = answrQuestions[0][2];
answr4.textContent = answrQuestions[0][3];
selectedAnswer = correctAnswr[0];
myH2.innerHTML = "Question 1";

// Initialize the question counter
var i = 0;

nextBtn.addEventListener('click', ()=> {

    // Increment the question counter
    i++;

    // Check if all questions have been answered
    if (i >= question.length) {
        console.log("Quiz completed!");
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

// Define the quiz class with methods to set questions and answers
class Quiz {
    setQuestion(){}
    setanswers() {}
}

console.log("test")
