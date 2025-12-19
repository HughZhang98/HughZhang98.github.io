<template>
	<div class="contact-page">
		<Topbar />

		<div class="container">
			<!-- <h1 class="page-title">联系我</h1> -->

			<div class="contact-card">
				<div class="contact-header">
					<div class="contact-avatar">
						<img src="../assets/avatar.jpg" alt="Hugh Zhang" />
					</div>
					<div class="contact-name">
						<h2>张昊 (Hugh Zhang)</h2>
						<!-- <p>前端工程师</p> -->
					</div>
				</div>

				<div class="contact-info">
					<div class="info-item">
						<div class="info-icon">
							<i class="fas fa-envelope"></i>
						</div>
						<div class="info-content">
							<h3>电子邮件</h3>
							<div class="copyable-content">
								<p><a href="mailto:hughhaozhang@gmail.com">hughhaozhang@gmail.com</a></p>
								<i class="fas fa-copy copy-icon" @click="copyToClipboard('hughhaozhang@gmail.com')" title="复制邮箱"></i>
							</div>
						</div>
					</div>

					<!-- <div class="info-item">
						<div class="info-icon">
							<i class="fas fa-phone"></i>
						</div>
						<div class="info-content">
							<h3>电话</h3>
							<div class="copyable-content">
								<p>CN：+86 156-1016-6522</p>
								<i class="fas fa-copy copy-icon" @click="copyToClipboard('+86 156-1016-6522')" title="复制电话"></i>
							</div>
							<div class="copyable-content">
								<p>AU：+61 490-826-897</p>
								<i class="fas fa-copy copy-icon" @click="copyToClipboard('+61 490-826-897')" title="复制电话"></i>
							</div>
						</div>
					</div> -->

					<div class="info-item">
						<div class="info-icon">
							<i class="fab fa-weixin"></i>
						</div>
						<div class="info-content">
							<h3>微信</h3>
							<el-popover placement="bottom" trigger="hover" popper-class="qrcode-popover">
								<template #reference>
									<div class="wechat-id-container">
										<p class="wechat-id">Hugh6522</p>
										<i class="fas fa-qrcode qrcode-icon"></i>
									</div>
								</template>
								<div class="qrcode-container">
									<img src="../assets/weChatQRCode.png" alt="微信二维码" class="qrcode-image" width="100" />
									<p class="qrcode-tip">可以扫码添加</p>
								</div>
							</el-popover>
						</div>
					</div>

					<!-- <div class="info-item">
						<div class="info-icon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<div class="info-content">
							<h3>地址</h3>
							<p>上海市杨浦区</p>
							<p>济南市历下区</p>
						</div>
					</div> -->
				</div>

				<div class="availability-section">
					<h3>联系时间</h3>
					<p>工作日: 10:00AM - 6:00PM (BeiJing)</p>
					<p>周末: 有限回复</p>
					<p>通常在24小时内回复，请优先邮件，急事请加微信</p>
				</div>

				<div class="social-section">
					<h3>社交媒体</h3>
					<div class="social-links">
						<a href="https://github.com/HughZhang98" target="_blank" class="social-link">
							<i class="fab fa-github"></i>
							<span>GitHub</span>
						</a>
						<a href="https://www.linkedin.com/in/hao-zhang-54a959278/" target="_blank" class="social-link">
							<i class="fab fa-linkedin"></i>
							<span>LinkedIn</span>
						</a>
						<a href="https://www.instagram.com/hughzhang108/" target="_blank" class="social-link">
							<i class="fab fa-instagram"></i>
							<span>Instagram</span>
						</a>
						<a href="https://www.facebook.com/profile.php?id=100012386740428" target="_blank" class="social-link">
							<i class="fab fa-facebook"></i>
							<span>Facebook</span>
						</a>
					</div>
				</div>

				<!-- <div class="contact-message">
					<h3>给我留言</h3>
					<p>如果您有项目合作或工作机会，欢迎通过以下表单联系我</p>
					<el-form class="contact-form">
						<div class="form-group">
							<label for="name">您的姓名</label>
							<el-input type="text" id="name" placeholder="请输入您的姓名" />
						</div>
						<div class="form-group">
							<label for="email">您的邮箱</label>
							<el-input type="email" id="email" placeholder="请输入您的邮箱" />
						</div>
						<div class="form-group">
							<label for="message">留言内容</label>
							<el-input type='textarea' id="message" rows="5" placeholder="请输入您的留言内容" />
						</div>
						<button type="submit" class="submit-btn">发送留言</button>
					</el-form>
				</div> -->
			</div>
		</div>
	</div>
	<el-backtop :right="50" :bottom="50" />
</template>

<script setup>
import Topbar from '../components/Topbar.vue'
import { ElMessage } from 'element-plus'

const copyToClipboard = (text) => {
	navigator.clipboard.writeText(text)
		.then(() => {
			ElMessage({
				message: '已复制到剪贴板',
				type: 'success',
				duration: 2000
			})
		})
		.catch(err => {
			ElMessage({
				message: '复制失败，请手动复制',
				type: 'error',
				duration: 2000
			})
			console.error('无法复制: ', err);
		});
}
</script>

<style lang="scss" scoped>
.contact-page {
	background-color: #f4f5f7;
	min-height: 100vh;
}

.container {
	max-width: 900px;
	margin: 0 auto;
	padding: 40px 20px;
}

