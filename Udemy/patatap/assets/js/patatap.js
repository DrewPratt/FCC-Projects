var sound = new Howl({
				src: ['sounds/bubbles.mp3']
			});



var circles = [];

function onKeyDown(event) {
	sound.play();
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point, 500)
	newCircle.fillColor = 'orange';
	circles.push(newCircle);

}

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	}
}


// function to use array.shift() to remove first item from array 
// use a timer method after 'n' seconds of keypress
