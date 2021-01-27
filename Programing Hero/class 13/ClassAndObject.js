class student{
    name = 'anwar';
}

const student1 = new student();
const student2 = new student()
console.log(student1, student2);


class mother{
    constructor(){
        this.motherName = 'Mohitona';
    }
}

class father{
    constructor(){
        this.fatherName = 'Humalan';
    }
}

class child extends father{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(name2){
    return this.name + ' ' + name2;
    }
}

const baby1 = new child('Mahiya');
console.log( baby1.fullName('amirana'));

class friend{
    constructor(name, age, address){
        this.name = name;
        this.age =age;
        this.address = address;
        this.pop = 'my good friend... yaa....';
    }
}

const ff1 = new friend('lamia', 18, 'malikaj aljd a');
console.log(ff1.age);
const ff2 = new friend('lami', 18, 'malikaj aljd a');
console.log(ff2.name);