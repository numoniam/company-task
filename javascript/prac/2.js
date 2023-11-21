class Animal{
    constructor(name)
    {
        this.speed=0;
        this.name=name;
    }

    run(speed)
    {
        this.speed=speed
        alert(`${this.name} run with speed ${this.speed}`);
    }

    stop()
    {
        this.speed=0;
        alert(`${this.speed} stand still`)
    }
}

let animal=new Animal("my animal");

class Rabbit extends Animal{
    hide()
    {
        alert( `${this.name} hide`)
    }
}

new bit =new Rabbit('white rabbit');

bit.hide();