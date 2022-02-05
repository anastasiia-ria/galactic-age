export default class Person {
  constructor(yearsEarth, junkFood, sport, sleep, laugh) {
    this.yearsEarth = yearsEarth;
    this.junkFood = junkFood;
    this.sport = sport;
    this.sleep = sleep;
    this.laugh = laugh;
    this.lifeExpectancy = 80;
    this.yearsLeft = 0;
    this.yearsPassed = 0;
  }

  getGalacticYears(years, planet) {
    let planetYears;
    switch (planet) {
      case "mercury":
        planetYears = Math.round((years / 0.24) * 100) / 100;
        break;
      case "venus":
        planetYears = Math.round((years / 0.62) * 100) / 100;
        break;
      case "mars":
        planetYears = Math.round((years / 1.88) * 100) / 100;
        break;
      case "jupiter":
        planetYears = Math.round((years / 11.86) * 100) / 100;
        break;
      case "saturn":
        planetYears = Math.round((years / 29.48) * 100) / 100;
        break;
      case "uranus":
        planetYears = Math.round((years / 84.07) * 100) / 100;
        break;
      case "neptune":
        planetYears = Math.round((years / 164.9) * 100) / 100;
        break;
      case "pluto":
        planetYears = Math.round((years / 248.59) * 100) / 100;
        break;
    }
    return planetYears;
  }

  getLifeExpectancy() {
    switch (this.junkFood) {
      case "rare":
        this.lifeExpectancy += 5;
        break;
      case "often":
        this.lifeExpectancy -= 5;
        break;
    }
    switch (this.sport) {
      case "rare":
        this.lifeExpectancy -= 5;
        break;
      case "often":
        this.lifeExpectancy += 5;
        break;
    }
    switch (this.sleep) {
      case "less":
        this.lifeExpectancy -= 5;
        break;
      case "enough":
        this.lifeExpectancy += 5;
        break;
    }
    switch (this.laugh) {
      case "rare":
        this.lifeExpectancy -= 5;
        break;
      case "often":
        this.lifeExpectancy += 5;
        break;
    }
  }

  getYearsDifference() {
    if (this.lifeExpectancy > this.yearsEarth) {
      this.yearsLeft = this.lifeExpectancy - this.yearsEarth;
    } else {
      this.yearsPassed = this.yearsEarth - this.lifeExpectancy;
    }
  }
}
