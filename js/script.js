/*const arr=[1,2,3,4,5,6,7,8,9,10]
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

function rev(word){
    [...word].reverse().join("")
}
let wd="JavaScript is Fun"
let array=wd.split(' ')
for(let i=0;i<array.length;i++)
console.log(array)

function analyze(){

const arr=document.getElementById("Input").value.trim()
console.log("Array:"+arr)
console.log(arr.split(" "))

const charCount=arr.length
console.log("Character count:"+charCount)

const wordCount=arr.split(" ").length
console.log("Word Count:"+wordCount) 

const noSpcae=charCount - (wordCount - 1)
console.log("No Space:"+noSpcae)

const sentenceCount=arr.match(/[.!?]/g)
console.log("Sentence Count: "+sentenceCount.length)

const uniqueWords=[...new Set(arr.split(" "))].length
console.log("Unique Words:"+uniqueWords)

const freq={}
arr.split(" ").map((word)=>{
    freq[word]=(freq[word]||0)+1
})
for(let x in freq){
    console.log(x+" : "+freq[x])
}
}

let result=document.getElementById("text")
function handlebox(){
    let para=document.getElementById("analyze").value
    let wordCount =para.split(" ").length
    let charCount =para.split("").length

    result.innerHTML=`<h1> Total Word Count: ${wordCount}</h1>
                     <h1> Total Character Count: ${charCount}</h1>`
}

document.addEventListener("keyup",handlebox)*/



let arr=[];
function addTask(event)
{
    event.preventDefault();
    document.getElementById("res").innerHTML="";
    const task = document.getElementById("taskInput").value
    arr.push(task);
    arr.map((val,index)=>{
        document.getElementById("res").innerHTML+= "<li>"+ val +  "<button class='delete-Btn'>Delete</button></li>";
    })
    document.getElementById("taskInput").value="";
}
document.getElementById("res").addEventListener('click',(e)=>{
    e.target.classList.add("strike")
    console.log(e.target)
})






