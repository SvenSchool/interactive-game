$(window).ready(function() {
	$("#code").css("opacity","0");
	$("#code").mouseover(function() {
		$(this).delay(5000).animate( {"opacity":"1"}, 500 );
			console.log("Ja, dat is Fedde's telefoonnummer ;-)")
	});
	$("#code").mouseout(function() {
		$(this).clearQueue().animate({"opacity":"0"}, 100);
	});
	$("#neusknop").click(function() {
		window.location.href = "begin";
	});
});

$(window).ready(function() {
	$("#scream").hide();	
	$("#freddie").delay(7500).fadeOut(1);
	$("#scream").delay(500).show();
});