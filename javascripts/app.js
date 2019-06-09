// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("Left turn");
  console.log("Rover's previous direction: " + rover.direction);
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;  
    case "W":
      rover.direction = "S";
      break;    
  };
  console.log("Rover's current direction: " + rover.direction);
}

function turnRight(rover){
  console.log("Right turn");
  console.log("Rover's previous direction: " + rover.direction);
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;  
    case "W":
      rover.direction = "N";
      break;    
  };  
  console.log("Rover's current direction: " + rover.direction);
}

function moveForward(rover){
  console.log("Move forward");
  travelLogAdd(rover.x, rover.y);//add position before moving
  switch(rover.direction){
    case "N":
      if(rover.y > 0){rover.y--} 
      break;
    case "E":
      if(rover.x < 10){rover.x++}
      break;
    case "S":
      if(rover.y < 10){rover.y++}
      break;  
    case "W":
      if(rover.x > 0){rover.x--}
      break;  
  }
  travelLogDisplay();
  console.log("Rover's current Position: [" + rover.x + "," + rover.y + "]" + "Facing: " + rover.direction);
}

function moveBackwards(rover){
  console.log("Move backwards");
  travelLogAdd(rover.x, rover.y);//add position before moving
  switch(rover.direction){
    case "N":
      if(rover.y < 10){rover.y++}
      break; 
    case "E":
      if(rover.x > 0){rover.x--}
      break; 
    case "S":
      if(rover.y > 0){rover.y--}
      break;
    case "W":
      if(rover.x < 10){rover.x++}
      break;
  }
  travelLogDisplay();
  console.log("Rover's current Position: [" + rover.x + "," + rover.y + "]" + "Facing: " + rover.direction);
}

function movingCommands(commands){
  commands = commands.toUpperCase();
  for(var i = 0; i < commands.length; i++){
    if(commands.charAt(i) === "F" || commands.charAt(i) === "R" || commands.charAt(i) === "L" || commands.charAt(i) === "B"){
      switch(commands.charAt(i)){
        case "F":
          moveForward(rover);
          break;
        case "R":
          turnRight(rover);
          break;
        case "L":
          turnLeft(rover);
          break;  
        case "B":
          moveBackwards(rover);
          break;                           
        }  
    }
  }
}
//adds given postion to travel log
function travelLogAdd(x, y){
  rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
}
//displays entire log
function travelLogDisplay(){
  console.log("Rover's travel log:");
  for(var i = 0; i < rover.travelLog.length; i++){
    console.log(rover.travelLog[i]);
  }
}