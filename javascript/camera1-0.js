
const video = document.getElementById('videoPlayer');


video.onended = function() {

	window.location.href = "../html/camera.html";
};