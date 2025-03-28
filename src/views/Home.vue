<template>
  <div class="home-page">
    <Topbar />
    
    <div class="container">
      <div class="profile-section">
        <div class="profile-image">
          <img src="../assets/vue.svg" alt="Hugh Zhang" />
        </div>
        <div class="profile-info">
          <h1>张昊 (Hugh Zhang)</h1>
          <h2>前端工程师</h2>
          <div class="profile-social">
            <a href="https://github.com/HughZhang98" target="_blank" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hugh-zhang" target="_blank" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="about-me">
          <h3 class="section-title">关于我</h3>
          <div class="section-content">
            <p>我在Monash University完成了学士学位的课程，主修Information Technology - Software Development，辅修Data Science。</p>
            <p>目前我是一名前端工程师，专注于构建高性能、可扩展的Web应用程序。我熟悉现代前端框架和技术栈，能够从概念到实现端到端地交付项目。</p>
            <p>在我的职业生涯中，我参与过多个项目的开发，包括企业级应用架构重构和国外项目等。我善于解决复杂问题，并且热衷于学习新技术。</p>
          </div>
        </div>

        <div class="skills">
          <h3 class="section-title">技能</h3>
          <div class="section-content">
            <div class="skill-group">
              <h4>前端技术</h4>
              <div class="skill-tags">
                <span class="skill-tag" v-for="skill in skills.frontend" :key="skill">{{ skill }}</span>
              </div>
            </div>
            
            <div class="skill-group">
              <h4>后端技术</h4>
              <div class="skill-tags">
                <span class="skill-tag" v-for="skill in skills.backend" :key="skill">{{ skill }}</span>
              </div>
            </div>
            
            <div class="skill-group">
              <h4>工具 & 方法论</h4>
              <div class="skill-tags">
                <span class="skill-tag" v-for="skill in skills.tools" :key="skill">{{ skill }}</span>
              </div>
            </div>

            <div class="skill-group">
              <h4>数据分析 & 建模 & 可视化</h4>
              <div class="skill-tags">
                <span class="skill-tag" v-for="skill in skills.data" :key="skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="education">
          <h3 class="section-title">教育背景</h3>
          <div class="section-content">
            <div class="education-item">
              <h4>Monash University - 蒙纳什大学</h4>
              <p class="education-year">2021 - 2024</p>
              <p class="education-degree">Information Technology - Software Development ｜ Data Science，学士学位</p>
            </div>
          </div>
        </div> -->

        <div class="interests">
          <h3 class="section-title">兴趣爱好</h3>
          <div class="section-content">
            <p>除了编程，我还喜欢摄影和旅行。我是一名业余摄影师，喜欢捕捉自然景观和城市风光。我也是一名电子产品爱好者，经常关注最新的产品和技术的趋势和发展。</p>
          </div>
        </div>

        <!-- <div class="achievements">
          <h3 class="section-title">成就与认证</h3>
          <div class="section-content">
            <div class="achievement-item">
              <h4>Google认证开发专家</h4>
              <p>2021年获得Google前端开发专家认证</p>
            </div>
            <div class="achievement-item">
              <h4>开源贡献</h4>
              <p>Vue.js社区活跃贡献者，提交过多个核心功能改进</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <el-backtop :right="50" :bottom="50" />
</template>

<script setup>
import Topbar from '../components/Topbar.vue'
import { ref } from 'vue'

const skills = ref({
  frontend: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'HTML5', 'CSS3', 'SASS/LESS', 'Three.Js', 'Bootstrap', 'Element-UI', 'Ant Design', 'FullCalendar', 'Cannon.js'],
  backend: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
  tools: ['Git', 'Webpack', 'Vite', '敏捷开发', 'UI Design', 'Figma', 'Blender'],
  data: ['Python', 'R', 'Pandas', 'NumPy', 'Echarts', 'Tableau', 'Vega-Lite'],
})
</script>

<style scoped>
.home-page {
  background-color: #f4f5f7;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.profile-section {
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.profile-image {
  width: 220px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4e54c8;
}

.profile-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-info h1 {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 5px;
}

.profile-info h2 {
  color: #4e54c8;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.profile-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(78, 84, 200, 0.3);
}

.content-section > div {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.section-title {
  color: #2c3e50;
  font-size: 1.6rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eaeaea;
  position: relative;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
}

.section-content p {
  color: #5d6978;
  line-height: 1.6;
  margin-bottom: 15px;
}

.skill-group {
  margin-bottom: 20px;
}

.skill-group h4 {
  color: #34495e;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
}

.education-item {
  margin-bottom: 15px;
}

.education-item h4 {
  color: #34495e;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.education-year {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.education-degree {
  color: #5d6978;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
  }
  
  .profile-image {
    width: 100%;
    padding-bottom: 0;
  }
  
  .profile-info {
    text-align: center;
  }
  
  .profile-social {
    justify-content: center;
  }
}
</style>