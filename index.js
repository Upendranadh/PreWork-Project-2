// Practise Promblem 1

/*
var student = {
    name: "ProGrad",
    class: "2nd level",
    rollno: 12
};

function keys() {
    return (Object.keys(student))
}

var key = keys();
key.forEach(function (currentElement) {
    console.log(currentElement);
})
*/

// Practise Promblem 2

/*
var library = [{
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.forEach(function (currentElement) {
    if (currentElement.readingStatus === true) {
        console.log(`Already read '${currentElement.title}' by ${currentElement.author}`);
    } else {
        console.log(`You still need to read  '${currentElement.title}' by ${currentElement.author}`);
    }
})
*/

// project 1 using java script

// Practise Promblem 1

/*
var student = {
    name: "ProGrad",
    class: "2nd level",
    rollno: 12
};

function keys() {
    return (Object.keys(student))
}

var key = keys();
key.forEach(function (currentElement) {
    console.log(currentElement);
})
*/

// Practise Promblem 2

/*
var library = [{
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.forEach(function (currentElement) {
    if (currentElement.readingStatus === true) {
        console.log(`Already read '${currentElement.title}' by ${currentElement.author}`);
    } else {
        console.log(`You still need to read  '${currentElement.title}' by ${currentElement.author}`);
    }
})
*/

// project 1 using java script

var queen = {
    direction: "S",
    position: {
        x: 4,
        y: 0,
    },
    whereabouts: [],
};

function changeDirection(direction, steps) {
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
        "give the direction that you want the queen to be moved"
    );

    if (direction !== "exit" && direction !== "") {
        var steps = parseInt(prompt("Please enter your steps"));
        changeDirection(direction, steps);
        input();
    }



}

function moveForward(direction, count) {
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
    outOfChessBoard(queen.position.x, queen.position.y, count)

}

function updatePosition(x, y) {
    var char = String.fromCharCode(97 + x);
    queen.whereabouts.push(char + y);
    console.log(queen.whereabouts);
}

function outOfChessBoard(x, y, count) {
    if (y > 7 && x < 7) {
        console.log("out of chess board");
        queen.position.y -= count;
        input();


    } else if (x > 7 && y < 7) {
        console.log("out of chess board");
        queen.position.x -= count;
        input();

    } else if (x > 7 && y > 7) {
        console.log("out of chess board");
        queen.position.y -= count;
        queen.position.x -= count;
        input();

    }
    updatePosition(queen.position.x, queen.position.y);
    // console.log(x);
    // console.log(y);


}
input();