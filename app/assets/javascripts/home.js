
function centerButtons() {
	height = $("#topleft .orbit-container").css("height");
	$("#topright").css("height", height);
}


$(window).load(function() {
	setTimeout(centerButtons,1);
});

window.onresize = function(event) {	
	centerButtons();
}