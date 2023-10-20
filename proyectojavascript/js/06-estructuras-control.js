/*!!!!!!!!!!!!!!!!!
REPASO DÍA ANTERIOR

    // FUNCIONES QUE RETORNAN VALORES

    function multiplicar(n1, n2) {
        return n1 * n2; // ME RETORNA UN VALOR
    }
    let valorRetornado = multiplicar(2, 5);
    console.log("EL VALOR RETORNADO ES:", valorRetornado);

    // MÉTODOS DE PROPIEDAD

    // SON FUNCIONES CON LA SINTAXIS DE MÉTODO
    // VAMOS A CREAR UN REPRODUCTOR MUSICAL
    // SON OBJETOS CUYAS PROPIEDADES SON FUNCIONES

    //ARROW FUNCTION
    //PASOS
    /*
        PARTIENDO DE LA DECLARACIÓN DE LA FUNCIÓN:

        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HYA QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO

        let triplicarFlecha = (numero=1) => console.log("VALOR DE TRIPLICAR CON ARROW FUNCTION",numero*numero*numero);

        triplicarFlecha(12);  

        MÉTODOS DE PROPIEDAD*/

//         FIN DEL REPASO
// !!!!!!!!!!!!!!!! 

// CREAMOS EL ARCHIVO 06-estructuras-control.js 
// Y LO ENLAZAMOS EN NUESTRO HTML


/* ESTRUCTURAS DE CONTROL

    RETIRADA DE DINERO
    PRIMERO: EL CAJERO COMPRUEBA QUE EL PIN ESTÁ OK
    DESPUES ME DA LAS OPCIONES: SELECCIONO RETIRAR
    A CONTINUACIÓN EL CAJERO COMPRUEBA QUE TENGO SALDO SUFICIENTE

    QUE SON TODO ESTOS? CONDICIONES

    COMPARADORES/CONDICIONALES

    IF
    SWITCH

    EMPEZAREMOS CON EL IF() ES DECIR, SI SE CUMPLE ()

*/

const numeroJM = 900; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE

if (numeroJM === 1000) { // DOS/TRES IGUALES ES UNA COMPARACIÓN
    console.log("numeroJM es 1000")
}
else {    // SI NO SE CUMPLE EL IF, EJECUTA EL ELSE
    console.log("numeroJM NO es 1000")
}


/* TIPOS DE COMPARADORES

    == IGUAL
    === EXACTAMENTE IGUAL. TIENE EN CUENTA EL TIPO DE DATO Y EL VALOR
    !== DIFERENTE
    <= MENOR IGUAL
    >= MAYOR IGUAL
    < MENOR ESTRICTO
    > MAYOR ESTRICTO



!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN ES CORRECTO*/

const numeroPin = 2201;

if (numeroPin ===2202){
    console.log("numeroPin es 2202")
}
else {
    console.log("numeroPin NO es 2202")
}

/*EJERCICIO
CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI PUEDO RETIRAR EL DINERO


EJERCICIO COMPLETO DEL CAJERO
CREAR UNA FUNCIÓN QUE RECIBA UN PIN Y CANTIDAD A RETIRAR
COMO ARGUMENTO Y EN EL CUERPO DE LA FUNCIÓN
UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN DE MI TARJETA
ES CORRECTO Y SI PUEDO SACAR LA CANTIDAD

VARIABLES:
pin correcto es 1234;
saldo en cuenta es de 49;

LA FUNCIÓN RECIBIRÁ COMO ARGUMENTOS pin, cantidadRetirar
*/

function cajero(pin, cantidadRetirar) {
    if (pin === 1234) {
        console.log("Pin Correcto")
        if (cantidadRetirar <= 49) {
            console.log("Retirando Dinero");
        }
        else {
            console.log("Saldo Insuficiente")
        }
    }
    else {
        console.log("Pin Correcto")
    }
}

cajero(1234, 51);

//USO DE ELSE IF, PARA HACER MÚLTIPLES COMPARACIONES

