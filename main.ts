/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2026-01-05
 * @fileoverview this program calculates the cost of someones shopping list
 */

//determines how many items are in the order. plus the 2 arrays
const amount = Number(prompt("How many items are you going to purchase?"));
const item: string[] = Array(amount);
const cost: number[] = Array(amount);

//loop to ask the user for the item and its cost.
for (let currentnumber = 0; currentnumber < amount; currentnumber++) {
const item1 = String(prompt("Enter the item:"));
const cost1 = Number(prompt("Enter the cost:"));
item[currentnumber] = item1;
cost[currentnumber] = cost1;
}

//calculating the total and the HST along with discount
let subtotal = 0

for (let currentnumber1 = 0; currentnumber1 < amount; currentnumber1++) {
  subtotal += cost[currentnumber1];
}

const discount = (subtotal * 0.10)
const HST = subtotal * 0.13
const total = (subtotal - discount) + HST


//displaying the items, subtotal, discount, HST and the overall total.
console.log(`Your shopping cart includes ${item} .`);
console.log(`The subtotal cost of the trip was $${subtotal}.`);
console.log(`You are eligible for a ${discount} dollar discount`);
console.log(`The HST is $${HST}`);
console.log(`The total is $${total}.`);

console.log("\nDone.");
