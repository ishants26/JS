var bg;
var playerImg;
var enemyImg;
var alien = new Array;
var attack = new Array;

function preload(){
    bg = loadImage("assets/images1/bg.jpg");
    enemyImg = loadImage("assets/images1/vilgax.png");
    alien[0] = loadImage("assets/images1/ben.png");
    alien[1] = loadImage("assets/images1/swamfire.jpg");     //1.swamfire
    alien[2] = loadImage("assets/images1/gwen.png");
    alien[3] = loadImage("assets/images1/Kevin.png");
    alien[4] = loadImage("assets/images1/dh.png");           //4.diamondhead
    alien[5] = loadImage("assets/images1/Rath.png");         //5.rath
    alien[6] = loadImage("assets/images1/Max_Tennyson.png");
    alien[7] = loadImage("assets/images1/echo.png");         //7.echo echo
    alien[8] = loadImage("assets/images1/electro.png");      //8.electro
    alien[9] = loadImage("assets/images1/ampfibian.png");    //9.ampfibian
    alien[10]= loadImage("assets/images1/AlienX.png");       //10.Alien X
    attack[0]= loadImage("assets/images1/transparent.png");
    attack[1]= loadImage("assets/images1/fireball.png");
    attack[2]= loadImage("assets/images1/fireiceball.png");
    attack[4]= loadImage("assets/images1/diamond.png");
    attack[7]= loadImage("assets/images1/echowave.png");
    attack[8]= loadImage("assets/images1/electrowave.png");
    attack[9]= loadImage("assets/images1/ampshot.png");
}

var playerObject;
var enemyObject;
var bgobj;
var obObject;

function setup(){
    createCanvas(1250,625);  // w, h
    bgobj = new Bg(bg);
	playerObject = new Player1(alien[0],140,210,275,50);
	enemyObject = new Enemy1(enemyImg,1250);
    obObject = new Ob(attack[0]);
}

function keyPressed(){
    switch(keyCode){
        case 49: playerObject.change(alien[1],150,250,225,50); //ano=1;
            obObject.change(attack[1],200); 
            break;
        case 50: playerObject.change(alien[2],125,200,275,50); //ano=2;
            obObject.change(attack[0],20);
            break;
        case 51: playerObject.change(alien[3],150,200,250,50); //ano=3;
            obObject.change(attack[0],20);
            break;
        case 52: playerObject.change(alien[4],125,225,250,50); //ano=4;
            obObject.change(attack[4],175); 
            break;
        case 53: playerObject.change(alien[5],115,220,250,50); //ano=5;
            obObject.change(attack[0],20);
            break;
        case 54: playerObject.change(alien[6],115,220,250,50); //ano=6;
            obObject.change(attack[0],20);
            break;
        case 55: playerObject.change(alien[7],70,150,300,50);  //ano=7;
            obObject.change(attack[7],120); 
            break;
        case 56: playerObject.change(alien[8],115,220,250,50); //ano=8;
            obObject.change(attack[8],170); 
            break;
        case 57: playerObject.change(alien[9],115,220,250,50); //ano=9;
            obObject.change(attack[9],170); 
            break;
        case 48: playerObject.change(alien[10],115,220,250,50);
            obObject.change(attack[0],20);
            break;
        default: playerObject.change(alien[0],140,210,275,50);
            obObject.change(attack[0],20); break;
    }
}

function draw(){
    bgobj.drawbg();
	playerObject.drawPlayer();
	enemyObject.drawenemy();
	enemyObject.move();
    obObject.drawobj();
    obObject.move();
	checkCollision(playerObject,enemyObject);
    checkColision(obObject,enemyObject);
}

function checkCollision(player,enemy){
	var xDistance = Math.abs(player.x - enemy.x);
	var yDistance = Math.abs(player.y - enemy.y);
	var maxWidth = Math.min(player.w, enemy.w);
	var maxHeight = Math.min(player.h,enemy.h);
    if(xDistance<=maxWidth && yDistance<=maxHeight){
		fill("red");
		textSize(30);
		text("Game Over",500,250);
		noLoop();
	   }
}
function checkColision(player,enemy){
	var xDistance = Math.abs(player.x - enemy.x);
	var yDistance = Math.abs(player.y - enemy.y);
	var maxWidth = Math.min(player.w,enemy.w);
	var maxHeight = Math.min(player.h,enemy.h);
    if(xDistance<=maxWidth && yDistance<=maxHeight){
		fill("green");
		textSize(30);
		text("You won",500,250);
		noLoop();
	   }
}