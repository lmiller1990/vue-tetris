<template>
  <div class="tile" :style="tileStyle"></div>
</template>

<script>
  export default {
    props: ['tile', 'x', 'y'],
    data () {
      return {
        tileColorSet: false,
        tileColorId: '',
        colors: [
          'red',
          'blue',
          'green',
          'orange',
          'pink',
          'purple',
          'yellow'
        ]
      }
    },
    methods: {
      isCurrentBlockTile () {
        let curr =
          this.$store.state.currentBlock.rotations[this.$store.state.currentBlock.rotIndex]
        for (let l in curr) {
          if (curr[l][0] === this.y && curr[l][1] === this.x) {
            return true
          }
        }
        return false
      }
    },
    computed: {
      tileStyle () {
        if (this.tile === 1) {
          if (this.isCurrentBlockTile()) {
            return { backgroundColor: this.colors[this.$store.state.currentColorId] }
          } else {
            // set the tile color once.
            // this ensures tiles that are no longer moving maintain their color.
            if (!this.tileColorSet) {
              this.tileColorId = this.$store.state.previousColorId
            }
            this.tileColorSet = true
            return { backgroundColor: this.colors[this.tileColorId] }
          }
        } else {
          this.tileColorSet = false
        }
      }
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
