---
---
requirejs.config({
    baseUrl: "{{ site.baseurl }}/assets/js/modules",
    paths: {
        "jquery": "//code.jquery.com/jquery-3.5.1.min",
        "bootstrap": "//stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min",
        "lazy": "../lazy",
        "main": "Main",
    },
    shim: {
        "bootstrap": ['jquery']
    },
});