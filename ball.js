class Ball{
    constructor(x,y,radius){
        var options = {
            density:0.5
            
        }
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=radius
    }
    display(){
        var angle=this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)  
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)  
    pop()
    }
}