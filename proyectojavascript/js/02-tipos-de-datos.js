const producto1 ="Juego de mesa el PUEBLO DUERME"
const producto2 = String("DOOBLE");
const producto3 =new String("UNO")   // Son objetos, lo veremos

// console.log ("PRODUCTO:)",producto1); // Vamos a añadir el console
// // INDICACIONES DE LO QUE ESTAMOS MOSTRANDO
// console.log ("PRODUCTO2 con STRING:", producto2);
// console.log ("PRODUCTO3 con NEW STRING:", producto3);

// PARA SABER QUE TIPO DE DATO TIENE UNA VARIABLE
console.log ("PRODUCTO:)", typeof producto1);
console.log ("PRODUCTO2 con STRING:", producto2);
console.log ("PRODUCTO3 con NEW STRING:", producto3);

let numero100 = "100";
let numero200 = "200";

console.log ("NUMERO100:",numero100);
console.log ("NUMERO200:",numero200);

console.log ("TIPO DE NUMERO100:",typeof numero100);
console.log ("TIPO DE NUMERO200:",typeof numero200);


/*
METODOS PARA LOS STRINGS

SON FUNCIONES QUE PUEDES UTILIZAR PARA VARIAR EN
FUNCION DEL TIPO DE DATO

*/

console.log("METODO LENGTH:",producto1.length); // ME DICE LA LONGITUD DE LA VARIABLE

// INDEXOF PARA BUSCAR SI UNA PALABRA EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION

console.log("METODO INDEXOF:",producto1.indexOf("DUERME"));

// 0 o POSITIVO SI EXISTE EN LA CADENA DE TEXTO
// -NEGATIVO NO EXISTE

//INCLUDES RETORNA TRUE O FALSE
console.log("METODO INCLUDES:",producto1.includes("DUERME"));

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200"; // tipo string
let numero4 = 2/3;

console.log("TYPEOF NUMERO 1:", typeof numero1);
console.log("TYPEOF NUMERO 2:", typeof numero2);
console.log("TYPEOF NUMERO 3:", typeof numero3);
console.log("TYPEOF NUMERO 4:", typeof numero4);

//COLOR NEGRO SON STRING
//COLOR AZUL TIPO NUMBER

console.log("NUMERO 1 + NUMERO 2:", numero1 + numero2);
console.log("NUMERO 1 - NUMERO 2:", numero1 - numero2);
console.log("NUMERO 1 / NUMERO 2:", numero1 / numero2);
console.log("NUMERO 1 % NUMERO 2:", numero1 % numero2);

let resultado = Math.random(); // metodo Math PARENTESIS VACIO(FUNCIONA PARA GENERAR UN VALOR ALEATORIO)
console.log("USO DE METODO RANDOM():",resultado);

/*
    Math.PI; PARA MOSTRAR EL NUMERO PI
    Math.round(2.5); PARA REDONDEAR
    Math.ceil(2.1); REDONDEA HACIA ARRIBA
    Math.floor(2.9); REDONDEA HACIA ABAJO
    Math.sqrt(144); RAIZ CUADRADA
    Math.pow(x,2); ELEVA AL CUADRADO X
    Math.abs(-200); MUESTRA EL VALOR ABSOLUTO(mismo No. en POSITIVO)
    Math.min(2,3,1,0); ME DA EL VALOR MENOR
    Math.max(2,3,1,0); ME DA EL VALOR MAYOR
    
    COMBINACIONES DE LAS ANTERIORES
    NUMERO ALEATORIO ENTRE 0 Y 30 ENTERO
    Math.floor( Math.random()*30); */

resultado = Math.round(Math.random()*30); // metodo Math round(redondear)+ math random(sirve para crear dados)
console.log("USO DE METODO RANDOM():",resultado);

// EJERCICIO
// CREAR UNA VARIABLE QUE SE LLAME DIAMETRO Y OTRA QUE SE LLAME AREA
// IMPLEMENTAR LA OPERACIÓN MATEMÁTICA QUE ME CALCULA EL AREA EN FUNCIÓN
// DEL DIAMETRO Y MOSTRARLO POR PANTALLA

let diametro = 7;
let radio = diametro / 2;
let area = Math.PI * Math.pow(radio, 2);
console.log("Este es el area a partir del diametro", area);
let areaRedondeo = Math.round(area); 
console.log("Este es el numero redondeado con Mathround", areaRedondeo);    

//!!!!!!!!!!!!!!!!!!!!!!
// EJERCICIO, CREAR UN DADO

dado = Math.round(Math.random()*5+1);
console.log("formula para dados:",dado);

// EXACTAMENTE IGUAL QUE EN LAS REGLAS MATEMÁTICAS
// POR ORDEN DE PRIORIDAD
// ()  PARÉNTESIS
// *,/ MULTIPLICACIONES Y DIVISIONES
// +,- SUMAS Y RESTAS

/*ejercicio*/

let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES",resultadoOrden);

let resultadoOrden2 = (20 + 30) * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES 2",resultadoOrden2);

