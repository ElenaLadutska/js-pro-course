function Car(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10)
    {
     this.name=name;
     this.model=model;
     this.year=year;
     this.color=color;
     this.maxSpeed=maxSpeed;
     this.fuelCapacity=fuelCapacity;
     this.fuelConsumption=fuelConsumption;   
    }
Car.prototype.getFullName=function()
    {
        return `${this.name}+${this.model}`;
    }
Car.prototype.getAge=function()
{
    let currentYear=2020;
    return currentYear-`${this.year}`;
}
Car.prototype.changeColor=function(color)
{
    if(this.color==color)
    {
        return 'It is the same color: ' + this.color;
    }
    else
    {
        return 'The color was changed: ' + (this.color = color);
    }
}
Car.prototype.calculateWay=function(kilometers,fuel)
{
    if(fuel<10)
    {
        alert('Better refuel')
    }
    let speed = this.maxSpeed / 2;
    let timeToReachDestination = Math.ceil(kilometers / speed * 60);
    let needToFuel = kilometers / this.fuelConsumption - fuel;
    let timesToRefuel = Math.ceil(needToFuel / this.fuelCapacity);

    console.log(`You need ${timeToReachDestination} minutes at the speed ${speed} to reach the destination.`);

    if (needToFuel <= 0) {
        return 'You have enough fuel to reach the destination';
    }
    else {
        return `You need ${needToFuel} liters of the fuel to reach the destination. You need ${timesToRefuel} time to refuel.`;
    }
}
function BMW(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10,garanty=2)
{
    Car.call(this,name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);
    this.garanty=garanty;
}
function Mercedes(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10,colorLight)
{
    Car.call(this,name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);
    this.colorLight=colorLight;
}
function Kia(name,model,year,color,maxSpeed,fuelCapacity=60,fuelConsumption=10,automaticParking)
{
    Car.call(this,name,model,year,color,maxSpeed,fuelCapacity,fuelConsumption);
    this.automaticParking=automaticParking;
}

BMW.prototype=Object.create(Car.prototype);
BMW.prototype.sunroof=function()
{
    alert(`The car ${this.name} has a sunroof`)
}
BMW.prototype.constructor=BMW;

Mercedes.prototype=Object.create(Car.prototype);
Mercedes.prototype.climateControl=function()
{
    alert(`The car ${this.name} has a climate control`);
}
Mercedes.prototype.constructor=Mercedes;

Kia.prototype=Object.create(Car.prototype);
Kia.prototype.antifreeze=function()
{
    alert(`The car ${this.name} has a antifreeze`)
}
Kia.prototype.constructor=Kia;

let bmwI8=new BMW('bmwI8','i8',2014,'black',20000,70,20,5);
let mersSprinter=new Mercedes('mercedesBenz','sprinter',2011,'red',18000,75,18,'purple');
let kiaMotors=new Kia('kiaSport','m1',2009,'metalic',25000,80,30,true);
console.log(bmwI8);
console.log(mersSprinter);
console.log(kiaMotors);