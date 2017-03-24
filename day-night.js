const EventEmitter = require('events').EventEmitter;
const day = new EventEmitter();

class Daynight
{
    constructor()
    {


        this.hours = 0;

        this.nuit = null;

        this.heureintervale = setInterval(() => this.heure(), 240);

    }

    heure(){
    this.hours++;

    if(this.hours == 8){
        day.emit('change','day');
        } else if (this.hours == 22){
        day.emit('change','night');
        }
    }
}



