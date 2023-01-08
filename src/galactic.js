export default class GalacticAge {
  constructor(age, prevAge, futureAge) {
    this.age = age;
    this.prevAge = prevAge;
    this.futureAge = futureAge;
  }

  getMercuryYears() {
    return (this.age / 0.24).toFixed(1);
  }
  getVenusYears() {
    return (this.age / 0.62).toFixed(1);
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
    return (this.yearsSincePastAge() / 0.24).toFixed(1);
  }
  pastVenusAge() {
    return (this.yearsSincePastAge() / 0.62).toFixed(1);
  }
  pastMarsAge() {
    return (this.yearsSincePastAge() / 1.88).toFixed(1);
  }
  pastJupiterAge() {
    return (this.yearsSincePastAge() / 11.86).toFixed(1);
  }

  yearsTilFutureAge() {
    return this.futureAge - this.age;
  }
  
  futureMercuryAge() {
    return (this.yearsTilFutureAge() / 0.24).toFixed(1);
  }
  futureVenusAge() {
    return (this.yearsTilFutureAge() / 0.62).toFixed(1);
  }
  futureMarsAge() {
    return (this.yearsTilFutureAge() / 1.88).toFixed(1);
  }
  futureJupiterAge() {
    return (this.yearsTilFutureAge() / 11.86).toFixed(1);
  }
}
