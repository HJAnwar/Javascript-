
//default function here
function number(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
number(12, 12);

// if you don't enter any value than default function work

function number1(num1, num2) {
    num2 = num2 || 0;
    const result = num1 + num2;
    console.log(result);
}
number1(12)

// or 

function number1(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    const result = num1 + num2;
    console.log(result);
}
number1(12)

// or

function number1(num1, num2 = 0) {
    const result = num1 + num2;
    console.log(result);
}
number1(12)
