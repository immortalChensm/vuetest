
class Person{

    constructor(name){
        console.log("person class"+name);
    }
    speaking(){
        console.log("speaking\n");
    }

    doing(){
        console.log("doing\n");
    }

    t(){
        this.test();
    }

}
Person.num=100;
Person['kk']=()=>{
    console.log("kk");
}
class Teacher extends Person
{
    constructor(name){
        console.log("teacher class\n");
        //console.log(this);
        super(name);
        console.log(this);

        super.speaking();
    }
    gg(){
       // this.getInfo();
        this.doing();
    }

    test(){
        console.log("teacher test\n");
    }
}

$teacher = new Teacher("huahua");
//$teacher.t();
//$teacher.gg();
// $teacher.speaking();
// $teacher['name'] = "jack";
// $teacher.age=100;
// $teacher['getInfo']=()=>{
//     return "hi,i am english teacher\n";
// };


//console.log($teacher.age);
// console.log($teacher.num);
// console.log(Teacher.num);
// console.log($teacher.gg());
// function echo(str,...value) {
//     console.log(value);
// }
class network{};

$network = new network();
$network['onMessage'] = function () {
  return "data";
};
$network['onClose'] = function () {
    return "close";
};

echo `${$network.onMessage()}`;

