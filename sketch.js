 const Engine = Matter.Engine;
    const World= Matter.World;
      const Bodies = Matter.Bodies;

     var engine, world;
     var hammer,iron,stone,rubber,ground;

     function setup(){
     var canvas = createCanvas(1200,600);
     engine = Engine.create();
     world = engine.world;

     hammer = new Hammer(100,100);
     iron = new Iron(140,210);
     stone = new Stone(200,300,100);
     rubber = new Rubber(600,150);
     ground = new Ground(600,height,1200,20);
    }
    function draw(){
     background("lightBlue");
     Engine.update(engine);
     hammer.display();
     iron.display();
     stone.display();
     rubber.display();
     ground.display();
}