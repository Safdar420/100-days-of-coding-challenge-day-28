// Q no 79
var car = {
    make: "Landcrusor",
    model: "Toyota",
    year: 2020,
};
console.log(car.model);
//  Q no 80
var car1 = {
    make: "Landcrusor",
    model: "Toyota",
    year: 2020,
};
// car1.color = "Blue";
car1.year = 2021;
console.log(car1);
//  Q no 81
function logObjectProperty(object) {
    for (var property in object) {
        console.log("".concat(property, ":").concat(object[property]));
    }
}
logObjectProperty({ make: "Toyota",
    model: "Landcrusor",
    year: 2021,
    color: "blue" });
