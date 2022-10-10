<template>
  <div class="container">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        :class="index !== data.length - 1 ? 'not-last' : ''"
      >
        <div class="flex items-center pl-3">
          <input
            :id="'game-play-' + index"
            type="radio"
            :value="item"
            name="list-radio"
            :checked="gamePlay === item ? true : false"
            :class="status !== 0 ? 'disabled' : ''"
            @change="handleChange"
          />
          <label :for="'game-play-' + index">{{ item }} </label>
        </div>
      </li>
      <li>
        <button @click="$emit('on-click', status + 1)">
          {{ buttonName }}
        </button>
      </li>
    </ul>
    <img v-if="status === 0" :src="pikachuDance" alt="Pikachu dance" />
  </div>
</template>

<script>
import pikachuDance from "../assets/images/pikachu-dance.gif";

export default {
  name: "SelectGame",
  props: {
    gamePlay: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      validatior(value) {
        return [0, 1, 2].includes(value);
      },
    },
  },
  emits: ["on-click"],
  data() {
    return {
      data: [4, 6, 8, 10],
      pikachuDance,
    };
  },
  computed: {
    buttonName() {
      switch (this.status) {
        case 0:
          return "Start";
        default:
          return "Reset";
      }
    },
  },
};
</script>

<style scoped>
.container {
  @apply mt-3 mb-3 ml-auto mr-auto max-w-md;
}
img {
  @apply mt-3;
}
ul {
  @apply items-center w-full text-sm font-medium text-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white;
  background-color: rgba(0, 0, 0, 60);
}
li {
  @apply w-full dark:border-gray-600;
}
.not-last {
  @apply border-b border-gray-200 sm:border-b-0 sm:border-r;
}
input {
  @apply w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500;
}
label {
  @apply ml-2 w-full text-sm font-medium text-white dark:text-gray-300;
}
button {
  @apply w-full py-2 px-4 text-sm font-medium text-gray-900 bg-yellow-400 rounded-r-md border border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-transparent focus:text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white;
}
.disabled {
  @apply pointer-events-none;
}
</style>
