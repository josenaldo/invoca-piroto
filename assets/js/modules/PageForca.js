define(
    ["jquery", "Forca", "ForcaView", , "popper", "bootstrap"],
    function ($, Forca, ForcaView) {

        ForcaView.init();
        ForcaView.changeToGameCreatedState(null);

        $(".btn-new-game").click(function () {
            Forca.run();
        });

        $(".btn-letter").click(function () {
            Forca.readPlayerMove($(this).attr("value"));
        });
    }
);

