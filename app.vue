<template>
  <div>
    <canvas ref="mainCanvas" id="mainCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Arena } from './classes/Arena'
export default {
  mounted() {
    const myCanvas: HTMLCanvasElement = this.$refs.mainCanvas as HTMLCanvasElement
    let arena = new Arena(myCanvas)

    this.initMouseEvents(arena)

    window.addEventListener('resize', () => {
      arena = new Arena(myCanvas)
    }); 

  },
  methods: {
    initMouseEvents(arena: Arena) {
      let x = 0
      let y = 0
      let lastTime = performance.now()

      this.$el.addEventListener('mousemove', (event: MouseEvent) => {
        arena.player.x = event.clientX
        arena.player.y = event.clientY
       
        // Calculate mouse velocity
        const xDiff = arena.player.x - x;
        const yDiff = arena.player.y - y;
        const distance = Math.abs(Math.sqrt(xDiff * xDiff + yDiff * yDiff))

        const now = performance.now();
        const timeDelta = now - lastTime;
        let velocity = distance + distance / timeDelta;

        if (x > arena.player.x || y > arena.player.y) {
          velocity = -velocity
        }

        arena.player.velocity.x, arena.player.velocity.y = velocity;
        
        x = arena.player.x;
        y = arena.player.y;
        lastTime = now;
      }); 
    }
  }
}
</script>

<style lang="css">
* { margin: 0; padding: 0;}

body, html { height:100%; }

#mainCanvas {
  position:absolute;
  width:100%;
  height:100%;
}
</style>