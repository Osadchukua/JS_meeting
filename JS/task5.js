// cars: [
//     { brand: 'Mazda', mileage: 17 },
//     { brand: 'Honda', mileage: 80 },
//     { brand: 'Nissan', mileage: 50 },
// ];

//     1. створити таксі парк(додаємо, редагуємо, видаляемо, оновлюємо пробіг)
// 2. Оновлення пробігу

const taxiPark = {
  cars: [
    { brand: 'Mazda', mileage: 17 },
    { brand: 'Honda', mileage: 80 },
    { brand: 'Nissan', mileage: 50 },
  ],
  getCars() {
    return this.cars;
  },
  addCar(newCar) {
    let limit = 100;
    for (const car of this.cars) {
      if (car.brand === newCar.brand || newCar.mileage >= limit) {
        return `Sorry! We don't need ${newCar.brand}!`;
      }
    }
    return this.cars.push(newCar);
  },
  removeCar(carName) {
    for (const car of this.cars) {
      let idx = this.cars.indexOf(car);
      if (carName === this.cars[idx].brand) {
        return this.cars.splice(idx, 1);
      }
    }
    return `We don't have ${carName} in our taxi Park!`;
  },
  updateCarMily(carName, carMileage) {
    for (const car of this.cars) {
      let idx = this.cars.indexOf(car);
      if (carName === this.cars[idx].brand) {
        return (this.cars[idx].mileage = carMileage);
      }
    }
    return `No such ${carName} in our taxi Park - can't update mileage!`;
  },
};

console.log(taxiPark.getCars());
console.log(taxiPark.addCar({ brand: 'Toyota', mileage: 40 }));
console.log(taxiPark.addCar({ brand: 'Mazda', mileage: 10 }));
console.log(taxiPark.addCar({ brand: 'Volvo', mileage: 109 }));
console.log(taxiPark.getCars());
console.log(taxiPark.removeCar('Audi'));
console.log(taxiPark.getCars());
console.log(taxiPark.removeCar('Honda'));
console.log(taxiPark.getCars());
console.log(taxiPark.updateCarMily('Nissan', 75));
console.log(taxiPark.getCars());
console.log(taxiPark.updateCarMily('BMW', 36));
console.log(taxiPark.getCars());
