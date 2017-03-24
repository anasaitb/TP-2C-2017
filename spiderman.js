const {Poney} = require('./poney');

let x = null;
let y = null;

class SpiderMan {
  constructor() {
    if (!instance) {
      this.enviedeponey = setInterval(() => this.equitation(), 10000);
      instance = new Singleton();
    }
    return instance;

  }

  equitation() {
    const r = (Math.floor(Math.random() * 2));
    if (r == 1) {
      console.log('Générer le poney');

      if (isunicorn == true) {
        Poney.energy = 0;
        Poney.isunicorn = false;
      }
      else {
        Poney.energy = 0;
      }

    }
    else {
      reject();
    }
  }

}


module.exports = {SpiderMan};