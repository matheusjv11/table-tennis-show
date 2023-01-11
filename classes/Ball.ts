import Velocity from "~~/interfaces/Velocity"
import Calculation from "~~/utils/Calculation"
import Net from "./Net"
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
    private gravity = 0.3
    private friction = 0.78;
    private verticalCollision: boolean = false;

    private canvasParent: CanvasRenderingContext2D
    private table: Table
    private net: Net
    private player1: Racket
    private player2: Racket

    constructor (canvasParent: CanvasRenderingContext2D, table: Table, net: Net, player1: Racket, x: number, y: number) {
        this.canvasParent = canvasParent
        this.table = table
        this.net = net
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
        this.detectOutsideBall();
        this.detectTableCollision()
        this.detectRacketCollision()
    }

    private updatePosition () { 
        this.y += this.velocity.y
        this.x += this.velocity.x
    }

    private detectOutsideBall () { 
        if (
            this.x + this.radius < 0 ||
            this.x + this.radius > innerWidth ||
            this.y + this.radius > innerHeight ||
            this.y + this.radius < 0
            ) {
            this.x = 600
            this.y = 300
            this.velocity.x = 0
            this.velocity.y = 1
        }
    }

    private detectTableCollision() {
        if (this.touchedTable()) {
            this.y = this.table.y - this.radius
            this.collision()
        } else if (this.touchedNet()) {
            this.collision()
        } else {
            this.velocity.y += this.gravity
        }
    }

    private detectRacketCollision(): void {
        if (Calculation.getDistance(this.x, this.y, this.player1.x, this.player1.y) < (this.player1.radius + this.radius)) {
            Calculation.resolveCollision(this,  this.player1)
        }
    }

    private touchedTable (): boolean {
        this.verticalCollision = true

        return Math.floor(this.table.y) < (this.y + this.radius) &&
            this.x > this.table.x &&
            this.x < this.table.x + this.table.width
    }

    private touchedNet (): boolean {
        // Upper 
        if (
            Math.floor(this.net.y) < (this.y + this.radius) &&
            this.x > this.net.x &&
            this.x < this.net.x + this.net.width
        ) {
            this.y = this.net.y - this.radius
            this.verticalCollision = true

            return true
        }

        // Left 
        if (
            Math.floor(this.net.x) <= (this.x + this.radius) &&
            this.net.x + this.net.width > (this.x + this.radius) &&
            this.y > this.net.y &&
            this.y < this.net.y + this.net.heigt && 
            this.velocity.x > 0
        ) {
            this.x = this.net.x - this.radius
            this.verticalCollision = false

            return true
        }

        // Right 
        if (
            Math.floor(this.net.x + this.net.width * 3) >= (this.x + this.radius) &&
            Math.floor(this.net.x) < (this.x + this.radius) &&
            this.y > this.net.y &&
            this.y < this.net.y + this.net.heigt && 
            this.velocity.x < 0
        ) {
            this.x = (this.net.x + this.net.width * 3) - this.radius
            this.verticalCollision = false
            
            return true 
        } 

        return false
    }

    private collision (): void {
        if (this.verticalCollision) {
            this.velocity.y = -this.velocity.y
        } else {
            this.velocity.x = -this.velocity.x
        }

        this.velocity.y = this.velocity.y * this.friction
        this.velocity.x = this.velocity.x * this.friction
    }
}