var readlinesync = require("readline-sync");
var num = readlinesync.question("enter your num;- ");
var i=1;
while (i<=10){
    console.log(num,"*",i,"=",num*i);
    i++;
}