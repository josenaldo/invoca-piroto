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
            EventManager.publish(Constants.GAME_STARTED_EVENT, this);
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

        found = false;

        for (i = 0 ; i < secret.length ; i++){
            letter = secret[i]

            if (letter == playerMove.toUpperCase()) {
                wordDashes[i] = letter
                found = true;
            }
        }

        if(!found){
            errors += 1
            misses.push(playerMove)
        }
        verifyContinue();
        showScore();
    }

    var verifyContinue = function() {
        secretasStr = getSecret();
        wordDashesAsStr = getWordDashes();

        success = secretasStr === wordDashesAsStr
        hanged = errors === 6
    }

    var showScore = function() {

        document.getElementById("dashes").innerHTML = wordDashes.join("");
        document.getElementById("misses").innerHTML = misses.join("");


        if (success){
            message = "Parabéns, você acertou o nome do capeta!";
            alert(message);
        }else if(hanged) {
            message = "Pena, você foi enforcado!";
            alert(message);
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
        getWordDashes: getWordDashes,
        getErrors: getErrors,
        getMisses: getMisses,
        getWin: getWin,
        getLost: getLost,

    };
});
