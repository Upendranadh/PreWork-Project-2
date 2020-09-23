// project 1 using java script
let queen;
let stateOfQueen = {
  state: 1,
};
let queen1 = {
  direction: "S",
  position: {
    x: 4,
    y: 0,
  },
  whereabouts: ["e0"],
};
let queen2 = {
  direction: "N",
  position: {
    x: 4,
    y: 7,
  },
  whereabouts: ["e7"],
};

function changeDirection(direction, steps) {
  if (stateOfQueen.state === 1) {
    queen = queen1;
  } else {
    queen = queen2;
  }
  switch (direction) {
    case "N":
      queen.direction = "N";
      break;
    case "S":
      queen.direction = "S";
      break;
    case "W":
      queen.direction = "W";
      break;
    case "E":
      queen.direction = "E";
      break;
    case "NE":
      queen.direction = "NE";
      break;
    case "NW":
      queen.direction = "NW";
      break;
    case "SE":
      queen.direction = "SE";
      break;
    case "SW":
      queen.direction = "SW";
      break;
    default:
      console.log("Please enter valid direction");
      input();
  }
  moveForward(queen.direction, steps);
}

function input() {
  var direction = prompt(
    `give the direction that you want the queen${stateOfQueen.state} to be moved`
  );

  if (direction !== "exit" && direction !== "" && direction !== NaN) {
    var steps = parseInt(prompt("Please enter your steps"));
    if (steps) changeDirection(direction, steps);
    else {
      console.log("please enter a valid number for steps");
      input();
    }
    input();
  }
}

function moveForward(direction, count) {
  if (stateOfQueen.state === 1) {
    queen = queen1;
  } else {
    queen = queen2;
  }
  if (direction === "S") {
    queen.position.y += count;
  } else if (direction === "N") {
    queen.position.y -= count;
  } else if (direction === "E") {
    queen.position.x += count;
  } else if (direction === "W") {
    queen.position.x -= count;
  } else if (direction === "SE") {
    queen.position.x += count;
    queen.position.y += count;
  } else if (direction === "SW") {
    queen.position.x -= count;
    queen.position.y += count;
  } else if (direction === "NE") {
    queen.position.x += count;
    queen.position.y -= count;
  } else if (direction === "NW") {
    queen.position.x -= count;
    queen.position.y += count;
  }

  outOfChessBoard(queen.position.x, queen.position.y, count);
}

function checkSamePosition(x, y, count) {
  let otherqueen;
  stateOfQueen.state === 1 ? (queen = queen1) : (queen = queen2);
  queen === queen1 ? (otherqueen = queen2) : (otherqueen = queen1);

  var char = String.fromCharCode(97 + x);
  var position = char + y;
  if (otherqueen.whereabouts[otherqueen.whereabouts.length - 1] === position) {
    console.log(
      `queen ${stateOfQueen.state} cannot occcupy that position as queen-${
        stateOfQueen.state === 1 ? 2 : 1
      } is present`
    );
    moveForward(queen.direction, -count);
  } else if (queen.whereabouts[queen.whereabouts.length - 1] == position) {
    console.log(queen.whereabouts[queen.whereabouts.length - 1]);
    input();
  } else {
    queen.whereabouts.push(position);
    console.log(queen.whereabouts);
    stateOfQueen.state === 1
      ? (stateOfQueen.state = 2)
      : (stateOfQueen.state = 1);
  }
}

// const updateafterSamePosition = (x, y, count) => {};

function outOfChessBoard(x, y, count) {
  if (stateOfQueen.state === 1) {
    queen = queen1;
  } else {
    queen = queen2;
  }
  if (queen.position.y > 7 && queen.position.x < 7) {
    console.log("out of chess board");
    queen.position.y -= count;
    input();
  } else if (x > 7 && y < 7) {
    console.log("out of chess board");
    queen.position.x -= count;
    input();
  } else if (x > 0 && x <= 7 && y < 0) {
    console.log("out of chess board");
    queen.position.y += count;
    input();
  } else if (y > 0 && y <= 7 && x < 0) {
    console.log("out of chess board");
    queen.position.x += count;
    input();
  } else if (x > 7 && y > 7) {
    console.log("out of chess board");
    queen.position.y -= count;
    queen.position.x -= count;
    input();
  }
  checkSamePosition(queen.position.x, queen.position.y, count);
  // console.log(x);
  // console.log(y);
}
input();
