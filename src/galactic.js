export default class GalacticAge {
  constructor(age, prevAge) {
    this.age = age;
    this.prevAge = prevAge;
  }

  getMercuryYears() {
    return (this.age / .24).toFixed(1);
  }
  getVenusYears() {
    return (this.age / .62).toFixed(1);
  }
  getMarsYears() {
    return (this.age / 1.88).toFixed(1);
  }
  getJupiterYears() {
    return (this.age / 11.86).toFixed(1);
  }
  yearsSincePastAge() {
    return this.age - this.prevAge;
  }

  pastMercuryAge() {
    return (this.yearsSincePastAge() / .24).toFixed(1);
  }
  pastVenusAge() {
    return (this.yearsSincePastAge() / .62).toFixed(1);
  }
  pastMarsAge() {
    return (this.yearsSincePastAge() / 1.88).toFixed(1);
  }
  pastJupiterAge() {
    return (this.yearsSincePastAge() / 11.86).toFixed(1);
  }
}
