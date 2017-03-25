import {day} from "./day-night";

const {Pony} = require('./poney');
const {SpiderMan} = require('./spiderman');
const {DeadPool} = require('./deadpool');



const nbPony = 10;
const spider = new SpiderMan();
const dead = new DeadPool(day);



const tab = [];

for (let i=0; i<=nbPony;i++){
    tab.push(new Pony(day));
}

const superiorPow = number => {
  number = String(number) + 'xx';
  let pow = '1';
  while (pow.length < number.length) {
    pow += '0';
  }
  return Number(pow);
};

const spiderInterval = setInterval(() => {
  const NumP = superiorPow(tab.length);
  const numbR = (Math.random() * NumP) % tab.length;
  const Number = Math.floor(numbR);
  spider.ri(tab[Number], Number)
    .then(() => {
      tab[Number].isAvailable = true;
    })
    .catch(() => {
    });
}, 5000);

const tranfoInterval = setInterval(() => {
  const NumP = superiorPow(tab.length);
  const numbR = (Math.random() * NumP) % tab.length;
  const Number = Math.floor(numbR);
  dead.helpToTransform(tab[Number], nbPony)
    .then(() => {
      console.log('Poney evolutuion'.inverse.green + '\n \n');
    })
    .catch(() => {
      console.log('Echec Evolution'.inverse.green + '\n \n');
    });
}, 1001);

const regenerationInterval = setInterval(() => {
  const NumP = superiorPow(tab.length);
  const numbR = (Math.random() * NumP) % tab.length;
  const Number1 = Math.floor(numbR);
  dead.G(tab[Number1], Number1)
    .then(() => {
      console.log('\n'.blue);
    })
    .catch(() => {
      console.log('\n');
    });
}, 900);

setTimeout(() => {
  clearInterval(spiderInterval);
  clearInterval(tranfoInterval);
  clearInterval(regenerationInterval);
}, 30000);






