
function copiarCodi() {

    var copiar = document.getElementById("codi").textContent;
    navigator.clipboard.writeText(copiar)
        .then(function () {
            alert("El codi s'ha copiat correctament al portaretalls");
        })
        .catch(function (error) {
            alert("El codi no s'ha pogut copiar al portaretalls. Aquest és l'error: " + error);
        })

}
function canviarImatge() {
    imatge = document.getElementById("imgPrincipal");
    paragraf = document.getElementById("paragrafImg");
    if (imatge.className == "muntatge") {
        imatge.src = "IMG_20221101_210225.jpg";
        paragraf.textContent = "Esquema del muntatge del robot";
        imatge.className = "esquema";
    } else if (imatge.className == "esquema") {
        imatge.src = "IMG_20221106_121301.jpg";
        paragraf.textContent = "Muntatge del robot";
        imatge.className = "muntatge";
    }
}
function mostrarElem() {
    materials = document.querySelector("h3");
    if (materials.className == "visible") {
        materials.nextElementSibling.style.display = "none";
        materials.className = "no-visible"
    } else if (materials.className == "no-visible") {
        materials.nextElementSibling.style.display = "block";
        materials.className = "visible";
    }
}
function mostrarCodi() {
    codiProjecte = document.querySelector("div#codi>p");
    if (codiProjecte.className == "codi-ocult") {
        codiProjecte.className = "codi-visible";

    } else {
        codiProjecte.className = "codi-ocult";
    }

}
window.onload = function () {
    document.getElementById("boto-codi").onclick = copiarCodi;
    document.getElementById("divImgPrinc").onclick = canviarImatge;
    document.getElementById("codi").onclick = mostrarCodi;
    document.querySelector("div#divElems").onclick = mostrarElem;
    let data = new Date();
    let diaAvui = data.getDate();
    let elements = document.querySelectorAll(".spanSoftware")
    for (let i = 0; i < elements.length; i++) {
        data.setDate((-i + diaAvui));
        let dia = data.getDate();
        let mes = data.getMonth();
        mes = mes + 1;
        let any = data.getFullYear();
        if (dia < 10) {
            dia = '0' + dia;
        }
        if (mes < 10) {
            mes = '0' + mes;
        }
        let dataStr = dia + "/" + mes + "/" + any;
        elements[i].innerText = dataStr;
        data = new Date();

    }

    data = new Date();
    mesActual = data.getMonth();
    diaAvui = data.getDate();
    let elementsAside = document.querySelectorAll(".spanHardware");
    for (let j = elementsAside.length - 1; j >= 0; j--) {
        data.setMonth(-1 + mesActual);
        data.setDate((-j + diaAvui + 10));
        let dia = data.getDate();
        let mes = data.getMonth();
        mes++;
        let any = data.getFullYear();
        if (dia < 10) {
            dia = '0' + dia;
        }
        if (mes < 10) {
            mes = '0' + mes;
        }
        let dataStrAside = dia + "/" + mes + "/" + any;
        elementsAside[j].innerText = dataStrAside;
        data = new Date();
    }
    document.addEventListener(
        "keydown",
        (evt) => {
            let imatge = document.getElementById("imgPrincipal");
            let paragraf = document.getElementById("paragrafImg");

            if (evt.key == "ArrowLeft") {
                imatge.src = "IMG_20221101_210225.jpg";
                paragraf.textContent = "Esquema del muntatge del robot";
                imatge.className = "esquema";
            } else if (evt.key == "ArrowRight") {
                imatge.src = "IMG_20221106_121301.jpg";
                paragraf.textContent = "Muntatge del robot";
                imatge.className = "muntatge";
            }
        }
    )
}