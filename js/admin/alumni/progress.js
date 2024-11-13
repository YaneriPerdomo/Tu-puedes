window.onload = function () {
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth() + 1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if (dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10)
        mes = '0' + mes //agrega cero si el menor de 10
    document.getElementById('fechaActual').value = ano + "-" + mes + "-" + dia;
}


const progresscircle = document.getElementById("progressTiempo");
console.log(progresscircle);
let $tiempo = document.getElementById("tiempo");
let cantidad = 0;
let cantidad2 = 630;

let tiempo = setInterval(() => {
    cantidad += 1;
    let valores = Math.ceil((cantidad2 -= 6.3));

    progresscircle.style.strokeDashoffset = `${valores}`;
    if (cantidad >= 30) {
    console.log("30")
    clearInterval(tiempo);
    }
}, 500);
 