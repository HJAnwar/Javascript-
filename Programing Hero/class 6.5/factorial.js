// var factorial = 1;
// for (let i = 1; i < 10; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

//  var factorial =  1;
// var i = 1;
// while (i < 10 ) {
// factorial = factorial * i;
// console.log(factorial);
//  i  = i + 1;
// }



// function factorial(num){
//     var fact  = 1;
//     for (let i  = 2; i  < num; i ++) {
//         fact = fact * i;
//         console.log(fact);        
//     }
// }
// factorial(5)

//5| 5*4*3*2*1;

function factorialRecursion(number) {
    if (number == 1) {
        return 1;
    }
    else{
        return number * factorialRecursion( number - 1);
    }
}
var result =  factorialRecursion(5);
console.log(result);