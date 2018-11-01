"use strict";
var user;
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
    User.prototype.accessTokenOrNull = function () {
        if (this.access_token != undefined &&
            this.access_token != null &&
            this.access_token != "") {
            return this.access_token;
        }
        return null;
    };
    return User;
}());
