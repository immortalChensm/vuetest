let arr=new ArrayBuffer(10);
console.log(arr.byteLength);

let a1=arr.slice(2,6);
console.log(a1.byteLength);

console.log(arr);

let ta1=new Int8Array(5);
console.log(ArrayBuffer.isView(ta1));