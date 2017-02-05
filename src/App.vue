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
      console.log('Moving', event)
    }
  }
}
</script>

<style>
  .game.board {
    text-align: center;
  }
</style>
