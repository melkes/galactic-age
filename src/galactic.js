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

  pastMarsAge() {
    return (this.yearsSincePastAge() / 1.88).toFixed(1);
  }

}
