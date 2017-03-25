const EventEmitter = require('events').EventEmitter;
const day = new EventEmitter();


class DayNight
{
    constructor()
    {

        this.hours = 0;

        this.heureintervalle = setInterval(() => this.hours(), 10);

    }

    h(){
    this.hours++;

    if(this.hours == 1){
        day.emit('change','day');
        } else if (this.hours == 3) day.emit('change', 'night');
    }

    c(){
      clearInterval(this.heureintervalle);
    }
}



module.exports = {DayNight,day};

