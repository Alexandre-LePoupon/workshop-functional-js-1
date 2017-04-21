const chalk = require('chalk');
let _ = require('lodash')

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
	console.log(input.length);
	if(input.length == 0) {
		return [];
	} else {
		var tmp = _.unzip(input);
		return _.forEach(tmp, function(index) {
			return _.without(index, undefined);

		});
	}
}

module.exports = {
  zip: zip,
  run: zip
}