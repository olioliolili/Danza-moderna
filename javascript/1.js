const canvas = document.getElementById('canvas');
// 优化 canvas 
const ctx = canvas.getContext('2d', {
	willReadFrequently: true
});
const hiddenLink = document.getElementById('hiddenLink');

// 设置canvas大小=浏览器窗口
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 顶部图片
const topImage = new Image();
topImage.src = '../foto/1-1.png'; // 上方图片
topImage.onload = function() {
	ctx.drawImage(topImage, 0, 0, canvas.width, canvas.height);
};

// 判断点击
let isErasing = false;

function eraseAtPosition(x, y) {
	const radius = 35; // 擦的半径
	const featherRadius = 30; // 羽化范围

	// 创建径向渐变
	const gradient = ctx.createRadialGradient(x, y, radius - featherRadius, x, y, radius);
	gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); // 完全擦除
	gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // 渐变为透明

	// 渐变作为擦除区域
	ctx.globalCompositeOperation = 'destination-out';
	ctx.fillStyle = gradient;

	// 绘制羽化的圆形区域
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fill();

	// 检测是否擦除到一定程度
	checkEraseCompletion();
}

// 检测擦除区域，显示超链接
function checkEraseCompletion() {
	// 获取 canvas 像素，和已擦除的像素
	const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
	let erasedPixels = 0;
	for (let i = 3; i < pixels.length; i += 4) {
		if (pixels[i] === 0) { // alpha 通道为 0 表示该像素被擦除
			erasedPixels++;
		}
	}

	// 计算擦除百分比
	const erasedPercentage = (erasedPixels / (canvas.width * canvas.height)) * 100;

	// 超过 30% 时显示
	if (erasedPercentage > 5) {
		hiddenLink.classList.add('visible');
	}
}

// 鼠标按下开始擦除
canvas.addEventListener('mousedown', function(e) {
	isErasing = true;
	const rect = canvas.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	eraseAtPosition(x, y); // 在点击位置擦除
});

// 鼠标移动时，如果处于按下状态则继续擦除
canvas.addEventListener('mousemove', function(e) {
	if (isErasing) {
		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		eraseAtPosition(x, y); // 在鼠标移动时擦除
	}
});

// 当鼠标松开时，停止擦除
canvas.addEventListener('mouseup', function() {
	isErasing = false;
});

// 防止鼠标移出 canvas 后仍然擦除
canvas.addEventListener('mouseleave', function() {
	isErasing = false;
});
// 获取音频元素
const longPressSound = document.getElementById('longPressSound');

// 定时器和长按阈值
let pressTimer;
const longPressDuration = 100; // 长按时间阈值，单位为毫秒

// 监听鼠标按下事件
document.body.addEventListener('mousedown', function(event) {
	// 仅当按下的是鼠标左键时才触发
	if (event.button === 0) {
		// 开始计时
		pressTimer = setTimeout(function() {
			// 超过设定时间后播放音效
			longPressSound.play();
		}, longPressDuration);
	}
});

// 监听鼠标松开事件，取消定时器
document.body.addEventListener('mouseup', function() {
	// 清除定时器，防止误触发
	clearTimeout(pressTimer);
});

// 防止拖动时触发
document.body.addEventListener('mouseleave', function() {
	clearTimeout(pressTimer);
});