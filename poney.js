const {SpiderMan} = require('./spiderman');
const {DeadPool} = require('./deadpool');

class Poney {
  constructor() {
    this.energy = 0;
    this.isUnicorn = false;
    this.deadpool = new DeadPool();
    this.deadpool.poneyList.push(this);
    this.repos = setInterval(() => this.gatherEnergy(), 1000);


    /* if (CreationDeadPool && CreationSpiderman && TransformationLicorn)
     {
     TransformationLicorn = new Licorn();
     CreationSpiderman = new SpiderMan();
     CreationDeadPool = new DeadPool();
     }*/

  }

  destructor() {

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
        this.isUnicorn = true;
      })
      .catch(() => {

      })
  }
}


module.exports = {Poney};