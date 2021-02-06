// var num = [12, 13, 14, 15];
// var sum = ''
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     //console.log(element);
//      element + sum;
//     console.log(sum);

// }

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// //console.log(array1);
// console.log(array1.reduce(reducer));
add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
 
var arr = [3, 6, 1, 5, 8];
 
var sum = add(arr);
console.log(sum)