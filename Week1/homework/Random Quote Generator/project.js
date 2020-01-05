const quotes = [
	'<q>Do one thing every day that scares you.</q> <br> <br> <cite> -Eleanor Roosevelt </cite> <br>',
	"<q>What's meant to be will always find a way.</q> <br> <br><cite>-Mae West</cite> <br>",
	'<q>The flower that blooms in adversity is the rarest and most beautiful of all.</q> <br> <br> <cite> -Walt Disney Company, Mulan</cite> <br>',
	'<q>The unexamined life is not worth living.</q> <br> <br><cite> -Socrates</cite>  <br>',
	'<q>I dream my painting and I paint my dream.</q> <br> <br><cite>-Van Gogh</cite> <br>',
	'<q>Trust yourself You know more than you think you do. </q><br><br><cite> -Benjamin Spock</cite><br> ',
	'<q>The Way Get Started Is To Quit Talking And Begin Doing. </q> <br> <br><cite> -Walt Diseny</cite> <br>'
];
function newQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function random_bg_color() {
	const x = Math.floor(Math.random() * 256);
	const y = Math.floor(Math.random() * 256);
	const z = Math.floor(Math.random() * 256);
	const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
	console.log(bgColor);

	document.getElementById('container').style.background = bgColor;
}

random_bg_color();
