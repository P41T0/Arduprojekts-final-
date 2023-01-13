let i=11;
function reduirSegons(){
    if (i==1){
    document.querySelector("span").innerHTML=i+" segon";
    }
    else{
        document.querySelector("span").innerHTML=i+" segons"
    }
    i=i-1
    if(i==-1){
        window.location.href="index.html"
    }
    
}

window.onload=function(){
    setInterval(reduirSegons,1000);
}