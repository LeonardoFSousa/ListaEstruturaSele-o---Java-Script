function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)

    let menorvalor = n1

    if (n2 < menorvalor){
        menorvalor = n2
    }
    if (n3 < menorvalor){
        menorvalor = n3
    }

    document.getElementById("resultado").innerHTML = "O menor valor é: " + menorvalor

}