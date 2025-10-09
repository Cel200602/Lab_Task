function info(){
    const result=document.getElementById("users")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if(!response){
            throw new Error("NETWORK DOWN")
        }
        return response.json()
    }).then((data)=>{
       data.map((value)=>{
        result.innerHTML+= `<li><span class="highlight">${value.username}</span> - ${value.email} - ${value.address.city}</li>`
       })
    }).catch((err)=>{
        throw new Error("PLEASE CHECK YOUR CONNECTION")
    })
}