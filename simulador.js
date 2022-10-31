

//VARIABLES 
let aumento = document.getElementById("textoPorcentaje");

let base = document.getElementById("base");
let produ = document.getElementById("produ");
let movi = document.getElementById("movi");

let porciento = aumento.value;

let texto = document.getElementById("texto");

let boton = document.getElementById("boton");
boton.addEventListener("click",resultadoValidado);

var checa = document.getElementById('cb');

var reload = document.getElementById("reload");
reload.addEventListener("click",recargar);

botonsimular = document.getElementById("simular");
botonsimular.addEventListener("click",simule);

function simule(){
if((aumento.value == "")||(aumento.value <= 0)){
    alert("Ingresa un número mayor que 0")
}else{
    simulado()
}
}


function simulado(){
    numero1 = parseFloat(base.textContent);
    numero2 = parseFloat(aumento.value);
    valor = numero1 + ((numero1 * numero2)/100)
    base.textContent = valor.toFixed(2);
    basico = valor;

    numero1 = parseFloat(produ.textContent);
    numero2 = parseFloat(aumento.value);
    valor = numero1 + ((numero1 * numero2)/100)
    produ.textContent = valor.toFixed(2);
    produccion = valor

    numero1 = parseFloat(movi.textContent);
    numero2 = parseFloat(aumento.value);
    valor = numero1 + ((numero1 * numero2)/100)
    movi.textContent = valor.toFixed(2);
    movilidad = valor;




}


let escribir = document.getElementById("mostrarTexto");
let annos = document.getElementById("annos");
let escribirPuntos = document.getElementById("puntosProduccion");
let escribirMovilidad = document.getElementById("puntosMovilidad");
let escribirBruto = document.getElementById("sueldoBruto");
let escribirNeto = document.getElementById("sueldoNeto");

let movilidad = 22.61 
let premiogas = 4059;


//FUNCIONES



function resultadoValidado(){
    if (aumento.value == ""){
        alert("Completa el porcentaje!");
    }else{
        resultado()
    }
    
    
}
function resultado(){
    calucoSueldo()

}
function resultadoMovilidad(){
   
   if (checa.checked == true){
    valor = texto.value * movilidad;
    escribirMovilidad.innerHTML = ("Puntos de Movilidad: " + valor.toFixed(2))
    }
    if(checa.checked == false){
    valor = 0;
    }
    return valor
    }


function recargar(){
    location.reload()
}

function escribe(a){
    escribir.innerHTML = a;

}


function comprobar(){
if (texto.value <= 2150){
    producido = 0;
}
if (texto.value > 2150){
    producido = texto.value - 2150;
}
return producido

}

//CALCULO
let basico = 174310;
let produccion = 79.88;
function calucoSueldo(){
    

let puntosProduccion = comprobar() * produccion;
let antiguedad = (basico * .005) * annos.value;
console.log(antiguedad);
let puntosMovildad = resultadoMovilidad()


let noRemunerativos = puntosMovildad + premiogas;
let sueldoBruto1 = basico + puntosProduccion + antiguedad + noRemunerativos;
let sueldoBruto = basico + puntosProduccion + antiguedad;
escribirBruto.innerHTML = ("Sueldo bruto: " + sueldoBruto1.toFixed(2));
escribirPuntos.innerHTML = ("Puntos de producción: " + puntosProduccion.toFixed(2))
let descuentos = sueldoBruto * .18;  
let sueldoNeto = (sueldoBruto - descuentos) + noRemunerativos;  
sueldoNeto = sueldoNeto.toFixed(2);
escribirNeto.innerHTML = ("Sueldo neto: " + sueldoNeto);

if(sueldoBruto1 >= 280792){
    document.getElementById("advertencia").style.color = "red";
}else{
    document.getElementById("advertencia").style.color = "black";
}
  

escribe("Sueldo neto: " + sueldoNeto)
}

// Para la jubilación es un 11%, para la obra social un 3% y el descuento INSSJP es otro descuento del 3%. La cuota sindical, no obligatoria, ronda entre el 2 y el 3%

