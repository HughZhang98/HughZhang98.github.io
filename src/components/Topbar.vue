<template>
	<div class="topbar">
		<div class="topbar-left">
			<div class="topbar-left-logo">
				<!-- <img src="../assets/logo.png" alt="Logo" /> -->
			</div>
			<div class="topbar-left-title">
				<router-link to="/" class="title-link">
					<h1>Hugh Zhang</h1>
				</router-link>
			</div>
		</div>
		<div class="topbar-right">
			<nav v-if="!isMobile">
				<ul>
					<template v-for="item in navList" :key="item.path">
						<li><router-link :to="item.path">{{ item.name }}</router-link></li>
					</template>
				</ul>
			</nav>

			<!-- 小屏幕导航 -->
			<div v-else class="mobile-menu">
				<el-dropdown trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						<el-icon><Menu /></el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item v-for="item in navList" :key="item.path" :command="item.path">
								{{ item.name }}
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navList = ref([
	{
		name: '首页',
		path: '/',
	},
	{
		name: '行业经历',
		path: '/project',
	},
	{
		name: '联系我',
		path: '/contact',
	}
])

const isMobile = ref(false)

const checkScreenSize = () => {
	isMobile.value = window.innerWidth < 386
}

onMounted(() => {
	checkScreenSize()
	window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
	window.removeEventListener('resize', checkScreenSize)
})

const handleCommand = (command: string | number | object) => {
	router.push(command as string)
}

</script>

<style scoped>
.topbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f8f9fa;
	padding: 10px 20px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.topbar-left {
	display: flex;
	align-items: center;
}

.topbar-left-logo img {
	height: 40px;
}

.topbar-left-title .title-link {
	text-decoration: none;
	color: #ffffff;
}

.topbar-left-title h1 {
	margin-left: 10px;
	font-size: 1.5rem;
	color: #333;
}

.topbar-right nav ul {
	list-style-type: none;
	display: flex;
	margin: 0;
	padding: 0;
}

.topbar-right nav ul li {
	margin-left: 18px;
}

.topbar-right nav ul li a {
	text-decoration: none;
	color: #4e54c8;
	transition: color 0.3s;
}

.topbar-right nav ul li a:hover {
	color: #8f94fb;
}

.mobile-menu .el-dropdown-link {
  cursor: pointer;
	color: #4e54c8;
	display: flex;
	align-items: center;
	font-size: 20px;
}
:deep(.el-dropdown-menu) {
  background-color: #f8f9fa;
}

:deep(.el-dropdown-menu__item) {
  color: #4e54c8;
  transition: color 0.3s;
	text-align: center;
	justify-content: center;
}

:deep(.el-dropdown-menu__item:hover) {
  background-color: #f0f2f5;
  color: #8f94fb;
}

:deep(.el-dropdown-menu__item:focus) {
  color: #8f94fb;
  background-color: #f0f2f5;
}

:deep(.el-dropdown-menu__item.is-disabled) {
  cursor: not-allowed;
  color: #bbbfc4;
}
</style>
