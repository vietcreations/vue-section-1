<template>
  <MainLayout :title="title" />
  <SelectGame
    :game-play="gamePlay"
    :status="status"
    @change="handleChangeGamePlay"
    @on-click="onChangeStatus"
  />
  <BadSelected v-if="status !== 0" :bad-selected="badSelected" />
  <GameLayout
    v-if="status !== 0"
    :data="randomData"
    :selected="selected"
    :correct="correct"
    :game-play="gamePlay"
    @handle-select="handleSelect"
  />
  <WinLayout :win="status === 2" @on-reset="onResetGame" />
</template>

<script>
import MainLayout from "./components/MainLayout.vue";
import SelectGame from "./components/SelectGame.vue";
import GameLayout from "./components/GameLayout.vue";
import BadSelected from "./components/BadSelected.vue";
import WinLayout from "./components/WinLayout.vue";

import pikachuImage from "./assets/images/pikachu.png";
import charmanderImage from "./assets/images/charmander.png";
import bulbasaurImage from "./assets/images/bulbasaur.png";
import blastoiseImage from "./assets/images/blastoise.png";
import mewtwoImage from "./assets/images/mewtwo.png";
import articunoImage from "./assets/images/articuno.png";
import moltresImage from "./assets/images/moltres.png";
import zapdosImage from "./assets/images/zapdos.png";
import caterpieImage from "./assets/images/caterpie.png";
import psyduckImage from "./assets/images/psyduck.png";

export default {
  name: "App",
  components: {
    MainLayout,
    SelectGame,
    GameLayout,
    BadSelected,
    WinLayout,
  },
  data() {
    return {
      title: "Memory game",
      status: 0,
      gamePlay: 4,
      selected: [],
      correct: [],
      randomData: [],
      badSelected: 0,
      data: [
        {
          id: 1,
          name: "Pikachu",
          image: pikachuImage,
        },
        {
          id: 2,
          name: "Charmander",
          image: charmanderImage,
        },
        {
          id: 3,
          name: "Bulbasaur",
          image: bulbasaurImage,
        },
        {
          id: 4,
          name: "Blastoise",
          image: blastoiseImage,
        },
        {
          id: 5,
          name: "Mewtwo",
          image: mewtwoImage,
        },
        {
          id: 6,
          name: "Articuno",
          image: articunoImage,
        },
        {
          id: 7,
          name: "Moltres",
          image: moltresImage,
        },
        {
          id: 8,
          name: "Zapdos",
          image: zapdosImage,
        },
        {
          id: 9,
          name: "Caterpie",
          image: caterpieImage,
        },
        {
          id: 10,
          name: "Psyduck",
          image: psyduckImage,
        },
      ],
    };
  },
  methods: {
    onChangeStatus(value) {
      switch (value) {
        case 1:
          this.onStartGame();
          break;
        default:
          this.onResetGame();
          break;
      }
    },
    onResetGame() {
      this.status = 0;
      this.badSelected = 0;
      this.selected = [];
      this.correct = [];
      this.randomData = [];
    },
    onStartGame() {
      this.status = 1;
      const newData = this.data
        .sort(() => Math.random() - Math.random())
        .slice(0, this.gamePlay);
      const newDataFormatted = [...newData, ...newData];
      this.randomData = newDataFormatted;
    },
    handleChangeGamePlay(e) {
      this.gamePlay = Number(e.target.value);
    },
    handleClickResetGame() {
      this.badSelected = 0;
      this.selected = [];
      this.correct = [];
      this.status = 0;
      const newData = this.data
        .sort(() => Math.random() - Math.random())
        .slice(0, this.gamePlay);
      const newDataFormatted = [...newData, ...newData].sort(
        () => Math.random() - Math.random()
      );
      this.randomData = newDataFormatted;
    },
    handleSelect(value) {
      if (this.selected.length === 0) {
        this.selected.push(value);
      } else {
        const selectA = this.randomData[this.selected[0]];
        const selectB = this.randomData[value];
        if (selectA.id === selectB.id) {
          this.correct = this.correct.concat([this.selected[0], value]);
          this.selected = [];
          if (this.correct.length === this.gamePlay * 2) {
            this.status += 1;
          }
        } else {
          this.selected.push(value);
          this.badSelected += 1;
          setTimeout(() => {
            this.selected = [];
          }, 500);
        }
      }
    },
  },
};
</script>
