
// 1-writ a js program to find maximum between two numbers.

var num1 =+ prompt("Enter first number");


var num2 =+ prompt("Enter second number");

if(num1>num2){
    console.log("First number is greater than r");
}
else{
    console.log("Second number is greater than ");
}

// 2- writ a js program to find maximum between three numbers.

var number1 =+ prompt("enter 1st number");


var number2 =+ prompt("enter 2nd number");


var number3 =+ prompt("enter 3rd number");

if(number1>number2 && number1>number3){
    console.log("number 1st is greater than others")
}


else if(number2>number1 && number2>number3){
    console.log("number 2nd is greater than others")
}


 else if(number3>number2 && number3>number1){
    console.log("number 3rd is greater than others")
}



// 3- write a program to check whether a number is negative, positive or zero.


var x =+ prompt ("Enter a number");

if(x>0){
    console.log("Number is positive");
}


else if(x==0){
    console.log("Number is zero");
}


else if(x<0){
    console.log("Number is negative");
}


// 5- write a program to check the number is even or odd?

var y =+ prompt("Enter a number");

if(y%2==0){
    console.log("number is even ")
}

else{
    console.log("number is odd")
}

// 4- Write a js program to check whether a number is divisible by 5 and 11 or not


var x1 =+ prompt("enter a number");

if(x1%5==0 && x1%11==0){
    console.log("number is divided on 5 and 11");
}

else{
    console.log("number is not divided on 5 and 11");
}