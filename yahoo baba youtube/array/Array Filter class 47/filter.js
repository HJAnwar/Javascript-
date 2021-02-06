var number = [12, 13, 14, 45, 56, 778];
var result = number.filter(dis);
function dis(num) {
    return num > 13;
}
console.log(result);
