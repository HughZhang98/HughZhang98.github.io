# 性能优化相关

1. 首屏加载优化（打开速度）
2. 缓存优化（再次打开速度）
3. 渲染优化（操作顺滑）
4. 长任务拆分（动画流畅）

## 做过哪些性能优化相关的工作

### 首屏加载优化（打开速度）

1. FP（First Paint 首次绘制）
2. FCP（First Contentful Paint 首次内容绘制），FP到FCP中间主要是SPA应用js执行，太慢就会白屏过久
3. FMP （First Meaningful Paint 首次有效绘制），**主要内容**呈现的时间（MutationObserver做信息采集，监视DOM树的更改）
4. LCP （Largest Contentful Paint 最大内容绘制）， 加载最大内容块呈现时间 - 【4.58s -> 2.9s】
5. INP （Interaction to Next Paint 用户交互绘制），用户交互到页面相应的时间 【232ms -> 88ms】
6. TTI （可交互时间），注意SSR事件还没绑定
7. TBT （Total Blocking Time 阻塞时间），从FCP到TTI之间的 总阻塞时间
8. CLS （Cumulative Layout Shift 布局偏移），布局偏移情况，重拍reflow -【0.43 -> 0.22 】
9. TTFB（Time to First Byte 首字节到达时间），请求出发后到接收到数据中间的时间

#### 方案

1. 优化图片，Webp，图片压缩，图片尺寸（合适的容器内用合适的尺寸图片 1倍2倍3倍图）
2. 字体瘦身，设计型产品，字体子集化（用了哪些字，就最后只生成对应字的字体文件），Fontmin（ttf文件）
3. 懒加载资源，图片懒加载，js异步加载
4. css和js文件压缩，打包构建阶段完成，js（terser），代码压缩，文件合并，文件拆分，Tree Shaking，动态加载
5. 压缩代码，Gzip，Brotli
6. SSR，SSG

### 动画卡顿

为什么会卡顿，**单线程**，阻塞

#### 方案

1. 减少主线程阻塞
   1. 优化Javascript执行，减少长任务（复杂的计算【web worker 单独计算-post message-主线程】，【将任务切分（react Scheduler）】）
2. 触发GPU加速
   1. css属性（transform、translate、opacity）
   2. 避免会引起重排的（定位，left， top）
3. requestAnimationFrame
4. 节流防抖

### 应用层状态优化

#### Vue

1. 精简Vuex或Pinia的全局状态
   1. 将不需要全局共享的状态移至组件内部，减少全局状态更新的开销
   2. 示例：使用reactive管理局部状态，而不是在全局store中存储
2. 模块化和按需加载
   1. 将Vuex或Pinia的状态模块化，按需加载，提高性能
3. 避免多余的Getter重计算
   1. 将计算密集型的逻辑放入组件的computed或watch中，而不是在store的getter中
4. 避免多余的响应式数据，只对需要响应式的数据使用ref和reactive
5. 使用v-once和v-memo，对不需要更新的静态内容可以使用v-once渲染一次
6. 拆分组件和局部更新，将大组件拆分为多个子组件，使用keep-alive缓存不活跃的组件，减少重新渲染的开销
7. 避免watch的过渡使用，优化watch逻辑，仅对必要的依赖进行监听，减少副作用执行
8. 使用虚拟滚动，对长列表使用虚拟滚动库（如vue- virtual- scroller）进行优化

#### React

1. react状态管理
   1. 将状态尽可能局部化，避免使用全局状态（如Redux或Context）管理所有数据
   2. 示例：对于仅使用某些组件的状态，可以使用组件的useState或useReducer
2. 优化Context性能
   1. Context的更新会重新渲染所有订阅的组件
   2. 解决方案：**拆分Context**，将不同的逻辑存储在多个Context中，降低重新渲染范围
3. 使用高效的状态管理库
   1. 使用轻量、高性能的状态管理工具，如Zustand，Jotai或Recoil，他们具备更细粒度的状态更新机制
4. 避免不必要的状态更新
   1. 使用不可变数据结构（如 immer）管理状态，减少对数据的直接修改，缩小更新边界
5. 使用React.memo防止不必要的重新渲染
6. 使用useMemo缓存复杂计算的结果和useCallback缓存函数实例
7. 拆分组件，将页面拆分成更小的组件，只更新必要的部分，避免整体重新渲染
8. 使用虚拟滚动，长列表渲染，使用虚拟滚动，只渲染可见区域
9. 适当使用批处理更新，确保多个状态更变可以批量处理，减少渲染次数

