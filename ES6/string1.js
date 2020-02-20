let name="jackma";

console.log(name.startsWith("ja"));
console.log(name.startsWith("km",3));

console.log(name.endsWith("ma"));
console.log(name.endsWith("ma",6));

console.log(name.includes("ma"));
console.log(name.includes("ac",1));

console.log(name.repeat(5));

console.log(String.raw `hello\nchina`);

let reg=/abc/gi;
console.log(reg);
console.log(reg.flags);

let reg1 = new RegExp(reg,"i");
console.log(reg1.flags);