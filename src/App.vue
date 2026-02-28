<template>
  <!-- <GsapFirstAnimation></GsapFirstAnimation> -->
  <GsapStagger />
</template>
<script setup lang="ts">
import GsapStagger from "./components/GsapStagger.vue";
import Greeter from "./decorator/simpleDecorator";

@Greeter
class A {}

const a = new A();
(a as any).greet();

// import GsapFirstAnimation from "./components/GsapFirstAnimation.vue";
</script>

<style scoped></style>
