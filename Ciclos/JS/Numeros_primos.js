

 let number = parseInt(prompt("Ingrese un número entero positivo: "))
 let primo = true

 for(i=2;i<number;i++){
      if(number % i == 0){
          primo = false    
      }
 }
if(primo){
      console.log(number + " es un numero primo")
}else{
      console.log(number + " no es un numero primo")
}





