define("ForcaView",
    ['jquery', 'Constants', 'Forca', 'EventManager'],
    function ($, Constants, Forca, EventManager ) {

    var init = function () {
        EventManager.subscribe(Constants.GAME_CREATED_EVENT, changeToGameCreatedState);
        EventManager.subscribe(Constants.GAME_STARTED_EVENT, changeToGameStartedState);
        EventManager.subscribe(Constants.GAME_RUNNING_EVENT, changeToGameRunningState);
        EventManager.subscribe(Constants.GAME_LOST_EVENT, changeToGameLostState);
        EventManager.subscribe(Constants.GAME_WON_EVENT, changeToGameWonState);
    }

    var updateHangman= function (num) {
        $("#hangman-pic").attr("src",Constants.HANGED[num]);
    }

    var updateWordDashes = function() {
        value = Forca.getWordDashes();
        $("#dashes").html(value);
    }

    var updateMisses = function(value) {
        value = Forca.getMisses();
        $("#misses").html(value);
    }

    var updateWin = function () {
        value = Forca.getWin();
        $("#win").html(value);
    }

    var updateLost = function () {
        value = Forca.getLost()
        $("#lost").html(value);
    }

    var resetKeyboard = function () {
        $('.btn-letter').prop('disabled', false);
        $('.btn-letter').addClass("btn-primary");
        $('.btn-letter').removeClass("btn-light");
        $('.btn-letter').removeClass("btn-succes");
        $('.btn-letter').removeClass("btn-danger");
    }

    var changeToGameCreatedState = function (data) {

        // Hangman 0
        updateHangman(0);

        // Teclado desabilitado
        $('.btn-letter').prop('disabled', true);

        // Palavra vazia
        updateWordDashes();
        updateMisses();

        // Vitória com 0
        updateWin();

        // Derrota com 0
        updateLost();
    }

    var changeToGameStartedState = function (data) {
        // Hangman 1
        updateHangman(0);

        // Teclado habilitado
        resetKeyboard();

        // Palavra vazia
        updateWordDashes();
        updateMisses();

        // Vitória com último valor
        updateWin();

        // Derrota com último valor
        updateLost();

    }

    var changeToGameRunningState = function (data) {
        // Hangman de acordo com o número de erros
        // Teclado habilitado, com letras escolhidas desabilitadas
            // acertos em verde
            // erros em vermelho
        // Palavra com caracteres acertados à mostra
        // Vitória com último valor
        // Derrota com último valor
    }

    var changeToGameLostState = function (data) {
        // Hangman 7
        // Mensagem de fim de jogo, estilo erro, indicando falha e com palavra secreta
        // Teclado desabilitado
            // acertos em verde
            // erros em vermelho
        // Palavra com caracteres acertados à mostra, toda em vermelho
        // Vitória com último valor
        // Derrota com último valor

    }

    var changeToGameWonState = function (data) {
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
        init: init,
        changeToGameCreatedState: changeToGameCreatedState,
        changeToGameStartedState: changeToGameStartedState,
        changeToGameRunningState: changeToGameRunningState,
        changeToGameLostState: changeToGameLostState,
        changeToGameWonState: changeToGameWonState,
    }
});