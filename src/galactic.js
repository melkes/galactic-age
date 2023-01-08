export default class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  getMarsYears() {
    return (this.age / 1.88).toFixed(1);
  }

  getMercuryYears() {
    return (this.age / .24).toFixed(1);
  }
}