const rol = "Editor"; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE

if (rol === "Administrador") { // DOS IGUALES ES UNA COMPARACIÓN
    console.log("Acceso a todo el sistema")
} else if (rol === "Editor") {    // SI NO SE CUMPLE EL IF, PERO SE CUMPLE EL ELSE IF
    console.log("Solo puedes editar, pero no crear")
} else { // SI NO SE CUMPLE NADA DE LO ANTERIOR
    console.log("No tienes acceso")
}


// Ejemplo de *IF*(si se cumple) y linea de condigo adicional con *ELSE* si no se cumple-------------:

let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ejemplo de *switch*

// let expresión
// switch (expresión) {
//     case valor1:
//       // código a ejecutar si la expresión coincide con valor1
//       break;
//     case valor2:
//       // código a ejecutar si la expresión coincide con valor2
//       break;
//     // ... más casos ...
//     default:
//       // código a ejecutar si ninguno de los casos coincide
//   }

//   Uso:

// switch es útil cuando se necesita comparar una expresión con múltiples valores diferentes y ejecutar diferentes bloques de código en función de cuál de los valores coincida.
// Comparación estricta:

// switch utiliza comparación estricta (===) para comparar la expresión con los casos. Esto significa que no se convierten automáticamente los tipos.
// Break:

// Después de que se ejecuta un caso, es importante usar break para evitar la ejecución de los casos siguientes.
// Default:

// El caso default se ejecutará si ninguno de los casos coincide.

let dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Es lunes.");
    break;
  case "Martes":
    console.log("Es martes.");
    break;
  // ...
  default:
    console.log("No es un día válido.");
}

// Consideraciones:
// if es más flexible y se puede utilizar para cualquier tipo de condición,
//  mientras que switch es más adecuado para comparaciones de igualdad entre múltiples valores.
// if puede evaluar condiciones complejas y combinar múltiples condiciones usando operadores lógicos.
//  switch compara valores de igualdad.
// switch es útil cuando se tiene una serie de opciones discretas y bien definidas.
// En resumen, la elección entre if y switch depende del contexto y de lo que estés tratando de lograr.
//  Cada uno tiene su lugar y se debe elegir en función de los requisitos
//   específicos del programa o la aplicación que estés desarrollando.----------------------------------------------------------




//EJERCICIO****************************
// CREAR UNA ESTRUCTURA DE CONTROL QUE COMPARE EN QUE ESTACIÓN DEL AÑO ESTAMOS
// Y ME DIGA CUAL ES LA SIGUIENTE. PRIMAVERA-VERANO-OTOÑO-INVIERNO

 
// let estacionActual;

// switch (mes) {
//   case 11:
//   case 0:
//   case 1:
//     estacionActual = "Invierno";
//     break;
//   case 2:
//   case 3:
//   case 4:
//     estacionActual = "Primavera";
//     break;
//   case 5:
//   case 6:
//   case 7:
//     estacionActual = "Verano";
//     break;
//   case 8:
//   case 9:
//   case 10:
//     estacionActual = "Otoño";
//     break;
// }

// let siguienteEstacion;

// switch (estacionActual) {
//   case "Invierno":
//     siguienteEstacion = "Primavera";
//     break;
//   case "Primavera":
//     siguienteEstacion = "Verano";
//     break;
//   case "Verano":
//     siguienteEstacion = "Otoño";
//     break;
//   case "Otoño":
//     siguienteEstacion = "Invierno";
//     break;
// }
// console.log(`Estamos en ${estacionActual} y la siguiente estación es ${siguienteEstacion}.`);

// USO DE SWITCH, PARA HACER MÚLTIPLIES COMPARACIONES
// Y OPTIMIZAR EL USO DE TANTO ELSE IF

/*
FUNCIONAN CON CASE
NECESITA UN BREAK PARA FINALIZAR CADA CASE
DEFAULT ME MUESTRA EL CASO POR DEFECTO

*/

const metodoPago = "Tarjeta";

