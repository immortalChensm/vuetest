//模板字面量
//多行字符串
let info = `
hello,i am test,from china
u can teach me how to speak chinese`;

console.log(info);

//点位符
const name="test";
let say=`hi,${name}`;
console.log(say);

//占位符处理
const name1="shanghai";
let info1=`hello,${name1+"?"}`;

console.log(info1);

function hello()
{
    const name1="beijing";
    let info1=`hello,${name1+"?"}`;
    return info1;
}
console.log(hello());