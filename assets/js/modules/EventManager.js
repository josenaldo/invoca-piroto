define("EventManager",
    [],
    function () {
        var events = {};

        var publish = function (name, data) {
            var handlers = events[name];

            if (!!handlers === false) return;

            handlers.forEach(function (handler) {
                handler.call(this, data);
            });
        };

        var subscribe = function (name, handler) {
            var handlers = events[name];

            if (!!handlers === false) {
                handlers = events[name] = [];
            }

            handlers.push(handler);
        };

        var unsubscribe = function (name, handler) {

            var handlers = events[name];

            if (!!handlers === false) return;

            var handlerIndex = handlers.indexOf(handler);

            handlers.splice(handlerIndex);
        };

        return {
            publish: publish,
            subscribe: subscribe,
            unsubscribe: unsubscribe,
        }
    });