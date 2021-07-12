//Mecanismo para os teste funcionarem 
// let turmas = document.querySelector("#turmasCadastradas")
let p = [1, 2, 3, 4]


// class Turmas {
//     cosnstuctor()
// }


























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

//Validando os anos 
let turma01 = document.querySelector(".um")
let turma02 = document.querySelector(".dois")
let turma03 = document.querySelector(".tres")
let turma04 = document.querySelector(".quatro")
let turma05 = document.querySelector(".cinco")

function addTurma() {
    Document.querySelector("salvarTurma").addEventListener("click", () => {

    })
    if (turma01 ) {
        document.querySelector(".um").innerHTML = "1º ano 01"
    } else if (turma02 ) {
        document.querySelector(".dois").innerHTML = "1º ano 02"
    } else if (turma03 ) {
        document.querySelector(".tres").innerHTML = "1º ano 03"
    } else if (turma04 ) {
        document.querySelector(".quatro").innerHTML = "1º ano 04"
    } else if (turma05 ) {
        document.querySelector(".cinco").innerHTML = "1º ano 05"
    }
}

let turmas = JSON.parse(localStorage.getItem("turmas")) || []

document.querySelector(".salvarTurma").addEventListener("click", () => {
    document.querySelector("#botaoDesaparecer")
    document.querySelector("#id01").hidden = true 
    document.querySelector("form").style.cssText = ""

    // Obtendo os valores do input
    let numeroTurma = +document.querySelector(".numeroTurma").value;
    // document.getElementById("numero").innerHTML = numeroTurma;

    let nomeTurma = document.querySelector(".nomeTurma").value;
    // document.getElementById("nome").innerHTML = nomeTurma;

    let periodoTurma = document.getElementById("form").periodo.value
    // document.getElementById("periodo").innerHTML = periodoTurma;

    let regente = document.querySelector(".regente").value;
    // document.getElementById("regente").innerHTML = regente;

    let turma = new Turma(numeroTurma, nomeTurma, periodoTurma, regente)

    turmas.push(turma)   
    
    localStorage.setItem("turmas", JSON.stringify(turmas))

    adicionarTurma(turma)

    document.querySelector("#form").reset()
})

numeroTurma = document.querySelector("numeroTurma")


class Turma {
    constructor (numeroTurma, nomeTurma, periodoTurma, regente){
        this.numeroTurma = numeroTurma
        this.nomeTurma = nomeTurma
        this.periodoTurma = periodoTurma
        this.regente = regente
    }

}

// document.getElementsByClassName("salvarTurma").addEventListener("click", () => {
//     let botaoEditar = document.createElement("button")
//     botaoEditar.innerHTML = "Editar"
//     document.querySelector(".turmasCadastradas").append(btnEditar)
// })

// Função para adicionar uma turma
function adicionarTurma(turma) {
    const divTurma = document.createElement("div")
    divTurma.className = "turma"

    divTurma.insertAdjacentHTML("afterbegin", `<p>Nome Turma:${turma.nomeTurma}</p><p>Número da turma: ${turma.numeroTurma}</p><p>${turma.periodoTurma}</p><p>Regente: ${turma.regente}</p>`)    

    document.body.append(divTurma)
}


