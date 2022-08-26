var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function propertyInformation(target, propertyKey) {
    var value = this[propertyKey];
    var get = function () {
        console.log("".concat(propertyKey, " value: ").concat(value));
        return value;
    };
    var set = function (val) {
        console.log("new ".concat(propertyKey, " value: ").concat(val));
        value = val;
    };
    Object.defineProperty(target, propertyKey, { set: set, get: get });
}
var BankPropertyDecorator = /** @class */ (function () {
    function BankPropertyDecorator(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    __decorate([
        propertyInformation
    ], BankPropertyDecorator.prototype, "pin", void 0);
    return BankPropertyDecorator;
}());
var bankPropertyDecorator = new BankPropertyDecorator("Ashley", "123456");
bankPropertyDecorator.pin;
bankPropertyDecorator.pin = "654321";
