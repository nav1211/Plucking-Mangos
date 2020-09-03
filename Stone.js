class Stone{

    constructor(x,y,radius){

        var options={
            isStatic: false,
            restitution: 0,
            friction:1,
            density:0.8
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);

        this.stoneImage = loadImage("stone.png");

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.stoneImage, 0, 0, this.radius, this.radius);
        pop();

    }

}