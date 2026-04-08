<template>
  <div class="flex flex-col items-center justify-center h-[60vh] space-y-6">
    <Box class="h-16 w-16 text-muted-foreground" />
    <div class="text-center space-y-2">
      <h2 class="text-2xl font-bold tracking-tight">Three.js 即将上线</h2>
      <p class="text-muted-foreground max-w-md">
        Three.js 是一个基于 JavaScript 的 3D 库，可以用来创建 3D
        动画、游戏、交互式网页等内容。敬请期待！
      </p>
    </div>
    <Badge variant="outline">待开始</Badge>
  </div>
</template>

<script setup lang="ts">
import { Box } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
</script>
