// Q no 79

let car = {
    make:"Landcrusor",
    model:"Toyota",
    year: 2020,
}
console.log(car.model);

//  Q no 80

let car1 = {
    make:"Landcrusor",
    model:"Toyota",
    year:2020,
    color:"Blue",
};

car1.year = 2021;

console.log(car1);

//  Q no 81

function logObjectProperty(object:object) {
      for(let property in object){
          console.log(`${property}:${object[property]}`)
      }
}
logObjectProperty(
    {make:"Toyota",
     model:"Landcrusor",
     year:2021,              
     color:"blue"}
     )