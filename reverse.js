var readlinesync = require("readline-sync");
var num = readlinesync.question("enter thr num;- ");
var reverse = 0
while (num>0){
    var rev = num%10;
    var reverse = (reverse*10)+rev;
    var num = num//10;
console.log(reverse);
}