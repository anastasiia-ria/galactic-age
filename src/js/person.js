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

  getMarsYears() {}
}
