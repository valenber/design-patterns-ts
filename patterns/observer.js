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
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var idx = this.observers.indexOf(o);
        this.observers.splice(idx, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        // console.log(`WeatherStation new temperature: ${this.temperature}`);
        this.temperature = temp;
        this.notifyObservers();
    };
    return WeatherStation;
}());
var ObserverInstance = /** @class */ (function () {
    function ObserverInstance(station) {
        this.subject = station;
        this.subject.registerObserver(this);
    }
    return ObserverInstance;
}());
var Alarm = /** @class */ (function (_super) {
    __extends(Alarm, _super);
    function Alarm(station) {
        return _super.call(this, station) || this;
    }
    Alarm.prototype.update = function (temperature) {
        if (temperature > 50) {
            console.log("Alarm: it is way too hot in here!");
        }
        else {
            console.log("Alarm: it is alright!");
        }
    };
    return Alarm;
}(ObserverInstance));
var TemperatureDisplay = /** @class */ (function (_super) {
    __extends(TemperatureDisplay, _super);
    function TemperatureDisplay(station) {
        return _super.call(this, station) || this;
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log("TemperatureDisplay: temperature updated to " + temperature);
    };
    return TemperatureDisplay;
}(ObserverInstance));
var Fan = /** @class */ (function (_super) {
    __extends(Fan, _super);
    function Fan(station) {
        return _super.call(this, station) || this;
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log("Fan is turning ON");
        }
        else {
            console.log("Fan is turning OFF");
        }
    };
    return Fan;
}(ObserverInstance));
var station = new WeatherStation();
var display = new TemperatureDisplay(station);
var fan = new Fan(station);
var alarm = new Alarm(station);
station.setTemperature(55);
station.setTemperature(20);
