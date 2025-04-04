/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bag_of_holding = {
  size: "medium",
  color: "black",
  weight: 10,
  potion: {
    type: "healing",
    potency: 50,
    quantity: 3,
  },
};

const longsword = {
  name: "Longsword of Fire",
  base_damage: "1d8",
  base_damage_type: "slashing",
  modifier: "strength",
  enchantment: {
    additional_damage_type: "fire",
    additional_damage: 2,
  },
};

console.log(bag_of_holding); // Access the entire bag_of_holding object
console.log(longsword);
