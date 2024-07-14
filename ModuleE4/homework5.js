class ElectricalApplice{
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    plugin(){
        console.log(this.name + ' is plugged ')
    this.isPlugged = true
    }
}

class Computer extends ElectricalApplice {
    constructor(color, name, power) {
        super(name, power);
        this.color = color;

    }

    getPowerUsed = function () {
        return this.isPlugged ? this.power : 0;
    }
}
class Lampa extends ElectricalApplice {
    constructor(color, name, power) {
        super(name, power);
        this.color = color;

    }

    getPowerUsed = function () {
        return this.isPlugged ? this.power : 0;

    }
}

const lampa = new Lampa('black', 'lampa', 40)
const computer = new Computer('white','computer', 100)
console.log(lampa.getPowerUsed())

computer.plugin()
console.log(computer.getPowerUsed())

