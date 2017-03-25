let instance = null;

class SpiderMan {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;

  }


  ri(tableau){
    return new Promise((resolve, reject) => {
      const equitation = Math.floor((Math.random() * 3) + 1);
      if (equitation > 2) {
        setTimeout(() => {
          tableau.isAvailable = false;
          resolve();
        }, 300);
      } else {
        reject();
      }
    });
  }

}


module.exports = {SpiderMan};