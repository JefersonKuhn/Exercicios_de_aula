// recebeu as variáveis
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
alert(mensagem)
