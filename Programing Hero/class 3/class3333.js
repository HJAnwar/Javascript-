//here feet to inch convert

// function feetToInch(feet) {
//     var inch= feet * 12;
//     console.log(inch); 
// }
// feetToInch(12)



//here inch to feet convert

// function inchToFeet(inch) {
//     var feet =  inch /12;
//     var result = feet.toFixed(2)
//     console.log(result);
// }
// inchToFeet(14)

// var name = "anwar ";
// if (name.length > 5) {
//    console.log(" dur beshi hoiche");
// }else{
//     console.log(name);
// }


// function yearLeap(year) {
//     let 
//     return(year % 4 == 0) && (year % 100 != 0 ) || ( year % 400 == 0 )
// }
// const years = yearLeap(2028)
// if (years == true) {
//     console.log("this year is leap year");
// }else{
//     console.log("not a leap year");
// }

// function leapYear(year) {
//     return(year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
// }
// var years = leapYear(2024);
// console.log(years);


// for (let i = 10; i > 1; i++) {
//     // const element = [i];
//     console.log(i);

// }





// function factorial(n) {
//     var fact = 1;
//     for (let i = 1; i < n; i++) {
//         fact = fact * i;
//     }

//     return fact;
// }

// var result = factorial(20);
//  console.log(result);


// what is factorial

// let factorial = 1;
// for (let i = 1; i < 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);

// }

// function factorial(n) {
//     var fact =  1;
//     for (let i = 1; i <= n; i++) {
//          fact = fact * i;
//         //console.log(i,fact);
//     }
//     return fact;
// }
// let number = factorial(10)
// console.log(number);



//  let factorial =1; 
//  var i=1 ;
// while (i <= 10) {
//     factorial = factorial *i;
//     console.log(i, factorial);
//     i = i+ 1;
// }


// function factorial(n) {
//     let fact = 1;
//     let i = 1;
//     while (i <=n) {
//         fact = fact *i;
//         i++;
//     }
//     return fact;
// }
// let number = factorial(10);
// console.log(number);



// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     else{
//         return n * factorial (n-1);
//     }
// }

// const result = factorial(0)
// console.log(result);



// function fibonacci(n) {
//     let fibo = [0, 1, 2]
//     for (let i = 3; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
//     }
//     return fibo;
// }

// var result = fibonacci(10)
// console.log(result);



// function fibonacci(n) {
//     var fibo = [0, 1]
//     let i = 2;
//     while (i <= n) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         // console.log(fibo);
//         i++;
//     }
//     return fibo;
// }
// var result = fibonacci(15)
// console.log(result);


// function fibonacci(n) {
//     if (n == 0) {
//         return [0]
//     }
//      if (n == 1) {
//         return [0, 1]
//     }
//     else{
//        var fibo = fibonacci(n-1);
//        var next = fibo[n-1] + fibo[n-2];
//        fibo.push(next)
//        return fibo;
//     }
// }

// var result = fibonacci(10)
// console.log(result);


// var n = 9;
// for (let i = 2; i < n; i++) {
        
//     var result = n % i;
    
//     if (result == 0) {
//         console.log("this is not a primary number");
//         break;
//     }
//     else{
//         console.log("this is  a primary number");
//         break;
//     }

// }

// function primary(n) {
//     for (let i = 2; i < n; i++) {
//        var result = n % i;

//        if (result == 0) {
//            console.log("this is not prime number");
//            break;
//        }
//        else{
//             console.log("prime number");
//             break;
//        }
        
//     }
// }
// primary(10);

// var factorial = 1;
// for (let i = 1; i < 10; i++) {
//     factorial = factorial * i;
//     console.log(factorial);
    
// }

// function factorial(n) {
//     var fact = 1;
//     for (let i = 1; i < n; i++) {
//         fact = fact * i;
       
        
//     }
//     console.log(fact);
//     // return fact;
// }
// factorial(10);
// // var result = factorial(10);
// // console.log(result);


// var fibonacci = [0, 1];
// for (let i = 2; i < 16; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2]
//     console.log(fibonacci[i]);
// }

//  let fibo = [0, 1]
// let i = 2;
// while (i < 16) {
//     fibo [i]= fibo[i -1] + fibo[i -2]
//     console.log(fibo[i]);
//     i++;
// }


// let factorial = 1;
// for (let i = 2; i < 10; i++) {
//    factorial = factorial * i;

//    console.log(factorial);
    
// }


function leapYear(year) {
    
    return(year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))
}
let years = leapYear(2020);

if (years == true) {
    console.log(" this year is leap year");
}else{
    console.log("this year is not leap year");
}

let year = 2020;
var result = year % 4;
console.log(result);