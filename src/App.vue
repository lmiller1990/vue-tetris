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
        this.$store.commit('MOVE_CURRENT_BLOCK', 'left')
      }
      if (event.code === 'ArrowRight') {
        this.$store.commit('MOVE_CURRENT_BLOCK', 'right')
      }
      if (event.code === 'ArrowUp') {
        this.$store.commit('ROTATE_CURRENT_BLOCK')
      }
    }
  }
}
</script>

<style scoped>
  .game.board {
    text-align: center;
  }
</style>
