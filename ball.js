class Ball {
    constructor(x,y,radius){
        var option = {
        restitution:0.4,
        friction:1,
        density:1

        }
        this.body = Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
    }
    display(){
    var pos =this.body.position;
    fill("red");
    translate(pos.x, pos.y);

    
    }
}
