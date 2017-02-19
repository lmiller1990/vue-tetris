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
  data () {
    return {
      intervalId: null,
      downKeyDown: false
    }
  },
  created () {
    window.addEventListener('keydown', (event) => {
      this.moveBlock(event)
    })
    window.addEventListener('keyup', (event) => {
      this.keyUp(event)
    })
  },
  methods: {
    keyUp (event) {
      if (event.code === 'ArrowDown') {
        console.log('Down arrow released')
        clearInterval(this.intervalId)
        this.downKeyDown = false
      }
    },
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
      if (event.code === 'ArrowDown') {
        if (!this.downKeyDown) {
          this.intervalId = setInterval(this.lower, 25)
        }
        this.downKeyDown = true
        console.log('Down arrow pressed')
      }
    },
    lower () {
      // check if the block can be lowered first
      if (this.$store.getters.canBeLowered) {
        this.$store.commit('LOWER_CURRENT_BLOCK')
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
