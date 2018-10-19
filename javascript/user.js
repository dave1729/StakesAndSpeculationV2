"use strict";
var User = /** @class */ (function () {
    function User(options) {
        if (options == null) {
            this.access_token = "";
            this.name = "";
        }
        else {
            this.access_token = options.access_token;
            this.name = options.name;
        }
    }
    return User;
}());
