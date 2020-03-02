let mp1 = new Map();
let mp2 = new Map([
    ['a','american'],
    ['c','china'],
    ['j','japanese']
]);

console.log(mp1);
console.log(mp2);

console.log(mp2.values());
console.log(mp2.keys());

for (let [k,v] of mp2.entries()){
    console.log(k,v);
}
console.log(mp2.has('c'));
console.log(mp2.get('c'));
mp2.set('d','djano');
console.log(mp2.size);
console.log(mp2.get('d'));

mp2.forEach((k,v)=>{
    console.log(k,v);
});

mp2.delete('c');
console.log(mp2);
mp2.clear();
console.log(mp2);