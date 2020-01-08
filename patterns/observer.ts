interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number): void;
}

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    let idx = this.observers.indexOf(o);
    this.observers.splice(idx, 1);
  }
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number) {
    // console.log(`WeatherStation new temperature: ${this.temperature}`);
    this.temperature = temp;
    this.notifyObservers();
  }
}

abstract class ObserverInstance implements Observer {
  private subject: Subject;

  constructor(station: Subject) {
    this.subject = station;
    this.subject.registerObserver(this);
  }

  abstract update(temperature: number): void;
}

class Alarm extends ObserverInstance {
  constructor(station: Subject) {
    super(station);
  }

  update(temperature: number) {
    if (temperature > 50) {
      console.log("Alarm: it is way too hot in here!");
    } else {
      console.log("Alarm: it is alright!");
    }
  }
}

class TemperatureDisplay extends ObserverInstance {
  constructor(station: Subject) {
    super(station);
  }
  public update(temperature: number) {
    console.log(`TemperatureDisplay: temperature updated to ${temperature}`);
  }
}

class Fan extends ObserverInstance {
  constructor(station: Subject) {
    super(station);
  }
  public update(temperature: number) {
    if (temperature > 25) {
      console.log("Fan is turning ON");
    } else {
      console.log("Fan is turning OFF");
    }
  }
}

let station = new WeatherStation();
let display = new TemperatureDisplay(station);
let fan = new Fan(station);
let alarm = new Alarm(station);

station.setTemperature(55);
station.setTemperature(20);
