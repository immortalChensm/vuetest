class User
{
    constructor(){
        this.names = ['jack','tom','lucy'];
        this.index = 0;
    }

    next(){
        if (this.index===this.names.length){
            return {
                done:true,
                value:undefined
            };
        } else{
            return {
                done:false,
                value:this.names[this.index++]
            }
        }
    }

    return (){
        console.log("return ()");
        return {
            done:true,
            value:1
        }
    }
    break(){
        console.log("break ()");
        return {
            done:true,
            value:2
        }
    }
    [Symbol.iterator](){
        return this;
    }
}

let user = new User();
for (let item of user){
    console.log(item);
    if (item=="tom"){
        break;
    }
}

console.log(...user);
console.log("*********************");
console.log(user.next());