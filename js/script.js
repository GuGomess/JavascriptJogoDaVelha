window.onload = function () {

    let jogador1 = 0;
    let jogador2 = 0;
    let txtMsg = document.getElementById("msg")
    let btnGrade = document.querySelectorAll(".button")
    let divNJOGO = document.getElementById("nJogo")
    let btnRecomecar = document.getElementById("recomecar")
    let divInicio = document.getElementById("inicio")
    let btnX = document.getElementById("x")
    let btnO = document.getElementById("o")
    let botoes = document.getElementById("botoes")
    let btnPontuacao = document.getElementById("pontuacao")
    let txtValidacao = document.getElementById("validacao")


    function inicio(jogador, rodada) {
        console.log(`Jogador ${jogador} Rodada ${rodada}`)          //CHECK
        divNJOGO.style.visibility = "hidden"
        botoes.style.visibility = "hidden"
        txtValidacao.style.visibility = "hidden"
        //jogador 1 começa
        btnX.onclick = function () {
            msg.innerHTML = "Jogador 1 começa"
            jogador = 2;
            rodada = 0
            divInicio.style.visibility = "hidden"
            botoes.style.visibility = "visible"
            jogo(jogador, rodada)
        }

        //jogador2 começa
        btnO.onclick = function () {
            msg.innerHTML = "Jogador 2 começa"
            jogador = 1;
            divInicio.style.visibility = "hidden"
            botoes.style.visibility = "visible"
            jogo(jogador, rodada)
        }
    }

    function jogo(jogador, rodada) {
        console.log(`Jogador ${jogador} Rodada ${rodada}`)          //CHECK
        btnGrade.forEach(btn => {
            btn.addEventListener('click', function () {

                //Verificação de click
                if (btn.value == "X" || btn.value == "O") {
                    txtValidacao.style.visibility = "visible"
                    console.log(jogador)
                } else {
                    txtValidacao.style.visibility = "hidden"
                    //Revezamento de jogadores    
                    jogador++
                    rodada++

                    if (jogador % 2 == 0) {
                        btn.value = "O"
                        msg.innerHTML = "Vez do jogador 1"
                        console.log(`Jogador ${jogador} Rodada ${rodada}`)          //CHECK
                    } else {
                        btn.value = "X"
                        msg.innerHTML = "Vez do jogador 2"
                        console.log(`Jogador ${jogador} Rodada ${rodada}`)          //CHECK
                    }

                }
                //empate
                if (rodada == 9) {
                    msg.innerHTML = "EMPATE"
                    divNJOGO.style.visibility = "visible"
                }

                //VITÓRIAS
                //horizontal 1
                if (btnGrade[0].value == "X" && btnGrade[1].value == "X" && btnGrade[2].value == "X") {
                    txtMsg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[0].value == "O" && btnGrade[1].value == "O" && btnGrade[2].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //horizontal 2
                if (btnGrade[3].value == "X" && btnGrade[4].value == "X" && btnGrade[5].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[3].value == "O" && btnGrade[4].value == "O" && btnGrade[5].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //horizontal 3
                if (btnGrade[6].value == "X" && btnGrade[7].value == "X" && btnGrade[8].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[6].value == "O" && btnGrade[7].value == "O" && btnGrade[8].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //vertical 1
                if (btnGrade[0].value == "X" && btnGrade[3].value == "X" && btnGrade[6].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[0].value == "O" && btnGrade[3].value == "O" && btnGrade[6].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //vertical 2
                if (btnGrade[1].value == "X" && btnGrade[4].value == "X" && btnGrade[7].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[1].value == "O" && btnGrade[4].value == "O" && btnGrade[7].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //vertical 3
                if (btnGrade[2].value == "X" && btnGrade[5].value == "X" && btnGrade[8].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[2].value == "O" && btnGrade[5].value == "O" && btnGrade[8].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //diagonal 1
                if (btnGrade[0].value == "X" && btnGrade[4].value == "X" && btnGrade[8].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[0].value == "O" && btnGrade[4].value == "O" && btnGrade[8].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }
                //diagonal 2
                if (btnGrade[2].value == "X" && btnGrade[4].value == "X" && btnGrade[6].value == "X") {
                    msg.innerHTML = ">>JOGADOR 1 VENCEU<<"
                }
                if (btnGrade[2].value == "O" && btnGrade[4].value == "O" && btnGrade[6].value == "O") {
                    msg.innerHTML = ">>JOGADOR 2 VENCEU<<"
                }

                //Contador de vitórias
                if (msg.innerHTML == "&gt;&gt;JOGADOR 1 VENCEU&lt;&lt;") {
                    jogador1++;
                    j1.innerHTML = `Jogador 1: ${jogador1}`
                }
                if (msg.innerHTML == "&gt;&gt;JOGADOR 2 VENCEU&lt;&lt;") {
                    jogador2++;
                    j2.innerHTML = `Jogador 2: ${jogador2}`
                }

                //Novo jogo
                if (msg.innerHTML == "&gt;&gt;JOGADOR 1 VENCEU&lt;&lt;" || msg.innerHTML == "&gt;&gt;JOGADOR 2 VENCEU&lt;&lt;" || msg.innerHTML == "EMPATE") {

                    //desativar botões
                    btnGrade.forEach(btn => {
                        btn.disabled = true
                    })
                    divNJOGO.style.visibility = "visible"
                }

            })

        })
        //botão recomeçar
        btnRecomecar.onclick = function () {
            msg.innerHTML = ""
            rodada = 0;
            jogador = 0;
            inicio(jogador)
            console.log(`Jogador ${jogador} Rodada ${rodada}`)          //CHECK
            btnGrade.forEach(btn => {
                btn.value = " "
                btn.disabled = false
            })
            divInicio.style.visibility = "visible"
            divNJOGO.style.visibility = "hidden"

        }

        //botão zerar pontuação
        btnPontuacao.onclick = function () {
            jogador1 = 0;
            j1.innerHTML = `Jogador 1: ${jogador1}`

            jogador2 = 0;
            j2.innerHTML = `Jogador 2: ${jogador2}`
        }

    }

    inicio()

}