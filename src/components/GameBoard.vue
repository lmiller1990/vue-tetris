<template>
  <div>
    <div class="line" v-for="line in board"> 
      <div :class="[tile == 1 ? 'filled tile' : 'empty tile' ]" v-for="tile in line">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      let block = [ [1, 0], [1, 1], [1, 2] ]
      this.$store.commit('SETUP_BOARD', this.createArray(15, 10))
      this.$store.commit('CREATE_BLOCK', block)
      this.$store.commit('SET_CURRENT_BLOCK', block)

      setInterval(this.lower, 1000)
    },
    methods: {
      lower () {
        if (this.$store.state.shouldCreateNextBlock) {
          let block = [ [1, 0], [1, 1], [1, 2] ]
          this.$store.commit('CREATE_BLOCK', block)
          this.$store.commit('SET_CURRENT_BLOCK', block)
        }
        this.$store.commit('LOWER_CURRENT_BLOCK')
      },
      createArray (length) {
        let arr = new Array(length || 0).fill(0)
        let i = length

        if (arguments.length > 1) {
          var args = Array.prototype.slice.call(arguments, 1)
          while (i--) arr[length - 1 - i] = this.createArray.apply(this, args)
        }
        return arr
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

</style>
