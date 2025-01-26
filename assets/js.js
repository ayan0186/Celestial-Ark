function controls() {
    console.log('Player Entered Controls');
    document.getElementById('chatbox').innerHTML = "As you play, you will get some options as to what you can do, remember after starting the game you cannot go back to this screen or else <strong>your progress will not save</strong>. Make sure to Read everything carefully as every choice you make is critical and some choices may not let you go back. This is a game where proper choice making skills are needed. Goodluck and Enjoy!";
}

function background() {
    console.log('Player Reads Background'); 
    document.getElementById('chatbox').innerHTML = "You wake up in an unfamiliar world, lying in a dark forest. As you stand, a mysterious scroll appears before you, bearing a message: Welcome, Hero. You are in the Lost Realm. To return home, find the five sacred artifacts hidden across this land and defeat the dark guardian who controls them. <br><br>Good luck, Hero.";
}

// function reset() {
//     console.log('Player Restarts Game');
//     currentState = "start";
//     document.getElementById('chatbox').innerHTML = "You find yourself transported to a dark and creepy forest. What do you do?";
// }

class Node{ 
    constructor(data, right=null, left=null) {
      this.data = data; 
      this.left = left; 
      this.right = right; 
    }
  
  } 

const rootNode = new Node("You are transported to a dark and creepy forest... do you choose to go left or right?", leftNode, rightNode); 
const leftNode = new Node("You follow the left path and notice an empty field with a house in the middle, but something doesn't seem right to you... Do you dare investigate the house or do you keepe walking?")
const rightNode = new Node("You follow the right path and it starts pouring rain. You find a cave near by and take shelter, until you start hearing some growling noises in the distance.... Do you dare explore the cave and find what awaits you or do you leave the cave in go out in the pouring rain?")