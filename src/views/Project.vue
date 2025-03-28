<template>
  <div class="project-page">
    <Topbar />

    <div class="container">
      <h1 class="page-title">行业经历</h1>

      <div class="timeline">
        <template v-for="project in projects" :key="project.id">
          <div class="timeline-item">
            <div class="timeline-dot" />
            <div class="timeline-content">
              <div class="company-info">
                <h2>{{ project.company }}</h2>
                <span class="date">{{ project.startTime }} - {{ project.endTime }}</span>
                <h3>{{ project.title }}</h3>
              </div>
              <div class="project-details">
                <h4>项目经历:</h4>
                <ul>
                  <li v-for="item in project.items" :key="item.id">
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.content }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <el-backtop :right="50" :bottom="50" />
</template>

<script setup>
import Topbar from '../components/Topbar.vue'
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    company: '美团',
    startTime: '2024年9月',
    endTime: '至今',
    title: '软件开发工程师',
    items: [
      {
        id: 1,
        title: '微信小程序框架优化',
        content: '负责微信小程序核心框架的性能优化，提升了小程序的加载速度30%，优化了内存占用，提高了用户体验。'
      },
      {
        id: 2,
        title: '企业微信前端架构重构',
        content: '参与企业微信Web版的架构重构，使用Vue3和TypeScript开发新的组件库，提高了代码复用率和开发效率。'
      },
      {
        id: 3,
        title: 'AI模型开发',
        content: '参与AI模型开发，负责模型训练和部署，提高了模型的准确性和效率。'
      }
    ]
  },
  {
    id: 2,
    company: '个人博客后台管理系统',
    startTime: '2024年1月',
    endTime: '2024年3月',
    title: '全栈开发工程师',
    items: [
      {
        id: 1,
        title: '博客后台管理系统',
        content: '开发了博客后台管理系统，实现了博客的创建、编辑、删除、发布等功能，支持Markdown格式。'
      }
    ]
  },
  {
    id: 3,
    company: '上港哪吒智慧科技',
    startTime: '2023年10月',
    endTime: '2024年2月',
    title: 'Web前端开发工程师',
    items: [
      {
        id: 1,
        title: '淘宝移动端性能优化',
        content: '负责淘宝移动端的性能优化工作，开发了前端性能监控系统，减少了页面首屏加载时间40%。'
      },
      {
        id: 2,
        title: '支付宝小程序开发',
        content: '参与支付宝小程序开发，设计和实现了多个通用组件，提高了团队的开发效率。'
      }
    ]
  },
  {
    id: 4,
    company: '蒙纳什大学行业体验项目',
    startTime: '2023年2月',
    endTime: '2023年12月',
    title: '软件开发工程师',
    items: [
      {
        id: 1,
        title: '心理医生个人网站',
        content: '一名心理医生个人网站，用来展示心理医生的个人资料，以及心理咨询服务。'
      },
      {
        id: 2,
        title: '广告投放系统',
        content: '参与开发今日头条广告投放系统，负责数据可视化和用户界面交互设计，提升了广告投放效率。'
      }
    ]
  }
])

</script>

<style scoped>
.project-page {
  background-color: #f4f5f7;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  color: #2c3e50;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.page-title:after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  margin: 15px auto 0;
}

.timeline {
  position: relative;
  margin: 50px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #e1e4e8;
  top: 0;
  bottom: 0;
  left: 50px;
  margin-left: -2px;
}

.timeline-item {
  padding: 10px 40px 10px 70px;
  position: relative;
  margin-bottom: 30px;
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50px;
  background-color: #4e54c8;
  border-radius: 50%;
  top: 15px;
  z-index: 1;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(78, 84, 200, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(1.3);
  box-shadow: 0 0 0 6px rgba(78, 84, 200, 0.3);
}

.timeline-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.company-info {
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
}

.company-info h2 {
  color: #2c3e50;
  margin-bottom: 5px;
  font-size: 1.8rem;
}

.company-info .date {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.company-info h3 {
  color: #4e54c8;
  font-size: 1.2rem;
  margin-top: 5px;
}

.project-details h4 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.project-details ul {
  padding-left: 20px;
}

.project-details li {
  margin-bottom: 15px;
}

.project-details strong {
  color: #34495e;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
}

.project-details p {
  color: #5d6978;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-item {
    padding-left: 50px;
  }
  
  .timeline-dot {
    left: 30px;
  }
}
</style>