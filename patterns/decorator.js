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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    return CarOptions;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + " with enhanced autopilot";
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var RearFacingSeats = /** @class */ (function (_super) {
    __extends(RearFacingSeats, _super);
    function RearFacingSeats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RearFacingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + " with rear-facing seats";
    };
    RearFacingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 7000;
    };
    return RearFacingSeats;
}(CarOptions));
var myTesla = new ModelX();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
