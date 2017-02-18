<template>
  <div class="tile" :style="tileStyle">{{ x }} {{ y }}</div>
</template>

<script>
  export default {
    props: ['tile', 'x', 'y'],
    data () {
      return {
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
    computed: {
      isCurrentBlockTile () {
        let curr = this.$store.state.currentBlock
        let c = curr.rotations[curr.rotIndex]

        for (let y in c) {
          if (c[y][1] === this.x && c[y][0] === this.y) {
            return true
          }
        }
      },
      tileStyle () {
        if (this.isCurrentBlockTile) {
          return { backgroundColor: 'black' }
        }
        return this.tile === 1
          ? { backgroundColor: this.colors[this.$store.state.currentBlock.id] }
          : {}
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
</scoped>
