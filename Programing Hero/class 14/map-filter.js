//map here start
const num = [2, 3, 4, 5, 6, 7, 6,];
//const update = [];
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     const result = element * element;
//     update.push(result);
// }


// const update = num.map(function (element, x  ,array) {
//     //return element * element
//     console.log(element);
// });
 
//console.log(update);


const result = num.filter(function(element){
    return element < 2;
}) 

console.log(result);