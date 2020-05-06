var questions = [
	{
		question: "20/5 ?",
		answers: ['4','5', '9'],
		correctAnswer: '4'
	},
	{
		question: "30/3?",
		answers: [
			 '7',
			 '8',
			 '10'
		],
		correctAnswer: '10'
    },
    
    {
		question: "30/5?",
		answers: [
			 '66',
			 '6',
			 '100'
		],
		correctAnswer: '6'
  }
  ,
    
    {
		question: "40/10?",
		answers: [
			 '55',
			 '4',
			 '200'
		],
		correctAnswer: '4'
  },
  {
		question: "60/2?",
		answers: [
			 '95',
			 '4',
			 '30'
		],
		correctAnswer: '30'
  }
  ,
  {
		question: "10/2?",
		answers: [
			 '95',
			 '4',
			 '5'
		],
		correctAnswer: '5'
  }
  ,
  {
		question: "40/2?",
		answers: [
			 '65',
			 '20',
			 '80'
		],
		correctAnswer: '30'
  }
  ,
  {
		question: "50/2?",
		answers: [
			 '50',
			 '4',
			 '10'
		],
		correctAnswer: '50'
  }
  ,
  {
		question: "100/2?",
		answers: [
			 '50',
			 '4',
			 '60'
		],
		correctAnswer: '50'
  }
  ,
  {
		question: "150/2?",
		answers: [
			 '50',
			 '75',
			 '32'
		],
		correctAnswer: '75'
	}
];
//////////////////// random numders /////////////////////////////
var RandomQuestionNum = [];
while (RandomQuestionNum.length < 5) {
  var random= Math.floor(Math.random() * 10);
  if (RandomQuestionNum.indexOf(random) === -1) {
    RandomQuestionNum.push(random)
  }
}

var NumOFQuestion= 0;


/************** function to show questions   ****** */
function ShowQuestion(NumOFQuestion = 0) {

  document.querySelector(".question").innerHTML = questions[RandomQuestionNum[NumOFQuestion]].question;
  for (var i = 0; i <questions[NumOFQuestion].answers.length; i++) {
    document.querySelector("#ans-"+i).innerHTML =questions[RandomQuestionNum[NumOFQuestion]].answers[i];
    document.querySelector('#r-'+i).checked=false;

  }
//  check();
//console.log(document.querySelector("#ans-0").innerHTML = questions[NumOFQuestion].answers[0]);

}

ShowQuestion();


var checkradio;
var checks = document.querySelectorAll(".answer");
//////////////////////////// button  next /////////////////////////////
document.getElementById("next").addEventListener("click", nextQ)

function nextQ() {
  
  
  if (NumOFQuestion < questions.length - 1) {
   // document.querySelectorAll(".answer").checked=false;
    // checks.forEach(function(curr){
    
    
    //   if(curr.checked){
    //     checkradio =curr;
    //     curr.checked=false;
    //     console.log(checkradio);
    //    }else{
    //     document.querySelectorAll(".answer").checked=false;
    //    }
    // })
 //   document.querySelectorAll(".answer").forEach()
    ShowQuestion(++NumOFQuestion);

  }else{
    alert("you are at last question");
  }

}


///****************** */  Button prev********************////////

document.getElementById("prev").addEventListener("click", prevQ)

function prevQ() {
  // checks.forEach(function(curr){
  //   curr.checked=checkradio.checked;
  // });
  //var checks = document.querySelectorAll(".answer");
    if (NumOFQuestion > 0) {

      // document.querySelectorAll(".answer").forEach(function(curr,i,array){
      // for ( i; i <3; i++) {
      //   if(array[i]==userAnswer[--NumOFQuestion]){
      //   array[i].checked = true;
        ShowQuestion(--NumOFQuestion);
      }
      // else{
      //   console.log("unchecked");
      // }
//     }
      
//   });
// }
  else{
    alert("you are at first question");
  }
}




/******************* paginations ***********************/
var Question_numbers = document.querySelectorAll(".QuestionNum")
Question_numbers.forEach(function (curr) {
  // console.log(curr)
  curr.addEventListener("click", function (e) {
    var split = this.id.split('-')
    var QuestionNum = split[1]
    if (e.target === this) {
      document.querySelector(".question").innerHTML = questions[QuestionNum].question;
      NumOFQuestion = parseInt(QuestionNum);
      for (var i = 0; i < questions[QuestionNum].answers.length; i++) {
        document.querySelector("#ans-"+i).innerHTML = questions[QuestionNum].answers[i];
      }
    }
  });
});




//**************** markQuestion Function ************************//
document.querySelector("#mark").addEventListener("click", MarkQ)
var mark = []
 /// check if an question has marked before or not 
function MarkQ() {
  if(mark.includes(NumOFQuestion)){
   console.log("elemnt exit");
  }else{
    //if not then push it
    mark.push(NumOFQuestion)
  }
  console.log(mark)
 document.querySelector("#MarkQNum-" + NumOFQuestion).style.backgroundColor = "yellow";
}





/**********       add Question to marked Div      *************/
var NumOfMarkedQuestions= document.querySelectorAll(".MarkQNum")

NumOfMarkedQuestions.forEach(function (curr) {
  // console.log(curr)
  curr.addEventListener("click", function (e) {
    // console.log(this)
    var split = this.id.split('-')
    var QuestionNum = split[1]
    if (e.target === this) {
      document.querySelector(".question").innerHTML = questions[QuestionNum].question;
      NumOFQuestion = parseInt(QuestionNum);
       for (var i = 0; i < questions[QuestionNum].answers; i++) {
        document.querySelector("#ans-"+i).innerHTML = questions[QuestionNum].answers[i]

      }

    }
    document.querySelector("#MarkQNum-" + NumOFQuestion).style.backgroundColor = "gray";
   //// pop an question of an marked Questions 
console.log(mark);
console.log(NumOFQuestion);
     var index = mark.indexOf(NumOFQuestion);
     if (index > -1) {
       mark.splice(index, 1);
     }
     console.log(mark);
  });

});


var userAnswer=[];
//var checks = document.querySelectorAll(".answer");
///////////////////////////// check ////////////////////////
function check(){
  document.querySelectorAll(".answer").forEach(function(curr,i,array){
for(i;i<3;i++){
if(array[i].checked==true){
  var userAns=array[i];
  userAnswer.push(userAns);
}else{
  console.log('unchecked');
}
return userAns;
}

  });

}

document.querySelectorAll(".answer").forEach(function (curr) {

  curr.addEventListener("click", function (e) {
    var split = this.id.split('-')
    var indexx = split[1]
    if (e.target === this) {

    } else {

    }

  });

});