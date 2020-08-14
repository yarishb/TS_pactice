var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.vesion = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript virsion is " + this.vesion;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AddComponent = /** @class */ (function (_super) {
    __extends(AddComponent, _super);
    function AddComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AddComponent.prototype.info = function () {
        return 'This is info';
    };
    return AddComponent;
}(Component));
