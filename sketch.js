const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(500,800);
    
    ground1 = new Ground(400,700,120,10);

    //Level 1
    block1 = new Box(415,675,30,40);
    block2 = new Box(445,675,30,40);
    block3 = new Box(475,675,30,40);
    block4 = new Box(505,675,30,40);
    //Level 2
    block5 = new Box(430,655,30,40);
    block6 = new Box(460,655,30,40);
    block7 = new Box(490,655,30,40);
    //Level 3
    block8 = new Box(445,635,30,40);
    block9 = new Box(475,635,30,40);
    //Top
    block10 = new Box(460,615,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function draw(){
    background();
    text("SCORE: "+score,750,40);

    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}

function attach(body){
    this.bodyA = polygon;
}