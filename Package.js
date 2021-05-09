class Package
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic : true
            restitution: 0.7,
            friction : 0.3,
            density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body) 
    }
display()
{
    var angle = this.body.angle
    var pos = this.body.position

    push();
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    pop();
    }
}