// Flavoring

interface Flavoring<FlavorT> {
  _type?: FlavorT;
}
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;

type CarId = Flavor<number, “CarId”>
type BoatId = Flavor<number, “BoatId”>

let boatId: BoatId = 5; // OK
let carId: CarId = 3; // OK

let carId: CarId = boatId; // ERROR


