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
let movilidad = 22.61;
let premiogas = 4059;
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
    
let basico = 174310;
console.log(basico)
let produccion = 79.88;
let puntosProduccion = comprobar() * produccion;
console.log("Producción: " + puntosProduccion);
let antiguedad = (basico * .005) * annos.value;
console.log("antigüedad " + antiguedad);
let puntosMovildad = resultadoMovilidad()
console.log("Moviilidad: " + puntosMovildad)

let noRemunerativos = puntosMovildad + premiogas;
let sueldoBruto1 = basico + puntosProduccion + antiguedad + noRemunerativos;
let sueldoBruto = basico + puntosProduccion + antiguedad;

console.log("Bruto: " + sueldoBruto1);
console.log("No remunerativos: " + noRemunerativos)
escribirBruto.innerHTML = ("Sueldo bruto: " + sueldoBruto1);
escribirPuntos.innerHTML = ("Puntos de producción: " + puntosProduccion)
let descuentos = sueldoBruto * .18;  
console.log("Descuentos: " + descuentos);
let sueldoNeto = (sueldoBruto - descuentos) + noRemunerativos;  
sueldoNeto = sueldoNeto.toFixed(2);
escribirNeto.innerHTML = ("Sueldo neto: " + sueldoNeto);

if(sueldoBruto1 >= 330000){
    document.getElementById("advertencia").style.color = "white";
}else{
    document.getElementById("advertencia").style.color = "black";
}
  

escribe("Sueldo neto: " + sueldoNeto)
}

// Para la jubilación es un 11%, para la obra social un 3% y el descuento INSSJP es otro descuento del 3%. La cuota sindical, no obligatoria, ronda entre el 2 y el 3%


const url = new URL("https://calcularsueldo.com.ar/ganancias.html");
const id = url.searchParams.get("sueldobruto2");
id.value = "3000";