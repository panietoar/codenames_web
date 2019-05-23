<template>
  <section class="board">
    <card v-for="card in cards" :key="card.word" :card="card" />
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  computed: {
    cards() {
      return this.$store.getters.getBoard
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: repeat(5, 120px);
  grid-auto-flow: column;
  margin: 0 auto;
}
</style>
