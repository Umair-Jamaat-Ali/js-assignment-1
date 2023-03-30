
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

// 6-Write a js program to check whether a year is leap year or not

var x2 =+ prompt("enter februry month days")

if(x2 == 29){
    console.log("This year is leap year")
}

else{
    console.log("This year is not leap year")
}



// 7. Write a js program to check whether a character is alphabet or not.

var alpha = prompt("write any things");

if(alpha >= "a" && alpha <= "z"){
    console.log("Characters are alphabet")
}

else{
    console.log("Characters are not alphabet")
}


// 8.Write a js program to input any character and check whether it is alphabet, digit or special character.

var char =+ prompt("enter any things");

if(char >= "a" && char <= "z"){
    console.log("Characters are alphabet")
}

else if(char >= 0 && char <= 9){
    console.log("Characters are number")
}

else{
    console.log("Characters are special symbols")
}


//9. Write a js program to input any alphabet and check whether it is vowel or consonant

var vowelChar = prompt("enter any alphabets");

if(vowelChar === "a" || vowelChar === "e" || vowelChar === "i" || vowelChar === "o" || vowelChar === "u"){
    console.log("Characters are vowel alphabet")
}

else{
    console.log("Characters are consonant alphabet")
}



//10. Write a js program to check whether a character is uppercase or lowercase alphabet.

var engCase = prompt("enter any alphabet");

if( engCase >="A" && engCase <="Z"){
    console.log("character is uppercase")
}

else{
    console.log("character is lowercase")
}


//11. write a js program to input all angles of a triangle and check whether triangle is valid or not?

function angleTri(params) {
    if(A + B + C == 180){
        console.log("triangle is valid")
    }

    else{
        console.log("triangle is not valid")
    }
}

var A =+ prompt("enter A value");

var B =+ prompt("enter B value");

var C =+ prompt("enter C value");


angleTri(A,B,C)



//12. write a js program to input all sides of a triangle and check whether triangle is valid or not?

function sideTri(a,b,c) {

    if(a + b > c && b + c > a && a + c > b){
        console.log("triangle is valid")
    }

    else{
        console.log("triangle is not valid")
    }
    
}

var a =+ prompt("enter a value");

var b =+ prompt("enter b value");

var c =+ prompt("enter c value");


sideTri(a,b,c)


// 13. write a js program to check whether triangle is equilateral, isosceles or scalene triangle.

function checkTriangle(side1,side2,side3) {

    if( side1 === side2 && side2 === side3 ){
        console.log("triangle is equilateral")
    }
    
   else if(side1 == side2 || side2 == side3 || side1 === side3){
        console.log("triangle is isosceles")
    }

    else{
        console.log("triangle is scalene ")
    }

}


var side1 =+ prompt("enter side1");


var side2 =+ prompt("enter side2");


var side3 =+ prompt("enter side3");


checkTriangle(side1,side2,side3)