<template>
  <div class="flex flex-col items-center justify-center h-[60vh] space-y-6">
    <Globe class="h-16 w-16 text-muted-foreground" />
    <div class="text-center space-y-2">
      <h2 class="text-2xl font-bold tracking-tight">Cesium 即将上线</h2>
      <p class="text-muted-foreground max-w-md">
        Cesium 是一个用于构建三维数字地球应用的平台，支持地形、影像、3D 模型等地理空间数据的可视化。敬请期待！
      </p>
    </div>
    <Badge variant="outline">待开始</Badge>
  </div>
</template>

<script setup lang="ts">
import { Globe } from "lucide-vue-next"
import { Badge } from "@/components/ui/badge"
</script>
