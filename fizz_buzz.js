i=0;
while (i<=100){
    if (i%3==0){
        console.log("it is divisble by three:- Fizz",i);
    }else if (i%5==0){
        console.log("it is divisble by five:- Buzz",i);
    }else if (i%3==0 && i%5==0){
        console.log("it is divisble by both three and five:- Fizz-Buzz");
    }else{
        console.log(i);
    }
    i++;
}