define("ForcaView",
    ['jquery', 'Constants', 'Forca', 'EventManager'],
    function ($, Constants, Forca, EventManager) {

        var init = function () {
            EventManager.subscribe(Constants.EVENTS.GAME_CREATED_EVENT, changeToGameCreatedState);
            EventManager.subscribe(Constants.EVENTS.GAME_STARTED_EVENT, changeToGameStartedState);
            EventManager.subscribe(Constants.EVENTS.GAME_RUNNING_EVENT, changeToGameRunningState);
            EventManager.subscribe(Constants.EVENTS.GAME_LOST_EVENT, changeToGameLostState);
            EventManager.subscribe(Constants.EVENTS.GAME_WON_EVENT, changeToGameWonState);
        }

        var updateHangman = function (num) {
            $("#hangman-pic").attr("src", Constants.HANGED[num]);
        }

        var updateSecret = function (secret) {
            $(".secret").text(secret)
        }

        var updateWordDashes = function () {
            value = Forca.getWordDashes();
            $("#dashes").html(value);
        }

        var updateMisses = function () {
            value = Forca.getMisses();
            $("#misses").html(value);
        }

        var updateWin = function () {
            value = Forca.getWin();
            $("#scoreboard-win").html(value);
        }

        var updateLost = function () {
            value = Forca.getLost()
            $("#scoreboard-lost").html(value);
        }

        var resetKeyboard = function () {
            $('.btn-letter').prop('disabled', false);
            $('.btn-letter').addClass("btn-primary");
            $('.btn-letter').removeClass("btn-light");
            $('.btn-letter').removeClass("btn-success");
            $('.btn-letter').removeClass("btn-danger");
        }

        var processPlayerMove = function (data) {
            // Teclado habilitado, com letras escolhidas desabilitadas
            // acertos em verde
            // erros em vermelho
            playerMove = data.playerMove;
            isError = data.isError;

            // button = $("button:contains(" + playerMove + ")")

            button = $("#btn_" + playerMove)
            button.removeClass("btn-primary");
            button.prop('disabled', true);
            if (isError) {
                button.addClass("btn-danger");
            } else {
                button.addClass("btn-success");
            }
        }

        var changeToGameCreatedState = function (data) {

            updateSecret(null);

            // Hangman 0
            updateHangman(0);

            // Teclado desabilitado
            $('.btn-letter').prop('disabled', true);

            // Palavra vazia
            updateWordDashes();
            updateMisses();

            // Atualiza placar
            updateWin();
            updateLost();
        }

        var changeToGameStartedState = function (data) {
            updateSecret(null);

            // Hangman 1
            updateHangman(0);

            // Teclado habilitado
            resetKeyboard();

            // Palavra vazia
            updateWordDashes();
            updateMisses();

            // Atualiza placar
            updateWin();
            updateLost();

        }

        var changeToGameRunningState = function (data) {
            updateSecret(null);

            // Processa entrada do usuário
            processPlayerMove(data);

            // Atualiza hud
            updateWordDashes();
            updateMisses();
            updateHangman(Forca.getErrors());

            // Atualiza placar
            updateWin();
            updateLost();
        }

        var changeToGameLostState = function (data) {

            // Processa entrada do usuário
            processPlayerMove(data);

            // Atualiza hud
            updateSecret(Forca.getSecret());
            updateWordDashes();
            updateMisses();
            updateHangman(Forca.getErrors());

            // Atualiza placar
            updateWin();
            updateLost();

            // Mensagem de fim de jogo, estilo erro, indicando falha e com palavra secreta
            $('#modalLost').modal('toggle');

            // Teclado desabilitado
            $('.btn-letter').prop('disabled', true);

        }

        var changeToGameWonState = function (data) {

            // Processa entrada do usuário
            processPlayerMove(data);

            // Atualiza hud
            updateSecret(Forca.getSecret());
            updateWordDashes();
            updateMisses();
            updateHangman(Forca.getErrors());

            // Atualiza placar
            updateWin();
            updateLost();

            // Mensagem de fim de jogo, estilo erro, indicando falha e com palavra secreta
            $('#modalWon').modal('toggle');

            // Teclado desabilitado
            $('.btn-letter').prop('disabled', true);
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