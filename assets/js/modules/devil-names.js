---
---

var DevilNames = (function () {
    var self = this;
    self.names = null;

    var init = function (callback) {
        $.get("{{ site.baseurl }}/assets/js/data/nomes.json", function (data) {
            self.names = data;
            if (callback != null) {
                callback(data);
            }

        });
    };

    var getRandomName = function () {
        var item = self.names[Math.floor(Math.random() * self.names.length)];
        return item;
    };

    // Public API
    return {
        init: init,
        getRandomName: getRandomName
    };
})();