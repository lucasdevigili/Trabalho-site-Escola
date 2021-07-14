document.querySelector(".botao1").addEventListener("click", () => {
    document.querySelector("#id01").hidden = false
    document.querySelector(".modal").style.cssText = "display: flex; justify-content:center; align-items: center;"
}) 

document.querySelector("#botaoDesaparecer").addEventListener("click", () => {    
    document.querySelector("#id01").hidden = true 
    document.querySelector(".modal").style.cssText = ""
})

document.querySelector(".btnEntrar").addEventListener("click", () => {
    document.querySelector("#id01").style.display = "none"
})