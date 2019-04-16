// Branding

type BoatId = number & { _type: 'BoatId'};
type CarId = number & { _type: 'CarId'};

let carId: CarId;
let boatId: BoatId;

let car: Car;
let boat: Boat;

car = getCarById(carId); // OK
car = getCarById(boatId); // ERROR

boat = getBoatById(boatId); // OK
boat = getBoatById(carId); // ERROR

carId = 1; // ERROR
boatId = 2; // ERROR
car = getCarById(3); // ERROR
boat = getBoatById(4); // ERROR

function makeCarIdFromNumber(id: number): CarId {
    return vin as any;
}

carId = makeCarIdFromNumber(3); // OK

