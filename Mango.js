class Mango{

    constructor(x,y){

        var options ={

            isStatic: true,
            restitution: 0,
            friction: 1

        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);

        this.image = loadImage("mango.png");

    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();

    }

}