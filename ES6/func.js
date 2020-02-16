//函数参数
function test(num1,num2=0){
    console.log(num1,num2);
}

test `100,200`;
test(17);

function func(n,...nums){
    for(let i of nums){
        console.log(i);
    }
    console.log(this.length);
}
//不定参数
func();
func(100,200,600);

let citys=[
    {name:'jack',age:100},
    {name:'lucy',age:200}
];

function info({name,age}){
    return `hi,i am ${name},am ${age} years old`;
}

for(let {name,age} of citys){
    console.log(info({name,age}));
}