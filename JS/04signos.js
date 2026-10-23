var valorDia = document.getElementById("valorDia");
var dia = document.getElementById("dia");
var mes = document.getElementById("mes");
var signo = document.getElementById("signo");
var fecha = document.getElementById("fecha");
var imgSigno = document.getElementById("imgSigno");

const verSigno = () => {

    let d = parseInt(dia.value);
    let m = mes.value;

    valorDia.innerHTML = "DIA " + d;
    fecha.textContent = d + " de " + m;

    let nombreSigno = "";
    let imagen = "";

    switch(m){

        case "ENERO":
            if(d <= 19){
                nombreSigno = "CAPRICORNIO";
                imagen = "img/10Capricornio.jpeg";
            }else{
                nombreSigno = "ACUARIO";
                imagen = "img/11Acuario.jpeg";
            }
        break;

        case "FEBRERO":
            if(d <= 18){
                nombreSigno = "ACUARIO";
                imagen = "img/11Acuario.jpeg";
            }else{
                nombreSigno = "PISCIS";
                imagen = "img/12Pisis.jpeg";
            }
        break;

        case "MARZO":
            if(d <= 20){
                nombreSigno = "PISCIS";
                imagen = "img/12Pisis.jpeg";
            }else{
                nombreSigno = "ARIES";
                imagen = "img/01Aries.jpeg";
            }
        break;

        case "ABRIL":
            if(d <= 19){
                nombreSigno = "ARIES";
                imagen = "img/01Aries.jpeg";
            }else{
                nombreSigno = "TAURO";
                imagen = "img/02Tauro.jpeg";
            }
        break;

        case "MAYO":
            if(d <= 20){
                nombreSigno = "TAURO";
                imagen = "img/02Tauro.jpeg";
            }else{
                nombreSigno = "GEMINIS";
                imagen = "img/03Geminis.jpeg";
            }
        break;

        case "JUNIO":
            if(d <= 20){
                nombreSigno = "GEMINIS";
                imagen = "img/03Geminis.jpeg";
            }else{
                nombreSigno = "CANCER";
                imagen = "img/04Cancer.jpeg";
            }
        break;

        case "JULIO":
            if(d <= 22){
                nombreSigno = "CANCER";
                imagen = "img/04Cancer.jpeg";
            }else{
                nombreSigno = "LEO";
                imagen = "img/05Leo.jpeg";
            }
        break;

        case "AGOSTO":
            if(d <= 22){
                nombreSigno = "LEO";
                imagen = "img/05Leo.jpeg";
            }else{
                nombreSigno = "VIRGO";
                imagen = "img/06Virgo.jpeg";
            }
        break;

        case "SEPTIEMBRE":
            if(d <= 22){
                nombreSigno = "VIRGO";
                imagen = "img/06Virgo.jpeg";
            }else{
                nombreSigno = "LIBRA";
                imagen = "img/07Libra.jpeg";
            }
        break;

        case "OCTUBRE":
            if(d <= 22){
                nombreSigno = "LIBRA";
                imagen = "img/07Libra.jpeg";
            }else{
                nombreSigno = "ESCORPIO";
                imagen = "img/08Escorpio.jpeg";
            }
        break;

        case "NOVIEMBRE":
            if(d <= 21){
                nombreSigno = "ESCORPIO";
                imagen = "img/08Escorpio.jpeg";
            }else{
                nombreSigno = "SAGITARIO";
                imagen = "img/09Sagitario.jpeg";
            }
        break;

        case "DICIEMBRE":
            if(d <= 21){
                nombreSigno = "SAGITARIO";
                imagen = "img/09Sagitario.jpeg";
            }else{
                nombreSigno = "CAPRICORNIO";
                imagen = "img/10Capricornio.jpeg";
            }
        break;

    }

    signo.textContent = nombreSigno;
    imgSigno.src = imagen;
};

dia.oninput = () => verSigno();
mes.onchange = () => verSigno();

verSigno();