//every method ar sob gulo value true hoy taile function return kore true . ar ta nah hole false. ai method function kaj koreh.   
var age = [12, 13, 14, 15, 16];
var result = age.every(display);
function display(ages){
    return ages >= 11;
}
if (result == true) {
    console.log('this condition is true');
}else{
    console.log('not true');
}
console.log(result);

