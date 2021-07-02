class Rubber {
  constructor(x, y) {
	var options = {
	 restitution:0.8,                          
	 friction:0.9,
	 density:12
    } 
	  this.x=x;
	  this.y=y;                                                     
	  this.body = Bodies.rectangle(x, y,50, 50, options);
	  this.width = 50;
      this.height = 90;
	  World.add(world, this.body);
    }
    display(){
	 var Stonepos=this.body.position;
	 push();
	 translate(this.body.position.x, this.body.position.y);
	 rectMode(CENTER);
	 strokeWeight(4);
	 stroke("white");
	 fill("darkblue");
	 rect(0, 0, this.width, this.height);
	 pop();
    }
}