

var num1 = parseInt(prompt("Digite el primer número entero positivo:"))
var num2 = parseInt(prompt("Digite el segundo número entero positivo: "))
suma = 0

console.log ("los numeros comprendidos entre"+num1+"y"+num2+"es:")
 for (i=num1; i<=num2; i++ ){
        console.log (i)
    }
    for (i=num1; i<=num2; i++ ){
        suma = suma+i
    }
    console.log ("el valor de la suma es:" +suma)