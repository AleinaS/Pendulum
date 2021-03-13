class bob{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;
            super.display();
    
      }
}