import { Racket } from "./Racket"

export class Arena {
    canvasCtx: CanvasRenderingContext2D | null
    canvasElement: HTMLCanvasElement
    player1: Racket
    player2: Racket
    
    constructor (canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement
        this.canvasElement.height = innerHeight
        this.canvasElement.width = innerWidth
        
        this.canvasCtx = this.canvasElement.getContext('2d')

        if (this.canvasCtx) {
            this.player1 = new Racket(this.canvasCtx, 300, 300)
            this.player2 = new Racket(this.canvasCtx, 400, 400)
        }

        this.animate()
    }

    private animate() {
        requestAnimationFrame(this.animate)
        this.canvasCtx?.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
        this.player1.draw()
        this.player2.draw()
    }
}