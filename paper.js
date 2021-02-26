class Paper
{
    constructor(x,y)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1
        }

        this.body = Matter.Bodies.circle(x,y,25,options);
        this.radius = 70;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
      }
    
    display()
    {
      var pos = this.body.position;
      fill("pink");
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
}