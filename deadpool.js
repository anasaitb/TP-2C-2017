const {Pony} = require('./poney');


let instance = null;
let transformation1;
let transformation2;

class DeadPool {
  Vie;
  constructor() {
    if (!instance) {
      this.poneyList = [];
      this.Vie = 100;

      if (transformation1 && transformation2) {
        transformation1 = new Unicorn();
        transformation2 = new Pony();
      }
      instance = this;
    }
    return instance;
  }

  helpToTransform() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject();
      }
    })
  }

  G(transformation2) {
    if (this.Vie < 50) {
      transformation2.transform();
      this.Vie = 100;
      console.log("rest ", this.Vie, " Pv DeadPol");
    }
    else if (this.Vie < 100 && this.Vie >= 50) {
      transformation1.transform();
      this.Vie = 100;
      console.log("rest ", this.Vie, " Pv DeadPol");
    }
    else {
      console.log("rest ", this.Vie, " Pv DeadPol");
    }
  }

  E() {
    const b = (Math.floor(Math.random() * 100));
    this.Vie = b;
    console.log("rest", this.Vie, " PV DeadPol");

  }
  l(day) {
    day.on('Cycle change', period => {
      if (period === 'night') {
        this.night = true;
      } else {
        this.night = false;
      }
    });
  }

  tr(transform) {

    const v = (Math.floor(Math.random() * 2));

    if (transformation1.energy == 100 && v == 1) {
      transformation1.transform();
      console.log("transform possible");
    }
    else {
      console.log("transform pas possible");
    }
  }
}
module.exports = {DeadPool};