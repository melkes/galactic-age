import GalacticAge from "./../src/galactic.js";

describe('GalacticAge', () => {

  test('should create an object with an inputted age',() => {
  const galacticAge = new GalacticAge(65);
  expect(galacticAge.age).toEqual(65);
  });

  test('should correctly calculate inputted age in Mars years', () => {
    const galacticAge = new GalacticAge(65);
    expect(galacticAge.getMarsYears()).toEqual(34.6.toFixed(1));
  });

  test('should correctly calculate inputted age in Mercury years', () => {
    const galacticAge = new GalacticAge(65);
    expect(galacticAge.getMercuryYears()).toEqual(270.8.toFixed(1));
  });

});