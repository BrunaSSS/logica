/* Escreva um programa para ler 3 valores inteiros (considere que  não serão lidos valores iguais) 
e escrevê-los em ordem crescente */

var n1, n2, n3, user;

user = require("readline-sync")
n1 = user.questionInt("Digite o primeiro valor ")
n2 = user.questionInt("Digite o segundo valor ")
n3 = user.questionInt("Digite o terceiro valor ")

var array = [n1,n2,n3];

console.log(array.sort());