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