/*
!!!!!!!!!!!!!!!!!!
EJERCICIO CALCULAR EL DESCUENTO Y EL TOTAL A PAGAR
HAY UNA PROMOCIÓN QUE APLICA EL 40% DE DESCUENTO POR SER BLACK FRIDAY
MOSTRAR POR PANTALLA EL TOTAL A PAGAR Y EL AHORRO
TENGO UN CARRITO DE LA COMPRA CON 3 PRENDAS
PRENDA1 120€
PRENDA2 85€
PRENDA3 24€
DESCUENTO
*/

// let prenda1 = 120;
// let prenda2 = 85;
// let prenda3 = 24;
// let porcentaje = 40 //porcentaje

// let descuento =(prenda1 + prenda2 + prenda3) * porcentaje/100;
// console.log("total descuento",descuento);

// let totalPagar = (prenda1 + prenda2 + prenda3) - descuento;
// console.log("total a pagar",totalPagar);

let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let descuento = 40; //* 40% es lo mismo que 0,4  100% es lo mismo que 1 

let importe = (prenda1+prenda2+prenda3)// 10% es lo mismo que 0,1 // conclusion X% es X/100
console.log("total sin descuento:",importe);

let ahorro = (importe)*40/100  //(prenda1+prenda2+prenda3)*40/100//otra opcion(muchoi codigo)
console.log("total ahorro:",ahorro);

let total =(importe-ahorro);
console.log("total con descuento incluido",total);

/*
INCREMENTOS/DECREMENTOS
EJEMPLO REALES, EL NUMERO DE ME GUSTAS EN INSTAGRAM
*/

let meGusta=0;

//meGusta++; // INCREMENTA EN 1 EL VALOR DE meGusta

console.log("USO DE INCREMENTOS, ME GUSTA:",meGusta+=15);
console.log("TRAS EL INCREMENTO",meGusta)

// SI COLOCO EL INCREMENTO DENTRO DEL CONSOLE.LOG PRIMERO
// ME MUESTRA LA VARIABLE Y DESPUES ME LA INCREMENTA


let meGusta2=0;

// console.log("USO DE INCREMENTOS DENTRO DEL CONSOLE",meGusta2++);
console.log("USO DE INCREMENTOS DENTRO DEL CONSOLE PRIMERO",++meGusta2); //INCREMENTA PRIMERO
console.log("HE LLAMADO DE NUEVO A meGusta2",meGusta2);

//HACIENDO USO DE LA CONCATENACIÓN 
// console.log(nombre + email); SOLUCIONAR EL ESPACIO
// console.log(nombre + " " + email);
// console.log("Nombre: " + nombre + " Email: " + email);
// console.log(nombre,email);

const nombre= "Luis";
let email= "luisferroc10@gmail.com";
console.log(nombre + email); //SOLUCIONAR EL ESPACIO
console.log(nombre + " " + email);
console.log("Nombre: " + nombre + " Email: " + email);
console.log(nombre,email);

// SINTAXIS ANTIGUA, PARA SOLUCIONAR ESTO VEREMOS LOS TEMPLATE STRING
// */

let nombreLuis = "Luis Alejandro";
let emailLuis = "luisferroc10@gmail.com";

console.log("ESTE ES EL NOMBRE:",nombreLuis)
console.log("ESTE ES EL EMAIL:",nombreLuis)
console.log("NOMBRE Y EMAIL CONCATENADOS:", nombreLuis + " " + emailLuis)

// TEMPLATE STRING O STRING LITERALS
// HACE REFERENCIA A MEZCLAR TEXTO CON VARIABLES O FUNCIONES
// ES UN SUSTITUTO DE LA SINTAXIS ANTERIOR
// */


console.log(`Nombre Cliente: ${nombreLuis} Email: ${emailLuis}`); //COMILLAS INVERTIDAS, DERECHA DE LA P

/*LAS VARIABLES VAN ENTRE ${} PUEDE IR UNA FUNCIÓN TAMBIEN
ESTA SINTAXIS SE UTILIZA MUCHO HOY EN DÍA, ES LA QUE UTILIZAREMOS*/


// BOOLEANOS
// SOLO TRABAJAN DOS VALORES 
// CREAR TRES VARIABLES
// BOOLEAN1 VALOR VERDADERO
// BOOLEAN2 VALOR FALSO
// BOOLEAN3 "TRUE"
// */

let boolean1 = true;
let boolean2 = false;
let boolean3 = "true";

console.log("TIPO DATO BOOLEAN1:", typeof boolean1);
console.log("TIPO DATO BOOLEAN2:", typeof boolean2);
console.log("TIPO DATO BOOLEAN3:", typeof boolean3);

let boolean4 = new Boolean(true);
console.log("TIPO DATO BOOLEAN4:", typeof boolean4);

/*
MOSTRARLOS POR PANTALLA
USO REAL: AUTENTICACION DE UN USUARIO, DARLE ACCESO A CIERTAS PARTES DE LA WEB
SI AUTENTICACION ES TRUE, PERMITIR ACCESO, SI NO, DENEGAR
OTRA FORMA DE CREAR BOOLEANOS
const boolean4 = new Boolean(true); POCO UTILIZADA, UTILIZAREMOS LA PRIMERA */
