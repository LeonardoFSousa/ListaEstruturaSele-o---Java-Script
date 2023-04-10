function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)
    let n4 = Number (document.getElementById("n4").value)

    let resultado = (n1 + n2 + n3 + n4) / 4

    if (resultado >= 7) {
        document.getElementById("resultado").innerHTML = "Sua média é: " + resultado
        document.getElementById("resultado").innerHTML += " Aprovado(a)!!"
    }
    else {
        document.getElementById("resultado").innerHTML = "Sua média é: " + resultado
        document.getElementById("resultado").innerHTML += " Reprovado(a)!!"
    }
}