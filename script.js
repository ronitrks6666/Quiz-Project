








const quizDB = [
    {
        question: "What is HTML",
        a:"Water",
        b:"Fire",
        c:"Gun",
        d:"none",
        ans:"d"
    },
    {
        question: "What is js",
        a:"JavaScript",
        b:"JavaSum",
        c:"JavaSeries",
        d:"none",
        ans:"a"
    },
    {
        question: "What is CSS used for",
        a:"Database",
        b:"Styling",
        c:"Backend",
        d:"none",
        ans:"b"
    },{
        question: "What is node,js used for",
        a:"Styling",
        b:"Database",
        c:"Backend",
        d:"none",
        ans:"c"
    },{
        question: "What is 5",
        a:"Feve",
        b:"Five",
        c:"Fine",
        d:"none",
        ans:"b"
    },{
        question: "What is 6",
        a:"Sence",
        b:"Sum",
        c:"Six",
        d:"none",
        ans:"c"
    },{
        question: "What is 7",
        a:"Even",
        b:"Odd",
        c:"Fraction",
        d:"none",
        ans:"b"
    },{
        question: "What is 8",
        a:"Odd",
        b:"Even",
        c:"Fraction",
        d:"none",
        ans:"b"
    },{
        question: "What is 9",
        a:"Nine",
        b:"Ine",
        c:"Neine",
        d:"none",
        ans:"a"
    },

    {
        question: "What is full form of IDK",
        a:"I dont know",
        b:"I dont kare",
        c:"I dont kick",
        d:"None of the above",
        ans:"a"
    },
    
    {
        question: "what is 10",
        a:"ten",
        b:"teem",
        c:"teen",
        d:"None of the above",
        ans:"a"
    },










]

















































































// MAIN CODES

const questions = document.querySelector('#question');
const option1   = document.querySelector('#option1');
const option2   = document.querySelector('#option2');
const option3   = document.querySelector('#option3');
const option4   = document.querySelector('#option4');
const submit    = document.querySelector('#submit');
const back      = document.querySelector('#back');



const selectedans = document.querySelectorAll('.answer');
//const currentscore   = document.querySelector('#currentpoint');
const totalscore = document.querySelector('#totalpoint');

var page1  = document.getElementById("page1");
var page2  = document.getElementById("page2");
var showscore  = document.getElementById("showScore");
var btnbox = document.getElementById("npbtnbox");

let questionCount = 0;
let quesnum=1;
let score=0;
let totalques=0;

let mynum=0;
const pointArray = []; 



const screenload = () => {

page2.style.display = "none";
showscore.style.display = "none";

}
let qstartIndex=0;

function getInputValue(){

    totalques = document.getElementById("myInput").value;
     qstartIndex = quizDB.length - totalques;
     questionCount = Math.floor(Math.random() * qstartIndex);
     mynum = questionCount;
     console.log(mynum);
     for(let i =0;i<totalques;i++)
     {
        pointArray[i]=0;
     }
    
    loadQuestion();
    page1.style.display = "none";
    page2.style.display = "block";
    showscore.style.display = "block";
}



const loadQuestion = () => {

    
    if (btnbox.style.display === "none") {
        btnbox.style.display = "block";
      }
   const questionList = quizDB[questionCount];

   questions.innerText = "Q"+quesnum +":" + questionList.question; 
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;

   totalscore.innerHTML = `
   <h2> Your current score ${score} </h2>
   
   `;

}


const getcheckedAnser = () =>{
    let selected;
    selectedans.forEach((currentans) =>{
    if(currentans.checked){
      selected = currentans.id;
    }
    });
    return selected;
};

submit.addEventListener('click', ()=>{
    const checkedAnswer = getcheckedAnser();
    
    if(checkedAnswer == quizDB[questionCount].ans){
        let che = quesnum -1;
        if(pointArray[che]=='0'){
            score++;
            pointArray[che]=1;
        }
         
    };

    quesnum++;
    questionCount++;

    if(quesnum <= totalques){
        loadQuestion();
    }
    else{ 
        btnbox.style.display="none";
        totalscore.innerHTML = `
        <h2> You scored ${score}/${totalques} </h2>
        <button class="sabtn" onclick="location.reload()">START AGAIN</button>
        `;
        score=0;

    }
});



back.addEventListener('click', ()=>{
    
    if(questionCount > mynum ){
        quesnum--;
        questionCount--;
        loadQuestion();
    }
});