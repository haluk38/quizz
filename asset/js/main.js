let array = [{
    question: " Question 1 : Ou se situe la statue de la Liberté ? ",
    answer: ["Los angeles", "Paris", "New York", "Las Vegas"],
    rightanswer: 2
},
{
    question: " Question 2 : Combien de jours d'anniversaires a une personne qui a vécu 50 ans ? ",
    answer: ["0", "1", "49", "50"],
    rightanswer: 1
},
{
    question: " Question 3 : Quelle est la capitale du Royaume-Uni ? ",
    answer: ["Londre", "Dublin", "Berlin", "Moscou"],
    rightanswer: 0
}, {
    question: " Question 4 : Il y a 10 prunes. Vous en prenez 4. Combien en avez-vous ? ",
    answer: ["0", "4", "6", "8"],
    rightanswer: 1
},

{
    question: " Question 5 : Combien y a t-il de paires de chaussettes dans une vingtaine ? ",
    answer: ["0", "10", "20", "40"],
    rightanswer: 2
}];

let answerContainer = document.querySelectorAll(".answer")
let quizContainer = document.querySelector("#quiz");
let resultContainer = document.querySelector("#result");
let replayContainer = document.querySelector("#replayButton")
let index = 0;
let score = 0;

function displayQuestion() {
    quizContainer.innerHTML = array[index].question;
    array[index].answer.forEach((el, iterator)=>{
        answerContainer[iterator].innerHTML = el
    })
}
displayQuestion()

function nextQuestion() {
    index++
    displayQuestion()
    
    
}

function checkAnswer(userAnswer) {

    if (array[index].answer.indexOf(userAnswer.innerHTML)  == array[index].rightanswer) {
            score++;
            userAnswer.style.backgroundColor = "green"
           showResult()
       }else {
        userAnswer.style.backgroundColor = "red"
       }
    if (index >= array.length -1 ) {
        resultContainer.innerHTML = " Fin du Quiz,  " + "Score : " + score + " bonne reponses "
        setTimeout(()=>{
            userAnswer.style.backgroundColor = ""
        nextQuestion()
        },1000)
        }else{
            setTimeout(()=>{
                userAnswer.style.backgroundColor = ""
            nextQuestion()
            },1000)
        } 
    
        
    }     


function showResult() {
    resultContainer.innerHTML=score;
}
showResult()

function resetScores() {
    index = 0
    score = 0
    document.querySelector("#result").innerHTML = ""
    displayQuestion()
    
}
resetScores()


