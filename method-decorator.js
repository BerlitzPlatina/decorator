var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var methodToKeyMap = {
    withdrawFromAccountA: "accountA",
    withdrawFromAccountB: "accountB",
};
var minimumAmount = function (amount) {
    return function (target, propertyKey, descriptor) {
        var originalFn = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this[methodToKeyMap[propertyKey]] - args[0] > amount) {
                originalFn.call(this, args);
            }
            else {
                console.log("".concat(methodToKeyMap[propertyKey], ": Not enough money"));
            }
        };
        return descriptor;
    };
};
var BankMethodDecorator = /** @class */ (function () {
    function BankMethodDecorator() {
        this.accountA = 200;
        this.accountB = 1000;
    }
    BankMethodDecorator.prototype.withdrawFromAccountA = function (amount) {
        this.accountA = this.accountA - amount;
    };
    BankMethodDecorator.prototype.withdrawFromAccountB = function (amount) {
        this.accountB = this.accountB - amount;
    };
    __decorate([
        minimumAmount(100)
    ], BankMethodDecorator.prototype, "withdrawFromAccountA", null);
    __decorate([
        minimumAmount(200)
    ], BankMethodDecorator.prototype, "withdrawFromAccountB", null);
    return BankMethodDecorator;
}());
var bankMethodDecorator = new BankMethodDecorator();
bankMethodDecorator.withdrawFromAccountA(200);
bankMethodDecorator.withdrawFromAccountB(200);
console.log(bankMethodDecorator.accountA);
console.log(bankMethodDecorator.accountB);
