var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function upperCase(target, propertyKey, descriptor) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return descriptor.get.call(this).toUpperCase();
        },
        set: function (name) {
            descriptor.set.call(this, name);
        },
    };
}
var BankHolder = /** @class */ (function () {
    function BankHolder(name) {
        this.name = name;
    }
    Object.defineProperty(BankHolder.prototype, "accountName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankHolder.prototype, "renameAccountHolder", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        upperCase
    ], BankHolder.prototype, "accountName", null);
    return BankHolder;
}());
var kenny = new BankHolder("Kenny");
console.log(kenny.accountName);
