// i=1
// while (i<=100) {
//     if (i%2==0){
//         console.log("not primt",i)
//     }else{
//         console.log("prime",i)
//     }
//     i++
// }

var readlineSync = require("readline-sync");
var num = readlineSync.question("enter your num:- ");
i=2
while (i<num){
    if (num%2==0){
        console.log("not prime",num);
        break
    }else{
        console.log("prime",num);
        break
    }
    i++;
}
