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




