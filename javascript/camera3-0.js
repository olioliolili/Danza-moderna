// 视频
const video = document.getElementById('videoPlayer');

// 频结束触发
video.onended = function() {

	window.location.href = "../html/camera3.2.html";
};