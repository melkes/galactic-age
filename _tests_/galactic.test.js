import GalacticAge from "../src/galactic.js";

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

  test('should correctly calculate inputted age in Venus or Jupiter years', () => {
    const galacticAge = new GalacticAge(65);
    expect(galacticAge.getVenusYears()).toEqual(104.8.toFixed(1));
    expect(galacticAge.getJupiterYears()).toEqual(5.5.toFixed(1));
  });

  test('should determine how many years have passed since a past birthday', () => {
  const pastAge = new GalacticAge(65, 54);
  expect(pastAge.yearsSincePastAge()).toEqual(11);
  });

  test('should correctly calculate number of years since a past birthday in Mars years', () => {
    const pastAge = new GalacticAge(65, 54);
    expect(pastAge.pastMarsAge()).toEqual(5.9.toFixed(1));
    });
});