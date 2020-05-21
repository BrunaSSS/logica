/*Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu)*/

user = require("readline-sync");

var ano = user.questionInt("Informe o ano que nasceu");
var idade = 2020 - ano;

if(idade >= 16){
    console.log("permitido votar");
}else{
    console.log("não permitido votar");
}
