<template>
  <div class="gsap-stagger">
    <div
      class="box"
      v-for="(_, index) in boxes"
      :key="index"
      :ref="
        (el) => {
          if (el) boxRefs[index] = el as HTMLDivElement;
        }
      "
      @click="handleBoxClick(index)">
      {{ index + 1 }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";

const boxRefs = ref<HTMLDivElement[]>([]);
const boxes = new Array(25).fill(0);

const handleBoxClick = (clickedIndex: number) => {
  gsap.to(boxRefs.value, {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: {
      from: clickedIndex,
      amount: 1,
    },
    ease: "back.in",
    overwrite: "auto",
  });
};
</script>

<style lang="css" scoped>
.gsap-stagger {
  height: 100vh;
  background: #000;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  .box {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background: greenyellow;
    cursor: pointer;
  }
}
</style>
