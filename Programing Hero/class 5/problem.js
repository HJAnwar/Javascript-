//feet to mile solution

// function feetToMile(feet) {
//     var mile = feet * 0.000189394;
    
//     return mile;;
// }
// var result = feetToMile(5250);
// console.log(result);


// wood Calculator

// function woodCalculator(chair, table, baed) {
//     var chairWood = chair * 1;
//     var tableWood = table * 3;
//     var baedWood = baed * 5;
//     return(chairWood + tableWood + baedWood);
    
// }
// var result = woodCalculator(2, 3, 4);
// console.log("you needs ",result, " cubic feet wood" );

// 1 to 10 = 15 feet * 1000;
// 11 to 20 = 12 feet * 1000;
// 21 to any = 10 fee * 1000;




function smallName(names) {
    var small = names[0];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (element > small) {
            small = element;
        }
    }
    return small;
}

var smalls = ["anu", "fahi", "liton", "hasdlafj"];
var result = smallName(smalls);
console.log(result);