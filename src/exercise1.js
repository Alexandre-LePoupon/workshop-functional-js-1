const chalk = require('chalk');
let _ = require('lodash')

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
	console.log(input.length);
	if(input.length == 0) {
		return [];
	} else {
		var tmp = _.unzip(input);
		var ret = new Array();
		return _.forEach(tmp, function(index) {
			tmp2 = index.filter(function(n){ return n != undefined })
			// tmp2 = _.without(index, undefined);
			console.log(tmp2);
			ret.push(tmp2);

		});
		return ret;
	}
}

module.exports = {
  zip: zip,
  run: zip
}