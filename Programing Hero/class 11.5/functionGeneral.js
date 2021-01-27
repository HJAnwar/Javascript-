// here local variable

function addTodo1(params) {
    var name = 'james1';
    console.log(name);
}
addTodo1();

//here global Variable

var name = 'james2';
function addTodo2(params) {
    hello = 'hi';
 console.log(name);   
}
addTodo2();

//IIFE = Immediately Invoked Function Expression

(function () {
    var name = 'james3';
    console.log(name);
})();

//Function Expression 

var addTodo4 = function () {
    var hello = 'mama';
    console.log(hello);
}
console.log(addTodo4);
