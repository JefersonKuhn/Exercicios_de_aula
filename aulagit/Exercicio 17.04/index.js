/*1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
    seguido pela resposta (`true` ou `false`)
    
    d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)*/

let idade  = prompt("Digite sua idade")
let idadeAmigo  = prompt("Digite a idade de seu amigo")
const mensagem = "Sua idade é"
//resultado = idade === idadeAmigo
//alert(resultado)

resultado = idade !== idadeAmigo
alert(`A idade do amigo é diferenteS? ${resultado}`)

resultado = idade >= idadeAmigo
alert(`A idade é maior? ${resultado}`)

resultado = idadeAmigo < idade
alert(`Idade do amigo é menor? ${resultado}`)

diferençaidade = idade - idadeAmigo
alert(`diferença de idade é ${diferençaidade}`)