<template>
  <div
    class="perspective"
    @click.prevent="flipCard(card.word)"
  >
    <div
      class="card"
      :class="{flipped: card.flipped}"
    >
      <div class="card__front">
        <p class="card__word">
          {{ card.word }}
        </p>
      </div>
      <div
        class="card__back"
        :class="assignedClass"
      >
        <p class="card_word">
          {{ card.assigned }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    flipCard(word) {
      console.log('card flipped:', word)
      this.$store.dispatch('flipCard', word)
    }
  },
  computed: {
    assignedClass() {
      return {
        'card__back--red': this.card.assigned === 'RED',
        'card__back--blue': this.card.assigned === 'BLUE',
        'card__back--assasin': this.card.assigned === 'ASSASIN'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.perspective {
  perspective: 1000px;
}

.card {
  background-color: #e9e9e9;
  border-radius: 10px;
  border: 3px solid #999;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  height: 120px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.3s ease-in-out;
  width: 120px;

  &__word {
    color: #444;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 4px rgba(0, 0, 0, 0.4);
  }

  &.flipped {
    transform: rotateY(180deg);
  }

  &__front,
  &__back {
    align-items: center;
    border-radius: 10px;
    border: 3px solid #999;
    backface-visibility: hidden;
    display: flex;
    height: 120px;
    justify-content: center;
    left: -3px;
    position: absolute;
    top: -3px;
    width: 120px;
  }

  &__front {
    transform: rotateY(0deg);
    z-index: 2;
  }

  &__back {
    transform: rotateY(180deg);
    color: #e9e9e9;

    &--blue {
      background-color: #0150d8;
    }

    &--red {
      background-color: #e8421d;
    }

    &--assasin {
      background-color: #444;
    }
  }
}
</style>
