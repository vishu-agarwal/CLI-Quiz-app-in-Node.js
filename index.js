/*
Practical Assignment - 3
Ask for the name of the user
Ask MCQ questions to the user (4 options)
On each answer, update the score and show the correct answer if it was wrong
+5 for right answer, -2 for wrong answer
At the end show the final score to the user
*/
/*const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});*/
const rs = require("readline-sync");

console.log("*************** The RAMAYAN Quiz ********************");
var name = "";
var score = 0;
var answr = "";

var ques = require("./questions.json")
var nm = rs.question("Enter Your Name :: ");
var name = `${nm}`;
console.log("Welcome " + name.toUpperCase() + " to play The RAMAYAN Quiz.\n");
console.log("Score is calculating based on :: \n");
console.log("--->> '+5' points for correct answer and '-2' for wrong answer.\n");
start();


////var qno = 0;
function start() {
  var qno = 0;
  while (true) {

    if (qno != 10) {
      console.log(`\n${ques[qno].que}`);
      console.log(`A) ${ques[qno].A}`);
      console.log(`B) ${ques[qno].B}`);
      console.log(`C) ${ques[qno].C}`);
      console.log(`D) ${ques[qno].D}`);
      option(ques[qno].correct, ques[qno].explain)
      //GetQuizOption(QuizData[no].Ans);
      qno++;
    }
    else {
      /*
        console.log(`\nYour Score :- ${QuizPoint}`);
        rl.close();
        exit();*/
      displayScore();
    }

  }
  /*
  for (let qno = 0; qno < 10; qno++) {

    console.log(`\n${ques[qno].que}`);
    console.log(`A) ${ques[qno].A}`);
    console.log(`B) ${ques[qno].B}`);
    console.log(`C) ${ques[qno].C}`);
    console.log(`D) ${ques[qno].D}`);

    /* r1.question("Enter your option ::  ", (opt) => {
       answr = opt;
       option();
    });*/

  /*option(ques[qno].correct, ques[qno].explain);

}
displayScore();
// qno++;
*/
}

function option  (correct, explain) {
  var opt = rs.question(" Enter Your option :: ");
  var answr = opt.toUpperCase();
  if (correct == answr) {
    console.log(` Explanation :: ${explain}`);
    score += 5;
    console.log("\n Correct ! Your Score is :: ", score);
  }
  else {
    console.log(` Correct answer is option :: ${correct}`);
    console.log(`>>> Explanation:: ${explain}`);
    score -= 2;
    console.log("\n>>>>>>>>>>>>>>>Wrong ! Your Score is :: ", score);
  }

  // });
};

function displayScore() {

  console.log("\n>>>>>>>  " + name.toUpperCase() + "'s Score is :: " + score);
  process.exit();

}




