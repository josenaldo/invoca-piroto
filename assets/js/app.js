---
---
requirejs.config({
    "baseUrl": "{{ site.baseurl }}/assets/js/modules",
    "paths": {
        "jquery": "//code.jquery.com/jquery-3.5.1.min",
        "popper": "//cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min",
        "bootstrap": "//stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min",
        "lazy": "../lazy",
        "main": "Main",
    }
});

// Chamando módulo principal para iniciar a aplicação
requirejs(["main"]);