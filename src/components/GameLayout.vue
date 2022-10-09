<template>
  <div :class="`containter ${widthContainer}`">
    <div class="grid grid-rows-2 grid-flow-col gap-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="`flip ${
          selected.includes(index) || correct.includes(index) ? 'disabled' : ''
        }`"
        @click="$emit('handle-select', index)"
      >
        <div
          :class="`cardContainer flipper ${
            selected.includes(index) || correct.includes(index) ? 'opened' : ''
          }`"
        >
          <div class="back card">
            <img
              class="w-24 ml-auto mr-auto"
              :src="item.image"
              :alt="item.name"
            />
            <h3 class="text-white font-bold mt-2">{{ item.name }}</h3>
          </div>
          <div class="front card">
            <h3 class="w-24 font-bold text-white text-6xl">?</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameLayout",
  props: {
    gamePlay: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
      required: true,
    },
    correct: {
      type: Array,
      required: true,
    },
  },
  emits: ["handle-select"],
  computed: {
    widthContainer() {
      switch (this.gamePlay) {
        case 10:
          return "max-w-8xl";
        case 8:
          return "max-w-6xl";
        case 6:
          return "max-w-4xl";
        default:
          return "max-w-2xl";
      }
    },
  },
};
</script>

<style scoped>
.containter {
  @apply ml-auto mr-auto mb-5;
}
.card {
  @apply absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center;
}
.cardContainer {
  @apply relative h-48 flex items-center justify-center rounded border border-gray-200 p-2 text-center;
  background-color: rgba(0, 0, 0, 0.6);
}
.flip {
  @apply cursor-pointer;
  perspective: 1000;
}
.disabled {
  @apply pointer-events-none;
}
.opened {
  transform: rotateY(180deg);
}
.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
}
.front,
.back {
  backface-visibility: hidden;
}
.front {
  @apply z-2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}
</style>
