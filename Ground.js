class Ground{

    constructor(x,y,width,height){

        var options={
            density: 1.5,
            friction: 1.0,
            restitution: 0.5,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, width, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }

}