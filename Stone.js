class Stone {
  constructor(x,y,r) {
    var options = {
      isStatic:false,
      restitution:0.3,
      friction: 5,
      density:1
    }  
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(x, y,50,options,1);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);	  
    }
    display(){
     var angle = this.body.angle;
	   push();
	   translate(this.body.position.x, this.body.position.y);
     rotate(angle);
	   strokeWeight(3);
	   stroke("white");
	   fill("purple");
     ellipse(66, 55, 66, 66);
	   pop();
    }
}