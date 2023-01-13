window.onload = function () {
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
}