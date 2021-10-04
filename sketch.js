var suelo1;
var suelo2;
var player;


function setup(){
    createCanvas(5000,windowHeight);
    suelo1 = createSprite(0,height-50,1000,300);
    suelo2 = createSprite(650,height+500,100,15);
    player = createSprite(30,height-80,50,50);
    player.shapeColor = "black";

}

function draw(){
    background(188, 208, 240);
    
    //console.log(mouseX,mouseY);
    player.velocityY =5;
    player.collide(suelo1);
    suelo2.velocityY = - 7;
    //console.log(suelo2.y);
    //camera.x = player.x;
    player.collide(suelo2);

    if(keyDown("LEFT_ARROW")){
        player.x = player.x - 20;

    }

    if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 20;

    }

    if(keyDown("UP_ARROW")){
        player.y = player.y - 20;

    }

    drawSprites();

}