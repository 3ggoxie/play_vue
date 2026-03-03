<template>
  <!-- <GsapFirstAnimation></GsapFirstAnimation> -->
  <GsapStagger />
</template>
<script setup lang="ts">
import GsapStagger from "./components/GsapStagger.vue";
import { countInstance } from "./decorator/simpleDecorator";
@countInstance
class A {
  count: number;
  constructor() {
    this.count = 0;
  }
}
// interface A {
//   count: number;
//   greet(): void;
// }

const a = new A();
const b = new A();
console.log(b.count);

// import GsapFirstAnimation from "./components/GsapFirstAnimation.vue";
</script>

<style scoped></style>
