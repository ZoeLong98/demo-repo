let carArray = carsData.cars;
console.log("here are our cars")
carArray.map((car) => {
    console.log(`${car.make}  ${car.model} ${car.color}`);
});

console.log("here are our blue cars")
const blueCars = carArray.filter((car) => {
    return car.color === "blue";
});
console.log(blueCars);