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
    const arena = new Arena(myCanvas)

    this.$el.addEventListener('mousemove', (event: MouseEvent) => {
      arena.player1.x = event.clientX
      arena.player1.y = event.clientY
    }); 
  },
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