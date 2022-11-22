import { Racket } from "./Racket"
import Table from "./Table"

export class Arena {
    canvasCtx: CanvasRenderingContext2D | null
    canvasElement: HTMLCanvasElement
    table: Table
    player1: Racket
    player2: Racket
    
    constructor (canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement
        this.canvasElement.height = innerHeight
        this.canvasElement.width = innerWidth
        
        this.canvasCtx = this.canvasElement.getContext('2d')

        if (this.canvasCtx) {
            this.table = new Table(this.canvasCtx)
            this.player1 = new Racket(this.canvasCtx, 300, 300)
        }

        this.animate()
    }

    private animate() {
        window.requestAnimationFrame(this.animate.bind(this))
        this.canvasCtx?.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
        this.table.draw()
        this.player1.draw()
    }
}