.copyable-content {
	display: flex;
	align-items: center;
	margin-bottom: 5px;

	p {
		margin: 0;
		margin-right: 8px;
	}
}

.copy-icon {
	font-size: 14px;
	color: #909399;
	cursor: pointer;
	transition: color 0.3s;

	&:hover {
		color: #4e54c8;
	}

	&:active {
		transform: scale(0.9);
	}
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

.contact-card {
	background-color: white;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-header {
	display: flex;
	align-items: center;
	padding: 30px;
	background: linear-gradient(90deg, #4e54c8, #8f94fb);
}

.contact-avatar {
	margin-right: 20px;
}

.contact-avatar img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 4px solid white;
	object-fit: cover;
}

.contact-name {
	color: white;
}

.contact-name h2 {
	font-size: 1.8rem;
	margin-bottom: 5px;
}

.contact-name p {
	font-size: 1.1rem;
	opacity: 0.9;
}

.contact-info {
	padding: 30px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
}

.info-item {
	display: flex;
	align-items: flex-start;
}

.info-icon {
	width: 50px;
	height: 50px;
	background: linear-gradient(90deg, #4e54c8, #8f94fb);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
	color: white;
	font-size: 1.5rem;
}

.info-content h3 {
	color: #2c3e50;
	font-size: 1.2rem;
	margin-bottom: 5px;
}

.info-content p {
	color: #5d6978;
}

.info-content a {
	color: #4e54c8;
	text-decoration: none;
	transition: color 0.3s;
}

.info-content a:hover {
	color: #8f94fb;
}

.availability-section {
	color: #5d6978;
	padding: 30px;
	border-top: 1px solid #eaeaea;
}

.availability-section h3 {
	color: #2c3e50;
	font-size: 1.6rem;
	margin-bottom: 20px;
	position: relative;
	padding-bottom: 10px;
}

.availability-section h3:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 60px;
	height: 2px;
	background: linear-gradient(90deg, #4e54c8, #8f94fb);
}

.social-section {
	padding: 30px;
	border-top: 1px solid #eaeaea;
}

.social-section h3 {
	color: #2c3e50;
	font-size: 1.6rem;
	margin-bottom: 20px;
	position: relative;
	padding-bottom: 10px;
}

.social-section h3:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 60px;
	height: 2px;
	background: linear-gradient(90deg, #4e54c8, #8f94fb);
}

.social-links {
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
}

.social-link {
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #5d6978;
	background-color: #f8f9fa;
	padding: 10px 15px;
	border-radius: 8px;
	transition: transform 0.3s, box-shadow 0.3s;
}

.social-link i {
	font-size: 1.5rem;
	margin-right: 10px;
	color: #4e54c8;
}

.social-link:hover {
	transform: translateY(-3px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-message {
	padding: 30px;
	border-top: 1px solid #eaeaea;
}

.contact-message h3 {
	color: #2c3e50;
	font-size: 1.6rem;
	margin-bottom: 20px;
	position: relative;
	padding-bottom: 10px;
}

.contact-message h3:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 60px;
	height: 2px;
	background: linear-gradient(90deg, #4e54c8, #8f94fb);
}

.form-group {
	margin-bottom: 20px;
}

.form-group label {
	display: block;
	color: #2c3e50;
	margin-bottom: 5px;
	font-weight: bold;
}

.form-group input,
.form-group textarea {
	width: 100%;
	padding: 12px;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	font-size: 1rem;
	transition: border 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
	border-color: #4e54c8;
	outline: none;
}

.submit-btn {
	background: linear-gradient(90deg, #4e54c8, #8f94fb);
	color: white;
	border: none;
	padding: 12px 25px;
	border-radius: 4px;
	font-size: 1rem;
	cursor: pointer;
	transition: transform 0.3s, box-shadow 0.3s;
}

.submit-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 8px rgba(78, 84, 200, 0.3);
}

.wechat-id {
	color: #4e54c8;
	cursor: pointer;
	position: relative;
}

.wechat-id-container {
	display: flex;
	align-items: center;
	cursor: pointer;
}

.wechat-id {
	color: #4e54c8;
	margin-right: 5px;
}

.wechat-id-container:hover .wechat-id {
	text-decoration: underline;
}

.qrcode-icon {
	font-size: 14px;
	color: #4e54c8;
	opacity: 0.8;
}

.wechat-id-container:hover .qrcode-icon {
	opacity: 1;
}

.wechat-id:hover {
	text-decoration: underline;
}

.qrcode-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5px;
}

.qrcode-image {
	display: block;
	margin: 0 auto;
}

.qrcode-tip {
	margin-top: 8px;
	text-align: center;
	font-size: 14px;
	color: #606266;
}

:deep(.qrcode-popover) {
	min-width: 140px;
	text-align: center;
}

@media (max-width: 768px) {
	.contact-header {
		flex-direction: column;
		text-align: center;
	}

	.contact-avatar {
		margin-right: 0;
		margin-bottom: 15px;
	}

	.info-item {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.info-icon {
		margin-right: 0;
		margin-bottom: 10px;
	}

	.social-section h3,
	.contact-message h3 {
		text-align: center;
	}

	.social-section h3:after,
	.contact-message h3:after {
		left: 50%;
		transform: translateX(-50%);
	}

	.social-links {
		justify-content: center;
	}
}
</style>
