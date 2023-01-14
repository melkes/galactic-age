import GalacticAge from "../src/galactic.js";

describe('GalacticAge', () => {
  let galacticAge;
  let pastAge;
  let futureAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(65);
    pastAge = new GalacticAge(65, 54);
    futureAge = new GalacticAge(65, 54, 75);
  });

  test('should create an object with an inputted age',() => {
    expect(galacticAge.age).toEqual(65);
  });

  test('should correctly calculate inputted age in Mars years', () => {
    expect(galacticAge.getMarsYears()).toEqual(34.6.toFixed(1));
  });

  test('should correctly calculate inputted age in Mercury years', () => {
    expect(galacticAge.getMercuryYears()).toEqual(270.8.toFixed(1));
  });

  test('should correctly calculate inputted age in Venus or Jupiter years', () => {
    expect(galacticAge.getVenusYears()).toEqual(104.8.toFixed(1));
    expect(galacticAge.getJupiterYears()).toEqual(5.5.toFixed(1));
  });

  test('should determine how many years have passed since a past birthday', () => {
    expect(pastAge.yearsSincePastAge()).toEqual(11);
  });

  test('should correctly calculate number of years since a past birthday in Mars years', () => {
    expect(pastAge.pastMarsAge()).toEqual(5.9.toFixed(1));
  });

  test('should correctly calculate number of years since a past birthday in Mercury, Venus, Jupiter years', () => {
    expect(pastAge.pastMercuryAge()).toEqual(45.8.toFixed(1));
    expect(pastAge.pastVenusAge()).toEqual(17.7.toFixed(1));
    expect(pastAge.pastJupiterAge()).toEqual(0.9.toFixed(1));
  });

  test('should correctly calculate number of years which have yet to pass until a given future birthday in Mercury years', () => {
    expect(futureAge.futureMercuryAge()).toEqual(41.7.toFixed(1));
  });

  test('should correctly calculate number of years which have yet to pass until a given future birthday in Mars, Venus, Jupiter years', () => {
    expect(futureAge.futureVenusAge()).toEqual(16.1.toFixed(1));
    expect(futureAge.futureMarsAge()).toEqual(5.3.toFixed(1));
    expect(futureAge.futureJupiterAge()).toEqual(0.8.toFixed(1));
  });
});