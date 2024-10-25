function controls() {
    console.log('Player Entered Controls');
    document.getElementById('chatbox').innerHTML = "In this game you type 1 or 2 words to command your player. You can use commands such as walk, explore, and follow path. As you play, you will get some options as to what you want to do, remember to read everything carefully as every chose you make is critical and some chooses may not let you go back. This is a game where proper choice making skills are needed. Goodluck and Enjoy!";
}

function background() {
    console.log('Player Reads Background'); 
    document.getElementById('chatbox').innerHTML = "You wake up in an unfamiliar world, lying in a dark forest. As you stand, a mysterious scroll appears before you, bearing a message: Welcome, Hero. You are in the Lost Realm. To return home, find the five sacred artifacts hidden across this land and defeat the dark guardian who controls them. <br><br>Good luck, hero.";
}

function processCommands() { 
    let input = document.getElementById("userCommands").value.toLowerCase();
    let output = document.getElementById("chatbox");
    let haskey, treasure = false;

    let currentState = "start"; 

    console.log("User Input: " + input); 
    console.log("Current State: " + currentState);

    let start = ["start"]; 
    let walk = ["walk"]; 
    let explore = ["explore"]; 
    let path = ["follow path"]; 


    if(start.includes(input)){
        currentState = "forest"; 
        output.innerHTML = "You find yourself transported to a dark and creepy forest. What do you do?";
    }
}