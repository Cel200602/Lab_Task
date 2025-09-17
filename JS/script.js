let secs=0;
let mins=0;
let interval;

function start(){
    if(!interval){
   interval= setInterval(function(){
    ++secs;
    if(secs==60){
        ++mins;
        secs=0;
    }
    if(mins==60){
        mins=0;
    }
    document.querySelector("#timer").innerHTML=`${mins}`.padStart(2,"0")+":"+`${secs}`.padStart(2,"0");
},1000)
    }
    
}

function stop(){
    
}

function reset(){
    
}