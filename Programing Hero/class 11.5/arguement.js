function you(hello) {
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName + " " + element;
    }
    return fullName;
}

const  name= you('hello', 'hi', 'how');
console.log(name);