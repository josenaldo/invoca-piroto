define(
    ["jquery", "Forca", "ForcaView"],
    function ( $, Forca, ForcaView ) {

        ForcaView.changeToBeforeGameState()

        $("#btn-new-game").click(function () {
            Forca.run();
        });

        $(".btn-letter").click(function () {
            Forca.readPlayerMove($(this).attr("value"));
        });

    }
);