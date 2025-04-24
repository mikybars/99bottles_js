import { capitalize, downTo } from './helpers';

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const successor = new BottleNumber(bottleNumber.successor());
    return (
      `${capitalize(bottleNumber.quantity())} ${bottleNumber.container()} of beer on the wall, ` +
      `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
      `${bottleNumber.action()}, ` +
      `${successor.quantity()} ${successor.container()} of beer on the wall.\n`
    );
  }
}

class BottleNumber {

  constructor(number) {
    this.number = number;
  }

  container() {
    if (this.number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  quantity() {
    if (this.number === 0) {
      return 'no more';
    } else {
      return this.number.toString();
    }
  }

  action() {
    if (this.number === 0) {
      return 'Go to the store and buy some more';
    } else {
      return `Take ${this.pronoun()} down and pass it around`;
    }
  }

  successor() {
    if (this.number === 0) {
      return 99;
    } else {
      return this.number - 1;
    }
  }
}

export { Bottles };
