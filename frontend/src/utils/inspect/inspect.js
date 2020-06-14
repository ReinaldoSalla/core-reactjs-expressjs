var processPrimitive = function (_a) {
    var varName = _a.varName, varValue = _a.varValue;
    console.log("\n" + "*".repeat(100));
    console.log("variable \"" + varName + "\" is a primitive of type " + typeof varValue);
    console.log(varValue);
};
var inspect = function (obj) {
    console.log("\n\n\nSTART");
    Object.entries(obj).forEach(function (_a) {
        var varName = _a[0], varValue = _a[1];
        if (Array.isArray(varValue)) {
            console.log("\n" + "*".repeat(100));
            console.log("variable \"" + varName + "\" is an array");
            console.table(varValue);
        }
        else if (typeof varValue === "object") {
            console.log("\n" + "*".repeat(100));
            console.log("variable \"" + varName + " is an object");
            console.table(varValue);
        }
        else {
            processPrimitive({ varNameWW: varName, varValue: varValue });
        }
    });
    console.log("\nEND\n\n\n");
};

export default inspect;