define("Forca",
    ['Constants', 'DevilNames', 'EventManager'],
    function (Constants, DevilNames, EventManager) {

    var self = this;
    var secret = [];
    var success = false;
    var hanged = false;
    var wordDashes = [];
    var errors = 0;
    var misses = [];
    var win = 0;
    var lost = 0;

    var init = function () {
        secret = [];
        success = false;
        hanged = false;
        guess = null;
        wordDashes = [];
        errors = 0;
        misses = [];
        DevilNames.init(function () {
            selectSecretDevilName()
            EventManager.publish(Constants.EVENTS.GAME_STARTED_EVENT, this);
        })
    };

    var getSecret = function () {
        return secret.join("");
    }

    var getWordDashes = function () {
        return wordDashes.join("");
    }

    var getErrors = function () {
        return errors;
    }

    var getMisses = function () {
        return misses.join("")
    }

    var getWin = function () {
        return win;
    }

    var getLost = function () {
        return lost;
    }

    var selectSecretDevilName = function () {
        secret = DevilNames.getRandomName().split("");
        wordDashes = "_".repeat(secret.length).split("")
        revealNonAlphaChars()
    };

    var revealNonAlphaChars = function () {
        for (i = 0; i < secret.length; i++) {
            letter = secret[i]

            if (!isAlpha(letter)) {
                wordDashes[i] = letter
            }
        }
    }

    var isAlpha = function (str) {
        var code, i, len;

        for (i = 0 ; i < str.length; i++) {
            code = str.charCodeAt(i);
            if (!(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    };

    var readPlayerMove = function(playerMove){

        isError = true;

        for (i = 0 ; i < secret.length ; i++){
            letter = secret[i]

            if (letter.toUpperCase() == playerMove.toUpperCase()) {
                wordDashes[i] = letter
                isError = false;
            }
        }

        if(isError){
            errors += 1
            misses.push(playerMove)
        }

        secretasStr = getSecret();
        wordDashesAsStr = getWordDashes();

        success = secretasStr === wordDashesAsStr
        hanged = errors === (Constants.HANGED.length - 1)

        if (success){
            win++;
            EventManager.publish(Constants.EVENTS.GAME_WON_EVENT, this);

        }else if(hanged) {
            lost++;
            EventManager.publish(Constants.EVENTS.GAME_LOST_EVENT, this);
        } else {
            EventManager.publish(Constants.EVENTS.GAME_RUNNING_EVENT, {
                playerMove: playerMove,
                isError: isError
            });
        }
    }

    var run = function () {
        init();
    };

    // Public API
    return {
        init: init,
        run: run,
        readPlayerMove: readPlayerMove,
        getSecret: getSecret,
        getWordDashes: getWordDashes,
        getErrors: getErrors,
        getMisses: getMisses,
        getWin: getWin,
        getLost: getLost,

    };
});
