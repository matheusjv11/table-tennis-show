import Velocity from "~~/interfaces/Velocity"
import Calculation from "~~/utils/Calculation"
import { Racket } from "./Racket"
import Table from "./Table"


export class Ball {
    public x: number 
    public y: number
    public mass: number = 1
    public velocity: Velocity = {
        x: 0,
        y: 1
    }

    private radius:number = 10
    private canvasParent: CanvasRenderingContext2D
    private table: Table
    private player1: Racket
    private player2: Racket

    constructor (canvasParent: CanvasRenderingContext2D, table: Table, player1: Racket, x: number, y: number) {
        this.canvasParent = canvasParent
        this.table = table
        this.player1 = player1
        this.x = x
        this.y = y
    }

    public draw() {
        this.canvasParent.fillStyle = "#3370d4"
        this.canvasParent.beginPath()
        this.canvasParent.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false)
        this.canvasParent.closePath()
        this.canvasParent.fill()

        this.updatePosition()
        this.detectTableCollision()
        this.detectRacketCollision()
    }

    private updatePosition () { 
        this.y += this.velocity.y
        this.x += this.velocity.x
    }

    private detectTableCollision() {
        if (Math.floor(this.table.y) <= (this.y + this.radius)) {
            this.velocity.y = -this.velocity.y
        }
    }

    private detectRacketCollision() {
        if (Calculation.getDistance(this.x, this.y, this.player1.x, this.player1.y) < (this.player1.radius + this.radius) ) {
           //this.velocity.x, this.velocity.y = 0
           Calculation.resolveCollision(this,  this.player1)
           //console.log('colission')
        }
    }
}