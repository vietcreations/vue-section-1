<template>
  <div
    class="max-w-md ml-auto mr-auto text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600"
  >
    Bad select number: <b class="text-yellow-400">{{ badSelected }}</b>
  </div>
</template>

<script>
export default {
  name: "BadSelected",
  props: {
    badSelected: {
      type: Number,
      required: true,
    },
  },
};
</script>
