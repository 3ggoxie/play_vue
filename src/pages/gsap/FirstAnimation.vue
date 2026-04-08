<template>
  <div class="first-animation-container">
    <div class="box"></div>
    <div class="button-group">
      <Button @click="animGsapTo" variant="default" size="sm">GsapTo</Button>
      <Button @click="animGsapFrom" variant="outline" size="sm">GsapFrom</Button>
      <Button @click="animGsapFromTo" variant="secondary" size="sm">GsapFromTo</Button>
      <Button @click="animGsapSet" variant="ghost" size="sm">GsapSet</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { Button } from '@/components/ui/button'

function animGsapTo() {
  gsap.to('.box', { y: 200, rotation: 45 })
}
function animGsapFrom() {
  gsap.from('.box', { x: 200 })
}
function animGsapFromTo() {
  gsap.fromTo('.box', { x: 200 }, { y: 100 })
}
function animGsapSet() {
  gsap.set('.box', { x: -50 })
}
</script>

<style lang="css" scoped>
.first-animation-container {
  height: calc(100vh - 8rem);
  background: #000;
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: greenyellow;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}

.button-group {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(8px);
}
</style>
