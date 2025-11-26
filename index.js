let input = require('prompt-sync')();
let taskNames = [];
let taskDurations = [];
let continueLoop;

do {
    let name = input("Enter Task Name:");
    let duration = parseInt(input("Enter Duraion:"));
    taskNames.push(name);
    taskDurations.push(duration);
    continueLoop = input("Would you like to continue the loop?")

}while (continueLoop == "yes")

console.table(taskNames);
console.table(taskDurations);