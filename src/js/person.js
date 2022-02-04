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

  getMercuryYears(years) {
    let mercuryYears = Math.floor(years * 0.24);
    return mercuryYears;
  }

  getVenusYears(years) {
    let venusYears = Math.floor(years * 0.62);
    return venusYears;
  }

  getMarsYears(years) {
    let marsYears = Math.floor(years * 1.88);
    return marsYears;
  }

  getJupiterYears(years) {
    let jupiterYears = Math.floor(years * 11.86);
    return jupiterYears;
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
