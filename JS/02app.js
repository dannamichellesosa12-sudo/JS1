var numero1=document.querySelector("#numeroA");
var numero2=document.querySelector("#numeroB");
var operacion=document.querySelector("#operacion");

var calcular=()=>{
    var valor1=parseFloat(numero1.value);
    var valor2=parseFloat(numero2.value);
    document.querySelector("#valorNumeroA").innerHTML="NÚMERO " + valor1;
    document.querySelector("#valorNumeroB").innerHTML="NÚMERO " + valor2;
    document.querySelector("#resultado");
    var op=operacion.value;
    if(op=="suma")
        resultado.innerHTML=valor1+valor2; 
    if(op=="resta")
        resultado.innerHTML=valor1-valor2;
    if(op=="multiplica")
        resultado.innerHTML=valor1*valor2;
    if(op=="divide")
        resultado.innerHTML=valor1/valor2;
    if(op=="modulo")
        resultado.innerHTML=valor1%valor2;
    if(op=="potencia")
        resultado.innerHTML=valor1**valor2;
}

numero1.oninput=()=>{calcular();}
numero2.oninput=()=>{calcular();}
operacion.onchange=()=>{calcular();}