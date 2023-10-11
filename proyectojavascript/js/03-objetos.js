

let producto = {
    nombreProducto: "Reloj",
    precio: 65,
    disponible: true
}

console.log("MI PRIMER OBJETO producto: ", producto);
console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`, producto);

/*

   ESTRUCTURA DE UN OBJETO

   let/var/const NombreDelObjeto = {
       propiedad o llave del objeto : valor,
       mas propiedades : valor,
       .
       .
       .
   }


   SINTAXIS DE PUNTO
   PARA ACCEDER A LAS PROPIEDADES DEL OBJETO

   */

console.log("USO DE SINTAXIS DE PUNTO producto.precio:", producto.precio);

console.log(`USO DE SINTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);
// console.log("USO DE SINTAXIS DE PUNTO, producto.precio: ",producto.precio);

//OTRA FORMA DE ACCEDER A LAS PROPIEDADES DE UN OBJETO, SE USA MENOS

console.log("USO DE CORCHETES", producto["precio"]);

/* 
MODIFICAR OBJETOS

UNA CARACTERISTICAS QUE TIENEN LOS OBJETOS ES QUE PODEMOS A
AGREGAR, QUITAR Y MODIFICAR INFORMACIÓN DE ELLOS

VAMOS AÑADIR UNA PROPIEDAD NUEVA AL OBJETO producto
QUE YA TENEMOS CREADO
*/

producto.categoria = "joyería";

console.log("AÑADIR CATEGORIA a producto: ", producto);

// PARA ELIMINAR PROPIEDADES USAMOS delete
// VAMOS A BORRAR LA PROPIEDAD DISPONIBLE

delete producto.disponible;

console.log("BORRAMOS DISPONIBLE a producto: ", producto);

// MODIFICAR. LLAMAMOS A LA PROPIEDAD Y ASIGNAMOS NUEVO VALOR

producto.precio = 500;

console.log("MODIFICAMOS PRECIO a producto: ", producto);



const precioProducto = producto.precio;

console.log("CREAMOS VARIABLE A PARTIR DE LA PROPIEDAD PRECIO de producto: ", precioProducto);

// ESTAMOS ACCEDIENDO A LA PROPIEDAD PRECIO DEL PRODUCTO Y ALMACENANDO EL VALOR
// EN UNA VARIABLE NUEVA precioProducto


/*
!!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
ALMACENAR EN UNA VARIABLE nombreProducto EL VALOR DE LA
PROPIEDAD nombreProducto DEL OBJETO producto

PUEDES LLAMAR IGUAL LA VARIABLE Y LA PROPIEDAD, NO PASA NADA
PUES SON DOS COSAS TOTALMENTE DISTINTAS*/



// DESTRUCTURING DE OBJETOS
// SACAR DE UNA ESTRUCTURA

// CREAMOS LA VARIABLE Y EXTRAE EL VALOR
// TODO EN UN SOLO PASO

//     CREA LA VARIABLE
//     EXTRAE EL VALOR
//     LA VARIABLE LA LLAMA IGUAL QUE LA PROPIEDAD
// */

// DESTRUCTURING AL PRECIO


//const {disponible} = producto;
//COMENTAR PREVIAMENTE NOMBREPRODUCTO
const { disponible, precio, nombreProducto } = producto;//USO DE LLAVES, EN EL INTERIOR DE LA PROPIEDAD
// console.log("CREAMOS VARIABLE precio CON DESTRUCTURING:",precio);
console.log(`CREAMOS VARIABLE disponible CON DESTRUCTURING: ${disponible}`);



/*
    !!!!!!!!!!!!!!!!!!!!!
    EJERCICIO
    CREAR UN OBJETO QUE SE LLAME playa
    CON LAS SIGUIENTES PROPIEDADES:
    - nombre
    - ubicacion
    - recomendable (boolean)
    - temperaturaAgua (numero)
    HACER DESTRUCTURING A LAS PROPIEDADES Y MOSTRAR LA INFO POR CONSOLA*/

let playa = {
    nombre: "Varadero",
    ubicacion: "Cuba",
    recomendable: true,
    temperaturaAgua: 30
}

const { nombre, ubicacion, recomendable, temperaturaAgua } = playa;
console.log(`En la playa: ${nombre} que esta en:${ubicacion} el agua esta a: ${temperaturaAgua}.Te la recomiendo. ${recomendable} `);

playa.tipoArena = "arenaLimpia"
let tipoArena = playa.tipoArena
console.log(`En la playa: ${nombre} que esta en:${ubicacion} el agua esta a: ${temperaturaAgua} tipo de arena ${tipoArena}.Te la recomiendo. ${recomendable} `);


// Object.freeze(producto);

// INTENTAMOS AÑADIR UNA PROPIEDAD NUEVA. CONGELADO

//producto.congelado = "intentamos congelarlo";

console.log("INTENTO AÑADIR UNA PROPIEDAD TRAS EL FREEZE", producto);


// Object.freeze(producto); // NO ME PERMITIRÁ MODIFICAR EL OBJETO

/*
NO APARECE NINGUN ERROR, PUES JAVASCRIPT SE ESTÁ EJECUTANDO
EN UN MODO "RELAJADO", PARA QUE SEA MÁS ESTRICTO, AÑADIMOS...
EN LA PARTE SUPERIOR DEL ARCHIVO
"use strict";

COMO SABEMOS SI UN OBJETO ESTÁ CONGELADO?
HACEMOS USO DE UN MÉTODO PARA OBJETOS

*/
console.log("ESTA CONGELADO??", Object.isFrozen(producto)); //TRUE SI ESTÁ CONGELADO
/*
FREEZE NO ME PERMITE NI AÑADIR, NI QUITAR NI MODIFICAR PROPIEDADES
producto.disponible = false; //NO ME MODIFICARÁ EL VALOR DE LA PROPIEDAD,
PUES ESTÁ CONGELADO CON FREEZE

CON EL METODO Object.freeze
    NO PODEMOS AÑADIR PROPIEDADES
    NO PODEMOS BORRAR PROPIEDADES
    NO PODEMOS MODIFICAR PROPIEDADES

CON EL MÉTODO Object.Seal
    NO PODEMOS AÑADIR PROPIEDADES
    NO PODEMOS BORRAR PROPIEDADES
    SI PODEMOS MODIFICAR PROPIEDADES */

let medidas = {
    peso: 70,
    alto: 1.90,
    ancho: 60,
    profundidad: 1 / 4
};


medidas.profundidad = 1;

console.log("MOSTRAMOS COMO SE PUEDE MODIFICAR CON SEAL", medidas)

/*



COMO UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR

EL FIN ES NO MODIFICAR LOS OBJETOS ORIGINALES


*/
let nuevoProducto = {...producto,...medidas};
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);

/*
const nuevoProducto = {...producto, ...medidas}; //ME AÑADE 
// A UN NUEVO OBJETO LLAMADO nuevoProducto TODAS LAS PROPIEDADES DE
// LOS OBJETOS, productos y medidas
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);


CREAMOS EL 04-arrays.js Y COMENTAMOS EL 03-objetos.js
*/

