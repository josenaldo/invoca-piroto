define(['Forca'], function (Forca) {

    var changeToBeforeGameState = function () {
        // Hangman 0
        // Teclado desabilitado
        // Palavra vazia
        // Vitória com 0
        // Derrota com 0
    }

    var changeToStartedState = function () {
        // Hangman 1
        // Teclado habilitado
        // Palavra vazia
        // Vitória com último valor
        // Derrota com último valor

    }

    var changeToInGameState = function () {
        // Hangman de acordo com o número de erros
        // Teclado habilitado, com letras escolhidas desabilitadas
            // acertos em verde
            // erros em vermelho
        // Palavra com caracteres acertados à mostra
        // Vitória com último valor
        // Derrota com último valor
    }

    var changeToHangedState = function () {
        // Hangman 7
        // Mensagem de fim de jogo, estilo erro, indicando falha e com palavra secreta
        // Teclado desabilitado
            // acertos em verde
            // erros em vermelho
        // Palavra com caracteres acertados à mostra, toda em vermelho
        // Vitória com último valor
        // Derrota com último valor

    }

    var changeToWonState = function () {
        // Hangman - útimo valor
        // Mensagem de fim de jogo, estilo suesso, indicando vitória e com palavra secreta
        // Teclado desabilitado
            // acertos em verde
            // erros em vermelho
        // Palavra com caracteres acertados à mostra, toda em verde
        // Vitória com último valor
        // Derrota com último valor
    }

    return {
        changeToBeforeGameState: changeToBeforeGameState,
        changeToStartedState: changeToStartedState,
        changeToInGameState: changeToInGameState,
        changeToHangedState: changeToHangedState,
        changeToWonState: changeToWonState,
    }
});