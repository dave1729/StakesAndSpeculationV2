"use strict";
String.prototype.isNullOrEmpty = function () {
    return this == undefined ||
        this == null ||
        this == "";
};
