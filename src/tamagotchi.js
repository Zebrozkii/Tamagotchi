export default class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.funLevel = 10;
    this.restLevel = 10;
  }

  setFood() {
    setInterval(() => {
      this.foodLevel--;
    }, 2500);
  }

  setFun() {
    setInterval(() => {
      this.funLevel--;
    }, 3500);
  }

  setRest() {
    setInterval(() => {
      this.restLevel--;
    }, 4500);
  }

  didYouDie() {

    if (this.foodLevel <= 0) {
      return true;
      } else if (this.funLevel <= 0) {
        return true;
      } else if (this.restLevel <= 0) {
        return true;
      } else {
        return false;
      }
    }

  feed() {
    this.foodLevel = 10;
  }

  play() {
    this.funLevel = 10;
  }

  rest() {
    this.restLevel = 10;
  }

}
