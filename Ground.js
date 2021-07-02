class Ground{
 constructor(x,y,w,h){
  var options = {
  isStatic:true
  }
  this.w=w;
  this.h=h;
  this.body=Bodies.rectangle(x, y, w, h , options);
  World.add(world, this.body);
 }
  display(){
   var pos =this.body.position;
   push();
   translate(this.body.position.x,this.body.position.y);
   rectMode(CENTER);
   fill(128,128,128);
   rect(pos.x, pos.y, this.width, this.height);	
   pop();
   }
}