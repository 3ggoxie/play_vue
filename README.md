# Vue Play - 前端新技术学习项目

一个用于学习和实践现代前端技术的 Vue 3 项目，集成了多种前沿技术栈和动画库。

## 🚀 技术栈

- **Vue 3** - Composition API + `<script setup>` 语法
- **TypeScript** - 静态类型检查，包含装饰器学习
- **Vite** - 现代化的构建工具
- **shadcn/ui** - 基于 reka-ui 的组件库
- **Tailwind CSS v3** - 实用优先的 CSS 框架
- **GSAP** - 专业级动画库
- **Vue Router 4** - 路由管理
- **VueUse** - Vue 组合式 API 实用工具集

## 📁 项目结构

```
src/
├── components/
│   ├── ui/          # shadcn/ui 组件（Button、Card、Sidebar 等）
│   └── lib/         # 工具函数
├── pages/
│   ├── Home.vue              # 首页
│   ├── gsap/                 # GSAP 动画学习
│   │   ├── index.vue         # GSAP 导航页
│   │   ├── FirstAnimation.vue # 基础动画演示
│   │   └── Stagger.vue       # 交错动画演示
│   ├── decorator/            # TypeScript 装饰器学习
│   │   └── index.vue         # 装饰器演示页面
│   ├── three/                # Three.js 学习（待实现）
│   └── cesium/               # Cesium 学习（待实现）
├── layouts/
│   └── MainLayout.vue        # 主布局（带侧边栏导航）
├── styles/
│   ├── index.css            # 全局样式 + Tailwind
│   ├── reset.css            # CSS 重置
│   └── variables.css        # CSS 变量定义
├── router/
│   └── index.ts             # 路由配置
├── decorator/
│   └── simpleDecorator.ts   # TypeScript 装饰器示例
└── main.ts                  # 应用入口
```

## 🎯 学习模块

### 1. GSAP 动画学习

- **基础动画**：`to()`、`from()`、`fromTo()`、`set()` 方法
- **交错动画**：`stagger` 属性的使用
- **时间线控制**：动画序列管理

### 2. TypeScript 装饰器

- **装饰器概念**：类装饰器、方法装饰器、属性装饰器
- **实例统计**：`countInstance` 装饰器示例，统计类实例化次数
- **装饰器语法**：了解最新的 Stage 3 装饰器提案

### 3. 现代化 UI 组件

- **shadcn/ui** 组件库的集成与使用
- **响应式侧边栏**：可折叠的导航菜单
- **深色/浅色主题**：CSS 变量驱动的主题系统

### 4. 待实现模块

- **Three.js**：WebGL 3D 渲染
- **Cesium**：地理信息系统可视化

## 🛠️ 开发环境

### 环境要求

- Node.js 18+
- npm / yarn / pnpm

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

启动后访问：http://localhost:5175

### 构建生产版本

```bash
npm run build
```

### 类型检查

```bash
npm run type-check
```

## 🎨 主题系统

项目使用 CSS 自定义变量实现完整的深色/浅色主题：

```css
:root {
  --background: oklch(1 0 0); /* 浅色背景 */
  --foreground: oklch(0.145 0 0); /* 浅色前景 */
  /* ... 其他颜色变量 */
}

.dark {
  --background: oklch(0.145 0 0); /* 深色背景 */
  --foreground: oklch(0.985 0 0); /* 深色前景 */
  /* ... 其他颜色变量 */
}
```

## 🔧 技术难点与解决方案

### 1. TypeScript 装饰器编译

**问题**：Stage 3 装饰器语法与旧语法不兼容  
**解决方案**：

- 使用最新的 TypeScript 5.x 装饰器提案
- 正确声明装饰器上下文类型
- 确保装饰器返回值的类型安全

## 📚 学习路径

1. **基础环境搭建**：Vue 3 + TypeScript + Vite
2. **UI 组件库**：shadcn/ui 组件使用与自定义
3. **动画实现**：GSAP 基础到高级动画技巧
4. **元编程**：TypeScript 装饰器的实际应用
5. **3D 可视化**：Three.js 和 Cesium 集成（后续）

## 📈 项目状态

| 模块              | 状态      | 进度 |
| ----------------- | --------- | ---- |
| Vue 3 基础框架    | ✅ 已完成 | 100% |
| shadcn/ui 组件库  | ✅ 已完成 | 100% |
| 响应式侧边栏      | ✅ 已完成 | 100% |
| GSAP 动画         | ✅ 已完成 | 100% |
| TypeScript 装饰器 | 🔄 进行中 | 80%  |
| Three.js 集成     | ⏳ 待开始 | 0%   |
| Cesium 集成       | ⏳ 待开始 | 0%   |

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

MIT

---

> **注意**：这是一个学习项目，用于探索和实践现代前端技术栈。部分功能仍在开发中，欢迎提出改进建议！
