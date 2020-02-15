var num=10;
var flag=true;
if (flag){
    var num=100;
}
console.log(num);
var func = [];
for(var j=0;j<10;j++){
    func[j] = function () {
        console.log(j);
    }
}

func[0]();