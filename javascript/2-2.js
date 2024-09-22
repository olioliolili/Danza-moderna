const backgroundImage = document.getElementById('backgroundImage');
    const backButton = document.getElementById('backButton');

    // 定义三个特定的点击区域，假设是页面的坐标范围
    const regions = [
        { xMin: 50, xMax: 200, yMin: 20, yMax: 400, image: '../foto/2-24.png' }, // 区域 1
        { xMin: 200, xMax: 450, yMin: 100, yMax: 300, image: '../foto/2-25.png' }, // 区域 2
        { xMin: 400, xMax: 450, yMin: 200, yMax: 400, image: '../foto/2-23.png' }, // 区域 3
		{ xMin: 400, xMax: 600, yMin: 300, yMax: 500, image: '../foto/2-21.png' },// 区域 4
		{ xMin: 1300, xMax: 1500, yMin: 500, yMax: 600, image: '../foto/2-6.png' } // 区域 5
    ];

    // 记录初始背景图
    const initialImage = '../foto/2-1.png';

    // 点击事件监听器
    document.addEventListener('click', function (event) {
        const rect = backgroundImage.getBoundingClientRect();
        const x = event.clientX - rect.left; // 获取相对于图片左上角的 X 坐标
        const y = event.clientY - rect.top;  // 获取相对于图片左上角的 Y 坐标

        // 遍历定义的区域，检查点击是否落在某个区域内
        for (let region of regions) {
            if (x >= region.xMin && x <= region.xMax && y >= region.yMin && y <= region.yMax) {
                // 如果点击在某个区域内，则切换图片
                backgroundImage.src = region.image;
                backButton.classList.add('visible'); // 显示返回按钮
                break;
            }
        }
    });

    // 返回按钮点击事件，返回初始背景
    backButton.addEventListener('click', function () {
        backgroundImage.src = initialImage;
        backButton.classList.remove('visible'); // 隐藏返回按钮
    });
	
	
    const clickSound = document.getElementById('clickSound');
										
			// 监听整个页面的点击事件
			document.body.addEventListener('click', function() {
			    // 播放音效
			    clickSound.play();
			});