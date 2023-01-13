function enviarComent(){
    var comentari=document.getElementById("comenta").value;
    comentari=comentari.trim();
    if (comentari.length==0){
        alert("No heu escrit cap comentari. Si us plau, escriviu un comentari abans de polsar el botó d'enviar");
        document.getElementById("comenta").value="";
    } else{
        let llistaMesos=["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"];
        let llistaDiesSet=["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"];
        let data=new Date();
        let minuts=data.getMinutes();
        let hores=data.getHours();
        let diaSet=data.getDay();
        let dies=data.getDate();
        let mes=data.getMonth();
        let anys=data.getFullYear();
        if (minuts<10){
            minuts="0"+minuts;
        }
        if (hores<10){
            hores="0"+hores;
        }if (dies<10){
            dies="0"+dies;
        }
        alert("Hem rebut el vostre comentari, enviat el "+llistaDiesSet[diaSet]+", dia "+dies+" de "+llistaMesos[mes]+" de "+anys+" a les "+hores+":"+minuts+" hores. El vostre comentari és:\n'"+comentari+"'\nTindrem el vostre comentari en consideració per a poder seguir millorant aquesta pàgina web.");
        document.getElementById("comenta").value="";
    }
}

window.onload=()=>{
var comentar=document.getElementById("comenta");
var Pcaracters=document.getElementById("caracRestants")

var limitCaract=600;
Pcaracters.innerText="Teniu "+limitCaract+" caràcters disponibles restants";
var caractersRestants=0;    
addEventListener("input",function(){
    if(comentar.value.length>=limitCaract){comentar.value=comentar.value.substring(0,limitCaract);
        Pcaracters.innerHTML="Has arribat al limit de caràcters!"
    }
    else{
        caractersRestants=limitCaract-comentar.value.length;
        if (caractersRestants==1){
            Pcaracters.innerHTML="Teniu "+caractersRestants+" caràcter disponible restant";
        }else{
            Pcaracters.innerHTML="Teniu "+caractersRestants+" caràcters disponibles restants";
        }
    }
})
    document.getElementById("enviar").onclick=()=>{
        enviarComent();
        Pcaracters.innerHTML="Tens "+limitCaract+" caràcters disponibles restants";
    };
    
}