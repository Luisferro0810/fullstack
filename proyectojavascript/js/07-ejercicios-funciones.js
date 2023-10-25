/*
*******************
    COMIENZO CLASE 2023/10/23
*******************


/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


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


función que invierta una cadena.
F: INVERTIR
P: CADENA*/

 
  

/*función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2*/

function Concatenar(cadena1,cadena2){
console.log(`concatenando 2 cadenas:~${cadena1+cadena2}`);
}
Concatenar("Nombre","Apellidos")


function CONCATENAR(cadena1, cadena2) {//esto es un ejemplo
    return cadena1 + cadena2;
}


const resultado = CONCATENAR("Hola ", "Mundo");  //esto es otro ejemplo
console.log(resultado); // Esto imprimirá "Hola Mundo"

console.log(CONCATENAR("HOLA ","MUNDO"))


/*función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA*/ 

function CONTIENE(cadena, letra) { //esto es un ejemplo
    return cadena.includes(letra);
}

let contieneLetra = CONTIENE("Ejemplo de cadena", "a");
console.log(contieneLetra); // Esto imprimirá "true"

function contiene(cadena, letra) { //esto es otro ejemplo
    console.log(`¿La cadena "${cadena}" contiene la letra "${letra}"?: ${cadena.includes(letra)}`);
}

contiene("Ejemplo de cadena", "a");


/*función que encuentre el número más grande en un array.          PARAMETROOSSSSSSSSSSSSS//////
F: MAXNUM
P: ARRAY*/

function MAXNUM(array) {
    if (array.length === 0) {
        return null; // Retorna null si el array está vacío
    }

    let max = array[0]; // Suponemos que el primer elemento es el máximo

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

// Ejemplo de uso
const numeros = [10, 5, 8, 20, 3];
const maximo = MAXNUM(numeros);
console.log(`El número más grande en el array es: ${maximo}`);


let arrayNUM=[1000,20,430,40,true,false,true,false]
function MAXNUM(arrayNUM){

    return Math.max(...arrayNUM);

}

let resultadoMAXNUM=MAXNUM(arrayNUM)
console.log(resultadoMAXNUM)


/*función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY*/

function MINNUM(array){
 return Math.min(...arrayNUM)
}
let resultadoMINNUM=MINNUM(arrayNUM)
console.log(resultadoMINNUM)


/*función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR*/

function NUMBOOLEANOS(ARRAY, VALOR){
    return arrayNUM.filter(Boolean).length;
}
let resultadoNUMBOOLEANOS=NUMBOOLEANOS(arrayNUM)
console.log(resultadoNUMBOOLEANOS)

/*función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY


función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2


función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA


función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS


función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS


función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO


función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO


función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY


función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY


función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO


función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES


función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA


función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2

*/