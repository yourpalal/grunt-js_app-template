require([
		"jquery",

		// add specs here
		"example_specs.js",
	], 
	function($) {
		var jasmineEnv = jasmine.getEnv()
			,htmlReporter = new jasmine.HtmlReporter();
	
		jasmineEnv.updateInterval = 250;
		jasmineEnv.addReporter(htmlReporter);
		jasmineEnv.specFilter = function(spec) {
			return htmlReporter.specFilter(spec);
		};
	
		$(document).ready(function() {
			jasmineEnv.execute();
		});
	}
);
