import Person from "../src/js/person.js";

describe("Person", () => {
  let years = 25;
  let junkFood = "sometimes";
  let sport = "sometimes";
  let sleep = "enough";
  let laugh = "often";
  let newPerson;

  beforeEach(() => {
    newPerson = new Person(years, junkFood, sport, sleep, laugh);
  });

  test("should correctly create a person object with its human years", () => {
    expect(newPerson.yearsEarth).toEqual(25);
  });

  test("should correctly return a user's age in Mercury years", () => {
    expect(newPerson.getMercuryYears(years)).toEqual(6);
  });

  test("should correctly return a user's age in Venus years", () => {
    expect(newPerson.getVenusYears(years)).toEqual(15);
  });

  test("should correctly return a user's age in Mars years", () => {
    expect(newPerson.getMarsYears(years)).toEqual(47);
  });

  test("should correctly return a user's age in Jupiter years", () => {
    expect(newPerson.getJupiterYears(years)).toEqual(296);
  });

  test("should correctly return a user's life expectancy Human years", () => {
    newPerson.getLifeExpectancy();
    expect(newPerson.lifeExpectancy).toEqual(90);
  });

  test("should correctly return a user's life expectancy Human years", () => {
    let newPerson = new Person(25, "often", "often", "less", "rare");
    newPerson.getLifeExpectancy();
    expect(newPerson.lifeExpectancy).toEqual(70);
  });

  test("should correctly return a user's life expectancy Human years", () => {
    let newPerson = new Person(25, "rare", "rare", "more", "sometimes");
    newPerson.getLifeExpectancy();
    expect(newPerson.lifeExpectancy).toEqual(80);
  });
});
