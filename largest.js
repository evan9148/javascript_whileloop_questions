var readlinesync = require("readline-sync");
var num1 = readlinesync.question("enter your num1:- ");
var num2 = readlinesync.question("enter your num2:- ");
var num3 = readlinesync.question("enter your num3:- ");
var num4 = readlinesync.question("enter your num4:- ");
var num5 = readlinesync.question("enter your num5:- ");
if (num1>num2 && num1>num3 && num1>num4 && num1>num5){
    console.log("num1 is greater",num1);
}else if  (num2>num3 && num2>num5 && num2>num4 && num2>num1){
    console.log("num2 is greater",num2);
}else if (num3>num4 && num3>num2 && num3>num5 && num3>num1){
    console.log("num3 is greater",num3);
}else if (num4>num5 && num4>num3 && num4>num2 && num4>num1){
    console.log("num4 is greater",num4);
}else if (num5>num4 && num5>num3 && num5>num2 && num5>num1){
    console.log("num5 is greater",num5);
}else{
    console.log("nothing")
}

