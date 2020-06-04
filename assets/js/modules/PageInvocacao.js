define(
    ["jquery", "DevilNames", "popper", "bootstrap"],
    function ( $, DevilNames ) {

        DevilNames.init(function (data) {
            if(document.getElementById("devil-name")) {
                var newName = DevilNames.getRandomName();
                document.getElementById("devil-name").innerHTML = newName;
            }
        });

        $("#button-random-name").click(function () {
            var newName = DevilNames.getRandomName();
            document.getElementById("devil-name").innerHTML = newName;
        });
    }
);