switch (metodoPago) {
    case "Tarjeta": console.log("Pagaste con tarjeta"); //CASO 1
        break; //CIERRE CASO 1
    case "En Mano": console.log("Pagaste en mano");
        break;
    case "Bizum": console.log("Pagaste con bizum");
        break;
    default: console.log("Pendiente de pago"); //SI NO SE CUMPLE NADA DE LO ANTERIOR
        break; // TAMBIEN NECESITA UN BREAK EL DEFAULT
}

/*
!!!!!!!!!!!!!
EJERCICIO3
CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
UN NÚMERO AL MULTIPLICARLO POR SI MISMO ES MENOR
QUE 100. SI ES MENOR QUE 200, Y SI NO CUMPLE LAS
ANTERIORES
 */

let numeroCreado = 8;
if(numeroCreado * numeroCreado < 100) {
    console.log("el resultado es menor que 100");
} else if (numeroCreado * numeroCreado < 200 && numeroCreado * numeroCreado >=100){
    console.log.apply("el resultado es mayor que 200");
} else {
    console.log("el resultado es >= 200");
}

/*
!!!!!!!!!!!!
EJERCICIO4
CREAR UNA ESTRUCTURA DE CONTROL CON SWITCH QUE ME COMPARE SI
UN NÚMERO + 10 ES:
=9
=12
=15
=100
RESTO DE POSIBILIDADES
 */

const numero2 = 5 + 10;
switch (numero2) {
    case 9: console.log("ES IGUAL A 9");
        break;
    case 12: console.log("ES IGUAL A 12");
        break;
    case 15: console.log("ES IGUAL A 15");
        break;
    case 100: console.log("ES IGUAL A 100");
        break;
    default: console.log("RESTO DE POSIBILIDADES");
        break;
}

/*
 
 
*************
ITERADORES/BUCLES
FOR
WHILE
DO WHILE


FOR LOOP (BUCLE FOR) ITERADOR
VA A ESTAR EJECUTANDO EL CODIGO HASTA QUE SE DEJE DE
CUMPLIR UNA CONDICIÓN
 
*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// IRÁ EJECUTANDO EL CÓDIGO SIEMPRE QUE SE CUMPLE LA CONDICION

for (let i = 0; i <= 3; i++) {
    //i === ÍNDICE, SUELE EMPEZAR POR 0, PUES SE USA MUCHO PARA
    //RECORRER ARREGLOS
    //i<=3 SERÁ LA CONDICIÓN. SE EJECUTA MIENTRAS SE CUMPLE
    //i++ ACTUALIZADOR
    console.log(i);

}

// EJERCICIO, MOSTRAR DEL 100 AL 200 POR PANTALLA
for (let i = 100; i <= 200; i++) {  
    console.log(`El numero ${i} está entre el 100 y el 200`);
} // :) 

for (let indexIndice = 2; indexIndice <= 49; indexIndice+=2){
    console.log(`mostando los numeros pares del 2 al 49: ${indexIndice}`);
}

// PODEMOS USAR LOS COMPARADORES YA VISTOS, ===,<=,>=,<,>!==

// /*
// !!!!!!!!!!!!!!!!
// EJERCICIO5 
// MOSTRAR EN ORDEN DESCENDENTE DEL 100 HASTA EL 0, PERO
// DE 5 EN 5
// INCLUIDOS AMBOS
// */

for (let i = 100; i >= 0; i -= 5) {
    console.log("De 100 a 0 de 5 en 5:", i)
};

for (let indexIndice = 100; indexIndice <=0; indexIndice -=5){
    console.log(`mostrando por consola los numeros de 100 a 0 de 5 en 5: ${indexIndice}`)
}

/*
!!!!!!!!!!!!!!!
EJERCICIO6
MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
INCLUIDOS AMBOS
NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR
*/

for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0) {
        console.log("numero pares desde 1", k)
    }
}

