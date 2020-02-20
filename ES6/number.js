//number/math增加
let num1=0b110;
let num2=0B11;
console.log(num1,num2);

let num3=0o34,num4=0O67;

console.log(num3,num4);

console.log(0.1+0.2===0.3);
function equal(x,y){
    return Math.abs(x-y)<Number.EPSILON;
}

console.log(equal(0.1+0.2,0.3));

console.log(Number.isInteger(100));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log("888888888888888888888888888888888888888888888");
console.log(Number.isFinite(100));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(5235235235555555555555555555555555555555555555555555));

console.log("******************88");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));

console.log(Number.MAX_SAFE_INTEGER+100);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Math.sign(1));
console.log(Math.trunc(100.323));
console.log(Math.cbrt(9));

