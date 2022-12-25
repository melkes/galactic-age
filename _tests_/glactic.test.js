import GalacticAge from "./../src/galactic.js";

describe('GalacticAge', () => {

  test('should create an object with an inputted age',() => {
  const galacticAge = new GalacticAge(65);
  expect(galacticAge.age).toEqual(65);
  });

  test('should correctly calculate inputted age in Mars years', () => {
    const galacticAge = new GalacticAge(65);
    expect(galacticAge.marsYears).toEqual(15.6);
  });

});