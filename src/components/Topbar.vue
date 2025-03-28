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
			<nav>
				<ul>
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/project">行业经验</router-link></li>
					<li><router-link to="/contact">联系我</router-link></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { } from 'vue'

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
	margin-left: 20px;
}

.topbar-right nav ul li a {
	text-decoration: none;
	color: #007bff;
	transition: color 0.3s;
}

.topbar-right nav ul li a:hover {
	color: #0056b3;
}
</style>