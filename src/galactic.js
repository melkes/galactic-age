export default function GalacticAge(age) {
  this.age = age;
  this.marsYears = 0;
}

GalacticAge.prototype.getMarsYears = function () {
  this.marsYears = (this.age / 1.88).toFixed(1);
};