for (let indexIndice = 1; indexIndice <=20; indexIndice ++){
    if(indexIndice %2===0){
        console.log(`numero pares desde 1 a 20:${indexIndice}`)
    }
   
}

// for (let t = 1; t<=20, t%2===0; t++ ){
//     console.log("numeros pares t",t)
// }
/*
COPIAMOS EL ARRAY DE OBJETOS carrito
*/
  
let arrayNumeros=[1,2,3,4,5,6,7,8,9];
for(indexIndice= 0; indexIndice<arrayNumeros.length; indexIndice++){
console.log(`buscando en el array con metodo length:${arrayNumeros[indexIndice]}`)
}

let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

/* VAMOS A RECORRER ESE CARRITO DE COMPRAS
EN QUE POSICION INICIA UN ARRAY??
MOSTRAR LOS OBJETOS DE UNO EN UNO

*/

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}

/* 
********************
WHILE LOOP. ITERADOR
MUY SIMILAR AL FOR, SINTAXIS UN POCO DIFERENTE
SE EJECUTA MIENTRAS UNA CONDICION SEA EVALUADA COMO
VERDADERA
*/

let i = 0;
// EL INDICE VA FUERA
// LA CONDICION SI VA DENTRO
// EL INCREMENTO VA EN EL CUERPO DE LA FUNCION

while (i < 10) {
    console.log(i);
    i++; // ACTUALIZADOR
}

// SI MODIFICAMOS EL ÍNDICE Y LE DAMOS UN VALOR INICIAL DE 20
// QUE SUCEDE???
// ESA ES JUSTO LA DIFERENCIA CON EL DO WHILE, QUE AL MENOS EJECUTA 
// UNA VEZ



// **********************
// DO WHILE
/*


*/

let j = 20;

do {
    console.log(j);
    j++;
} while (j < 10);

// EJECUTA EL CODIGO AL MENOS UNA VEZ Y DESPUES EVALUA

/*

for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)



*/
// USO DE PROMPT, ME PIDE POR PANTALLA INFORMACIÓN Y LA VOY
// ALMACENAR EN LA VARIABLE

// const nombreApellido = prompt("Escriba su nombre","Escriba aqui");
// console.log(nombreApellido)


/*
!!!!!!!!!!!!!!!
EJERCICIO8
MOSTRAR LOS NUMEROS PARES, PERO HACERLO AHORA CON WHILE
MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
INCLUIDOS AMBOS
NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR
*/

let k = 1;
while (k <= 20) {
    if (k % 2 === 0) {
        console.log(k)
    }
    k++;
}

/*
!!!!!!!!!!!!!!
EJERCICIO9
CREAR UNA FUNCION QUE DADO UN ARGUMENTO ME DIGA SI
* ES POSITIVO
* ES NEGATIVO
* ES =0
*/
  
function ejercicio9(n1) {
    if (n1 < 0) {
        console.log("El número es negativo:", n1)
    } else if (n1 > 0) {
        console.log("El número es positivo:", n1)
    } else {
        console.log("El número es 0:", n1)
    }
}
ejercicio9(13);
ejercicio9(-34535435);
ejercicio9(0)

/*
!!!!!!!!!!!!!
EJERCICIO10
CREAR UNA FUNCIÓN que se llame "regresion"QUE DADO UN ARGUMENTO, (NUMERO ENTERO)
ME DE UNA CUENTA ATRÁS DE LOS NÚMEROS
*/

function ejercicio10(y){
    for (let i=y; i>=10;i--){
        console.log(`mostrando funcion:${i}`);
    }
}
ejercicio10(13)

/*
!!!!!!!!!!!!!
EJERCICIO11
CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO DE ENTRADA N, ME
DE LA SUMA DE TODOS LOS NUMEROS ENTRE 0 Y N
*/
let totalAcumulacion=0;
function acumulacion(n){
    for(let i=n;i>=0;i--){
        totalAcumulacion=totalAcumulacion+i; 
    }
        console.log(totalAcumulacion);
}
acumulacion(16)





