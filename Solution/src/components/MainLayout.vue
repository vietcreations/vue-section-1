<template>
  <div class="pkm-background"></div>
  <div class="logo mt-3 mb-3 ml-auto mr-auto w-48">
    <img :src="logo" alt="Logo" />
  </div>
  <h1 class="uppercase font-black text-4xl text-center">{{ title }}</h1>
</template>

<script>
import logo from "../assets/images/logo.png";

export default {
  name: "MainLayout",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style>
.pkm-background {
  background-image: url("../assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.pkm-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
}
h1 {
  color: white;
}
</style>
