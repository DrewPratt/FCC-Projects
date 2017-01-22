if (document.location.protocol === "http:") {
	//Checks for https, displays note if http.
	$(".container").html("Please add 'https://' to the front of the URL in order for the app to function properly. Thank you.");
	console.log(document.location.protocol);
}
else {
	//only works with https://
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (posit) {
			//gets lat & long of user
			//API address in variable form:
			var apiCall = ("https://api.apixu.com/v1/current.json?key=4343151e3c624f2581a202324161311&q=" + posit.coords.latitude + "," + posit.coords.longitude);
			//API call to APIXU.com begins
			$.getJSON(apiCall, function (jsons) {
				(function daysNights() {
					//sets day or night background color:
					var bod = document.getElementsByTagName("body")[0];
					if (jsons.current.is_day === 0) {
						bod.style.backgroundImage = "url(img/night.jpg)";
						bod.style.backgroundSize = "cover";
					}
					else {
						bod.style.backgroundImage = "url(img/clearday.jpg)"
						bod.style.backgroundSize = "cover";
					}
				})();
				//adds weather condition icon
				$(".icon").html("<img src=https://" + jsons.current.condition.icon + ">");
				//start temperature section
				$(".temp").html(function () {
					var tempF = (jsons.current.temp_f + "°");
					var tempC = (jsons.current.temp_c + "°");
					var tempSwitch = tempF;
					$(".temp").html(tempSwitch);
					$("#switch").click(function () {
						//switches back and forth between farenheight and celsius
						if (tempSwitch === tempF) {
							tempSwitch = tempC;
							$(".buttn").html("C");
						}
						else if (tempSwitch === tempC) {
							tempSwitch = tempF;
							$(".buttn").html("F");
						};
						$(".temp").html(tempSwitch);
					});
				});
				//end temperature section
				//adds wind speed & direction
				$(".wind").html("Wind: " + jsons.current.wind_mph + " MPH " + jsons.current.wind_dir);
				//adds current location of user
				$(".loc").html("Location: " + jsons.location.name + ", " + jsons.location.region);
				//console.log(posit, jsons /*posit.coords.latitude, posit.coords.longitude, apiCall*/);
			}); //API call to APIXU ends
		});
	}
};