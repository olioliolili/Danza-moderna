  // 获取所有图片
		        const images = document.querySelectorAll('.random-img');
		
		        images.forEach(img => {
		            // 为每张图片生成随机旋转角度（-30度到30度之间）
		            const randomRotation = Math.floor(Math.random() * 61) - 30;
		            // 设置旋转
		            img.style.transform = `rotate(${randomRotation}deg)`;
		        });
				  // 获取音频元素
				        const clickSound = document.getElementById('clickSound');
				
				        // 监听整个页面的点击事件
				        document.body.addEventListener('click', function() {
				            // 播放音效
				            clickSound.play();
				        });
						
			
				
		const video = document.getElementById('background-video');
		
		// 视频
		video.src = '../animo/animo0-.mp4'; 
		video.playbackRate = 1; // 速度
		
		let isReversed = false;
		let scale = 1.10; // 初始比例
		const maxScale = 1.30; // 最大放大比例为 1.05，即原大小的 5%
		
		// 反向播放
		video.addEventListener('ended', () => {
		    if (isReversed) {
		        video.playbackRate = 1; // 正常播放
		    } else {
		        video.playbackRate = -1; // 反向播放
		        video.currentTime = video.duration; // 设置视频到最后一帧
		    }
		    isReversed = !isReversed;
		});
		
		// 在反向播放时，当播放到视频开头时再次反向
		video.addEventListener('timeupdate', () => {
		    if (video.playbackRate === -1 && video.currentTime <= 0) {
		        video.playbackRate = 1; // 切换回正向播放
		    }
		});
		
		// 监听鼠标滚轮事件
		window.addEventListener('wheel', (event) => {
		    const delta = event.deltaY;
		
		    if (delta < 0) {
		        // 向前滚动，放大
		        scale = Math.min(maxScale, scale + 0.03); // 限制最大缩放比例
		    } else if (delta > 0) {
		        // 向后滚动，缩小
		        scale = Math.max(1, scale - 0.03); // 防止缩小到小于1
		    }
		
		    // 应用缩放效果
		    video.style.transform = `scale(${scale})`;
		});