/* As maçãs custam R$ 0,30 cada se forem compradas menos do que 12, e R$ 0,25 se forem compradas 12 ou mais.
 Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra */

 user = require("readline-sync");

 var numero = user.questionInt("Quantas maçãs foram compradas?: ")
 
 if(numero <= 11){
     console.log(numero * 0.30);
 }else{
     console.log(numero * 0.25);
 }