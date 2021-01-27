function Closure() {
    let count = 0;
    return function() {
        count = count + 1;
        return count;
    } 
}

const result = Closure();
console.log(result());