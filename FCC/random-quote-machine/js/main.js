let func = {
	colorChange: function () {
		var tests = document.querySelectorAll(".colors");
		var bods = document.getElementsByTagName('body');
		var colors = ['#f44336' /*brightred*/ , '#c62828' /*darkred*/ , '#4CAF50' /*brightgreen*/ , '#2E7D32' /*darkgreen*/ , '#2196F3' /*brightblue*/ , '#1565C0' /*darkblue*/ , '#9C27B0' /*brightpurple*/ , '#6A1B9A' /*darkpurple*/ , '#FF9800' /*brightorange*/ , '#EF6C00' /*darkorange*/ , '#607D8B' /*bluegrey*/ , '#37474F' /*darkbluegrey*/ ];
		var cols = colors[Math.floor(Math.random() * colors.length)];
		bods[0].style.backgroundColor = cols;
		tests[0].style.color = cols;
		tests[1].style.color = cols;
	},
	getQuote: function () {
		$.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function (json) {
			$('#text').html(JSON.stringify(json.quote).replace(/[;]/g, ','));
			$('#author').html(JSON.stringify("- " + json.author).replace(/["]/g, ''));
		});
	}
}
$(document).ready(function () {
	func.colorChange();
	func.getQuote();

	$("#new-quote").on("click", function () {
		// Only change code below this line.
		func.colorChange();
		func.getQuote();
	});
	$("#tweet-quote").on("click", function () {
		var tweetQuote = document.getElementById("text").innerHTML + "  " + document.getElementById("author").innerHTML;
		var a = document.getElementById("tweet-quote");
		a.href = "https://twitter.com/intent/tweet?text=" + tweetQuote;
	});


})
