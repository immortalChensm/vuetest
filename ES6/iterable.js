class User
{
    constructor(){
        this.names = ['jack','tom','lucy'];
    }

    [Symbol.iterator](){

        let index=0;
        let names = this.names;
        let iterator = {
            next(){
                if (index===names.length){
                    return {
                        done:true,
                        value:undefined
                    };
                } else{
                    return {
                        done:false,
                        value:names[index++]
                    }
                }
            }
        };
        return iterator;
    }
}

let user = new User();
for (let item of user){
    console.log(item);
}

console.log(...user);
console.log("*********************");
console.log(user.next());