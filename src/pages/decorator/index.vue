<template>
  <div class="space-y-10">
    <div class="space-y-3">
      <h2 class="text-3xl font-bold tracking-tight">TypeScript 装饰器学习</h2>
      <p class="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        装饰器是一种特殊类型的声明，能够附加到类声明、方法、访问符、属性或参数上。
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <!-- 装饰器说明 -->
      <Card class="border-2">
        <CardHeader>
          <div class="flex flex-row items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5"
            >
              <Code2 class="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>countInstance 装饰器</CardTitle>
              <p class="text-sm text-muted-foreground">统计类被实例化的次数</p>
            </div>
          </div>
        </CardHeader>
        <CardContent class="space-y-4">
          <pre
            class="rounded-lg bg-muted p-4 text-sm overflow-x-auto leading-relaxed"
          ><code>{{ decoratorCode }}</code></pre>
        </CardContent>
      </Card>

      <!-- 交互演示 -->
      <Card class="border-2">
        <CardHeader>
          <CardTitle>交互演示</CardTitle>
          <CardDescription> 点击按钮创建类实例，观察 count 值的变化 </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="flex gap-4">
            <Button @click="createInstance" class="gap-2">
              <Plus class="h-4 w-4" />
              创建实例
            </Button>
            <Button variant="outline" @click="resetCount" class="gap-2">
              <RotateCcw class="h-4 w-4" />
              重置
            </Button>
          </div>

          <div v-if="instanceCount > 0" class="space-y-3">
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-lg bg-accent p-4 text-center">
                <p class="text-3xl font-bold">{{ instanceCount }}</p>
                <p class="text-sm text-muted-foreground">已创建实例</p>
              </div>
              <div class="rounded-lg bg-accent p-4 text-center">
                <p class="text-3xl font-bold">{{ latestCount }}</p>
                <p class="text-sm text-muted-foreground">最新 count 值</p>
              </div>
            </div>

            <!-- 实例可视化 -->
            <div class="flex flex-wrap gap-2 pt-2">
              <div
                v-for="i in Math.min(instanceCount, 20)"
                :key="i"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium"
              >
                {{ i }}
              </div>
              <div
                v-if="instanceCount > 20"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs"
              >
                +{{ instanceCount - 20 }}
              </div>
            </div>
          </div>

          <div
            v-else
            class="flex items-center justify-center h-32 rounded-lg border-2 border-dashed text-muted-foreground"
          >
            <p>点击「创建实例」开始</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Code2, Plus, RotateCcw } from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const instanceCount = ref(0)
const latestCount = ref(0)

const decoratorCode = `function countInstance(
  value: new (...args: any[]) => {} & { count: number },
  context: ClassDecoratorContext
) {
  let instanceCount = 0;
  const wrapper = function (...args: any[]) {
    instanceCount++;
    const instance = new value(...args);
    instance.count = instanceCount;
    return instance;
  } as unknown as typeof value;

  wrapper.prototype = value.prototype;
  return wrapper;
}`

class DemoClass {
  count: number = 0
}

const instances: DemoClass[] = []

const createInstance = () => {
  const instance = new DemoClass()
  instance.count = instances.length + 1
  instances.push(instance)
  instanceCount.value = instances.length
  latestCount.value = instance.count
}

const resetCount = () => {
  instances.length = 0
  instanceCount.value = 0
  latestCount.value = 0
}
</script>
