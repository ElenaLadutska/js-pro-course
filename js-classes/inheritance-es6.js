class Car{
constructor(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10)
    {
     this.name=name;
     this.model=model;
     this.year=year;
     this.color=color;
     this.maxSpeed=maxSpeed;
     this.fuelCapacity=fuelCapacity;
     this.fuelConsumption=fuelConsumption;   
    }
}
class BMW extends Car{
    constructor(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10,garanty=2)
    {
        super(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);
        this.garanty=garanty
    }
    sunroof(){alert(`The car ${this.name} has a sunroof`)}
}
class Mercedes extends Car{
    constructor(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10,colorLight)
    {
        super(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);
        this.colorLight=colorLight
    }
    climateControl(){alert(`The car ${this.name} has a climate control`)}
}
class Kia extends Car{
    constructor(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10,automaticParking)
    {
        super(name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);
        this.automaticParking=automaticParking
    }
    antifreeze(){alert(`The car ${this.name} has a antifreeze`)}
}
const bmwI8=new BMW('bmwI8','i8',2014,'black',20000,70,20,5);
const mersSprinter=new Mercedes('mercedesBenz','sprinter',2011,'red',18000,75,18,'purple');
const kiaMotors=new Kia('kiaSport','m1',2009,'metalic',25000,80,30,true);
console.log(bmwI8);
console.log(mersSprinter);
console.log(kiaMotors);