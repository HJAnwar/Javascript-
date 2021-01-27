//how to work internet

const user = {
    name: "anwar",
    age: 19,
    study: "inter",
    address: "old dhaka",
    from: "laxmipur",
    friend: {
        name: 'nayeem',
        age: 19,
        from: 'laxmipur',
    },
    gf:"nothing",
    friendAge:[12, 13, 14, 34]
} 

const hello = JSON.stringify(user);
const you = JSON.parse(hello);
console.log(you);