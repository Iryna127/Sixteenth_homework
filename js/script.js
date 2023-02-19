class Plane {
  constructor(namePlane) {
    this.name = namePlane;
    this.isFlying = false;
  }
  //true
  takeOff() {
    console.log('flying');
    return (this.isFlying = true);
  }
  //false
  land() {
    console.log('landed');
    return (this.isFlying = false);
  }
}
let first = new Plane('FirstPlane');
let second = new Plane('SecondPlane');
let third = new Plane('ThirdPlane');
//buttons
let numOfLiting = document.getElementById('counter')
function firstChangHandler() {
  first.isFlying == false ? first.takeOff() : first.land();
  return airport.getFlyingPlanes();
}

function secondChangHandler() {
  second.isFlying == false ? second.takeOff() : second.land();
  return airport.getFlyingPlanes();
}
function thirdChangHandler() {
  third.isFlying == false ? third.takeOff() : third.land();
  return airport.getFlyingPlanes();
}

class Airport {
  constructor(...namePlane) {
    this.planes = namePlane;
  }

  addplanes() {}
  getFlyingPlanes() {
    let counter = 0;
    for (let key of this.planes) {
      if (key.isFlying == true) {
        counter += 1;
      }
      console.log(key.isFlying);
    }
    return numOfLiting.innerHTML = counter;
  }
}

const airport = new Airport(first, second, third);
console.log(airport);

//SECOND TASK
class User {
  constructor(userName, surName) {
    this.name = userName;
    this.surname = surName;
  }
  getFullName() {
    return this.name + ' ' + this.surname;
  }
}
const userOne = new User('Iryna', 'Vladova');
console.log(userOne.getFullName());

class Student extends User {
  constructor(userName, surName, year) {
    super(userName, surName);
    this.years = year;
    this.thisYear = 2022;
  }
  getCourse() {
    return this.thisYear - this.years;
  }
}

let m = new Student('Iryna', 'Vladova', getYear());
console.log(m.getCourse());

function getYear() {
  year = +prompt('Enter Year from 2017 till 2021');

  while ((this.year < 2017) || (this.year >= 2022)) {
    year = prompt('Try again');
  }
  return this.year;
}
console.log(this.year);
