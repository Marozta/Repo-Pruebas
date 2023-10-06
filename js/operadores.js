/*
OPERADOR ARITMETICO

+ SUMA
- RESTA
/ DIVISION
* MULTIPLICACION
*/

/*
let valor1=10; /no es necesario el punto y coma pero es buena politica
let valor2=30;
let resultado1 = valor1 + valor2;
alert(resultado1);
*/

// function sumar() {
//     let valor3=prompt('Ingrese el primer valor'); /* los datos se ingresan como string*/
//     let valor4=prompt('Ingrese el segundo valor'); /* se usan comillas simples*/
//     let resultado2 = Number(valor3) + Number(valor4); /*convierte las strings a numero*/
//     alert(resultado2);
// }

// function restar () {
//     let valor3=prompt('Ingrese el primer valor'); /* los datos se ingresan como string*/
//     let valor4=prompt('Ingrese el segundo valor'); /* se usan comillas simples*/
//     let resultado2 = Number(valor3) - Number(valor4); /*convierte las strings a numero*/
//     console.log(resultado2);
// }

function sumar() {
    let valor1=document.getElementById('valor1').value; /* los datos se ingresan como string*/
    let valor2=document.getElementById('valor2').value; /* se usan comillas simples*/
    let resultado = Number(valor1) + Number(valor2); /*convierte las strings a numero*/
    document.getElementById('res').innerHTML = resultado;
}