### 事件和渲染细节优化

1. 节流防抖
2. 事件绑定
   1. Vue中使用.native修饰符直接绑定DOM事件
   2. React中避免在子组件上过多传递回调函数
3. 避免不必要DOM操作
   1. 减少直接操作DOM的次数，尽量通过框架的响应式机制处理更新
4. 异步加载和懒加载
   1. 对于路由组件、图片等使用懒加载技术，降低首次加载压力
5. 使用请求合并
   1. 在需要多次请求时，合并请求以减少多余的网络开销

## 前端性能如何评估，具体的性能指标体系和评估策略

**（主导，推进，负责）分析性能问题**，给出性能问题对应**解决方案，实施，建立完整的指标体系**，持续监控，**持续优化**

页面搭建之后，首屏加载非常慢（FMP 5s），很多冗余代码【来自搭建端有很多】

性能监控平台

### 性能指标体系建立

1. FP（First Paint 首次绘制）
2. FCP（First Contentful Paint 首次内容绘制），FP到FCP中间主要是SPA应用js执行，太慢就会白屏过久
3. FMP （First Meaningful Paint 首次有效绘制），**主要内容**呈现的时间（MutationObserver做信息采集，监视DOM树的更改）
4. LCP （Largest Contentful Paint 最大内容绘制）， 加载最大内容块呈现时间 - 【4.58s -> 2.9s】
5. INP （Interaction to Next Paint 用户交互绘制），用户交互到页面相应的时间 【232ms -> 88ms】
6. TTI （可交互时间），注意SSR事件还没绑定
7. TBT （Total Blocking Time 阻塞时间），从FCP到TTI之间的 总阻塞时间
8. CLS （Cumulative Layout Shift 布局偏移），布局偏移情况，重拍reflow -【0.43 -> 0.22 】
9. TTFB（Time to First Byte 首字节到达时间），请求出发后到接收到数据中间的时间

常规的指标使用Performance、PerformanceObserver API和Webvisual来做计算

10. DNS的查询时间
11. 资源加载时间，MutationObserver
12. 长任务的时间，主线程占用时长超过50ms

### 性能指标采集

1. 常规指标采集：Performance、PerformanceObserver API和Webvisual
2. 自定义指标， FMP 通过MutationObserver来自定义计算
3. 额外指标： 首字节，服务端（DNS，资源加载，长任务）上报
4. 上报：XHR（会有跨域），图片上报，实时/批量上报

### 性能评估

监控指标和数据都拿到了，就计算、统计、评估。能够得到性能报告，具体分析性能，持续解决

实践中的性能优化

结合上述指标和策略，实际举措：

1. 减少资源体积：压缩CSS/JS，使用Tree Shaking 和代码分割
2. 懒加载与预加载：延迟加载非关键资源，优先加载关键CSS和JS
3. 优化图片：使用WebP格式，结合CDN
4. 服务器端渲染（SSR）：提升首屏渲染速度
5. 长列表优化：实现虚拟滚动

#### 基准测试

1. 确定目标设备和网络环境
   1. 测试覆盖范围：高端、中端、低端设备，5g、4g、3g、弱网环境等
   2. 模拟弱网：使用Chrome DevTools的网络调节功能
2. 基准值定义
   1. 根据行业标准和历史数据定义性能基准（如LCP < 2.5s，CLS < 0.1）

## 作为leader如何落实，团队代码质量和整体管理怎么落实

全栈平台，性能监控全链路设计

### 指标体系设计、计算和评估等

#### 原则

1. 清晰且可量化：指标必须直观且易于理解，例如LCP、CLS、INP等。
2. 与业务目标挂钩：例如关键页面的加载时间（LCP）直接影响用户留存率
3. 覆盖加载、交互、稳定性：确保监控全面，不遗漏关键用户体验
4. 埋点，为了追踪用户浏览痕迹，一次来评判产品用户体验

#### 指标

1. 加载性能
   1. FP：首次绘制
   2. FCP：首次内容绘制
   3. LCP：最大内容绘制
   4. TTFB：首字节到达时间
2. 交互性能
   1. INP：用户交互到下一次绘制时间
   2. TBT：总阻塞时间
3. 稳定性
   1. CLS：页面布局偏移
4. 业务自定义指标
   1. 页面中某些功能模块的加载时间
   2. 特定的用户行为路径完成时间
