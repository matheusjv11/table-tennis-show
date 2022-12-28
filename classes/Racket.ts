import Velocity from "~~/interfaces/Velocity"

export class Racket {
    public x: number 
    public y: number
    public mass: number = 1
    public velocity: Velocity = {
        x: 0,
        y: 0
    }

    canvasParent: CanvasRenderingContext2D
    radius:number = 30

    constructor (canvasParent: CanvasRenderingContext2D, x: number, y: number) {
        this.canvasParent = canvasParent
        this.x = x
        this.y = y
        
    }

    public draw() {
        this.canvasParent.fillStyle = "#c82124"
        this.canvasParent.beginPath()
        this.canvasParent.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false)
        this.canvasParent.fill()
        this.canvasParent.closePath()
    }
}