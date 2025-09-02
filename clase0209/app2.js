/*function random(min,max){
    const num = Math.floor(Math.random()*(max-min+1))+min;
    return num;
}
console.log(random(1,10));*/

let min = parseInt("Ingrese el numero minimo: ")
let max = parseInt("Ingrese el numero minimo: ")
const num = Math.floor(Math.random()*(max-min+1))+min;

alert(num)