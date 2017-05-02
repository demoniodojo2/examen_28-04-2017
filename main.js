/* EXAMEN DE JAVASCRIPT 28 DE ABRIL DE 2017 */
// EJERCICIO 1
/*
alert("Ejercicio 1");

// Creamos las variables donde guardamos la base y la altura y le pedimos al usuario
// con prompt que introduzca su varlor. Utilizamos parseInt para indicar que son dos números enteros
var base = parseInt(prompt("Introduzca la base: "));
var altura = parseInt(prompt("Introduzca la altura: "));

// Comprobamos que ambos valores sean mayores que 0
if ((base > 0) && (altura > 0)) {
    // Calculamos la superficie y la mostramos por medio de un document.write y H1
    document.write("<h1>Superficie: "+(base*altura/2)+"</h1>");
}
else {
    // En caso de error se lo indicamos al usuario
    alert("La base y la altura deben ser números positivos");
}
*/

// EJERCICIO 2
/*
alert("Ejercicio 2");

var iterador=100;

while (iterador <= 500) {
    if ((iterador % 2 == 0)&&(iterador % 3 == 0))
        document.write(iterador+" ");
    iterador++;
}
*/
// EJERCICIO 3
/*
alert("Ejercicio 3");

var numeros=new Array(100);

for(i = 0; i < numeros.length; i++) {
    numeros[i]=Math.floor(Math.random()*15+15);
}

for(i=0; i < numeros.length; i++) {
    document.write(numeros[i]+" ");
}
document.write("<br>");

var posicion1 = parseInt(prompt("Introduzca la posición 1: "));
var posicion2 = parseInt(prompt("Introduzca la posición 2: "));

var aux = numeros[posicion1];
numeros[posicion1] = numeros[posicion2];
numeros[posicion2] = aux;

for(i=0; i < numeros.length; i++) {
    if (i==posicion1 || i==posicion2) {
        document.write("<b>"+numeros[i]+"</b> ");
    }
    else
        document.write(numeros[i]+" ");
}

*/