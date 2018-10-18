"use strict";
var Answer = /** @class */ (function () {
    function Answer(options) {
        shouldNotBeNull(options, 1);
        this.value = options.value;
        this.unitType = options.unitType;
    }
    return Answer;
}());
