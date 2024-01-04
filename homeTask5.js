class Creature{
    constructor(name, healthPoints, damage){
        Creature.number++;
        this.#id = Creature.number;
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage = damage;
    }
    static number = 0;
    #id;
    name;
    healthPoints;
    damage;
    get id(){
        return this.#id;
    }
    defeat(){
        console.log(`${this.name} уничтожил противника.`);
    }
}

class Player extends Creature{
    #lvl;
    get lvl(){
        return this.#lvl;
    }
    constructor(name, healthPoints, damage, lvl){
        super(name, healthPoints, damage);
        this.#lvl = lvl;
    }
    attack(other){
        other.healthPoints = other.healthPoints - this.damage;
        if(other.healthPoints <= 0){
            this.#lvl++;
            this.defeat();
            return true;
        }
        else return false; 
    }
}

class  Enemy extends Creature{
    constructor(name, healthPoints, damage){
        super(name, healthPoints, damage);
    }
    attack(obj){
        obj.healthPoints = obj.healthPoints - this.damage;
        if(obj.healthPoints <= 0){
            this.defeat();
            return true;
        }
        else return false;
    }
}

let human = new Player('Legolas', 100, 20, 3);
let ork = new Enemy('Orr', 40, 10);

do{
    human.attack(ork);
    ork.attack(human);
}while(human.attack(ork) == 'false' || ork.attack(human) == 'false');

if(human.healthPoints > 0)
    console.log(human);
else console.log(ork);
