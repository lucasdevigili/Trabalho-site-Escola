//Mecanismo para os teste funcionarem 
let turmas = document.querySelector("#turmasCadastradas")
let p = [1, 2, 3, 4]





























//Criando a função para o botão
document.querySelector(".botao1").addEventListener("click", () => {


    if (p.length >= 5) {
        alert("Não é possível cadastrar mais turmas")
    } else {
            document.querySelector("#id01").hidden = false
            document.querySelector("form").style.cssText = "display: flex; justify-content:center; align-items: center;"  
    }
})

//Criando função para o Pop-up desaparecer
document.querySelector("#botaoDesaparecer").addEventListener("click", () => {    
    document.querySelector("#id01").hidden = true 
    document.querySelector("form").style.cssText = ""
})

//Escrevendo os inputs
var digitado = ""

document.querySelector(".salvarTurma").addEventListener("click", () => {
    digitado = document.querySelector(".numeroTurma").value;
    document.getElementById("aqui").innerHTML = digitado;
})

//Validando os anos 
let turma01 = document.querySelector(".um")
let turma02 = document.querySelector(".dois")
let turma03 = document.querySelector(".tres")
let turma04 = document.querySelector(".quatro")
let turma05 = document.querySelector(".cinco")

function addTurma() {
    Document.querySelector("salvarTurma").addEventListener("click")
    if (turma01 = "") {
        document.querySelector(".um").innerHTML = "1º ano 01"
    } else if (turma02 = "") {
        document.querySelector(".dois").innerHTML = "1º ano 02"
    } else if (turma03 = "") {
        document.querySelector(".tres").innerHTML = "1º ano 03"
    } else if (turma04 = "") {
        document.querySelector(".quatro").innerHTML = "1º ano 04"
    } else {
        document.querySelector(".cinco").innerHTML = "1º ano 05"
    }
}





