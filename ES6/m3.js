export let name="ba";

export function show() {
    console.log(123);
}

export class User{
    show(){
        console.log("show");
    }
}

export let user ={
  name:"jack",
  print:function () {
      console.log(this.name);
  }
};
let a1="1";
let a2=2;
export {a1,a2 as a3};