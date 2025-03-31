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
        title: '能效工具平台开发',
        content: '主导公司内部能效工具平台前端开发，从 0 到 1 构建排期工具和文档关联能力，使用Vue.js + ElementUI + FullCalendar 技术栈，内部推广时帮助部门实现单月节省 30PD+，提高工作效率 40%+。'
      },
      {
        id: 2,
        title: '文档提效工具创新',
        content: '从 0 到 1 构建基于大语言模型的文档提效工具，自动生成初步技术文档，显著提升效率和文档质量。并加入 AI 对话修改文档能力。技术栈为 React + Ant Design，使用长轮询 和 SSE 技术实现实时更新和高效数据传输和流式输出。'
      },
      {
        id: 3,
        title: '跨部门协作与推广',
        content: '与后端紧密协作，确保项目按期交付并符合产品需求。参与和组织跨部门宣讲，推动工具在多个团队中的广泛应用。'
      },
      {
        id: 4,
        title: '榜单后台管理系统开发和优化',
        content: '根据产品需求，修改和新增榜单后台管理系统的功能，优化数据管理和用户交互体验，提升运营效率。'
      }
    ]
  },
  {
    id: 2,
    company: '博客后台管理系统',
    startTime: '2024年1月',
    endTime: '2024年3月',
    title: '全栈开发工程师',
    items: [
      {
        id: 1,
        title: '一个简单的博客后台管理系统',
        content: '技术栈使用了 Vue + ElementUI + NodeJs + Axios +Cors + MongoDB, 使用了 Vue.js 框架结合 ElementUI 组件库，以及 Node.js 构建了整个系统的前后端架构。使用 Axios 库进行与后端接口的数据交互。使用 MongoDB 存储信息，采用 Cors 技术解决跨域访问问题'
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
        title: '可视化模块开发',
        content: '参与公司 Vue3 项目部分功能开发，并使用 Echarts 参与和开发数据可视化项目，提升项目的整体用户体验。'
      },
      {
        id: 2,
        title: 'Web3D开发',
        content: '根据兴趣和导师的学习计划学习 Three.js, 并参与项目模型绘制和开发, 做出可以控制方向的小车和镜头跟随人物，后续自学并集成 Cannon物理引擎，增强物理模拟效果，学习 Blender，成功创建简单物体、场景和骨架动画，提升 3D 建模能力, 并进一步学习 Vue3 ，TypeScript，数据分析，数据可视化'
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
        title: '财务会计师个人网站',
        content: '一名财务会计师的个人网站，用来吸引新客户，客户可以在后台编辑网页内容，使用 CakePHP + cPanel + MySQL 进行项目开发，与外国团队成员合作，一起开发并解决技术问题。负责项目中大部分前端页面开发，听取产品拥有者的意见，持续改进和迭代项目。'
      },
      {
        id: 2,
        title: '心理医生的个人网站',
        content: '一名心理医生的个人心理健康网站，与外国团队成员合作开发并解决技术问题。负责大部分前端页面开发。听取产品拥有者的意见，持续改进和迭代项目，根据需求使用 CakePHP + cPanel + MySQL 进行项目开发'
      }
    ]
  },
  {
    id: 5,
    company: '数据可视化报告',
    startTime: '2023年2月',
    endTime: '2023年6月',
    title: '数据分析师',
    items: [
      {
        id: 1,
        title: '咖啡与程序员',
        content: '调研并分析咖啡与程序员之间的关系, 通过数据可视化分析并展示相关性，过程包括选题调研、研究可行性、寻找数据或数据库、开发可视化报告以及反思改进。使用 Python，R 和 Tableau，Vega-Lite 进行数据清洗和可视化。'
      },
      {
        id: 2,
        title: '消费者与智能手机',
        content: '消费者与智能手机的关系, 分析与结果展示如上，数据来源于Kaggle',    
      }

    ]
  },
  {
    id: 6,
    company: '技术分享移动端App | 二手交易移动端App',
    startTime: '2021年2月',
    endTime: '2021年12月',
    title: '前端开发工程师',
    items: [
      {
        id: 1,
        title: '技术分享移动端App',
        content: '独立开发基于 Vue2 的二手交易平台移动端应用，功能包括产品浏览、用户登录、购物车、结账等，提供简洁流畅的购物体验。在二手交易应用的基础上开发技术分享 应用，新增科技新闻查看、点赞与评论功能，支持按类别查看商品或搜索商品、商品信息展示、购物车管理等。使用 Axios 进行数据请求，结合 Mock.js 进行数据模拟，完善前后端交互。实现用户登录并保存登录状态，拥有后台管理系统。'
      }
    ]
  }
])

</script>

<style lang="scss" scoped>
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