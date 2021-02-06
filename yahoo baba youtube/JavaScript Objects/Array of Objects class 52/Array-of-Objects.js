var nam =[
    {
        name:'anu',
        age: '12',
        hi: 5.3
    },
    {
        name:'anuerf',
        age: '12',
        hi: 5.3
    },
    {
        name:'anuwae',
        age: '12',
        hi: 5.3
    },
    {
        name:'anama',
        age: '12',
        hi: 5.3
    }

];

 nam.map( id => {
    console.log(id.age);
});

nam.forEach( id => {
    console.log(id.age);
});

for (let i = 0; i < nam.length; i++) {
    const element = nam[i];
    console.log(element.name);
}
//console.log(result);
