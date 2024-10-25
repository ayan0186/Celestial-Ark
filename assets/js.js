let currentState = "start";
const start = ["start"]; 
const walk = ["walk"]; 
const explore = ["explore"]; 
const path = ["follow the path"];
const yes = ["yes"]; 
const no = ["no"]; 

function controls() {
    console.log('Player Entered Controls');
    document.getElementById('chatbox').innerHTML = "In this game you enter a command to make your player explore the area and fight monsters. <br><br>Here are a list of useable commands: <br>walk, follow the path, explore, yes, no.<br><br> As you play, you will get some options as to what you can do, remember after starting the game you cannot go back to this screen or else <strong>your progress will not save</strong>. Make sure to Read everything carefully as every choice you make is critical and some choices may not let you go back. This is a game where proper choice making skills are needed. Goodluck and Enjoy!";
}

function background() {
    console.log('Player Reads Background'); 
    document.getElementById('chatbox').innerHTML = "You wake up in an unfamiliar world, lying in a dark forest. As you stand, a mysterious scroll appears before you, bearing a message: Welcome, Hero. You are in the Lost Realm. To return home, find the five sacred artifacts hidden across this land and defeat the dark guardian who controls them. <br><br>Good luck, hero.";
}

function reset() {
    console.log('Player Restarts Game');
    currentState = "start";
    document.getElementById('chatbox').innerHTML = "You find yourself transported to a dark and creepy forest. What do you do?";
}

function processCommands() { 
    let input = document.getElementById("userCommands").value.toLowerCase();
    let output = document.getElementById("chatbox");
    let haskey = false; 
    let treasure = false;

    log(input); 

if(currentState === "start"){
    if(start.includes(input)){
        currentState = "forest"; 
        output.innerHTML = "You find yourself transported to a dark and creepy forest. What do you do?";
    }
} else if(currentState === "forest"){
    if(walk.includes(input)){
        currentState = "path"
        output.innerHTML = "You encounter two path, one that leads you into a dark forest and the other that leads to a house... <br>Do you <strong>follow path</strong> to the house or <strong>explore</strong> more?";
    }
} else if(currentState === "path"){
    if(path.includes(input)){
        currentState = "decision1";
        output.innerHTML = "You follow the path and notice an empty field with a house in the middle. Do you enter?";
    } else if(explore.includes(input)){
        currentState = "decision2";
        output.innerHTML = "You chose to explore the area more and it starts pouring rain. You then find a cave do you want to enter cave or go back on the path?";
    }
} else if(currentState === "decision1"){
    if(yes.includes(input)){
        currentState = "house";
        output.innerHTML = "You enter the house and it seems to be abandoned, but something strange.... you can tell something seems off about this house. Do you want to Explore or leave?"; 
    } else if(no.includes(input)){
        currentState = "path"; 
        output.innerHTML = "You leave the house and return to the path.";

    }
}

    document.getElementById("userCommands").value = ""; 
}

function log(input) {
    console.log("User Input: " + input); 
    console.log("Current State: " + currentState);
}
