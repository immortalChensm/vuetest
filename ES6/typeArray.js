let ab1 = new ArrayBuffer(16);//16个字节的内存数组
let tb1 = new Int8Array(ab1);//1个字节 =8bit 能在座16个元素  每个元素的最小值为-127~128

let tb2 = new Int16Array(ab1);//2个字节  总能存放8个元素  每个元素占2个字节

tb1[0]=100;
tb1[1]=200;//结果是-56 -128+(200-127)-1=-56
tb1[2]=-120;
tb1[3]=201;

console.log(tb1);
console.log(tb2);

let tb3 = new Int8Array(ab1,1,2);
console.log(tb3);

let tb5 = new Int8Array([100,102,103]);
console.log(tb5);

for(let x of tb5){
    console.log(x);
}

//占用的字节数
console.log(Int32Array.BYTES_PER_ELEMENT);

console.log(tb5.buffer,tb5.byteLength,tb5.byteOffset);

let tb6 = new Int8Array(16);
tb6.set([1,2,3,4,5],3);
console.log(tb6.buffer,tb6.byteOffset,tb6.byteLength,tb6.length);
for(let y of tb6){
    console.log(y);
}

let tb7 = tb6.subarray(3);
console.log(tb7);

let tb8 = new Int8Array(ab1,0,2);//基于16个字节的ArrayBuffer 从0开始设置2个字节
let tb9 = new Int16Array(ab1,2,3);//从2开始设置4个字节
let tb10 = new Float64Array(ab1,8,1);//8个字节
tb8[0]=10;//1个字节
tb8[1]=20;//1


tb9[0]=30;//2个字节
tb9[1]=40;//2
tb9[2]=50;//2


console.log(tb8,tb9);