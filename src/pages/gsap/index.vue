<template>
  <div class="space-y-10">
    <div class="space-y-3">
      <h2 class="text-3xl font-bold tracking-tight">GSAP 动画学习</h2>
      <p class="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        GSAP (GreenSock Animation Platform) 是一个强大的动画库，支持网页和数字交互内容的动画制作。
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="(demo, index) in demos"
        :key="demo.title"
        class="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer border-2"
        @click="router.push(demo.path)"
      >
        <CardHeader class="pb-4">
          <div class="flex flex-row items-center justify-between">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 group-hover:from-green-500/30 group-hover:to-green-500/10 transition-all duration-300"
            >
              <component :is="demo.icon" class="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <span class="text-sm text-muted-foreground font-medium">#{{ index + 1 }}</span>
          </div>
        </CardHeader>
        <CardContent class="space-y-2">
          <h3 class="text-xl font-semibold tracking-tight">{{ demo.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ demo.description }}
          </p>
          <Badge variant="secondary" class="mt-2">{{ demo.level }}</Badge>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Sparkles, Zap } from 'lucide-vue-next'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const router = useRouter()

const demos = [
  {
    title: '交错动画',
    description: '点击方块触发交错消失动画，学习 stagger 属性的使用方式',
    icon: Sparkles,
    path: '/gsap/stagger',
    level: '基础',
  },
  {
    title: '首次动画',
    description: '了解 GSAP 的 to/from/fromTo/set 方法，掌握基本动画配置',
    icon: Zap,
    path: '/gsap/first-animation',
    level: '基础',
  },
]
</script>
