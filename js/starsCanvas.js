(function(){
	var stars = [];
	var fps = 50;
	var starsCount = 40;
	var canvas,c;
	var intervalID;
	canvas = document.querySelector('#stars');
	c = canvas.getContext('2d');
	

	$('nav.navbar').on('shown.bs.collapse', init);
	$('nav.navbar').on('hidden.bs.collapse', init);
	document.addEventListener('resize', init);
	
	init();
	function init() {

		screenW = $('nav.navbar').outerWidth();
		screenH = $('nav.navbar').outerHeight();

		canvas.width = screenW;
		canvas.height = screenH;

		stars = [];
		window.clearInterval(intervalID);
		for (var i = 0; i < starsCount; i++) {
			var x = Math.random() * screenW;
			var y = Math.random() * screenH;
			var length = 1 + Math.random() * 2;
			var opacity = Math.random();

			stars.push(new Star(x, y, length, opacity, i));
		}

		intervalID = intervalTrigger();
	}

	function intervalTrigger() {
		return window.setInterval(function() {
			animate();
		}, 1000/fps);
	}
	
	function animate() {
		c.clearRect(0, 0, screenW, screenH);
		$.each(stars, function (){
			this.draw();
		});		
	}

	function Star(x, y, length, opacity, count) {
		this.x = parseInt(x);
		this.y = parseInt(y);
		this.opacity = opacity;
		this.increment = Math.random() * .03;
		this.length = parseInt(length);
		this.factor = 1;
		this.count = count;

		this.draw = function() {
			c.save();
			//console.log('opacity is ' + this.opacity);

			if (this.opacity > 1) {
				this.factor = -(this.factor);
			} else if (this.opacity <= 0) {
				this.factor = -(this.factor);
				this.x = Math.random() * screenW;
				this.y = Math.random() * screenH;
			}

			this.opacity += this.increment * this.factor;
			c.translate(this.x, this.y);

			c.beginPath();

			c.moveTo(0,0);
			for (var i = 0; i < 5; i++) {
				c.lineTo(0,this.length);
				c.translate(0,this.length);
				c.rotate((Math.PI * 2 /10));
				c.lineTo(0,-this.length);
				c.translate(0,-this.length);
				c.rotate(-(Math.PI * 6 /10));
			}
			c.lineTo(0,this.length);
			c.closePath();
			c.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
			c.shadowBlur = 5;
			c.shadowColor = '#ffff33';

			c.fill();
			//c.font = '40px serif';
			//c.fillText(this.count.toString(), 0, 0);
			c.restore();
		};
	}
})();