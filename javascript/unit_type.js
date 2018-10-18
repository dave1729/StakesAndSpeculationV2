"use strict";
var UnitType;
(function (UnitType) {
    // SI UNITS
    UnitType[UnitType["length"] = 0] = "length";
    UnitType[UnitType["area"] = 1] = "area";
    UnitType[UnitType["volume"] = 2] = "volume";
    UnitType[UnitType["mass"] = 3] = "mass";
    UnitType[UnitType["duration"] = 4] = "duration";
    UnitType[UnitType["date"] = 5] = "date";
    UnitType[UnitType["temperature"] = 6] = "temperature";
    UnitType[UnitType["speed"] = 7] = "speed";
    UnitType[UnitType["count"] = 8] = "count";
})(UnitType || (UnitType = {}));
