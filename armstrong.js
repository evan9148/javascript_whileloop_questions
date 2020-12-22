// var person = {fname:"John", lname:"Doe", age:25};

// var text = "";
// var x;
// for (x in person) {
//     console.log(person[x]);
// }


// var txt = "JavaScript";
// var x;

// for (x of txt) {
//   console.log(x + "<br >");
// }

var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// var text = "";

// for (;cars[i];) {
//     console.log(cars[i] + "<br>");
//   i++;
// }

var readlinesync = require("readline-sync");
var num = readlinesync.question("enter your num:- ");
var store = num
var i=1;
var add = 0;
while (num>0){
    var reverse = num%10;
    var product = reverse**3;
    var add = add+product;
    var num = num//10;
    if (store == add){
        console.log("Armstrong",add);
        break
    }else{
        console.log("not Armstrong",add);
        break
        }
}
