let fn1 = function () {
    console.log("1");
};

fn1();
//箭头函数
let fn2=()=>{
    console.log("2");
};

fn2();

let fn3=num=>num*10;
console.log(fn3(10));

//let fn4=()=>({name:"jack"});
let fn4=()=>{return {name:"tom"}};
console.log(fn4());
//箭头函数的this是最近外层的对象
let info={
    name:'lucy',
    getName:function () {
        //return function () {
            //console.log(this===global.user.name);
            //console.log(this.info);
        // }
            return ()=>{
                console.log(this.name);
                console.log(this);
            };
        //}
    }
};

info.getName()();

console.log([1,2,3,4].filter((y)=>y%2==0));