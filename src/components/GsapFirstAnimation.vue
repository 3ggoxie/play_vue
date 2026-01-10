<template>
  <div class="gsap-first-animation">
    <div class="box"></div>
    <button @click="animGsapTo">GsapTo</button>
    <button @click="animGsapFrom">GsapFrom</button>
    <button @click="animGsapFromTo">GsapFromTo</button>
    <button @click="animGsapSet">GsapSet</button>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
function animGsapTo() {
  gsap.to(".box", { y: 200, rotation: 45 });
}
function animGsapFrom() {
  gsap.from(".box", { x: 200 });
}
function animGsapFromTo() {
  gsap.fromTo(".box", { x: 200 }, { y: 100 });
}
function animGsapSet() {
  gsap.set(".box", { x: -50 });
}
</script>

<style lang="css" scoped>
.gsap-first-animation {
  width: 100vw;
  height: 100vh;
  background: #000;
  position: relative;
  .box {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background: greenyellow;
    position: absolute;
    top: 300px;
    left: 500px;
  }
}
</style>
