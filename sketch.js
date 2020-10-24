var form, game, player;
var database;
var playerCount;

var gamestate = 0;


function setup(){
    createCanvas(500,500);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();   
    
    
}

function draw(){
    background("white");
   
    drawSprites();
}



