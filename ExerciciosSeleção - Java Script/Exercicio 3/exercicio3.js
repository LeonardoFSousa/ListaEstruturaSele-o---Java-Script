function resultado(){

    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)

    if (n1 > n2) {
        document.getElementById("resultado").innerHTML = "O menor número é: "  + n2
    }
    else {
        document.getElementById("resultado").innerHTML = "O menor número é: " + n1
    }
}