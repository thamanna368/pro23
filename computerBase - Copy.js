class computerBase {

    constructor(x, y, width, height){
    var options={
        isStatic:true
    };
   

  this.body=Bodies.rectangle(x,y,width,height,option);
  this.width= width;
  this.heigth= heigth;
  this.image= losdImage("assets/base2.png");

  World.add(world,this.body);


    }

          
  

  display() {
var pos = this.body.position;
var angle = this.body.angle;

Push ();
translate(pos.x,pos.y) ;
rotate (angle);
imageMode (CENTER);
image (this.image,0,0,this.width,this.height);

pop ();

  }
}
