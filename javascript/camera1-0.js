  // 获取视频
        const video = document.getElementById('videoPlayer');

        // 当视频播放结束时触发的事件
        video.onended = function() {
        
        window.location.href = "../html/camera.html";  // 替换为你想跳转的页面
        };