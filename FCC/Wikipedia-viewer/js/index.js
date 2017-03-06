function wikiSearch() {
	var searches = document.getElementById("wikiSearch1").value;
	var apiCall = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searches + "&srlimit=20&callback=?";
	//console.log(apiCall);
	$.getJSON(apiCall, function (json) {
		console.log(json);
		var wikiBase = "https://en.wikipedia.org/wiki/"
			//console.log(wikiBase0, wikiBase1);

		let del = 100;
		for (let i = 0; i < 15; i++) {
			$('#results').append('<div><p class="res temp' + i + '"></p></div>')
			$(".temp" + i).hide().html("<a href=" + wikiBase + json.query.search[i].title.replace(/[ ]/g, '_') + " target='blank'>" + json.query.search[i].title + "<br>" + json.query.search[i].snippet + "</a>").delay(del).fadeIn(200);
			del += 100;

		}
	})
	var timer = setTimeout(footsie, 200);

	function footsie() {
		$("#footer").css("marginTop", "0px");
	}
}
// todo find a way to clear search results on submitting a new search
// if $(div + class="res").remove(); else: rest of function