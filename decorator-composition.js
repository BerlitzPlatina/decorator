var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function outer() {
    console.log("Outer: expression");
    return function (target, propertyKey, descriptor) {
        console.log("Outer: result");
    };
}
function inner() {
    console.log("Inner: expression");
    return function (target, propertyKey, descriptor) {
        console.log("Inner: result");
    };
}
var DecoratorComposition = /** @class */ (function () {
    function DecoratorComposition() {
    }
    DecoratorComposition.prototype.run = function () { };
    __decorate([
        outer(),
        inner()
    ], DecoratorComposition.prototype, "run", null);
    return DecoratorComposition;
}());
var decoratorComposition = new DecoratorComposition();
decoratorComposition.run();
