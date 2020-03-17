$(document).ready(function() {
    console.log( "ready!" );
    DevilNames.init(function(data){        
        var newName = DevilNames.getRandomName();
        document.getElementById("devil-name").innerHTML = newName;
    });

    

   $( "#button-random-name" ).click(function() {
        var newName = DevilNames.getRandomName();
        document.getElementById("devil-name").innerHTML = newName;        
    });
});