/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. 

The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!


const formatText = (message) => {
  const formatedMessage = message.trim().toLowerCase().split("_");
  const newText = [];
  const [first, second] = formatedMessage;
  newText.push(first, second[0].toUpperCase() + second.slice(1));
  const camelCase = newText.join("");
  console.log(camelCase);
};

formatText("underscore_case");
formatText("first_name");
formatText("Some_Variable");
formatText("calculate_AGE");
formatText("delayed_departure");
*/

const flights =
  "_Delayed_Departure;fao9574754;txl125645;11:25+_Arrival;bru02589;fao58945;11:45+_Delayed_Arrival;hel954855;fao954265;12:05+_Departure;fao78595;lis5896314;12:30";

const changeCase = (code: string) => code.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? `🔴` : ""}${type.replaceAll(
    "_",
    " "
  )} from ${changeCase(from)} to ${changeCase(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);

  console.log(output);
}
