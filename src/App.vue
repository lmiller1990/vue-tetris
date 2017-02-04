<template>
  <div id="app">
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
  }
}
</script>

<style>
  .game.board {
    text-align: center;
  }
</style>
