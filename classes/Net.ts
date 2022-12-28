import Table from "./Table"

export default class Net {
    canvasParent: CanvasRenderingContext2D
    table: Table

    public x: number 
    public y: number
    public width: number = 10
    public heigt: number = 55

    constructor (canvasParent: CanvasRenderingContext2D, table: Table) {
        this.canvasParent = canvasParent
        this.table = table

        this.x = this.table.x * 1.95
        this.y = this.table.y * 0.886       
    }

    public draw() {
        this.canvasParent.beginPath()
        this.canvasParent.strokeStyle = "red";
        this.canvasParent.rect(this.x, this.y, this.width, this.heigt);
        this.canvasParent.stroke()
    }
}