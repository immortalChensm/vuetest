export let b=200;

class User{
    getInfo(){
        return "i am a teacher";
    }

    getName(){
        return "i am a name";
    }
}

let user = new User();
export function baba() {
    return user;
}

export function test() {
    console.log(123);
}

// export default {
//     show(){
//         return "show function";
//     }
// }