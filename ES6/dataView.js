let ab = new ArrayBuffer(16);

let dv = new DataView(ab);

console.log(dv);
let tb = new Int16Array(ab,2);
console.log(tb);

dv.setInt8(0,100);
dv.setInt16(1,"日本");
dv.setUint8(2,"中国");
console.log(dv);

console.log(dv.getInt8(0));
console.log(dv.getInt16(1));
console.log(dv.getUint8(2));