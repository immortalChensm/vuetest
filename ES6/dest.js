//解构赋值
let nums=[1,2,3];
let [num1,num2,num3]=nums;
console.log(num1,num2,num3);

let user={
    name:'chen',
    address:'guiyang'
};

let {name,address}=user;
console.log(name,address);
let {name:n,address:a}=user;
console.log(n,a);


let {sex,age=200}=user;
console.log(sex,age);

let citys=["beijing","shanghai","guiyang"];
for(let [key,value] of citys.entries()){
    console.log(key,value);
}

let users=[
    {"name":"tom",age:100},
    {"name":"lucy",age:2100},
    {"name":"jack",age:14500},
];

for(let {name,age} of users){
    console.log(name,age);
}

let {length:len}="chinese";
console.log(len);

//let {prop:x}=null;
//console.log(x);
//省略
//let {,,x}={a:'a',b:'b',x:'c'};
//console.log(x);
let [,,x] = ["a","b","c","e"];
console.log(x);

//扩展
let [y,...z]="abcdefg";
console.log(y);
console.log(z);
//交换
let d=1,b=2;
[d,b]=[b,d];
console.log(d,b);

//嵌套
let address1=["china",["beijing","shanghai"],"japanese"];
let [country1,[city1,city2],country2]=address1;
console.log(country1,city1,city2,country2);

let account={
    name:"chen",
    detail:{
        remain:100
    }
};
let {name:name1,detail}=account;
console.log(name1,detail);
let {detail:{remain}}=account;
console.log(remain);

let products=[
    {
        name:"服装",
        price:100,
        address:{
            city:"beijing",
            code:100
        }
    },
    {
        name:"电器",
        price:1009,
        address:{
            city:"shanghai",
            code:200
        }
    }
];
//数组，对象，省略，扩展，交换，嵌套
for (let {name:name2,price,address:{city:city3,code}} of products){
    console.log(name2,price,city3,code);
}