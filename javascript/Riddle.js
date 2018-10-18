"use strict";
var Riddle = /** @class */ (function () {
    function Riddle(options) {
        this.id = options.id;
        this.question = options.question;
        this.answer = options.answer;
        this.funfact = options.funfact;
        this.sourceName = options.sourceName;
        this.source = options.source;
        this.sourceDate = options.sourceDate;
        this.creationDate = options.creationDate;
        this.createdBy = options.createdBy;
        this.lastUsedDate = options.lastUsedDate;
    }
    return Riddle;
}());
