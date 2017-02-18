<template>
  <div>
    <div class="line" v-for="line in board"> 
      <div :class="[tile == 1 ? 'filled tile' : 'empty tile' ]" v-for="tile in line">
      </div>
    </div>
    <div class="score">
      Score: {{ $store.state.score }}
    </div>
    <div v-if="$store.state.gameOver">
      <button class="restart button" @click="restart">
        Restart
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import blocks from '../blocks'

  export default {
    created () {
      // let block = blocks[this.randomBlockNumber()]
      let block = JSON.parse(JSON.stringify(blocks[this.randomBlockNumber()]))
      this.$store.commit('SETUP_BOARD', this.createArray(15, 10))
      this.$store.commit('CREATE_BLOCK', block)
      this.$store.commit('SET_CURRENT_BLOCK', block)

      setInterval(this.lower, 200)
    },
    methods: {
      lower () {
        if (this.$store.state.shouldCreateNextBlock) {
          let block = JSON.parse(JSON.stringify(blocks[this.randomBlockNumber()]))
          // let block = JSON.parse(JSON.stringify(blocks[0]))
          this.$store.commit('CREATE_BLOCK', block)
          this.$store.commit('SET_CURRENT_BLOCK', block)
        }
        this.$store.commit('LOWER_CURRENT_BLOCK')
        for (let l in this.$store.state.board) {
          this.$store.commit('DELETE_LINE_IF_COMPLETE', l)
        }
      },
      createArray (length) {
        let arr = new Array(length || 0).fill(0)
        let i = length

        if (arguments.length > 1) {
          var args = Array.prototype.slice.call(arguments, 1)
          while (i--) arr[length - 1 - i] = this.createArray.apply(this, args)
        }
        return arr
      },
      randomBlockNumber () {
        return Math.floor(Math.random() * (blocks.length - 0))
      },
      restart () {
        this.$store.commit('RESTART_GAME')
      }
    },
    computed: {
      ...mapState({
        'board': state => state.board
      })
    }
  }
</script>

<style scoped>
  .tile {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border: 0.125em solid grey;
    margin-left: 0.125em;
  }

  .filled {
    background-color: grey;
  }

  .restart.button {
    border: 0.125em solid black;
    display: inline-block;
  }

  .score {
    display: inline-block;
    font-size: 1.5em;
  }
</style>
