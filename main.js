// Q 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.
import inquirer from "inquirer";
let user_Ans = await inquirer.prompt({
    name: "namegame",
    type: "input",
    message: "Please Enter Your Friend Name:"
});
switch (true) {
    case user_Ans.namegame === "taha awan":
        console.log(`${user_Ans.namegame} is your friend.`);
        break;
    case user_Ans.namegame === "awais awan":
        console.log(`${user_Ans.namegame} is your friend`);
        break;
    default:
        console.log(`${user_Ans.namegame} is not your friend.`);
}
