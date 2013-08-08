require([], function() {
	$(document).ready(function() {
		$('.reminder').remove();
		_.times(1, function() { $('body').append("<h1>IT'S WORKING"); });
	});
});
