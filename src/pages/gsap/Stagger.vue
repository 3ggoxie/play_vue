<template>
  <div class="stagger-container">
    <div class="stagger-grid">
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
    <p class="hint-text">点击任意方块触发交错动画</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import gsap from "gsap"

const boxRefs = ref<HTMLDivElement[]>([])
const boxes = new Array(25).fill(0)

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
  })
}
</script>

<style lang="css" scoped>
.stagger-container {
  height: calc(100vh - 8rem);
  background: #000;
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.stagger-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  max-width: 600px;
}

.box {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ADFF2F 0%, #7FFF00 100%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #000;
  transition: transform 0.2s;
}

.box:hover {
  transform: scale(1.05);
}

.hint-text {
  position: absolute;
  bottom: 2rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}
</style>
