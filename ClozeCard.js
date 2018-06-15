var basicCards= require("./BasicCard.js");
var inquirer = require("inquirer");

var clozeCards = function(whole,partial,answer){
    
        this.whole=whole;
        this.partial=partial;
        this.answer=answer

       
        };
    
var basicfrontArray = [firstQuestion,secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion];
var firstQuestion = new basicCards("What number comes after 1?", "2");
console.log(firstQuestion.front);
console.log(firstQuestion.back);

var secondQuestion = new basicCards("What number comes after 3?", "4");
console.log(secondQuestion.front);
console.log(secondQuestion.back);

var thirdQuestion = new basicCards("What number comes after 5?", "6");
console.log(thirdQuestion.front);
console.log(thirdQuestion.back);

var fourthQuestion = new basicCards("What number comes after 7?", "8");
console.log(fourthQuestion.front);
console.log(fourthQuestion.back);

var fifthQuestion = new basicCards("What number comes after 9?", "10");
console.log(fifthQuestion.front);
console.log(fifthQuestion.back);


var sixthQuestionCloze = new clozeCards("what number comes after 11? 12","number after 11","12");
console.log(sixthQuestionCloze.whole);
console.log(sixthQuestionCloze.partial);
console.log(sixthQuestionCloze.answer);



var seventhQuestionCloze = new clozeCards("what number comes after 12? 13","number after 12?", "13");
console.log(seventhQuestionCloze.whole);
console.log(seventhQuestionCloze.partial);
console.log(seventhQuestionCloze.answer);


var eighthQuestionCloze = new clozeCards("what number comes after 13? 14","number after 13","14");
console.log(eighthQuestionCloze.whole);
console.log(eighthQuestionCloze.partial);
console.log(eighthQuestionCloze.answer);
    

var ninthQuestionCloze = new clozeCards("what number comes after 14? 15","number after 14?","15");
console.log(ninthQuestionCloze.whole);
console.log(ninthQuestionCloze.partial);
console.log(ninthQuestionCloze.answer);


var tenthQuestionCloze = new clozeCards("what number comes after 15? 16","number after 15?", "16");
console.log(tenthQuestionCloze.whole);
console.log(tenthQuestionCloze.partial);
console.log(tenthQuestionCloze.answer);


var answer="";


//how to stringify an a terminal input
var answer="";

function basicGame(){

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like a [BASIC] card or [CLOZE] card?",
            choices: ["BASIC", "CLOZE"],
            name: "choice"
        }
    ]).then(options => {

   if ( options.choice === "BASIC" ) {
    
        console.log(firstQuestion.front);{
            inquirer.prompt([{
                name:"response",
                message: "answer question"

            }]).then(function(answer) {
                if(answer.response === firstQuestion.back) {
                    console.log("correct");
                } else{
                    console.log("wrong");
                }


            }
        )
        //ignore lines 100-111
        if (options.choice=== "CLOZE"){
            console.log(sixthQuestionCloze.partial);{
                inquirer.prompt([{
                    name:"response",
                    message:"answer question"
                }]).then(function(answer) {
if(answer.response === sixthQuestionCloze.answer){
    console.log("correct");

}else{
    console.log("wrong");
}//IGNORE 100-111
                }
            )}
            
        }}
               
        }
        else {
            console.log(tenthQuestionCloze.partial);
            clozeGame();
           
        }
        
        });
        
        }
        

basicGame();


function clozeGame() {

inquirer.prompt([{

name:"response",
message: "answer question"


}]).then(function(answer) {
    if (answer.response === tenthQuestionCloze.answer) {
        console.log("correct: " + tenthQuestionCloze.whole);
    }else{console.log("wrong")}
}



)}








/*function game(){

    inquirer.prompt([
        {
            type: "list",
            message: "?",
            choices: ["1", "2","3"],
            name: "choice"
        }
    ]).then(options => {

   if ( options.choice === "BASIC" ) {
    
        console.log(firstQuestion.front);
        if (answer===firstQuestion.back){
            return true
        }
               
        }
        else {
            console.log(tenthQuestionCloze.partial);
            if(answer===tenthQuestionCloze.answer){
                return true
            }
           
        }
        
        });
        
        }
        
        
 


game();
*/





module.exports =clozeCards


//The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

//how to stringify an a terminal input
/*var answer="";

function game(){

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like a [BASIC] card or [CLOZE] card?",
            choices: ["BASIC", "CLOZE"],
            name: "choice"
        }
    ]).then(options => {

   if ( options.choice === "BASIC" ) {
    
        console.log(firstQuestion.front);
        if (answer===firstQuestion.back){
            return true
        }
               
        }
        else {
            console.log(tenthQuestionCloze.partial);
            if(answer===tenthQuestionCloze.answer){
                return true
            }
           
        }
        
        });
        
        }
        
        
 


game();
*/

