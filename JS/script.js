const image=document.querySelector(".carousel img")
const arrimg=["https://blog.dookinternational.com/images/post-media/GleKq1736932680.jpg","https://blog.dookinternational.com/images/post-media/GleKq1736932680.jpg","https://i.natgeofe.com/k/54b5e731-f8d6-4a93-92e0-b7b137cac411/france-champs-elysees-paris.jpg","https://travelfrancebucketlist.com/wp-content/uploads/2019/05/Carcassonne-France-1024x683.jpg","https://travelfrancebucketlist.com/wp-content/uploads/2019/05/Carcassonne-France-1024x683.jpg","https://www.orfonline.org/public/uploads/posts/image/65a5414a8a121.png"]
let imgind=0
function next(){
    if(arrimg.length-1>imgind)
    imgind++;
    else
    imgind=0;
    image.src=arrimg[imgind]
}

function prev(){
    if(0<imgind)
        imgind--;
    else
    imgind=arrimg.length-1
    image.src=arrimg[imgind]
}
document.querySelector(".btn button").addEventListener("click",prev)