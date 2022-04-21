/* Challenge #19 - Pumpkin Spice and Everything Nice
This is the Codeville Fall Festival, and nothing says fall more than pumpkin spice. At this year's festival, there will be three ways for the people of Codeville to get their pumpkin spice fix:

Pumpkin pie //5 , 30g
Pumpkin spice lattes //3 15g
Pumpkin spice macarons //1 3gm
=========================
      Instructions
=========================
Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice
We need to write a function, pumpkinSpice(money) that will take in a number, or how much the festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying
Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.

Pumpkin pie //5 , 30g
Pumpkin spice lattes //3 15g
Pumpkin spice macarons //1 3gm

Examples
Input:
const money = 9
Output:
[1, 1, 1, 48] */


const pumpkinSpice = (money) => {
  let output = [];
  let amount = 0;
  let remainingMoney;

  output[0] = Math.trunc(money / 5); // 9-5 -->4
  amount = output[0] * 30;
  remainingMoney = money - (5 * output[0]);

  if (remainingMoney >= 3) {
    output[1] = Math.trunc(remainingMoney / 3);
    amount += output[1] * 15;
    remainingMoney -= 3 * output[1];
  }

  if (remainingMoney >= 1) {
    output[2] = Math.trunc(remainingMoney / 1);
    amount += output[2] * 3;
    remainingMoney -=  output[2];
  }

  output[3] = amount;
  return output;
};

const money = 9;

console.log(pumpkinSpice(money));