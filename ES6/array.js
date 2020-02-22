let users={
    "0":"jack",
    "1":"lucy",
    "2":"tom",
    length:3
}

let arr=Array.from(users);
console.log(arr);

console.log(Array.from("guiyang"));

function test()
{
    console.log(Array.from(arguments));
}
test(1,2,3,4,5);

console.log(Array.from("beijing",x=>x.toUpperCase()));

console.log(Array.from("guiyang",function () {
    return this.name;
},{"name":"贵阳"}));

console.log(new Array(10));
console.log(Array.of(10));

let arr2=["lucy","tom","jack"];
console.log(arr2.entries());

for (let [k,v] of arr2.entries()){
    console.log(k,v);
}

for (let k of arr2.keys()){
    console.log(k);
}

for(let k of arr2.values()){
    console.log(k);
}
console.log("**********************");
console.log(arr2.find(x=>x.length==3));

console.log(arr2.findIndex(x=>x.length==3));
console.log(arr2.findIndex(x=>x=="jack"));

let arr3=[1,2,3,4,5,6];
console.log(arr3.copyWithin(1,3,6));

let arr5=[0,0,0,0,0];
console.log(arr5.fill(2,200,5));
console.log(arr5);