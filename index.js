var readlineSync = require("readline-sync");
var score = 0;

function play(question, answer) 
{
  var userAns = readlineSync.question(question);

  if(userAns === answer)
  {
    console.log("you are right");
    score++;
  }
  else
  {
    console.log("you are wrong");
  }
}
play("Mrvel Most Popular Character ?", "Thor");
console.log("*************************************");

play("Mrvel Most Popular Actor ?", "R.Downey");
console.log("*************************************");
play("Mrvel Most Popular Movie ?", "Avengers");
console.log("*************************************");
play("Mrvel Most Popular Actress ?", "Scarlett");
console.log("*************************************");
play("Mrvel has total how many movies ?", "39");
console.log("*************************************");
play("Anegers total movies parts ?", "4");
console.log("*************************************");
console.log("your total score is: " + score);
