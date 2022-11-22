export default class Table {
    canvasParent: CanvasRenderingContext2D
    tableWidth: number
    tableHeight: number
    x: number
    y: number
    legsDrawn: boolean = false

    constructor (canvasParent: CanvasRenderingContext2D) {
        this.canvasParent = canvasParent
        this.tableWidth = innerWidth / 2
        this.tableHeight = innerHeight / 20
        this.x = innerWidth / 4
        this.y = innerHeight / 1.5
    }

    draw () {
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x, this.y, this.tableWidth , this.tableHeight)
        this.canvasParent.stroke()
        
        this.drawLegs()
    }

    drawLegs() {
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x * 1.2, this.y + this.tableHeight, this.tableHeight / 2, 40);
        this.canvasParent.stroke()
    }
}