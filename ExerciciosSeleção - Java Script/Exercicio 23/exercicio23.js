function preco() {

    let n1 = Number (document.getElementById("codigo").value)
    let n2 = Number (document.getElementById("quantidade").value)

    let unitario 
        if ((n1 >= 1) && (n1 <= 10)) {
            unitario = 10
        }
            else if((n1 >= 11) && (n1 <= 20)) {
            unitario = 15
        }
            else if ((n1 >= 21) && (n1 <= 30)) {
            unitario = 20
        }
            else if ((n1 >= 31) && (n1 <= 40)) {
            unitario = 30
        }
            else {
            unitario = 0
        }
            if (unitario == 0){
            alert("Código Inválido")
        }
        else{
            let total = unitario * n2
                if(total <= 0){
                alert("Quantidade Negativa")
                }
                else{
                    let desconto
                    if(total < 250){
                        desconto = total * 5 / 100
                    }
                    else if(total <=500){
                        desconto = total * 10 / 100
                    }

                        else{
                            desconto = total * 15 / 100
                        }
                        let final = total - desconto
                        document.getElementById("unitario").innerHTML = unitario
                        document.getElementById("totalnota").innerHTML = total
                        document.getElementById("desconto").innerHTML = desconto
                        document.getElementById("precofinal").innerHTML = final

                }
        }

}