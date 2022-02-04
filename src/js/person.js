export default class Person {
  constructor(yearsEarth, junkFood, sport, sleep, laugh) {
    this.yearsEarth = yearsEarth;
    this.junkFood = junkFood;
    this.sport = sport;
    this.sleep = sleep;
    this.laugh = laugh;
    this.lifeExpectancy = 80;
    this.yearsMercury = 0;
    this.yearsVenus = 0;
    this.yearsMars = 0;
    this.yearsJupiter = 0;
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
      case "sometimes":
        this.lifeExpectancy = this.lifeExpectancy;
        break;
      case "often":
        this.lifeExpectancy -= 5;
        break;
    }
    switch (this.sport) {
      case "rare":
        this.lifeExpectancy -= 5;
        break;
      case "sometimes":
        this.lifeExpectancy = this.lifeExpectancy;
        break;
      case "often":
        this.lifeExpectancy += 5;
        break;
    }
    switch (this.sleep) {
      case "less":
        this.lifeExpectancy -= 5;
        break;
      case "more":
        this.lifeExpectancy = this.lifeExpectancy;
        break;
      case "enough":
        this.lifeExpectancy += 5;
        break;
    }
    switch (this.laugh) {
      case "rare":
        this.lifeExpectancy -= 5;
        break;
      case "sometimes":
        this.lifeExpectancy = this.lifeExpectancy;
        break;
      case "often":
        this.lifeExpectancy += 5;
        break;
    }
  }
}
