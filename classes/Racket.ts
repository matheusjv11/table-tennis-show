export class Racket {
    canvasParent: CanvasRenderingContext2D
    x: number 
    y: number
    radius:number = 30

    constructor (canvasParent: CanvasRenderingContext2D, x: number, y: number) {
        this.canvasParent = canvasParent
        this.x = x
        this.y = y
    }

    public draw() {
        this.canvasParent.beginPath()
        this.canvasParent.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false)
        this.canvasParent.fill()
        this.canvasParent.closePath()
    }
}