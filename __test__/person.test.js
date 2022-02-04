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
    expect(newPerson.getMercuryYears).toEqual(6);
  });
});
