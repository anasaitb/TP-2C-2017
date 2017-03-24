const {Poney} = require('./poney');
const {DayNight} = require('./day-night');

let instance = null;

class DeadPool {
  constructor() {
    if (!instance) {
      this.poneyList = [];
      this.Life = 100;
      if (transformation1 && transformation2) {
        transformation1 = new Licorn();
        transformation2 = new Poney();
      }
      instance = this;
    }
    return instance;
  }

  helpToTransform() {
    return Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject();
      }
    })
  }

  Gain(transformation2) {
    if (this.life < 50) {
      transformation2.Transformation();
      this.life = 100;
      console.log("Reste ", this.life, " Pouvoir_Deadpool");
    }
    else if (this.life < 100 && this.life >= 50) {
      transformation1.Transformation();
      this.life = 100;
      console.log("Reste ", this.life, " Pouvoir_Deadpool");
    }
    else {
      console.log("Reste ", this.life, " Pouvoir_Deadpool");
    }
  }

  Perte() {
    const r = (Math.floor(Math.random() * 100));
    this.life = r;
    console.log("Reste", this.life, " Pouvoir_Deadpool");

  }

  transform(transformation1) {

    const v = (Math.floor(Math.random() * 2));

    if (transformation1.energy == 100 && v == 1) {
      transformation1.Transform();
      console.log("Possibe");
    }
    else {
      console.log("Pas possible");
    }
  }
}
module.exports = {DeadPool};