export default class Person {
  constructor(yearsEarth) {
    this.yearsEarth = yearsEarth;
    this.yearsMercury = 0;
    this.yearsVenus = 0;
    this.yearsMars = 0;
    this.yearsJupiter = 0;
  }

  getMercuryYears() {
    this.yearsMercury = Math.floor(this.yearsEarth * 0.24);
  }

  getVenusYears() {
    this.yearsVenus = Math.floor(this.yearsEarth * 0.62);
  }

  getMarsYears() {
    this.yearsMars = Math.floor(this.yearsEarth * 1.88);
  }

  getJupiterYears() {
    this.yearsJupiter = Math.floor(this.yearsEarth * 11.86);
  }
}
