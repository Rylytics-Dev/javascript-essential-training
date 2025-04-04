/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Potion {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    effect,
    price,
    used
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.price = price;
    this.effect = effect;
    this.used = used;
  }
  // Add methods like normal functions:
  toggleUsed(used) {
    this.used = used;
  }

  fillVolume(amount) {
    this.volume += amount;
    console.log(
      this.name +
        " volume increased by " +
        amount +
        ". New volume: " +
        this.volume
    );
  }
}

export default Potion;
