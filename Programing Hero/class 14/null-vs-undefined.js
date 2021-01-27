const student = [
    {id:12, name:'anwar'},
    {id:13, name:'anwar'},
    {id:15, name:'anwar'},
    {id:17, name:'anwar'}
];
const update = []
const names = student.map( x => x.name )
update.push(names)
console.log(update);

// const num = [12, 13, 14, 15, 16];
// const y = num.map(x => x );
// console.log(y);