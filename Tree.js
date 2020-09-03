class Tree{

    constructor(x,y,width,height){

        var options={
            density: 1.0,
            friction: 0.1,
            restitution: 0.1,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, width, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }

}