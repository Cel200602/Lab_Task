const arr=[1,2,3,4,5,6,7,8,9,10]
//forEach
arr.forEach((x)=>{console.log(x)})

//filter
let filt=arr.filter((x)=>x%2==0)
console.log(filt)

//reduce
let sum=arr.reduce((acc,val)=>acc+val)
console.log(sum)

//slice
let sl=arr.slice(3,8)
console.log(spl)

//splice
let spl=arr.splice(3,8)
console.log(spl)
console.log(arr)