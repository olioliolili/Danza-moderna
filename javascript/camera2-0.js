// 视频
const video = document.getElementById('videoPlayer');


video.onended = function() {

	window.location.href = "../html/camera2.html";
};