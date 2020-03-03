//let ws = new WeakSet([1,2,3]);
let ws1 = new WeakSet([{name:"tony"},{name:100}]);
let wm = new WeakMap();
console.log(ws1);
console.log(wm);
//console.log(ws);
console.log(ws1.valueOf());
console.log(ws1.delete([{"name"}]));

