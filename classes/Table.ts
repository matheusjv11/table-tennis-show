export default class Table {
    canvasParent: CanvasRenderingContext2D
    width: number
    height: number
    x: number
    y: number
    legsDrawn: boolean = false

    constructor (canvasParent: CanvasRenderingContext2D) {
        this.canvasParent = canvasParent
        this.width = innerWidth / 2
        this.height = innerHeight / 20
        this.x = innerWidth / 4
        this.y = innerHeight / 1.5
    }

    draw () {
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x, this.y, this.width , this.height)
        this.canvasParent.stroke()
        
        this.drawLegs()
    }

    drawLegs() {
        // Leg 1
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 1.2, this.y + this.height, this.height / 2, innerHeight - this.y);
        this.canvasParent.stroke()

        // Leg 2
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 1.6, this.y + this.height, this.height / 2, innerHeight - this.y);
        this.canvasParent.stroke()

        // Leg 3
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 2.3, this.y + this.height, this.height / 2, innerHeight - this.y);
        this.canvasParent.stroke()

        // Leg 4
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 2.7, this.y + this.height, this.height / 2, innerHeight - this.y);
        this.canvasParent.stroke()

        // Support 1
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 1.249, this.y + this.height * 3.5, this.x * 1.55 - this.x * 1.2, 20);
        this.canvasParent.stroke()

        // Support 2
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 2.349, this.y + this.height * 3.5, this.x * 1.55 - this.x * 1.2, 20);
        this.canvasParent.stroke()
    }
}