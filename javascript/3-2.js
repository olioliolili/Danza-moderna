const backgroundImage = document.getElementById('backgroundImage');
const backButton = document.getElementById('backButton');
const audio = document.getElementById('audioPlayer');

// 三个点击范围，坐标范围为页面
const regions = [{
		xMin: 0,
		xMax: 300,
		yMin: 580,
		yMax: 630,
		image: '../foto/3-32.png'
	}, // 区域 1
	{
		xMin: 90,
		xMax: 250,
		yMin: 480,
		yMax: 550,
		image: '../foto/3-37.png'
	}, // 区域 2
	{
		xMin: 550,
		xMax: 630,
		yMin: 700,
		yMax: 780,
		image: '../foto/3-36.png'
	}, // 区域 3
	{
		xMin: 640,
		xMax: 790,
		yMin: 730,
		yMax: 900,
		image: '../foto/3-33.png'
	}, // 区域 4
	{
		xMin: 720,
		xMax: 760,
		yMin: 570,
		yMax: 630,
		image: '../foto/3-38.png'
	}, // 区域 5
	{
		xMin: 1050,
		xMax: 1200,
		yMin: 600,
		yMax: 660,
		image: '../foto/3-31.png'
	}, // 区域 6
	{
		xMin: 1030,
		xMax: 1100,
		yMin: 500,
		yMax: 550,
		image: '../foto/3-34.png'
	}, // 区域 7
	{
		xMin: 1100,
		xMax: 1250,
		yMin: 400,
		yMax: 550,
		image: '../foto/3-35.png'
	} // 区域 8
];

// 记录一开始的背景图
const initialImage = '../foto/3-4.png';

// 事件监听
document.addEventListener('click', function(event) {
	const rect = backgroundImage.getBoundingClientRect();
	const x = event.clientX - rect.left; // 得到相对于图片左上角的 X 坐标
	const y = event.clientY - rect.top; // 得到相对于图片左上角的 Y 坐标

	// 巡查定义的区域
	for (let region of regions) {
		if (x >= region.xMin && x <= region.xMax && y >= region.yMin && y <= region.yMax) {
			// 如果点击在某个区域就切换图片
			backgroundImage.src = region.image;
			backButton.classList.add('visible'); // 显示按钮
			break;
		}
	}
});

// 返回按钮点击事件，返回初始背景
backButton.addEventListener('click', function() {
	backgroundImage.src = initialImage;
	backButton.classList.remove('visible'); // 隐藏返回按钮
});
// 淡入函数
function fadeInAudio() {
	let volume = 0;
	audio.volume = volume;
	audio.play();
	const fadeInInterval = setInterval(function() {
		if (volume < 1) {
			volume += 0.01; // 每次增加音量
			audio.volume = volume;
		} else {
			clearInterval(fadeInInterval); // 停止淡入
		}
	}, 50); // 每50调整一次音量
}
// 获取音频
const clickSound = document.getElementById('clickSound');

// 监听点击
document.body.addEventListener('click', function() {
	// 播放
	clickSound.play();
});

document.getElementById('bg').volume = 0.5;