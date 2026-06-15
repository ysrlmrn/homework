// --- 1. מחלקת הבסיס: Vehicle ---
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
        this.running = false;
    }

    start() {
        this.running = true;
        console.log(`${this.brand} engine started`);
    }

    stop() {
        this.running = false;
        console.log(`${this.brand} engine stopped`);
    }
}

// --- 2. מחלקה יורשת: Car ---
class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed); // קורא לבנאי של Vehicle
        this.doors = doors;
    }

    openTrunk() {
        console.log(`${this.brand} trunk is open`);
    }
}

// --- 3. מחלקה יורשת: ElectricCar ---
class ElectricCar extends Car {
    constructor(brand, speed, doors, batteryLevel) {
        super(brand, speed, doors); // קורא לבנאי של Car
        this.batteryLevel = batteryLevel;
    }

    charge() {
        this.batteryLevel = 100;
        console.log(`${this.brand} is fully charged`);
    }
    
}
const genericVehicle = new Vehicle("Yamaha", 120);
const gasCar = new Car("Toyota", 180, 4);
const tesla = new ElectricCar("Tesla", 250, 4, 45);

console.log("--- בדיקת מתודות ---");


genericVehicle.start(); 
gasCar.start();         
tesla.start();          

genericVehicle.stop();  
gasCar.stop();          
tesla.stop();       


gasCar.openTrunk();     
tesla.openTrunk();   


tesla.charge();     

console.log("\n--- בדיקת instanceof ---");


console.log(tesla instanceof ElectricCar); 
console.log(tesla instanceof Car);      
console.log(tesla instanceof Vehicle);  

console.log(gasCar instanceof Car);        
console.log(gasCar instanceof Vehicle);     
console.log(gasCar instanceof ElectricCar); 

// בדיקת רכב בסיסי
console.log(genericVehicle instanceof Vehicle);     
console.log(genericVehicle instanceof Car);         
console.log(genericVehicle instanceof ElectricCar); 
