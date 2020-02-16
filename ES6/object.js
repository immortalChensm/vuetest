//对象字面量
let name="chen";
let address="guiyang";

let user = {
    name,
    address,
    getProfile(){
        return `hi,i am ${name},from ${address}.`;
    }
};
console.log(user);
console.log(user.getProfile());

let city="city";
let info = {
    [city]:"baba"
};
console.log(info);
console.log(info.city);