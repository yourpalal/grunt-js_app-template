'use strict';


exports.description = 'Create a simple html5 app with Bower, underscore, jQuery, requirejs and jasmine specs.';

exports.after = 'You should now install project dependencies with bower install.';

exports.warnOn = '*'


exports.template = function(grunt, init, done) {

	init.process({}, [
			init.prompt('name'),
			init.prompt('version'),
	], function(err, props) {
		var files = init.filesToCopy(props);
		init.copyAndProcess(files, props);

		done();
	});

}
