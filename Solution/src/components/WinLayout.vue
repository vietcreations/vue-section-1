<template>
  <div
    v-if="win"
    class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"
  />
  <div
    v-if="win"
    class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20"
  >
    <div>
      <img :src="pikachuDance" alt="Pikachu dance" />
      <h1 class="uppercase text-amber-300 text-center text-8xl font-black mb-2">
        You win!
      </h1>
      <ResetGameButton :start-game="startGame" @on-reset="$emit('on-reset')" />
    </div>
  </div>
</template>

<script>
import ResetGameButton from "./ResetGameButton.vue";
import pikachuDance from "../assets/images/pikachu-dance.gif";

export default {
  name: "WinLayout",
  components: {
    ResetGameButton,
  },
  props: {
    win: {
      type: Boolean,
    },
  },
  emits: ["on-reset"],
  data() {
    return {
      pikachuDance,
    };
  },
};
</script>
