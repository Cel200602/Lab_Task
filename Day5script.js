
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


