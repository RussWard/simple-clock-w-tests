class Timer {
  constructor() {
    this.callbacks = [];
    setInterval(this.tick.bind(this), 1000);
  }
  addCallback(cb) {
    this.callbacks.push(cb);
  }
  tick() {
    let now = new Date().toString();
    this.callbacks.forEach(cb => cb(now));
  }
}

class Clock {
  constructor() {
    this.timer = new Timer();
    this.timer.addCallback(this.renderClock.bind(this));
  }
  renderClock(now) {
    let timeString = now.split(' ')[4];
    let hour = timeString.split(':')[0];
    let minute = timeString.split(':')[1];
    let second = timeString.split(':')[2];

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
  }
}

new Clock();

module.exports = {
  Timer,
  Clock
}
