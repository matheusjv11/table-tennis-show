import { Ball } from "./Ball"
import Net from "./Net"
import { Racket } from "./Racket"
import Table from "./Table"

export class Arena {
    canvasCtx: CanvasRenderingContext2D
    canvasElement: HTMLCanvasElement

    net: Net
    ball: Ball
    table: Table
    player: Racket
    
    constructor (canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement
        this.canvasElement.height = innerHeight
        this.canvasElement.width = innerWidth
        
        const context = this.canvasElement.getContext('2d')

        if (context) {
            this.canvasCtx = context
        }

        if (this.canvasCtx) {
            this.table = new Table(this.canvasCtx)
            this.player = new Racket(this.canvasCtx, 300, 300)
            this.net = new Net(this.canvasCtx, this.table)
            this.ball = new Ball(this.canvasCtx, this.table, this.player, 400, 300)
        }
        
        this.animate()
    }
    
    private animate() {
        window.requestAnimationFrame(this.animate.bind(this))
        this.canvasCtx?.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
        this.table.draw()
        this.player.draw()
        this.net.draw()
        this.ball.draw()
    }
}