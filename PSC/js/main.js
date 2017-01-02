function calculator() {
	{
		var inMinutes = document.getElementById("inputMins").value
			, outMinutes = 0
			, playbackSpeed = document.getElementById("playbackSelect").value
			, qPunct = "?"
			, pPunct = ".";

		function alertMsg() {
			alert("Please enter a value in minutes.");
		}

		function replaceOutputValue() {
			document.getElementById("outputMins").innerHTML = outMinutes;
			document.getElementById("punc").innerHTML = pPunct;
		}

		function badOutputValue() {
			outMinutes = "Really??" + ' "' + inMinutes + '" ';
			document.getElementById("outputMins").innerHTML = outMinutes;
			document.getElementById("punc").innerHTML = qPunct;
		}
	}
	if ((isNaN(inMinutes)) || (inMinutes === " ") || (inMinutes == 0)) {
		badOutputValue();
		setTimeout(alertMsg, 50);
	}
	else {
		if (playbackSpeed == 1) {
			outMinutes = inMinutes;
			replaceOutputValue();
		}
		else {
			outMinutes = Math.ceil((inMinutes / playbackSpeed));
			replaceOutputValue();
		}
	}
	//console.log(inMinutes, playbackSpeed, outMinutes);
}