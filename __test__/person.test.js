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
    expect(newPerson.getGalacticYears(years, "mercury")).toEqual(104.17);
  });

  test("should correctly return a user's age in Venus years", () => {
    expect(newPerson.getGalacticYears(years, "venus")).toEqual(40.32);
  });

  test("should correctly return a user's age in Mars years", () => {
    expect(newPerson.getGalacticYears(years, "mars")).toEqual(13.3);
  });

  test("should correctly return a user's age in Jupiter years", () => {
    expect(newPerson.getGalacticYears(years, "jupiter")).toEqual(2.11);
  });

  test("should correctly return a user's age in Saturn years", () => {
    expect(newPerson.getGalacticYears(years, "saturn")).toEqual(0.85);
  });

  test("should correctly return a user's age in Uranus years", () => {
    expect(newPerson.getGalacticYears(years, "uranus")).toEqual(0.3);
  });

  test("should correctly return a user's age in Neptune years", () => {
    expect(newPerson.getGalacticYears(years, "neptune")).toEqual(0.15);
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

  test("should correctly return how many years a user has left to live on Earth", () => {
    newPerson.getLifeExpectancy();
    newPerson.getYearsDifference();
    expect(newPerson.yearsLeft).toEqual(65);
  });

  test("should correctly return how many years a user has lived past the life expactancy on Earth", () => {
    newPerson.yearsEarth = 100;
    newPerson.getLifeExpectancy();
    newPerson.getYearsDifference();
    expect(newPerson.yearsPassed).toEqual(10);
  });
});
