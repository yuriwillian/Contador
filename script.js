function contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var preparando = document.getElementById("preparando")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ //se estiver em branco...
        preparando.innerHTML = "Impossível contar!"
        window.alert("[ERRO] Faltam dados.")        
            } else {
                var inputinicio = Number(inicio.value)
                var inputfim = Number(fim.value)
                var inputpasso = Number(passo.value)
                preparando.innerHTML = `👉 `
                if (inputpasso <= 0) {
                    window.alert("Passo inválido! Considerando PASSO 1")
                    inputpasso = 1
                }
                if(inputinicio < inputfim){
                    //contagem crescente
                    for (let contador = inputinicio; contador <= inputfim; contador += inputpasso) {
                        preparando.innerHTML += `${contador} 👉 `
                    }
                    preparando.innerHTML += "🏁"
                }else {
                    //contagem regressiva
                    for (let contador = inputinicio; contador >= inputfim; contador -= inputpasso) {
                        preparando.innerHTML += `${contador} 👉 `
                    }
                    preparando.innerHTML += "🏁"

                    }
            }
}
/**usei a dica de como colocar emoji nesse site aqui: https://www.kirupa.com/html5/emoji.htm
e escolhi o emoji nessa lista disponibilizada no github: https://github.com/theraot/emoji/blob/master/emoji.js**/