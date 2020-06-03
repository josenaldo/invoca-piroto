---
---
define("Constants", [], function () {

    var BASEURL = "{{ site.baseurl }}";

    var AppConstants = {
        BASEURL: BASEURL,

        HANGED: [
            BASEURL + 'assets/images/forca/enforcado1.jpg',
            BASEURL + 'assets/images/forca/enforcado2.jpg',
            BASEURL + 'assets/images/forca/enforcado3.jpg',
            BASEURL + 'assets/images/forca/enforcado4.jpg',
            BASEURL + 'assets/images/forca/enforcado5.jpg',
            BASEURL + 'assets/images/forca/enforcado6.jpg',
            BASEURL + 'assets/images/forca/enforcado7.jpg',
        ]
    }
    // Public API
    return AppConstants;
});
