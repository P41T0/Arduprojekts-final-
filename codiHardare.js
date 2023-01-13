var numero = 1;

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

window.onload = function () {
    document.querySelector("div#divElems").onclick = mostrarElem;
    var taula = document.getElementById("fotosUltrasons");
    var imatge = document.getElementById("imgPrinc");
    var caption = document.getElementById("captionImg");
    var lEnllaços = taula.getElementsByTagName("a");
    for (let i = 0; i < lEnllaços.length; i++) {
        enllaçFoto = lEnllaços[i];
        enllaçFoto.onclick = function (event) {
            event.preventDefault();
            imatge.src = this.href;
            caption.innerHTML = this.title;
            numero = i;
        }
    }
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
            let lImatges = document.getElementById("fotosUltrasons");
            var imatgePrincipal = document.getElementById("imgPrinc");
            var paragrafPrinc = document.getElementById("captionImg");
            let enllaços = lImatges.getElementsByTagName("a");

            if (evt.key == "ArrowLeft") {
                if (evt.ctrlKey || evt.metaKey) {
                    numero = 0;
                }
                else {
                    if (numero > 0) {
                        numero = numero - 1;
                    }
                }
            } else if (evt.key == "ArrowRight") {
                if (evt.ctrlKey || evt.metaKey) {
                    numero = enllaços.length - 1;
                } else {
                    if (numero < enllaços.length - 1) {
                        numero = numero + 1;
                    }
                }
            }
            imatgePrincipal.src = enllaços[numero].href;
            paragrafPrinc.innerHTML = enllaços[numero].title;
        }
    )
}