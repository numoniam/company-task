class Person{
    constructor(name)
    {
        this.name=name;
    }

    getName()
    {
        return this.name
    }

    setName(name){
        this.name=name
    }
}

let obj=new Person("jack")
obj.setName("savan")


console.log(obj.getName());