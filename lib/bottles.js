import { capitalize, downTo } from './helpers';

class Bottles {
  bottleNumberFor(number) {
    let bottleNumberClass;
    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0;
        break;
      case 1:
        bottleNumberClass = BottleNumber1;
        break;
      default:
        bottleNumberClass = BottleNumber;
        break;
    }
    return new bottleNumberClass(number);
  }

  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    const bottleNumber = this.bottleNumberFor(number);
    const successor = this.bottleNumberFor(bottleNumber.successor());
    return (
      capitalize(`${bottleNumber} of beer on the wall, `) +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action()}, ` +
      `${successor} of beer on the wall.\n`
    );
  }
}

class BottleNumber {

  constructor(number) {
    this.number = number;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  quantity() {
    return this.number.toString();
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  successor() {
    return this.number - 1;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more';
  }

  successor() {
    return 99;
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return 'bottle';
  }
}

export { Bottles };
