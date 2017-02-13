var currentURL = window.location.href;
var code = "239142"
var egg = "1337"

$(window).ready(function() {
	if(currentURL.indexOf(code) != -1) {
		window.location.href = "../gat";
	} else if(currentURL.indexOf(egg) != -1) {
		window.location.href = "../einde";
	} else {
		window.location.href = "../fout"
	}
});