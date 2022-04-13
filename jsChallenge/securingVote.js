/*Securing the Vote
Instructions
When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings. It will then update the standings, adding the new vote to the count.

To test the system, we’ll need to complete the function castVote(name, votes) that takes in the name of a candidate and an array of tallied votes. The function should return an array with the updated standings.

We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

The first item in the array votes[0] are the votes for Tim
The second item in the arry votes[1] are the votes for Sally
The third item in the array votes[2] are the votes for Beth
For example in this array [0, 2, 1] there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.

Examples
Input:

const name = 'Sally';
const votes = [
  0, // Tim
  2, // Sally
  1 // Beth
]
Output:
[
  0, // Tim
  3, // Sally
  1 // Beth
]

 The first item in the array votes[0] are the votes for Tim
The second item in the arry votes[1] are the votes for Sally
The third item in the array votes[2] are the votes for Beth */

const castVote = (name, votes)=>{
  if (name === "Tim") {
    votes[0]++;
  } else if (name === "Sally") {
    votes[1]++;
  } else {
    votes[2]++;
  }
  return votes;
};

const name = 'Tim';
const votes = [
  0, // Tim
  2, // Sally
  1 // Beth
];

console.log(castVote(name , votes));