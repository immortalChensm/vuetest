let nums=[1,2,3,4,5,6];
for(var i in nums){
    console.log(typeof i);
    console.log(nums[i]);
}

nums.forEach(function (value) {
    console.log(value);
})
console.log("*****************************\n");
for(let n of nums){
    console.log(n);
}