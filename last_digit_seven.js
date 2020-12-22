var readlinesync = require("readline-sync");
var num = readlinesync.question("enter your num:-");
while (num>0){
    value=num%10
    if (value == 7){
        console.log("yes",value)
        break
    }else{
        console.log("no",value)
        break
    }
}