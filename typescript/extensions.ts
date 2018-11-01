declare interface String {
    isNullOrEmpty() : boolean;
}

String.prototype.isNullOrEmpty = function (this : string) {
    return this == undefined ||
        this == null ||
        this == "";
};