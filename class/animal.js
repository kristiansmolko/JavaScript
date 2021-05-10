export class Animal{
    _dead = false;
    constructor(name, colour, news){
        this.name = name;
        this.colour = colour;
        this.news = news;
        this.informWorld("spawned");
    }

    informWorld(message){
        this.news.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " " +message)
    }

    die(){
        if (!this._dead){
            this._dead = true;
            this.informWorld('died');
        } else {
            this.informWorld("doesn't have more lives");
        }
    }

    isAlive(){
        if (!this._dead) this.informWorld('is living amazing life');
        else this.informWorld('is unlucky, not with us anymore');
    }

    makeSound(){
        if (!this._dead) this.informWorld('prrrr');
    }
}