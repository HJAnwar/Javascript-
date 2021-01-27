const friend = [
    {id: 12, name: 'mahim'},
    {id: 17, name: 'mahim'},
    {id: 13, name: 'mahim'},
    {id: 14, name: 'mahim'},
    {id: 16, name: 'mahim'}
]
const update = [];
for (let i = 0; i < friend.length; i++) {
    const element = friend[i];
    update.push(element.name);
}
var i = 0;
while (i < friend.length) {
    update.push(friend)
    i++;

}


const result = friend.filter(x => x.id > 12);
const result1 = friend.find(x => x.id > 12);
console.log(result1);