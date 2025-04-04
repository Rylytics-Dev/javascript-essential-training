/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Potion from "./Potion.js";

const healing = new Potion(
  "Healing Potion",
  30,
  "red",
  50,
  "Heals the drinker by 2d4 + 4 hit points",
  false
);

const mana = new Potion(
  "Mana Potion",
  30,
  "blue",
  50,
  "Restores the drinker by 2d4 + 4 mana",
  false
);

console.log(healing); // Access the entire healing potion object
console.log(mana); // Access the entire mana potion object

console.log(healing.used);
