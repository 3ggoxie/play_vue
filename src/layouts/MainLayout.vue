<template>
  <SidebarProvider>
    <Sidebar side="left" collapsible="icon" class="border-r">
      <SidebarHeader class="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton as-child>
              <RouterLink to="/" class="flex items-center gap-3">
                <Avatar class="h-8 w-8 border-2 border-primary/20">
                  <AvatarFallback class="bg-primary text-primary-foreground font-bold">
                    <Play class="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span class="font-semibold text-lg sidebar-item-text">Vue Play</span>
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>导航</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in navItems" :key="item.label">
                <SidebarMenuButton :is-active="isActive(item)" :tooltip="item.label" as-child>
                  <RouterLink :to="item.path || item.to || '/'">
                    <component :is="item.icon" class="h-5 w-5" />
                    <span class="ms-2 sidebar-text">{{ item.label }}</span>
                  </RouterLink>
                </SidebarMenuButton>
                <SidebarMenuBadge v-if="item.badge" :variant="item.badgeVariant">
                  {{ item.badge }}
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup v-if="route.path.startsWith('/gsap')">
          <SidebarGroupLabel>GSAP 示例</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem v-for="child in gsapChildren" :key="child.to">
              <SidebarMenuButton
                :is-active="route.path === child.to"
                :tooltip="child.label"
                as-child
              >
                <RouterLink :to="child.to">
                  <component :is="child.icon" class="h-4 w-4" />
                  <span class="ms-2 sidebar-text">{{ child.label }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter class="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarTrigger class="w-full">
              <PanelLeftClose class="h-4 w-4" />
              <span class="ms-2 sidebar-text">收起侧边栏</span>
            </SidebarTrigger>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-16 items-center justify-between border-b bg-background/50 backdrop-blur-sm px-6"
      >
        <div class="flex items-center gap-4">
          <SidebarTrigger />
          <Separator orientation="vertical" class="h-6" />
          <h1 class="text-xl font-semibold tracking-tight">
            {{ currentPageTitle }}
          </h1>
        </div>
        <div class="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Link class="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div class="p-6">
        <RouterView />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import { Play, PanelLeftClose, Link, Sparkles, Zap, Box, Globe, Code2, Home } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SidebarGroupContent from '@/components/ui/sidebar/SidebarGroupContent.vue'

const route = useRoute()

interface NavItem {
  label: string
  icon: typeof Home
  to?: string
  path?: string
  badge?: string
  badgeVariant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

const navItems: NavItem[] = [
  { label: '首页', icon: Home, to: '/' },
  { label: 'GSAP 动画', icon: Sparkles, path: '/gsap' },
  {
    label: 'Three.js',
    icon: Box,
    to: '/three',
    badge: '待学',
    badgeVariant: 'outline',
  },
  {
    label: 'Cesium',
    icon: Globe,
    to: '/cesium',
    badge: '待学',
    badgeVariant: 'outline',
  },
  {
    label: '装饰器',
    icon: Code2,
    to: '/decorator',
    badge: '学习',
    badgeVariant: 'secondary',
  },
]

const gsapChildren = [
  { label: '交错动画', to: '/gsap/stagger', icon: Sparkles },
  { label: '首次动画', to: '/gsap/first-animation', icon: Zap },
]

const isActive = (item: NavItem) => {
  if (item.path) {
    return route.path.startsWith(item.path)
  }
  return route.path === item.to
}

const currentPageTitle = computed(() => {
  const path = route.path
  if (path === '/') return '欢迎来到 Vue Play'
  if (path.startsWith('/gsap')) return 'GSAP 动画'
  if (path.startsWith('/three')) return 'Three.js'
  if (path.startsWith('/cesium')) return 'Cesium'
  if (path.startsWith('/decorator')) return '装饰器学习'
  return 'Vue Play'
})
</script>

<style>
.sidebar-text {
  margin-left: 0.5rem;
}

[data-collapsible='icon'] .sidebar-text {
  display: none;
}
</style>
