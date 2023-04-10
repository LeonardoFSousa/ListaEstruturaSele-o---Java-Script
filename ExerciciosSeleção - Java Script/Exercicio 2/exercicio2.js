function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    let resultado = (n1 + n2) / 2

    if (resultado >= 7) {
        document.getElementById("resultado").innerHTML = "Sua média é: " + resultado
        document.getElementById("resultado").innerHTML += " Aprovado(a)!!"
    }
    else if (resultado >=3){
        document.getElementById("resultado").innerHTML = "Sua média é: " + resultado
        document.getElementById("resultado").innerHTML += " Exame!!"
    }
    else {
        document.getElementById("resultado").innerHTML = "Sua média é: " + resultado
        document.getElementById("resultado").innerHTML += " Reprovado(a)!!"
    }
}