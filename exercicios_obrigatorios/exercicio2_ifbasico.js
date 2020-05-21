/*Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, 
escrevendo na tela “PAR” ou “ÍMPAR*/

user = require("readline-sync");

var numero = user.questionInt("Escreva um numero: ");

if(numero % 2 == 0){
    console.log("par");
}else{
    console.log("impar");
}