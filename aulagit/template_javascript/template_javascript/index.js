/*// recebeu as variáveis
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")

// mensagem: Digite as horas que você trabalha por dia:
let horastrabalho = prompt("Digite as horas que você trabalha pro dia")
let salarioDia = prompt("Digite seu salário diário:")

// Verificando as variáveis 
console.log(typeof nome)
console.log(typeof horastrabalho)
console.log(typeof salarioDia)

//Convertendo o que é necessário 
let horastraNumber = Number(horastrabalho)
let salDiaNumber = Number(salarioDia)

//processando valores
let valHoraNumber = salDiaNumber/horastraNumber

// conversão para não dar erro de Null
let valorHora = string(valHoraNumber)
const mensagem = "seu valor hora e" + valorHora + "!!!"

// verificando variáveis 
console.log (typeof valorHora)
console.log (typeof mensagem)
console.log (mensagem)

// Saída de valores para Front End
alert(mensagem)*/


/*// Declaração de variavel//
let primeironumero
let segundonumero

// Leitura de dados informados pelo usuário//
primeironumero = prompt("Digite o primeiro numero:")
segundonumero = prompt("digite o segundo numero")

// Testes de comparação//
resultado = primeironumero === segundonumero

// Mostrar resultado na tela//
alert(resultado)

//Declaração de diferente//
resultado = primeironumero !== segundonumero
primeironumero = prompt("Primeiro numero é diferenteS?")
alert(resultado) 

// Declaração de maior ou menor//
resultado = primeironumero >= segundonumero
primeironumero = prompt("Primeiro numero é maior?")
alert(resultado)
resultado = primeironumero <= segundonumero
segundonumero = prompt("Segundo numero é menor?")
alert( resultado)*/

/*//Comparadores
let a
let b
let c
let resultado

// Leitura de dados informados pelo usuário//
a = true
b = false
c = true

// Realize operação: a && b //
resultado = a && b
alert(resultado)

// Outras operações//
resultado = b && c
alert(resultado)
resultado = a && c
alert(resultado)
resultado = a && b && c
alert(resultado)

resultado = a || b
alert(resultado)
resultado = b || c
alert(resultado)
resultado = a || c
alert(resultado)
resultado = a || b || c
alert(resultado)*/

// Exercício 5 //
let nome
let anodenascimento
let anoAtual
let idade
let maiordeidade
let idade2050

// Leitura de dados informados//
nome = prompt("Digite seu nome:")
anodenascimento = prompt("Digite ano de nascimento:")
anoAtual = prompt("Digite ano atual:")

//Calcular valores//
idade = anoAtual - anodenascimento
maiordeidade = idade >= 18
idade2050 = 2050 - anodenascimento

// Mensagen na tela//
alert (nome)
alert (idade)
alert (maiordeidade)
alert (idade2050)




