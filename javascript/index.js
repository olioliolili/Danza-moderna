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