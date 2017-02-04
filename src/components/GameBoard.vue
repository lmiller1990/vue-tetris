<template>
  <div>
    <div class="line" v-for="line in board"> 
      <div class="tile" v-for="tile in line">

      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.$store.commit('SETUP_BOARD', this.createArray(15, 10))
    },
    methods: {
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
  .line {
  } 

  .tile {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border: 0.125em solid grey;
    margin-left: 0.125em;
  }
</style>
