// var num=10;
// if (true){
//     let num2=100;
// }
// console.log(num);
// //console.log(num2);
//块级作用域
// var func = [];
// for(let j=0;j<10;j++){
//     func[j] = function () {
//         console.log(j);
//     }
// }
// func[0]();
//
// //变量提升
// console.log(num3);
// var num3=20;
//
// console.log(num4);
// let num4=10;
//
//不能重复声明
let num1=10;
//if (true){
    let num1=100;
//}
console.log(num1);

//let特性 重复提升块级
/**
 * 不能重复声明
 * 用于声明块级作用域
 * 不存在变量提升
 * 不会自动增加到全局变量Global/window对象中
 **/