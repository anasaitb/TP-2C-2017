const {DeadPool} = require('./deadpool');


IsUnicorn = false;

class Pony {
  Unicorn;
  repose;
  constructor() {
    this.energy = 0;
    this.Unicorn = false;
    this.deadpool = new DeadPool();
    this.deadpool.poneyList.push(this);
    this.repose = setInterval(() => this.gatherEnergy(), 1000);


  }

  gatherEnergy() {
      this.energy += 10;
      if (this.energy > 100) {
        this.transform();
      }
  }

  transform() {
    this.energy = 0;
    this.deadpool.helpToTransform()
      .then(() => {
        this.Unicorn = true;
      })
      .catch(() => {

      })
  }
}


module.exports = {Pony};