'use strict';


module.exports = function(am) {
    am.factory('factory', function() {
        var thisIsPrivate = "Private";

        function getPrivate() {
            return thisIsPrivate;
        }

        return {
            variable: "This is public",
            getPrivate: getPrivate
        };

    });
};
