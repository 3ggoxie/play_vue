<template>
  <div class="horizontal-scrolling-page" ref="rootRef">
    <div class="empty-box">empty</div>
    <div class="empty-box">empty</div>
    <div
      ref="scrollBoxRef"
      class="scroll-box"
      :style="{ height: scrollBoxHeight + 'px' }">
      <div
        ref="scrollContainerRef"
        class="scroll-container"
        :style="{ transform: `translateY(${containerY}px)` }">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="scroll-card"
          :style="{
            transform: `translateX(${-cardTranslateX}px)`,
            marginLeft: '5rem',
          }">
          <p>card {{ card.text }}</p>
          <img
            class="city-background"
            :class="[`city-${index + 1}`]"
            src="../assets/imgs/city.svg"
            :style="{ transform: `translateX(${cityTranslateX * 0.5}px)` }"
            alt="City background" />
          <img
            class="truck"
            :class="[`truck-${index + 1}`]"
            src="../assets//imgs/truck.svg"
            :style="{ transform: `translateX(${truckTranslateX * 1.2}px)` }"
            alt="Truck" />
        </div>
      </div>
    </div>

    <div class="empty-box">empty</div>
    <div class="empty-box">empty</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

// 定义卡片类型
interface Card {
  text: string;
  id: number;
}

const scrollBoxRef = ref<HTMLElement | null>(null);
const scrollContainerRef = ref<HTMLElement | null>(null);
const rootRef = ref<HTMLElement | null>(null);
// 卡片数据
const cards = ref<Card[]>([
  { text: "one", id: 1 },
  { text: "two", id: 2 },
  { text: "three", id: 3 },
]);

// 滚动相关数据
const scrollY = ref(0);
const containerY = ref(0);
const cardTranslateX = ref(0);
const cityTranslateX = ref(0);
const truckTranslateX = ref(0);
const scrollBoxHeight = ref(0);
// 动画开始标志
const triggerDistance = computed(() => {
  //  到父元素顶部容器的距离
  return scrollBoxRef.value?.offsetTop || 0;
});
// 动画结束标志
const borderDistance = computed(() => {
  if (!scrollBoxRef.value) return 0;
  return (
    triggerDistance.value + scrollBoxRef.value.offsetHeight - window.innerHeight
  );
});
// 最大水平移动距离
const maxHorizontalDistance = computed(() => {
  if (!scrollContainerRef.value) return 0;
  else {
    if (rootRef.value) {
      return (
        scrollContainerRef.value.offsetWidth - rootRef.value?.offsetWidth + 100
      );
    }
    return 0;
  }
});

// 处理滚动
const handleScroll = () => {
  console.log(maxHorizontalDistance.value);

  scrollY.value = window.scrollY;

  if (
    scrollY.value >= triggerDistance.value &&
    scrollY.value <= borderDistance.value
  ) {
    // 计算容器垂直移动
    containerY.value = scrollY.value - triggerDistance.value;

    // 垂直移动比例
    const scrollProgress =
      (scrollY.value - triggerDistance.value) /
      (borderDistance.value - triggerDistance.value);

    // 计算各个元素的水平移动
    const horizontalDistance = scrollProgress * maxHorizontalDistance.value;
    cardTranslateX.value = horizontalDistance;
    cityTranslateX.value = horizontalDistance;
    truckTranslateX.value = horizontalDistance;
  } else {
    // 重置
    if (scrollY.value < triggerDistance.value) {
      containerY.value = 0;
      cardTranslateX.value = 0;
      cityTranslateX.value = 0;
      truckTranslateX.value = 0;
    }
  }
};

// 处理窗口大小变化
const handleResize = () => {
  if (scrollBoxRef.value && scrollContainerRef.value) {
    // 设置滚动容器高度
    scrollBoxHeight.value = scrollContainerRef.value.offsetWidth;
  }
};

// 生命周期钩子
onMounted(() => {
  // watch(scrollY, (val) => {
  //   console.log("scrollY", val);
  // });
  // 初始化
  handleResize();

  // 添加事件监听器
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // 初始触发一次滚动
  setTimeout(() => {
    handleScroll();
  }, 100);
});

onUnmounted(() => {
  // 移除事件监听器
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 2vmin;
}

p,
img {
  pointer-events: none;
  user-select: none;
}

.horizontal-scrolling-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #171717;
}

.empty-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65rem;
  height: 40rem;
  background-color: #17f700;
  border-radius: 5rem;
  margin-bottom: 8rem;
  font-family: sans-serif;
  font-size: 8rem;
  color: #f7f7f7;
  font-weight: 900;
  text-transform: uppercase;
  user-select: none;
}

.scroll-box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
}

.scroll-container {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: auto;
  flex-shrink: 0;
  will-change: transform;
}

.scroll-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65rem;
  height: 40rem;
  background-color: #f7f7f7;
  border-radius: 5rem;
  margin-left: 5rem;
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;
  will-change: transform;
}

.scroll-card:first-child {
  margin-left: 0;
}

.scroll-card p {
  font-family: sans-serif;
  font-size: 6rem;
  color: #171717;
  font-weight: 900;
  text-transform: uppercase;
  z-index: 1;
}

.city-background {
  position: absolute;
  bottom: 0;
  height: 100%;
  opacity: 0.7;
  will-change: transform;
}

.truck {
  position: absolute;
  bottom: 0;
  height: 6rem;
  will-change: transform;
}

.city-1,
.truck-1 {
  left: 0;
}

.city-2,
.truck-2 {
  left: calc(-100% + -5rem);
}

.city-3,
.truck-3 {
  left: calc(-200% + -10rem);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .empty-box,
  .scroll-card {
    width: 50rem;
    height: 30rem;
    font-size: 6rem;
  }

  .scroll-card p {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
  .empty-box,
  .scroll-card {
    width: 30rem;
    height: 20rem;
    font-size: 4rem;
    border-radius: 3rem;
    margin-bottom: 4rem;
  }

  .scroll-card {
    margin-left: 3rem;
  }

  .scroll-card p {
    font-size: 2.5rem;
  }

  .truck {
    height: 4rem;
  }
}

@media (max-width: 480px) {
  .empty-box,
  .scroll-card {
    width: 22rem;
    height: 15rem;
    font-size: 3rem;
    border-radius: 2rem;
    margin-bottom: 3rem;
  }

  .scroll-card {
    margin-left: 2rem;
  }

  .scroll-card p {
    font-size: 2rem;
  }

  .truck {
    height: 3rem;
  }
}
</style>
