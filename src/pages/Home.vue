<template>
  <div class="space-y-10">
    <!-- 欢迎区域 -->
    <div class="space-y-3">
      <h2 class="text-3xl font-bold tracking-tight">欢迎来到 Vue Play</h2>
      <p class="text-muted-foreground text-lg max-w-2xl">
        这是一个学习新技术的游乐场，可以在这里实践任何新鲜的技术。
      </p>
    </div>

    <!-- 技术栈卡片网格 -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card
        v-for="tech in techStack"
        :key="tech.title"
        class="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer border-2 hover:bg-accent/50"
        @click="router.push(tech.path)">
        <CardHeader class="pb-4">
          <div class="flex flex-row items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
              <component :is="tech.icon" class="h-6 w-6 text-primary" />
            </div>
            <Badge :variant="tech.status === 'completed' ? 'default' : tech.status === 'in-progress' ? 'secondary' : 'outline'" class="shrink-0">
              {{ statusText[tech.status] }}
            </Badge>
          </div>
        </CardHeader>
        <CardContent class="space-y-2">
          <h3 class="text-xl font-semibold tracking-tight">{{ tech.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ tech.description }}
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { Sparkles, Box, Globe, Code2 } from "lucide-vue-next"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const router = useRouter()

const statusText = {
  completed: "已完成",
  "in-progress": "进行中",
  pending: "待开始"
}

const techStack = [
  {
    title: "GSAP 动画",
    description: "学习 GSAP 动画库，掌握高性能网页动画制作技能",
    icon: Sparkles,
    path: "/gsap",
    status: "completed"
  },
  {
    title: "Three.js",
    description: "探索 Three.js 3D 渲染引擎，创建沉浸式 3D 网页体验",
    icon: Box,
    path: "/three",
    status: "pending"
  },
  {
    title: "Cesium",
    description: "Cesium 地理信息系统，构建强大的 3D 地球可视化应用",
    icon: Globe,
    path: "/cesium",
    status: "pending"
  },
  {
    title: "装饰器",
    description: "深入 TypeScript 装饰器，理解元编程与代码增强技术",
    icon: Code2,
    path: "/decorator",
    status: "in-progress"
  }
]
</script>
