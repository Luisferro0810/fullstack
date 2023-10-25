/*
!!!!!!!!!!!!!

FOREACH Y MAP. MÉTODOS EXCLUSIVOS PARA ARREGLOS

METODOS DE UN ARRAY
SOLO SE PUEDEN EJECUTAR EN ARREGLOS, UNA VEZ POR CADA ELEMENTO
DEL ARRAY

PARTIMOS DEL ARRAY CARRITO
*/

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

carrito.forEach(function (producto) {
    console.log(producto, producto.nombre,producto.precio);
})

/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
PASAR A FUNCIÓN DE FLECHA EL FOREACH ANTERIOR
*/
carrito.forEach(producto => console.log(producto,producto.nombre));

/* MAP
ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
PARA MOSTRAR POR PANTALLA
*/

const arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);

/*
THIS
!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO QUE SE LLAME RESERVA
CON PROPIEDADES (NOMBRE, APELLIDO, TOTAL, PAGADO)
Y LE DAIS VALORES

MEDIANTE LA SINTAXIS DE PUNTO MOSTRAR EL NOMBRE
*/

const reserva = {
    nombre : "Luis",
    apellido : "Ferro",
    total: 8000,
    pagado: false
}

console.log (reserva.nombre)

reserva.informacion=function(){
    return (`El cliente ${this.nombre} reservó
y su cantidad a pagar es de ${this.total}€,`
// console.log("El cliente",this.nombre,"tiene que pagar",this.total
)};

console.log(reserva.informacion());

/*EJERCICIO
CREAR UN OBJETO LLAMADO FECHA CON PRPIEDADES,AÑO
MES,DIA,FALTANTES, CON UNA FUNCION EN SU INTERIOR QUE 
ME DIGA CUANTOS DIAS QUEDAN PARA ACABAR EL MES SI 
OCTUBRE TIENE 31 DIAS*/

const FECHA={
    año : 2023,
    Mes : 10,
    dia : 24,
    diasFaltantes:function(){
        return (`faltan ${31-this.dia} dias para terminar el mes`);
    }
}
console.log(FECHA.diasFaltantes())
