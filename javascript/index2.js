// 获取图片
const images = document.querySelectorAll('.random-img');

images.forEach(img => {
	// 图片随机角度（-30度到20度之间）
	const randomRotation = Math.floor(Math.random() * 61) - 20;
	// 旋转
	img.style.transform = `rotate(${randomRotation}deg)`;
});
// 获取音频
const clickSound = document.getElementById('clickSound');

// 监听点击
document.body.addEventListener('click', function() {
	// 播放
	clickSound.play();
});



const video = document.getElementById('background-video');

// 视频
video.src = '../animo/animo0-2.mp4';
video.playbackRate = 1; // 速度

let isReversed = false;
let scale = 1.0; // 一开始的比例
const maxScale = 1.40;

// 反向播放
video.addEventListener('ended', () => {
	if (isReversed) {
		video.playbackRate = 1; // 正播
	} else {
		video.playbackRate = -1; // 反播
		video.currentTime = video.duration; // 视频到最后一帧
	}
	isReversed = !isReversed;
});

// 在反向播放时，当播放到视频开头时再次反向
video.addEventListener('timeupdate', () => {
	if (video.playbackRate === -1 && video.currentTime <= 0) {
		video.playbackRate = 1; // 切换正播
	}
});

// 添加鼠标滚轮事件
window.addEventListener('wheel', (event) => {
	const delta = event.deltaY;

	if (delta < 0) {
		// 向前，放大
		scale = Math.min(maxScale, scale + 0.03); // 最大缩放
	} else if (delta > 0) {
		// 向后，缩小
		scale = Math.max(1, scale - 0.03); // 静止缩小到比1小
	}

	// 应用缩放
	video.style.transform = `scale(${scale})`;
});