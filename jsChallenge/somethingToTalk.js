/*********************************************************************
                  Something To Talk About
 *********************************************************************
Instructions
Given a question topic, complete a function interviewAnswer(topic) that returns your stance on that particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return “We’ll have to get creative!”
When asked about the economy, the function should return “Time is money.”
When asked about transportation, the function should return “It’s going to be a long road, so we better get moving.”

If you’re asked about a topic that isn’t in the list above, respond with a default statement. (For example, “QUACK!”)
Examples
Input:
const topic = 'economy'
Output:Time is money.

Input:
const topic = 'transportation'
Output:It's going to be a long road, so we better get moving.
**********************************************************************
                          Solution
*********************************************************************/

const interviewAnswer = (topic)=>{
  let output = "";
  if (topic === "art funding") {
    output = "We’ll have to get creative!";
  } else if (topic === "economy") {
    output = "Time is money";
  } else if (topic === "transportation") {
    output = "It's going to be a long road, so we better get moving";
  } else {
    output = "QUACK!";
  }
  return output;
  
};

console.log(interviewAnswer('economy'));
console.log(interviewAnswer('art funding'));
console.log(interviewAnswer('transportation'));
console.log(interviewAnswer('hello'));



