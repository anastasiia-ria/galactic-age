import Person from "../src/js/person.js";

describe("Person", () => {
  let years = 25;
  let newPerson;

  beforeEach(() => {
    newPerson = new Person(years);
  });

  test("should correctly create a person object with its human years", () => {
    expect(newPerson.yearsEarth).toEqual(25);
  });

  test("should correctly return a user's age in Mercury years", () => {
    newPerson.getMercuryYears();
    expect(newPerson.yearsMercury).toEqual(6);
  });

  test("should correctly return a user's age in Venus years", () => {
    newPerson.getVenusYears();
    expect(newPerson.yearsVenus).toEqual(15);
  });
});
