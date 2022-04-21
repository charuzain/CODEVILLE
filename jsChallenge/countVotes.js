/* Instructions
Our first function, bestOdds(), will receive two parameters. The first parameter will be an array of strings that are either red, green, or blue, representing the tickets that a particular person has. The second parameter is an object that shows how many entries there currently are for each raffle. By looking at the tickets that the particular person has, your function should return a string that lets the person know which raffle they have the highest chance of winning. The format of the response should be as follows (without the square brackets): "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, so we will also need to complete a helper function. This helper function countTickets() will be called from within bestOdds() and receive the array of strings that are either red, green, or blue. The function will count how many of each string there are, and then return an object with the individual counts.

Examples
Input:
// for bestOdds() function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}
Output:
"You have the best odds of winning the red raffle."
*/
const countVotes = (tickets)=>{
  const ticketsCount = {};
  for (let ticket of tickets) {
    if (!ticketsCount[ticket]) {
      ticketsCount[ticket] = 1;
    } else {
      ticketsCount[ticket]++;
    }
  }
  return ticketsCount;
};

const  bestOdds = (tickets,raffleEntries)=>{
  const ticketsCount = countVotes(tickets);
  let count = 0;
  for (let key in ticketsCount) {
    if (count < ticketsCount[key] / raffleEntries[key]) {
      count = ticketsCount[key] / raffleEntries[key];

    }

    console.log(count);
   

  
  console.log(ticketsCount);
  }
};
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
];
const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
};
// console.log(countVotes(tickets));
console.log(bestOdds(tickets,raffleEntries));