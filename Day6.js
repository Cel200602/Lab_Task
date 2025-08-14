<body>
    <h2>Word & Character Counter</h2>
    <textarea id="analyze" cols="10" rows="6" placeholder="Type"></textarea><br>
    <p id="text"></p>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
      
  </body>

<script>
let result=document.getElementById("text")
function handlebox(){
    let para=document.getElementById("analyze").value
    let wordCount =para.split(" ").length
    let charCount =para.split("").length

    result.innerHTML=`<h1> Total Word Count: ${wordCount}</h1>
                     <h1> Total Character Count: ${charCount}</h1>`
}

document.addEventListener("keyup",handlebox)
  </script>
