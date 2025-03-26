<template>
	<Topbar />

	<div class="contact-page">
		<h1>联系我</h1>
		<div class="contact-info">
			<div class="info-item">
				<label>姓名: </label>
				<span>张昊 (Hugh)</span>
			</div>
			<div class="info-item">
				<label>电子邮件: </label>
				<span><a href="mailto:hughhaozhang@gmail.com">hughhaozhang@gmail.com</a></span>
			</div>
			<div class="info-item">
				<label>电话: </label>
				<span>15610166522</span>
			</div>
			<div class="info-item">
				<label>Wechat: </label>
				<span>Hugh6522</span>
			</div>
			<div class="info-item">
				<label>社交媒体: </label>
				<div class="social-links">
					<a href="https://github.com/HughZhang98" target="_blank">GitHub</a>
					<a href="https://www.linkedin.com/in/hao-zhang-54a959278/" target="_blank">LinkedIn</a>
					<a href="https://www.instagram.com/hughzhang108/" target="_blank">Instagram</a>
					<a href="https://www.facebook.com/profile.php?id=100012386740428" target="_blank">Facebook</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Topbar from '../components/Topbar.vue'

export default {
	name: 'Contact',
	components: {
		Topbar
	}
}
</script>

<style scoped>
.contact-page {
	padding: 20px;
	max-width: 600px;
	margin: auto;
	text-align: left;
}

h1 {
	font-size: 2rem;
	color: #333;
	margin-bottom: 20px;
}

.contact-info {
	background-color: #f8f9fa;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.info-item {
	margin-bottom: 15px;
}

.info-item label {
	font-weight: bold;
}

.social-links {
	display: flex;
	gap: 15px;
}

.social-links a {
	text-decoration: none;
	color: #007bff;
	transition: color 0.3s;
}

.social-links a:hover {
	color: #0056b3; /* 悬停时的颜色变化 */
}
</style>
