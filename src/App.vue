<template>
  <div @keydown="moveBlock" id="app">
    <div class="game board">
      <GameBoard></GameBoard>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard'

export default {
  components: {
    GameBoard
  },
  created () {
    window.addEventListener('keydown', (event) => {
      this.moveBlock(event)
    })
  },
  methods: {
    moveBlock (event) {
      if (event.code === 'ArrowLeft') {
        console.log('Left arrow pressed.')
        this.$store.commit('MOVE_CURRENT_BLOCK', 'left')
      }
      if (event.code === 'ArrowRight') {
        console.log('Right arrow pressed.')
        this.$store.commit('MOVE_CURRENT_BLOCK', 'right')
      }
      if (event.code === 'ArrowUp') {
        this.$store.commit('ROTATE_CURRENT_BLOCK')
      }
    }
  }
}
</script>

<style>
  .game.board {
    text-align: center;
  }
</style>
