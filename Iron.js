class Iron{
 constructor(x,y){
  var options = {
   isStatic:false,
   restitution:0.8,
   friction:3,
   density:30
  }
   this.x=x;
   this.y=y;
   this.body=Bodies.rectangle (x,y,50,50,options);
   World.add(world, this.body);
  }
   display(){
    var Ironpos = this.body.position;
	push();
	translate(this.body.position.x, this.body.position.y);
	rectMode(CENTER);
	strokeWeight(4);
	stroke("black");
	fill("red");
	rect(0, 0, this.width, this.height);
	pop();
   }
}