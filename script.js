//VARIABLES 

let texto = document.getElementById("texto");
let boton = document.getElementById("boton");
boton.addEventListener("click",resultado);
var checa = document.getElementById('cb');
var reload = document.getElementById("reload");
reload.addEventListener("click",recargar);
let escribir = document.getElementById("mostrarTexto");
let annos = document.getElementById("annos");
let escribirPuntos = document.getElementById("puntosProduccion");
let escribirMovilidad = document.getElementById("puntosMovilidad");
let escribirBruto = document.getElementById("sueldoBruto");
let escribirNeto = document.getElementById("sueldoNeto");
let movilidad = 17.24;
let premiogas = 2864;
let mensaje = "FUNCA";

//FUNCIONES
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
function calucoSueldo(){
    
let basico = 132912;
console.log(basico)
let produccion = 60.91;
let puntosProduccion = comprobar() * produccion;
console.log("Producción: " + puntosProduccion);
let antiguedad = (basico * .005) * annos.value;
console.log("antigüedad " + antiguedad);
let puntosMovildad = resultadoMovilidad()
console.log("Moviilidad: " + puntosMovildad)

let sueldoBruto = basico + puntosProduccion + antiguedad;
console.log("Bruto: " + sueldoBruto);
let noRemunerativos = puntosMovildad + premiogas;
console.log("No remunerativos: " + noRemunerativos)
escribirBruto.innerHTML = ("Sueldo bruto: " + sueldoBruto);
escribirPuntos.innerHTML = ("Puntos de producción: " + puntosProduccion)
let descuentos = sueldoBruto * .18;  
console.log("Descuentos: " + descuentos);
let sueldoNeto = (sueldoBruto - descuentos) + noRemunerativos;  
sueldoNeto = sueldoNeto.toFixed(2);
escribirNeto.innerHTML = ("Sueldo neto: " + sueldoNeto);

if(sueldoBruto >= 225000){
    document.getElementById("advertencia").style.color = "white";
}else{
    document.getElementById("advertencia").style.color = "black";
}
  

escribe("Sueldo neto: " + sueldoNeto)
}

// Para la jubilación es un 11%, para la obra social un 3% y el descuento INSSJP es otro descuento del 3%. La cuota sindical, no obligatoria, ronda entre el 2 y el 3%
