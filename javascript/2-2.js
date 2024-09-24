const backgroundImage = document.getElementById('backgroundImage');
const backButton = document.getElementById('backButton');

const regions = [{
		xMin: 50,
		xMax: 200,
		yMin: 20,
		yMax: 400,
		image: '../foto/2-24.png'
	}, // 区域 1
	{
		xMin: 200,
		xMax: 450,
		yMin: 100,
		yMax: 300,
		image: '../foto/2-25.png'
	}, // 区域 2
	{
		xMin: 400,
		xMax: 450,
		yMin: 200,
		yMax: 400,
		image: '../foto/2-23.png'
	}, // 区域 3
	{
		xMin: 400,
		xMax: 600,
		yMin: 300,
		yMax: 500,
		image: '../foto/2-21.png'
	}, // 区域 4
	{
		xMin: 1300,
		xMax: 1500,
		yMin: 500,
		yMax: 600,
		image: '../foto/2-6.png'
	} // 区域 5
];


const initialImage = '../foto/2-1.png';


document.addEventListener('click', function(event) {
	const rect = backgroundImage.getBoundingClientRect();
	const x = event.clientX - rect.left; 
	const y = event.clientY - rect.top; 


	for (let region of regions) {
		if (x >= region.xMin && x <= region.xMax && y >= region.yMin && y <= region.yMax) {

			backgroundImage.src = region.image;
			backButton.classList.add('visible'); 
			break;
		}
	}
});

backButton.addEventListener('click', function() {
	backgroundImage.src = initialImage;
	backButton.classList.remove('visible'); 
});


const clickSound = document.getElementById('clickSound');


document.body.addEventListener('click', function() {
	clickSound.play();
});