/*
let nome = prompt("Digite seu nome:");
let salario = Number(prompt("Digite o valor do salario:"));
let aumento = Number(prompt("Digite a porcentagem de aumento:(APENAS NUMEROS)"));
let bonus = (salario * aumento) / 100;
let salarioTotal = salario + bonus;
alert(`Olá, ${nome}\n Seu novo salario será R$${salarioTotal}`);
*/
/*
let nome = prompt("Digite o Nome do Contribuinte:");
let salario = Number(prompt("Digite o Valor do Salário:"));
let descontoValetransporte = 0.07;
let desconto = (salario * descontoValetransporte);
let planoDeSaude = 0.03;
let descontoDeSaude = (salario * planoDeSaude);
let salarioTotal = salario - desconto - descontoDeSaude;
alert(`Olá, ${nome}\n Seu salário total retirando os descontos de transporte e saúde será R$${salarioTotal}`);
*/

let entrada =prompt("Digite o seu salário: ");
let salario = entrada.trim().replace("," , ".");

let desconto_transporte = salario * 0.06;
let desconto_saude = salario * 0.03;
salario -= (desconto_transporte + desconto_saude);            //let salarioFinal = salario - (desconto_transporte + desconto_saude);
alert(`Salário bruto: R$${entrada}
\nDesconto do Vale Transporte: R$${desconto_transporte.toFixed(2).replace(".",",")}
\nDesconto do Plano de Saúde: R$${desconto_saude.toFixed(2).replace(".", ",")} 
\nSalário após desconto do Vale Transporte e Plano de Saúde:
\nR$${salario.toFixed(2).replace(".", ",")}`);






//Construa uma página/programa onde o usuário digitará dois números e o programa 
//exibirá na tela, ou por meio de um alert, o menor dos números digitados.
/*
let num1 = prompt("Digite um numero:");
let num2 = prompt("Digite um numero:");

if (num1 > num2){
    alert(num1);
} else{
    alert(num2)
};*/