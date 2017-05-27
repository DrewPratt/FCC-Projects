function average (score){
	var result = 0;
	
	score.map(function(a){
		result += a; 
	})
	
	return console.log(Math.round(result/score.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);