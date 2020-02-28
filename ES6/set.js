let set1 = new Set();
let set2 = new Set([100,200,300,200]);

console.log(set1);
console.log(set2);
let set3 = new Set("chinese");
console.log(set3);
console.log(set3.values());
console.log(set3.size);

set1.add("a").add("b").add("c").add(NaN).add(null).add(undefined);
console.log(set1.values());

console.log(set1.has("a"));
if (set1.has("a")){
    console.log(set1.delete("a"));
} else{
    set1.add("a");
}
console.log(set1);
console.log(set1.has(NaN),set1.has(null),set1.has(undefined));

console.log("***********555***************");
console.log(set1.keys());
console.log(set1.entries());
console.log(set1.values());

//set1.clear();
//console.log(set1);

set1.forEach(x=>{
   console.log(x);
});

let set5 = new Set();
set5.add("1").add("1").add({}).add({}).add(NaN).add(NaN);
for (let [k,v] of set5.entries()){
    console.log(k,v);
}

let arr = [...set5];
console.log(arr);
let arr1 = [1,2,3,1,2,3];
let arr2 = [...new Set(arr1)];
console.log(arr2);

